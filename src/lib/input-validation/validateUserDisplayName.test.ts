/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { validateUserDisplayName, ValidateUserDisplayNameErrorType } from "./validateUserDisplayName";

const mockValidateUserDisplayName = jest.fn(validateUserDisplayName);
afterEach(mockValidateUserDisplayName.mockClear);
afterAll(mockValidateUserDisplayName.mockRestore);

describe("validateUserDisplayName returns correct output", () => {
  it("returns empty error string when given alphabet only display name", () => {
    mockValidateUserDisplayName("JohnDoe");
    expect(mockValidateUserDisplayName).toHaveBeenCalledTimes(1);
    expect(mockValidateUserDisplayName).toHaveReturnedWith(null);
  });

  it("returns empty error string when given alphabet only display name with space", () => {
    mockValidateUserDisplayName("John Doe John");
    expect(mockValidateUserDisplayName).toHaveBeenCalledTimes(1);
    expect(mockValidateUserDisplayName).toHaveReturnedWith(null);
  });

  it("returns empty error string when given alphabet only display name with the symbol `'`", () => {
    mockValidateUserDisplayName("John'Doe");
    expect(mockValidateUserDisplayName).toHaveBeenCalledTimes(1);
    expect(mockValidateUserDisplayName).toHaveReturnedWith(null);
  });

  it("returns empty error string when given alphabet only display name with the symbol `,`", () => {
    mockValidateUserDisplayName("John,Doe");
    expect(mockValidateUserDisplayName).toHaveBeenCalledTimes(1);
    expect(mockValidateUserDisplayName).toHaveReturnedWith(null);
  });

  it("returns empty error string when given alphabet only display name with the symbol `.`", () => {
    mockValidateUserDisplayName("John.Doe");
    expect(mockValidateUserDisplayName).toHaveBeenCalledTimes(1);
    expect(mockValidateUserDisplayName).toHaveReturnedWith(null);
  });

  it("returns empty error string when given alphabet only display name with the symbol `-`", () => {
    mockValidateUserDisplayName("John-Doe");
    expect(mockValidateUserDisplayName).toHaveBeenCalledTimes(1);
    expect(mockValidateUserDisplayName).toHaveReturnedWith(null);
  });

  it("returns empty error string when given alphanumeric with length of 256 (the default maxLength)", () => {
    mockValidateUserDisplayName(
      "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzab" +
        "cdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmno" +
        "pqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdef" +
        "ghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuv"
    );
    expect(mockValidateUserDisplayName).toHaveBeenCalledTimes(1);
    expect(mockValidateUserDisplayName).toHaveReturnedWith(null);
  });

  it("returns error string containing exceedLengthLimit when given alphanumeric with length of 257", () => {
    mockValidateUserDisplayName(
      "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyza" +
        "bcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghij" +
        "klmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcde" +
        "fghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvw"
    );
    expect(mockValidateUserDisplayName).toHaveBeenCalledTimes(1);
    expect(mockValidateUserDisplayName).toHaveReturnedWith(ValidateUserDisplayNameErrorType.exceedLengthLimit);
  });

  it("returns error string 'empty' when given empty string", () => {
    mockValidateUserDisplayName("");
    expect(mockValidateUserDisplayName).toHaveBeenCalledTimes(1);
    expect(mockValidateUserDisplayName).toHaveReturnedWith(ValidateUserDisplayNameErrorType.empty);
  });

  it("returns error string invalidFormat when given string with at least 1 number", () => {
    mockValidateUserDisplayName("John Doe the 1st");
    expect(mockValidateUserDisplayName).toHaveBeenCalledTimes(1);
    expect(mockValidateUserDisplayName).toHaveReturnedWith(ValidateUserDisplayNameErrorType.invalidFormat);
  });

  it("returns error string invalidFormat when given string with at least 1 symbol other than `',. -`", () => {
    mockValidateUserDisplayName("$$$$ John Doe!!!");
    expect(mockValidateUserDisplayName).toHaveBeenCalledTimes(1);
    expect(mockValidateUserDisplayName).toHaveReturnedWith(ValidateUserDisplayNameErrorType.invalidFormat);
  });
});
