/*
 * Copyright (c) 2021. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { validateDockerImageVersion, ValidateDockerVersionErrorType } from "./validateDockerImageVersion";

const mockValidateDockerImageVersion = jest.fn(validateDockerImageVersion);
afterEach(mockValidateDockerImageVersion.mockClear);
afterAll(mockValidateDockerImageVersion.mockRestore);

describe("validateImageName returns correct output", () => {
  it("return empty error string when given empty string, but it is not a required field", () => {
    mockValidateDockerImageVersion("", { isRequired: false });
    expect(mockValidateDockerImageVersion).toHaveBeenCalledTimes(1);
    expect(mockValidateDockerImageVersion).toHaveReturnedWith(null);
  });

  it("returns error string `empty` when given empty string", () => {
    mockValidateDockerImageVersion("");
    expect(mockValidateDockerImageVersion).toHaveBeenCalledTimes(1);
    expect(mockValidateDockerImageVersion).toHaveReturnedWith(ValidateDockerVersionErrorType.empty);
  });

  it("return empty error string when given lowercase alphabets without separators", () => {
    mockValidateDockerImageVersion("test");
    expect(mockValidateDockerImageVersion).toHaveBeenCalledTimes(1);
    expect(mockValidateDockerImageVersion).toHaveReturnedWith(null);
  });

  it("return empty error string when given uppercase alphabet without separator", () => {
    mockValidateDockerImageVersion("TEST");
    expect(mockValidateDockerImageVersion).toHaveBeenCalledTimes(1);
    expect(mockValidateDockerImageVersion).toHaveReturnedWith(null);
  });

  it("return empty error string when given numbers without separator", () => {
    mockValidateDockerImageVersion("1234");
    expect(mockValidateDockerImageVersion).toHaveBeenCalledTimes(1);
    expect(mockValidateDockerImageVersion).toHaveReturnedWith(null);
  });

  it("returns empty error string when given number, lowercase and uppercase alphabet without separator", () => {
    mockValidateDockerImageVersion("test123ABCD");
    expect(mockValidateDockerImageVersion).toHaveBeenCalledTimes(1);
    expect(mockValidateDockerImageVersion).toHaveReturnedWith(null);
  });

  it("return empty error string when given lowercase alphabets with single '-' separator", () => {
    mockValidateDockerImageVersion("test-test");
    expect(mockValidateDockerImageVersion).toHaveBeenCalledTimes(1);
    expect(mockValidateDockerImageVersion).toHaveReturnedWith(null);
  });

  it("return empty error string when given uppercase alphabets with single '-' separator", () => {
    mockValidateDockerImageVersion("TEST-TEST");
    expect(mockValidateDockerImageVersion).toHaveBeenCalledTimes(1);
    expect(mockValidateDockerImageVersion).toHaveReturnedWith(null);
  });

  it("return empty error string when given numbers with single '-' separator", () => {
    mockValidateDockerImageVersion("123-456");
    expect(mockValidateDockerImageVersion).toHaveBeenCalledTimes(1);
    expect(mockValidateDockerImageVersion).toHaveReturnedWith(null);
  });

  it("return empty error string when given lowercase alphabets with single '.' separator", () => {
    mockValidateDockerImageVersion("test.test");
    expect(mockValidateDockerImageVersion).toHaveBeenCalledTimes(1);
    expect(mockValidateDockerImageVersion).toHaveReturnedWith(null);
  });

  it("return empty error string when given numbers with '.' as separator", () => {
    mockValidateDockerImageVersion("123.45.6");
    expect(mockValidateDockerImageVersion).toHaveBeenCalledTimes(1);
    expect(mockValidateDockerImageVersion).toHaveReturnedWith(null);
  });

  it("return empty error string when given uppercase alphabets with '_' as separator", () => {
    mockValidateDockerImageVersion("AB_CD_EF_GH");
    expect(mockValidateDockerImageVersion).toHaveBeenCalledTimes(1);
    expect(mockValidateDockerImageVersion).toHaveReturnedWith(null);
  });

  it("returns empty error string when given numeric, lowercase and uppercase alphabet with valid separator", () => {
    mockValidateDockerImageVersion("123-test_AB.CD");
    expect(mockValidateDockerImageVersion).toHaveBeenCalledTimes(1);
    expect(mockValidateDockerImageVersion).toHaveReturnedWith(null);
  });

  // tslint:disable-next-line
  it("return empty error string when given lowercase alphabets with 3 separators: dash, dot, underscore respectively", () => {
    mockValidateDockerImageVersion("test-._test");
    expect(mockValidateDockerImageVersion).toHaveBeenCalledTimes(1);
    expect(mockValidateDockerImageVersion).toHaveReturnedWith(null);
  });

  it("return empty error string when given string with length 256 and maxLength as default (256)", () => {
    mockValidateDockerImageVersion(
      // tslint:disable-next-line
      "test_1234.5678-ABCD.EFGH_abcd.efgh-1234_5678_test_1234.5678-ABCD.EFGH_abcd.efgh-1234_5678_test_1234.5678-ABCD.EFGH_abcd.efgh-1234_5678_test_1234.5678-ABCD.EFGH_abcd.efgh-1234_5678_test_1234.5678-ABCD.EFGH_abcd.efgh-1234_5678_test_1234.5678-ABCD.EFGH_abcd.e"
    );
    expect(mockValidateDockerImageVersion).toHaveBeenCalledTimes(1);
    expect(mockValidateDockerImageVersion).toHaveReturnedWith(null);
  });

  it("return empty error string when given string with length of 40 (with 40 set as custom maxLength)", () => {
    mockValidateDockerImageVersion("test_1234.5678-ABCD.EFGH_abcd.efgh-12345", { maxLength: 40 });
    expect(mockValidateDockerImageVersion).toHaveBeenCalledTimes(1);
    expect(mockValidateDockerImageVersion).toHaveReturnedWith(null);
  });

  // tslint:disable-next-line
  it("returns error string `exceedLengthLimit` when given string with length more than default max length (256)", () => {
    mockValidateDockerImageVersion(
      // tslint:disable-next-line
      "test_1234.5678-ABCD.EFGH_abcd.efgh-1234_5678_test_1234.5678-ABCD.EFGH_abcd.efgh-1234_5678_test_1234.5678-ABCD.EFGH_abcd.efgh-1234_5678_test_1234.5678-ABCD.EFGH_abcd.efgh-1234_5678_test_1234.5678-ABCD.EFGH_abcd.efgh-1234_5678_test_1234.5678-ABCD.EFGH_abcd.efgh"
    );
    expect(mockValidateDockerImageVersion).toHaveBeenCalledTimes(1);
    expect(mockValidateDockerImageVersion).toHaveReturnedWith(ValidateDockerVersionErrorType.exceedLengthLimit);
  });

  // tslint:disable-next-line
  it("returns error string `exceedLengthLimit` when given string with length 41 (with 40 set as custom maxLength)", () => {
    mockValidateDockerImageVersion("test_1234.5678-ABCD.EFGH_abcd.efgh-1234_5", { maxLength: 40 });
    expect(mockValidateDockerImageVersion).toHaveBeenCalledTimes(1);
    expect(mockValidateDockerImageVersion).toHaveReturnedWith(ValidateDockerVersionErrorType.exceedLengthLimit);
  });

  // tslint:disable-next-line
  it("returns error string 'invalidFormat' when given alphabets and numeric separated with invalid separator `$`", () => {
    mockValidateDockerImageVersion("Test$123");
    expect(mockValidateDockerImageVersion).toHaveBeenCalledTimes(1);
    expect(mockValidateDockerImageVersion).toHaveReturnedWith(ValidateDockerVersionErrorType.invalidFormat);
  });

  it("returns error string 'invalidFormat' when given alphabets and numeric separated with whitespace`", () => {
    mockValidateDockerImageVersion("test 123");
    expect(mockValidateDockerImageVersion).toHaveBeenCalledTimes(1);
    expect(mockValidateDockerImageVersion).toHaveReturnedWith(ValidateDockerVersionErrorType.invalidFormat);
  });
});
