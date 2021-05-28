/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { validatePath, ValidatePathErrorType } from "./validatePath";

const mockValidatePath = jest.fn(validatePath);
afterEach(mockValidatePath.mockClear);
afterAll(mockValidatePath.mockRestore);

describe("validatePath returns correct output", () => {
  it("returns empty error string when given empty string, but it is not a required field", () => {
    mockValidatePath("", { isRequired: false });
    expect(mockValidatePath).toHaveBeenCalledTimes(1);
    expect(mockValidatePath).toHaveReturnedWith(null);
  });

  it("returns empty error string when given a path", () => {
    mockValidatePath("/path");
    expect(mockValidatePath).toHaveBeenCalledTimes(1);
    expect(mockValidatePath).toHaveReturnedWith(null);
  });

  it("returns empty error string when given a path 2 level down", () => {
    mockValidatePath("/path/path");
    expect(mockValidatePath).toHaveBeenCalledTimes(1);
    expect(mockValidatePath).toHaveReturnedWith(null);
  });

  it("returns empty error string when given alphanumeric with length of 256 (the default maxLength)", () => {
    mockValidatePath(
      "/abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzab" +
        "cdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmno" +
        "pqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdef" +
        "ghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstu"
    );
    expect(mockValidatePath).toHaveBeenCalledTimes(1);
    expect(mockValidatePath).toHaveReturnedWith(null);
  });

  it("returns error string 'empty' when given empty string", () => {
    mockValidatePath("");
    expect(mockValidatePath).toHaveBeenCalledTimes(1);
    expect(mockValidatePath).toHaveReturnedWith(ValidatePathErrorType.empty);
  });

  it("returns error string 'invalidFormat' when given a string that is not starting with `/`", () => {
    mockValidatePath("path");
    expect(mockValidatePath).toHaveBeenCalledTimes(1);
    expect(mockValidatePath).toHaveReturnedWith(ValidatePathErrorType.invalidFormat);
  });

  it("returns error string 'invalidFormat' when given a string that is only `/`", () => {
    mockValidatePath("/");
    expect(mockValidatePath).toHaveBeenCalledTimes(1);
    expect(mockValidatePath).toHaveReturnedWith(ValidatePathErrorType.invalidFormat);
  });
  // tslint:disable-next-line
  it("returns error string 'invalidFormat' when given a string that is starting with `/` but followed with another `/`", () => {
    mockValidatePath("//");
    expect(mockValidatePath).toHaveBeenCalledTimes(1);
    expect(mockValidatePath).toHaveReturnedWith(ValidatePathErrorType.invalidFormat);
  });

  it("returns error string 'invalidFormat' when given a string that is ends with `/`", () => {
    mockValidatePath("/path/");
    expect(mockValidatePath).toHaveBeenCalledTimes(1);
    expect(mockValidatePath).toHaveReturnedWith(ValidatePathErrorType.invalidFormat);
  });

  it("returns error string 'invalidFormat' when given a string that is ends with double `/`", () => {
    mockValidatePath("/path//");
    expect(mockValidatePath).toHaveBeenCalledTimes(1);
    expect(mockValidatePath).toHaveReturnedWith(ValidatePathErrorType.invalidFormat);
  });

  it("returns error string containing exceedLengthLimit when given alphanumeric with length of 257", () => {
    mockValidatePath(
      "/abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyza" +
        "bcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghij" +
        "klmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcde" +
        "fghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuv"
    );
    expect(mockValidatePath).toHaveBeenCalledTimes(1);
    expect(mockValidatePath).toHaveReturnedWith(ValidatePathErrorType.exceedLengthLimit);
  });

  it("returns empty error string when given a string with combination of underscore, hyphen and number", () => {
    mockValidatePath("/path/path_test-123/new-path");
    expect(mockValidatePath).toHaveBeenCalledTimes(1);
    expect(mockValidatePath).toHaveReturnedWith(null);
  });
});
