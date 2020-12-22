/*
 * Copyright (c) 2020. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { validateUserName, ValidateUserNameErrorType } from "./validateUserName";

const mockValidateUserName = jest.fn(validateUserName);
afterEach(mockValidateUserName.mockClear);
afterAll(mockValidateUserName.mockRestore);

describe("validateUserName returns correct output", () => {
  it("returns empty error string when given empty string, but it is not a required field", () => {
    mockValidateUserName("", { isRequired: false });
    expect(mockValidateUserName).toHaveBeenCalledTimes(1);
    expect(mockValidateUserName).toHaveReturnedWith(null);
  });

  it("returns empty error string when given alphabet only", () => {
    mockValidateUserName("AccelByte");
    expect(mockValidateUserName).toHaveBeenCalledTimes(1);
    expect(mockValidateUserName).toHaveReturnedWith(null);
  });

  it("returns empty error string when given alphanumeric and started with numeric", () => {
    mockValidateUserName("01AccelByte");
    expect(mockValidateUserName).toHaveBeenCalledTimes(1);
    expect(mockValidateUserName).toHaveReturnedWith(null);
  });

  it("returns empty error string when given alphanumeric and numeric at the end of username", () => {
    mockValidateUserName("AccelByte12");
    expect(mockValidateUserName).toHaveBeenCalledTimes(1);
    expect(mockValidateUserName).toHaveReturnedWith(null);
  });

  it("returns empty error string when given alphabet and symbol `_`", () => {
    mockValidateUserName("John__Doe");
    expect(mockValidateUserName).toHaveBeenCalledTimes(1);
    expect(mockValidateUserName).toHaveReturnedWith(null);
  });

  it("returns empty error string when given alphabet and symbol `-`", () => {
    mockValidateUserName("John--Doe");
    expect(mockValidateUserName).toHaveBeenCalledTimes(1);
    expect(mockValidateUserName).toHaveReturnedWith(null);
  });

  it("returns empty error string when given alphanumeric with length of 48", () => {
    mockValidateUserName("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuv");
    expect(mockValidateUserName).toHaveBeenCalledTimes(1);
    expect(mockValidateUserName).toHaveReturnedWith(null);
  });

  it("returns invalidFormat error string when given alphabet and space", () => {
    mockValidateUserName("Accel Byte");
    expect(mockValidateUserName).toHaveBeenCalledTimes(1);
    expect(mockValidateUserName).toHaveReturnedWith(ValidateUserNameErrorType.invalidFormat);
  });

  it("returns invalidFormat error string when given alphabet and space at the end", () => {
    mockValidateUserName("AccelByte ");
    expect(mockValidateUserName).toHaveBeenCalledTimes(1);
    expect(mockValidateUserName).toHaveReturnedWith(ValidateUserNameErrorType.invalidFormat);
  });

  it("returns invalidFormat error string when given alphanumeric and numeric first with space", () => {
    mockValidateUserName("01 Accel Byte");
    expect(mockValidateUserName).toHaveBeenCalledTimes(1);
    expect(mockValidateUserName).toHaveReturnedWith(ValidateUserNameErrorType.invalidFormat);
  });

  it("returns error string containing exceedLengthLimit when given alphanumeric with length of 49", () => {
    mockValidateUserName("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvw");
    expect(mockValidateUserName).toHaveBeenCalledTimes(1);
    expect(mockValidateUserName).toHaveReturnedWith(ValidateUserNameErrorType.exceedLengthLimit);
  });

  it("returns error string 'empty' when given empty string", () => {
    mockValidateUserName("");
    expect(mockValidateUserName).toHaveBeenCalledTimes(1);
    expect(mockValidateUserName).toHaveReturnedWith(ValidateUserNameErrorType.empty);
  });

  it("returns error string invalidFormat when given string with at least 1 symbol other than `_`", () => {
    mockValidateUserName("$.John-D'o!e");
    expect(mockValidateUserName).toHaveBeenCalledTimes(1);
    expect(mockValidateUserName).toHaveReturnedWith(ValidateUserNameErrorType.invalidFormat);
  });

  it("returns error string invalidFormat when given string with `_` at the end", () => {
    mockValidateUserName("JohnDoe_");
    expect(mockValidateUserName).toHaveBeenCalledTimes(1);
    expect(mockValidateUserName).toHaveReturnedWith(ValidateUserNameErrorType.invalidFormat);
  });

  it("returns error string invalidFormat when given string with `_` at the beginning", () => {
    mockValidateUserName("_JohnDoe");
    expect(mockValidateUserName).toHaveBeenCalledTimes(1);
    expect(mockValidateUserName).toHaveReturnedWith(ValidateUserNameErrorType.invalidFormat);
  });

  it("returns error string invalidFormat when given string with `-` at the end", () => {
    mockValidateUserName("JohnDoe-");
    expect(mockValidateUserName).toHaveBeenCalledTimes(1);
    expect(mockValidateUserName).toHaveReturnedWith(ValidateUserNameErrorType.invalidFormat);
  });

  it("returns error string invalidFormat when given string with `-` at the beginning", () => {
    mockValidateUserName("-JohnDoe");
    expect(mockValidateUserName).toHaveBeenCalledTimes(1);
    expect(mockValidateUserName).toHaveReturnedWith(ValidateUserNameErrorType.invalidFormat);
  });

  // tslint:disable-next-line:max-line-length
  it("returns exceedLengthLimit error string when given alphanumeric with length more than maxLength parameter", () => {
    mockValidateUserName("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuv", { maxLength: 16 });
    expect(mockValidateUserName).toHaveBeenCalledTimes(1);
    expect(mockValidateUserName).toHaveReturnedWith(ValidateUserNameErrorType.exceedLengthLimit);
  });

  // tslint:disable-next-line:max-line-length
  it("returns lessThanLengthLimit error string when given alphanumeric with length less than minLength parameter", () => {
    mockValidateUserName("abcde", { minLength: 6 });
    expect(mockValidateUserName).toHaveBeenCalledTimes(1);
    expect(mockValidateUserName).toHaveReturnedWith(ValidateUserNameErrorType.lessThanLengthLimit);
  });
});
