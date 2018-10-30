#!/usr/bin/env bash

test "$(uname)" == "Darwin" || { echo >&2 "Install script only compatible with MacOS."; exit 1; }
type brew > /dev/null 2>&1 || { echo >&2 "Install script prerequisite: Homebrew must be installed."; exit 1; }
brew ls --versions nvm > /dev/null || { echo >&2 "Install script prerequisite: NVM must be installed via Homebrew."; exit 1; }

# ----

# Make "nvm" builtin available to rest of script
source $(brew --prefix nvm)/nvm.sh

nvm use 2> /dev/null

if [[ $? -eq 0 ]]
then
  echo "Using existing LTS node release."
else
  echo "Installing latest LTS node release ..."
  nvm install && nvm use
fi
