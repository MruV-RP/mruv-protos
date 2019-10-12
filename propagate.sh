#!/usr/bin/env bash
# This script is meant to build and compile every protocolbuffer for each
# service declared in this repository (as defined by sub-directories).
# seen here: https://github.com/namely/docker-protoc

set -ex

MAIN_DIR=`pwd`
REPOPATH=${REPOPATH-/tmp}
CURRENT_BRANCH="master" #TODO: change to travis branch

# Helper for adding a directory to the stack and echoing the result
function enterDir {
  echo "Entering $1"
  pushd $1 > /dev/null
}

# Helper for popping a directory off the stack and echoing the result
function leaveDir {
  echo "Leaving `pwd`"
  popd > /dev/null
}

# Enters the directory and starts the propagate process
function propagateDir {
  currentDir="$1"
  echo "Propagating directory \"$currentDir\""

  enterDir $currentDir

  propagateFiles $currentDir

  leaveDir
}

function propagateFiles {
    target=${1%/}

    reponame="mruv-$target"

    if git-remote-url-reachable "https://github.com/MruV-RP/$reponame.git"; then
        rm -rf $REPOPATH/$reponame

        echo "Cloning repo: https://github.com/MruV-RP/$reponame.git"

        # Clone the repository down and set the branch to the automated one
        git clone https://github.com/MruV-RP/$reponame.git $REPOPATH/$reponame
        setupBranch $REPOPATH/$reponame

        # Copy the generated files into the repository
        # that we care about
        cp -R ./* $REPOPATH/$reponame/

        commitAndPush $REPOPATH/$reponame
    fi
}

# Finds all directories in the repository and iterates through them calling the
# propagate process for each one
function propagateAll {
  echo "Propagating generated code"
  cd gen
  mkdir -p $REPOPATH
  for d in */; do
    propagateDir $d
  done
}

function setupBranch {
  enterDir $1

  echo "Creating branch"

  if ! git show-branch $CURRENT_BRANCH; then
    git branch $CURRENT_BRANCH
  fi

  git checkout $CURRENT_BRANCH

  if git ls-remote --heads --exit-code origin $CURRENT_BRANCH; then
    echo "Branch exists on remote, pulling latest changes"
    git pull origin $CURRENT_BRANCH
  fi

  leaveDir
}

function commitAndPush {
  enterDir $1

  git add -N .

  if ! git diff --exit-code > /dev/null; then
    git add .
    git commit -m "Auto Creation of Proto"
    git push origin HEAD
  else
    echo "No changes detected for $1"
  fi

  leaveDir
}

function git-remote-url-reachable {
    git ls-remote "$1" CHECK_GIT_REMOTE_URL_REACHABILITY >/dev/null 2>&1
}

propagateAll
echo "Propated files successfully"
