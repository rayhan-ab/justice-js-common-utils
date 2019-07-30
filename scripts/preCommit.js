/*
 *
 *  * Copyright (c) 2018-2019 AccelByte Inc. All Rights Reserved.
 *  * This is licensed software from AccelByte Inc, for limitations
 *  * and restrictions contact your company contract manager.
 *
 */

const { compareSemVer, isValidSemVer } = require("semver-parser");
const childProcess = require("child_process");
const paths = require("../config/paths");

function printMessage(message) {
  console.log(`===PRECOMMIT: ${message}`);
}

function printErrorMessage(message) {
  console.log(`===PRECOMMIT: Error: ${message}`);
}

function exitAndAbortCommit(message) {
  printErrorMessage(message);
  process.exit(1);
}

function isVersionHigher(oldVersion, newVersion) {
  try {
    const result = compareSemVer(newVersion, oldVersion, false);
    if (result < 0) {
      exitAndAbortCommit(`Downgrade version is not allowed, version should higher than '${oldVersion}'`);
    }
    return result;
  } catch (e) {
    exitAndAbortCommit(e.message);
  }
}

function validateDiff(diffString) {
  const lines = diffString.split("\n");
  let versionBeforeChange = "0.0.0";
  let versionAfterChange = "0.0.0";
  lines.map((line) => {
    // Find specific line that contain "version" changes, the line should be like '+ "version": "1.0.0"' and use regex to extract version number 1.0.0
    if (line.startsWith('+  "version":')) versionAfterChange = line.match(/\"(.*?)\"/g)[1].replace(/\"/g, "");
    if (line.startsWith('-  "version":')) versionBeforeChange = line.match(/\"(.*?)\"/g)[1].replace(/\"/g, "");
  });
  if (!versionAfterChange) return false;
  if (!isValidSemVer(versionAfterChange, false)) {
    exitAndAbortCommit(`Invalid version format on '${paths.appPackageJson}'`);
  }
  return isVersionHigher(versionBeforeChange, versionAfterChange);
}

async function getGitDiff(filePath) {
  return await new Promise((resolve, reject) => {
    childProcess.exec(`git diff --staged ${filePath}`, (error, stdout, stderr) => {
      if (error) {
        return reject();
      }
      return resolve(stdout.toString());
    });
  });
}

async function validateAppVersion() {
  try {
    const output = await getGitDiff(paths.appPackageJson);
    if (output.length < 1 || !validateDiff(output)) {
      exitAndAbortCommit(
        `App version on '${paths.appPackageJson}' must be bumped up after doing changes, if you feel like you have bumped it, check if the change has been staged for commit.`
      );
    }
  } catch (error) {
    exitAndAbortCommit(`Failed to validate app version. Make sure ${paths.appPackageJson} file exists`);
  }
}

async function validateChangelog() {
  try {
    const changelogPath = paths.changelog;
    const output = await getGitDiff(changelogPath);
    if (output.length < 1) {
      exitAndAbortCommit(
        `${changelogPath} must be updated after doing change, if you feel like you have updated it, check if the change has been staged for commit.`
      );
    }
  } catch (error) {
    exitAndAbortCommit(`Failed diffing the ${changelogPath}. Make sure the file: ${changelogPath} exists`);
  }
}

printMessage("Checking version");
validateAppVersion();
printMessage("Checking changelog");
validateChangelog();
