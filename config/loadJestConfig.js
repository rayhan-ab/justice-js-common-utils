/*
 * Copyright (c) 2018-2019 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

const path = require("path");
const paths = require("./paths");
const createJestConfig = require("./createJestConfig");

module.exports = createJestConfig(
  (relativePath) => path.resolve(__dirname, "..", relativePath),
  path.resolve(paths.appSrc, "..")
);
