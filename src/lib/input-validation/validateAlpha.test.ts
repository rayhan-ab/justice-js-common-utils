/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { validateAlpha, ValidateAlphaErrorType } from "./validateAlpha";

const mockValidateAlpha = jest.fn(validateAlpha);
afterEach(mockValidateAlpha.mockClear);
afterAll(mockValidateAlpha.mockRestore);

describe("validateAlpha returns correct output", () => {
  it("returns empty error string when given empty string, but it is not a required field", () => {
    mockValidateAlpha("", { isRequired: false });
    expect(mockValidateAlpha).toHaveBeenCalledTimes(1);
    expect(mockValidateAlpha).toHaveReturnedWith(null);
  });

  it("returns empty error string when given alpha with length of 1", () => {
    mockValidateAlpha("a");
    expect(mockValidateAlpha).toHaveBeenCalledTimes(1);
    expect(mockValidateAlpha).toHaveReturnedWith(null);
  });

  it("returns empty error string when given alpha with length of 256 (the default maxLength)", () => {
    mockValidateAlpha(
      "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzab" +
        "cdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmno" +
        "pqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdef" +
        "ghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuv"
    );
    expect(mockValidateAlpha).toHaveBeenCalledTimes(1);
    expect(mockValidateAlpha).toHaveReturnedWith(null);
  });

  it("returns empty error string when given alpha with length of 20 (custom maxLength)", () => {
    mockValidateAlpha("abcdefghijklmnopqrst", { maxLength: 20 });
    expect(mockValidateAlpha).toHaveBeenCalledTimes(1);
    expect(mockValidateAlpha).toHaveReturnedWith(null);
  });

  it("returns empty error string when given alpha with all uppercase (with the option isUppercaseOnly=true)", () => {
    mockValidateAlpha("ABCDEFGHIJKLMNOPQRST", { isUppercaseOnly: true });
    expect(mockValidateAlpha).toHaveBeenCalledTimes(1);
    expect(mockValidateAlpha).toHaveReturnedWith(null);
  });

  it("returns error string containing exceedLengthLimit when given alpha with length of 257", () => {
    mockValidateAlpha(
      "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyza" +
        "bcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghij" +
        "klmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcde" +
        "fghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvw"
    );
    expect(mockValidateAlpha).toHaveBeenCalledTimes(1);
    expect(mockValidateAlpha).toHaveReturnedWith(ValidateAlphaErrorType.exceedLengthLimit);
  });

  // tslint:disable-next-line
  it("returns error string `exceedLengthLimit when given alpha with length of 21 (with 20 set as custom maxLength)", () => {
    mockValidateAlpha("abcdefghijklmnopqrstu", { maxLength: 20 });
    expect(mockValidateAlpha).toHaveBeenCalledTimes(1);
    expect(mockValidateAlpha).toHaveReturnedWith(ValidateAlphaErrorType.exceedLengthLimit);
  });

  it("returns error string containing invalidFormat when given alpha with some symbols", () => {
    mockValidateAlpha("alpha123!!");
    expect(mockValidateAlpha).toHaveBeenCalledTimes(1);
    expect(mockValidateAlpha).toHaveReturnedWith(ValidateAlphaErrorType.invalidFormat);
  });

  it("returns error string when given alphanumeric", () => {
    mockValidateAlpha("alpha123");
    expect(mockValidateAlpha).toHaveBeenCalledTimes(1);
    expect(mockValidateAlpha).toHaveReturnedWith(ValidateAlphaErrorType.invalidFormat);
  });

  // tslint:disable-next-line max-line-length
  it("returns error string when given alpha with all some lower case characters (with the option isUppercaseOnly=true)", () => {
    mockValidateAlpha("abcdEFGHIJKLMNOPQRST", { isUppercaseOnly: true });
    expect(mockValidateAlpha).toHaveBeenCalledTimes(1);
    expect(mockValidateAlpha).toHaveReturnedWith(ValidateAlphaErrorType.invalidFormat);
  });

  it("returns error string containing 'empty' when given empty string", () => {
    mockValidateAlpha("");
    expect(mockValidateAlpha).toHaveBeenCalledTimes(1);
    expect(mockValidateAlpha).toHaveReturnedWith(ValidateAlphaErrorType.empty);
  });
});
