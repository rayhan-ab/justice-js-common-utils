/*
 * Copyright (c) 2018-2019 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

const chalk = require("chalk");
const paths = require("./paths");

module.exports = (resolve, rootDir) => {
  console.log(rootDir);
  const config = {
    collectCoverageFrom: [
      "<rootDir>/src/**/*.{ts,tsx}",
      "!<rootDir>/src/**/*.d.{ts,tsx}",
      "!**/node_modules/**",
    ],
    testMatch: ["<rootDir>/src/**/__tests__/**/*.{ts,tsx}", "<rootDir>/src/**/?(*.)(spec|test).{ts,tsx}"],
    testEnvironment: "jsdom",
    transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$"],
    moduleNameMapper: {
      "^react-native$": "react-native-web",
      "src/(.*)": "<rootDir>/src/$1",
    },
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "web.js", "mjs", "json", "web.jsx", "node"],
    setupFiles: ["<rootDir>/config/polyfills.js"],
    transform: {
      "^.+\\.(ts|tsx)$": "<rootDir>/node_modules/ts-jest",
    },
    globals: {
      "ts-jest": {
        diagnostics: {
          pathRegex: /\.test\.tsx?$/,
        },
      },
    },
  };
  if (rootDir) {
    config.rootDir = rootDir;
  }
  const overrides = Object.assign({}, require(paths.appPackageJson).jest);
  const supportedKeys = [
    "collectCoverageFrom",
    "coverageReporters",
    "coverageThreshold",
    "mapCoverage",
    "moduleFileExtensions",
    "moduleNameMapper",
    "modulePaths",
    "snapshotSerializers",
    "setupFiles",
    "testMatch",
    "testEnvironmentOptions",
    "testResultsProcessor",
    "testPathIgnorePatterns",
    "transform",
    "transformIgnorePatterns",
    "setupFilesAfterEnv",
  ];
  if (overrides) {
    supportedKeys.forEach((key) => {
      if (overrides.hasOwnProperty(key)) {
        config[key] = overrides[key];
        delete overrides[key];
      }
    });
    const unsupportedKeys = Object.keys(overrides);
    if (unsupportedKeys.length) {
      console.error(
        chalk.red(
          "Out of the box, Razzle only supports overriding " +
            "these Jest options:\n\n" +
            supportedKeys.map((key) => chalk.bold("  \u2022 " + key)).join("\n") +
            ".\n\n" +
            "These options in your package.json Jest configuration " +
            "are not currently supported by Razzle:\n\n" +
            unsupportedKeys.map((key) => chalk.bold("  \u2022 " + key)).join("\n")
        )
      );
      process.exit(1);
    }
  }
  return config;
};
