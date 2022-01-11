# Justice JS Common Utils

## Overview

Justice JS Common Utils

## High Level Features

Common Javascript utilities for Justice Platform, including:
- Input Validation
- Service Error Translator

And fully containerized development

## Information About the Common Utility Functions
Each library has it's own `README.md` on it's folder under `/src/lib`. e.g for `input-validation`, the README is in `/src/lib/input-validation/README.md`

## Merge to master Branch Quick Start
Currently we have two GitHub actions that will automatically create a new tag and a new release everytime a commit is merged to master branch. 
Things you should pay attention to before merging your work to master branch :
- Make sure to update `CHANGELOG.md` to keep track on what's updated in the repo
- If you want to update the minor version, add `#minor` at the end of your commit message (ex: `fix(some_validation): some message #minor`)
- The same goes if you want to update the major or patch version, add `#major` or `#patch` at the end of your commit message
- If you don't add one of those three to your commit message, the Github actions will not automatically create a new tag and release notes

## Development Quick Start

run `make build`, to build the project
run `make run`, to run a test watch and start development

## Usage Quick Start
run `npm install justice-js-common-utils --registry=https://nexus.accelbyte.net/repository/npm-group/` to install in your project

## Build Requirements

- Docker with support for Linux containers
- GNU Make
- Internet connection

## Development Requirements

- See _Build Requirements_
- Docker Compose
- IDE (we like WebStorm)
