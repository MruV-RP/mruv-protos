#!/usr/bin/env bash
# This script is meant to build and compile every protocolbuffer for each
# service declared in this repository (as defined by sub-directories).
# seen here: https://github.com/namely/docker-protoc

set -e

MAIN_DIR=`pwd`
REPOPATH=${REPOPATH-/tmp}
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
VERSION=$(git describe --tags --abbrev=0 | sed -r 's/v(.*)-(.*)-(.*)/\1-build\2 /')

#Version parameter
if [[ ! $VERSION =~ ^v?[0-9]+\.[0-9]+\.[0-9]+$ ]]; then
	echo "Version in format x.x.x required." >&2; exit 1;
fi

# Helper for adding a directory to the stack and echoing the result
function enterDir {
  echo -e "\e[32mEntering \e[92m$1\e[0m"
  pushd $1 > /dev/null
}

# Helper for popping a directory off the stack and echoing the result
function leaveDir {
  echo -e "\e[32mLeaving \e[92m`pwd`\e[0m"
  popd > /dev/null
}

# Enters the directory and starts the propagate process
function propagateDir {
  currentDir="$1"
  echo -e "\e[32mPropagating directory \e[92m\"$currentDir\"\e[0m"

  enterDir $currentDir

  propagateFiles $currentDir

  leaveDir
}

function propagateFiles {
    target=${1%/}

    reponame="mruv-$target"

    if git-remote-url-reachable "https://github.com/MruV-RP/$reponame.git"; then
        rm -rf $REPOPATH/$reponame

        echo -e "\e[32mCloning repo: \e[92mhttps://github.com/MruV-RP/$reponame.git\e[0m"

        # Clone the repository down and set the branch to the automated one
        git clone https://github.com/MruV-RP/$reponame.git $REPOPATH/$reponame
        setupBranch $REPOPATH/$reponame

        # Copy the generated files into the repository
        # that we care about
        cp -R ./* $REPOPATH/$reponame/

        commitAndPush $REPOPATH/$reponame
	else
        echo -e "\e[31mRepository \e[91mhttps://github.com/MruV-RP/$reponame.git \e[31mis unreachable\e[0m"
    fi
}

# Finds all directories in the repository and iterates through them calling the
# propagate process for each one
function propagateAll {
  echo -e "\e[32mPropagating generated code\e[0m"
  cd gen
  mkdir -p $REPOPATH
  for d in */; do
    propagateDir $d
  done
}

function setupBranch {
  enterDir $1

  echo -e "\e[32mCreating branch\e[0m"

  if ! git show-branch $CURRENT_BRANCH; then
    git branch $CURRENT_BRANCH
  fi

  git checkout $CURRENT_BRANCH

  if git ls-remote --heads --exit-code origin $CURRENT_BRANCH; then
    echo -e "\e[32mBranch exists on remote, pulling latest changes\e[0m"
    git pull origin $CURRENT_BRANCH
  fi

  leaveDir
}

function commitAndPush {
  enterDir $1

  git add -N .

  if ! git diff --exit-code > /dev/null; then
    git add .
    git commit -m "Auto Creation of Proto $VERSION"
	if [ $CURRENT_BRANCH  = "master" ]; then
		git tag -a "$VERSION" -m "Auto generated proto $VERSION"
	fi
    git push origin HEAD --tags
  else
    echo -e "\e[32mNo changes detected for $1\e[0m"
  fi

  leaveDir
}

function git-remote-url-reachable {
    git ls-remote "$1" CHECK_GIT_REMOTE_URL_REACHABILITY >/dev/null 2>&1
}

propagateAll
echo -e "\e[32mThe files has been propagated successfully\e[0m"
