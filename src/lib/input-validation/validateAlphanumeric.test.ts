/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { validateAlphanumeric, ValidateAlphaNumericErrorType } from "./validateAlphanumeric";

const mockValidateAlphaNumeric = jest.fn(validateAlphanumeric);
afterEach(mockValidateAlphaNumeric.mockClear);
afterAll(mockValidateAlphaNumeric.mockRestore);

describe("validateAlphanumeric returns correct output", () => {
  it("returns empty error string when given alphanumeric", () => {
    mockValidateAlphaNumeric("alpha123");
    expect(mockValidateAlphaNumeric).toHaveBeenCalledTimes(1);
    expect(mockValidateAlphaNumeric).toHaveReturnedWith(null);
  });

  it("returns empty error string when given alphanumeric with length of 1", () => {
    mockValidateAlphaNumeric("a");
    expect(mockValidateAlphaNumeric).toHaveBeenCalledTimes(1);
    expect(mockValidateAlphaNumeric).toHaveReturnedWith(null);
  });

  it("returns empty error string when given alphanumeric with length of 256 (the default maxLength)", () => {
    mockValidateAlphaNumeric(
      "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzab" +
        "cdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmno" +
        "pqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdef" +
        "ghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuv"
    );
    expect(mockValidateAlphaNumeric).toHaveBeenCalledTimes(1);
    expect(mockValidateAlphaNumeric).toHaveReturnedWith(null);
  });

  it("returns empty error string when given alphanumeric with length of 20 (custom maxLength)", () => {
    mockValidateAlphaNumeric("abcdefghijklmnopqrst", { maxLength: 20 });
    expect(mockValidateAlphaNumeric).toHaveBeenCalledTimes(1);
    expect(mockValidateAlphaNumeric).toHaveReturnedWith(null);
  });

  it("returns error string containing exceedLengthLimit when given alphanumeric with length of 257", () => {
    mockValidateAlphaNumeric(
      "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyza" +
        "bcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghij" +
        "klmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcde" +
        "fghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvw"
    );
    expect(mockValidateAlphaNumeric).toHaveBeenCalledTimes(1);
    expect(mockValidateAlphaNumeric).toHaveReturnedWith(ValidateAlphaNumericErrorType.exceedLengthLimit);
  });

  // tslint:disable-next-line
  it("returns error string `exceedLengthLimit when given alphanumeric with length of 21 (with 20 set as custom maxLength)", () => {
    mockValidateAlphaNumeric("abcdefghijklmnopqrstu", { maxLength: 20 });
    expect(mockValidateAlphaNumeric).toHaveBeenCalledTimes(1);
    expect(mockValidateAlphaNumeric).toHaveReturnedWith(ValidateAlphaNumericErrorType.exceedLengthLimit);
  });

  it("returns error string containing invalidFormat when given alphanumeric with some symbols", () => {
    mockValidateAlphaNumeric("alpha123!!");
    expect(mockValidateAlphaNumeric).toHaveBeenCalledTimes(1);
    expect(mockValidateAlphaNumeric).toHaveReturnedWith(ValidateAlphaNumericErrorType.invalidFormat);
  });

  it("returns error string containing 'empty' when given empty string", () => {
    mockValidateAlphaNumeric("");
    expect(mockValidateAlphaNumeric).toHaveBeenCalledTimes(1);
    expect(mockValidateAlphaNumeric).toHaveReturnedWith(ValidateAlphaNumericErrorType.empty);
  });
});
