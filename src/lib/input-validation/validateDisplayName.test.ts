/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { validateDisplayName, ValidateDisplayNameErrorType } from "./validateDisplayName";

const mockValidateDisplayName = jest.fn(validateDisplayName);
afterEach(mockValidateDisplayName.mockClear);
afterAll(mockValidateDisplayName.mockRestore);

describe("validateDisplayName returns correct output", () => {
  it("returns empty error string when given empty string, but it is not a required field", () => {
    mockValidateDisplayName("", { isRequired: false });
    expect(mockValidateDisplayName).toHaveBeenCalledTimes(1);
    expect(mockValidateDisplayName).toHaveReturnedWith(null);
  });

  it("returns empty error string when given alphabet only display name", () => {
    mockValidateDisplayName("AccelByte");
    expect(mockValidateDisplayName).toHaveBeenCalledTimes(1);
    expect(mockValidateDisplayName).toHaveReturnedWith(null);
  });

  it("returns empty error string when given alphabet only display name with space", () => {
    mockValidateDisplayName("Accel Byte");
    expect(mockValidateDisplayName).toHaveBeenCalledTimes(1);
    expect(mockValidateDisplayName).toHaveReturnedWith(null);
  });

  it("returns empty error string when given alphanumeric and numeric first display name", () => {
    mockValidateDisplayName("01AccelByte");
    expect(mockValidateDisplayName).toHaveBeenCalledTimes(1);
    expect(mockValidateDisplayName).toHaveReturnedWith(null);
  });

  it("returns empty error string when given alphanumeric and numeric first display name with space", () => {
    mockValidateDisplayName("01 Accel Byte");
    expect(mockValidateDisplayName).toHaveBeenCalledTimes(1);
    expect(mockValidateDisplayName).toHaveReturnedWith(null);
  });

  it("returns empty error string when given alphabet only display name with the symbol `'`", () => {
    mockValidateDisplayName("John'Doe");
    expect(mockValidateDisplayName).toHaveBeenCalledTimes(1);
    expect(mockValidateDisplayName).toHaveReturnedWith(null);
  });

  it("returns empty error string when given alphabet only display name with the symbol `,`", () => {
    mockValidateDisplayName("John,Doe");
    expect(mockValidateDisplayName).toHaveBeenCalledTimes(1);
    expect(mockValidateDisplayName).toHaveReturnedWith(null);
  });

  it("returns empty error string when given alphabet only display name with the symbol `.`", () => {
    mockValidateDisplayName("John.Doe");
    expect(mockValidateDisplayName).toHaveBeenCalledTimes(1);
    expect(mockValidateDisplayName).toHaveReturnedWith(null);
  });

  it("returns empty error string when given alphabet only display name with the symbol `-`", () => {
    mockValidateDisplayName("John-Doe");
    expect(mockValidateDisplayName).toHaveBeenCalledTimes(1);
    expect(mockValidateDisplayName).toHaveReturnedWith(null);
  });

  it("returns empty error string when given alphanumeric with length of 256 (the default maxLength)", () => {
    mockValidateDisplayName(
      "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzab" +
        "cdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmno" +
        "pqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdef" +
        "ghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuv"
    );
    expect(mockValidateDisplayName).toHaveBeenCalledTimes(1);
    expect(mockValidateDisplayName).toHaveReturnedWith(null);
  });

  it("returns error string containing exceedLengthLimit when given alphanumeric with length of 257", () => {
    mockValidateDisplayName(
      "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyza" +
        "bcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghij" +
        "klmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcde" +
        "fghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvw"
    );
    expect(mockValidateDisplayName).toHaveBeenCalledTimes(1);
    expect(mockValidateDisplayName).toHaveReturnedWith(ValidateDisplayNameErrorType.exceedLengthLimit);
  });

  it("returns error string 'empty' when given empty string", () => {
    mockValidateDisplayName("");
    expect(mockValidateDisplayName).toHaveBeenCalledTimes(1);
    expect(mockValidateDisplayName).toHaveReturnedWith(ValidateDisplayNameErrorType.empty);
  });

  it("returns error string invalidFormat when given string with at least 1 symbol other than `',. -`", () => {
    mockValidateDisplayName("$$$$ John Doe!!!");
    expect(mockValidateDisplayName).toHaveBeenCalledTimes(1);
    expect(mockValidateDisplayName).toHaveReturnedWith(ValidateDisplayNameErrorType.invalidFormat);
  });

  it("returns error string invalidFormat when 2 empty string in a row", () => {
    mockValidateDisplayName("John  Doe");
    expect(mockValidateDisplayName).toHaveBeenCalledTimes(1);
    expect(mockValidateDisplayName).toHaveReturnedWith(ValidateDisplayNameErrorType.invalidFormat);
  });
});
