#!/usr/bin/env bash
# This script is meant to propagate generated from protocolbuffer files
# seen here: https://github.com/namely/docker-protoc

set -e

MAIN_DIR=$(pwd)
REPOPATH=${REPOPATH-/tmp}
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
VERSION=$(git describe --tags --abbrev=0 | sed -r 's/v(.*)-(.*)-(.*)/\1-build\2 /')

#Version parameter
if [[ ! $VERSION =~ ^v?[0-9]+\.[0-9]+\.[0-9]+$ ]]; then
  echo "Version in format x.x.x required." >&2
  exit 1
fi

# Helper for adding a directory to the stack and echoing the result
function enterDir() {
  echo -e "\e[32mEntering \e[92m$1\e[0m"
  pushd $1 >/dev/null
}

# Helper for popping a directory off the stack and echoing the result
function leaveDir() {
  echo -e "\e[32mLeaving \e[92m$(pwd)\e[0m"
  popd >/dev/null
}

# Enters the directory and starts the propagate process
function propagateDir() {
  currentDir="$1"
  if [ $currentDir != "pb-descriptor_set/" ]; then
    echo -e "\e[32mPropagating directory \e[92m\"$currentDir\"\e[0m"

    enterDir $currentDir

    propagateFiles $currentDir

    leaveDir
  fi
}

function propagateFiles() {
  target=${1%/}

  reponame="mruv-$target"

  if git-remote-url-reachable "https://github.com/MruV-RP/$reponame.git"; then
    rm -rf $REPOPATH/$reponame

    echo -e "\e[32mCloning repo: \e[92mhttps://github.com/MruV-RP/$reponame.git\e[0m"

    # Clone the repository down and set the branch to the automated one
    git clone git@github.com:MruV-RP/$reponame.git $REPOPATH/$reponame
    setupBranch $REPOPATH/$reponame

    # Remove old generated files
    echo -e "\e[32mRemoving old files from $REPOPATH/$reponame\e[0m"
    rm -fv "$REPOPATH"/"$reponame"/*.cs # for mruv-pb-csharp
    rm -fv "$REPOPATH"/"$reponame"/*/*.js # for mruv-pb-node & mruv-pb-web
    rm -fv "$REPOPATH"/"$reponame"/*/*.ts # for mruv-pb-node & mruv-pb-web
    rm -fv "$REPOPATH"/"$reponame"/*/*.go # for mruv-pb-go
    rm -fv "$REPOPATH"/"$reponame"/*/*.java # for mruv-pb-java
    rm -fv "$REPOPATH"/"$reponame"/*/*.py # for mruv-pb_python
    rm -fv "$REPOPATH"/"$reponame"/*/*.cc # for mruv-pb-cpp
    rm -fv "$REPOPATH"/"$reponame"/*/*.h # for mruv-pb-cpp
    rm -fv "$REPOPATH"/"$reponame"/*/*.json # for mruv-pb-swagger

    # Copy the generated files into the repository
    # that we care about
    echo -e "\e[32mCopy the generated files into the repository\e[0m"
    cp -R ./* $REPOPATH/$reponame/

    commitAndPush $REPOPATH/$reponame
  else
    echo -e "\e[31mRepository \e[91mhttps://github.com/MruV-RP/$reponame.git \e[31mis unreachable\e[0m"
  fi
}

# Finds all directories in the repository and iterates through them calling the
# propagate process for each one
function propagateAll() {
  echo -e "\e[32mPropagating generated code\e[0m"
  cd gen
  mkdir -p $REPOPATH
  for d in */; do
    propagateDir $d &
  done
}

function setupBranch() {
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

function commitAndPush() {
  enterDir $1

  # Update version for package.json
  if [ -f "package.json" ]; then
    sed  -i "s/\"version\":.*\"/\"version\": \"${VERSION:1}\"/" package.json
    npm install --no-audit
    npm run build
  fi

  # Update the index
  git update-index -q --ignore-submodules --refresh
  git add .

  if ! git diff-index --quiet HEAD --; then
    # Commit changes
    git commit -m "Auto Creation of Proto $VERSION"
    if [ $CURRENT_BRANCH = "master" ]; then
      git tag -a "$VERSION" -m "Auto generated proto $VERSION"
    fi
    git push origin HEAD --tags
  else
    echo -e "\e[32mNo changes detected for $1\e[0m"
    git status
  fi

  leaveDir
}

function git-remote-url-reachable() {
  git ls-remote "$1" CHECK_GIT_REMOTE_URL_REACHABILITY >/dev/null 2>&1
}

propagateAll
wait
echo -e "\e[32mThe files has been propagated successfully\e[0m"
