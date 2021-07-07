/*
 * Copyright (c) 2021. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { validateProductKey, ValidateProductKeyErrorType } from "./validateProductKey";

const mockValidateProductKey = jest.fn(validateProductKey);
afterEach(mockValidateProductKey.mockClear);
afterAll(mockValidateProductKey.mockRestore);

describe("validateProductKey returns correct output", () => {
  it("returns empty error string when given empty string, but it is not a required field", () => {
    mockValidateProductKey("", { isRequired: false });
    expect(mockValidateProductKey).toHaveBeenCalledTimes(1);
    expect(mockValidateProductKey).toHaveReturnedWith(null);
  });

  it("returns empty error string when given product key alphabet only", () => {
    mockValidateProductKey("abc");
    expect(mockValidateProductKey).toHaveBeenCalledTimes(1);
    expect(mockValidateProductKey).toHaveReturnedWith(null);
  });

  it("returns empty error string when given product key number only", () => {
    mockValidateProductKey("123");
    expect(mockValidateProductKey).toHaveBeenCalledTimes(1);
    expect(mockValidateProductKey).toHaveReturnedWith(null);
  });

  it("returns empty error string when given product key alphabet only with underscore", () => {
    mockValidateProductKey("abc_abc");
    expect(mockValidateProductKey).toHaveBeenCalledTimes(1);
    expect(mockValidateProductKey).toHaveReturnedWith(null);
  });

  it("returns empty error string when given product key number only with underscore", () => {
    mockValidateProductKey("1231_23");
    expect(mockValidateProductKey).toHaveBeenCalledTimes(1);
    expect(mockValidateProductKey).toHaveReturnedWith(null);
  });

  it("returns empty error string when given product key number and alphabet with underscore", () => {
    mockValidateProductKey("12_3abc");
    expect(mockValidateProductKey).toHaveBeenCalledTimes(1);
    expect(mockValidateProductKey).toHaveReturnedWith(null);
  });

  it("returns empty error string when given product key with 2 underscores", () => {
    mockValidateProductKey("abc_abc_def");
    expect(mockValidateProductKey).toHaveBeenCalledTimes(1);
    expect(mockValidateProductKey).toHaveReturnedWith(null);
  });

  it("returns error string `invalidFormat` when given uppercase alphabets", () => {
    mockValidateProductKey("ABC");
    expect(mockValidateProductKey).toHaveBeenCalledTimes(1);
    expect(mockValidateProductKey).toHaveReturnedWith(ValidateProductKeyErrorType.invalidFormat);
  });
  // tslint:disable-next-line
  it("returns error string `invalidFormat` when given lowercase & uppercase alphabets", () => {
    mockValidateProductKey("abc_ABC");
    expect(mockValidateProductKey).toHaveBeenCalledTimes(1);
    expect(mockValidateProductKey).toHaveReturnedWith(ValidateProductKeyErrorType.invalidFormat);
  });

  it("returns error string `empty` when given empty string", () => {
    mockValidateProductKey("");
    expect(mockValidateProductKey).toHaveBeenCalledTimes(1);
    expect(mockValidateProductKey).toHaveReturnedWith(ValidateProductKeyErrorType.empty);
  });

  it("returns error string `exceedLengthLimit` when given string with length more max length (64)", () => {
    mockValidateProductKey("abc_abc_abc_abc_abc_abc_abc_abc_abc_abc_abc_abc_abc_abc_abc_abc_abc", { max: 64 });
    expect(mockValidateProductKey).toHaveBeenCalledTimes(1);
    expect(mockValidateProductKey).toHaveReturnedWith(ValidateProductKeyErrorType.exceedLengthLimit);
  });

  it("returns error string `invalidFormat` when given symbol only", () => {
    mockValidateProductKey("@#");
    expect(mockValidateProductKey).toHaveBeenCalledTimes(1);
    expect(mockValidateProductKey).toHaveReturnedWith(ValidateProductKeyErrorType.invalidFormat);
  });

  it("returns error string `invalidFormat` when given alphabets that ends with underscore", () => {
    mockValidateProductKey("abc_");
    expect(mockValidateProductKey).toHaveBeenCalledTimes(1);
    expect(mockValidateProductKey).toHaveReturnedWith(ValidateProductKeyErrorType.invalidFormat);
  });
  it("returns error string `invalidFormat` when given alphabets that starts with underscore", () => {
    mockValidateProductKey("_abc");
    expect(mockValidateProductKey).toHaveBeenCalledTimes(1);
    expect(mockValidateProductKey).toHaveReturnedWith(ValidateProductKeyErrorType.invalidFormat);
  });
  // tslint:disable-next-line
  it("returns error string `invalidFormat` when given alphabets that is separated with double underscores", () => {
    mockValidateProductKey("abc__abc");
    expect(mockValidateProductKey).toHaveBeenCalledTimes(1);
    expect(mockValidateProductKey).toHaveReturnedWith(ValidateProductKeyErrorType.invalidFormat);
  });
  it("returns error string `invalidFormat` when given alphabet that is separated with invalid separator ` `", () => {
    mockValidateProductKey("abc abc");
    expect(mockValidateProductKey).toHaveBeenCalledTimes(1);
    expect(mockValidateProductKey).toHaveReturnedWith(ValidateProductKeyErrorType.invalidFormat);
  });
  it("returns error string `exceedLengthLimit` when given an invalid string that exceeds the length limit", () => {
    mockValidateProductKey("accelbyteaccelbyteaccelbyteaccelbyteaccelbyteaccelbyteaccelbytes ", { max: 56 });
    expect(mockValidateProductKey).toHaveBeenCalledTimes(1);
    expect(mockValidateProductKey).toHaveReturnedWith(ValidateProductKeyErrorType.exceedLengthLimit);
  });
});
