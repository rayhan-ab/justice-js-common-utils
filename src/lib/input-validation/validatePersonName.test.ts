/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { validatePersonName, ValidatePersonNameErrorType } from "./validatePersonName";

const mockValidatePersonName = jest.fn(validatePersonName);
afterEach(mockValidatePersonName.mockClear);
afterAll(mockValidatePersonName.mockRestore);

describe("validatePersonName returns correct output", () => {
  it("returns empty error string when given alphabet only display name", () => {
    mockValidatePersonName("JohnDoe");
    expect(mockValidatePersonName).toHaveBeenCalledTimes(1);
    expect(mockValidatePersonName).toHaveReturnedWith(null);
  });

  it("returns empty error string when given alphabet only display name with space", () => {
    mockValidatePersonName("John Doe John");
    expect(mockValidatePersonName).toHaveBeenCalledTimes(1);
    expect(mockValidatePersonName).toHaveReturnedWith(null);
  });

  it("returns empty error string when given alphabet only display name with the symbol `'`", () => {
    mockValidatePersonName("John'Doe");
    expect(mockValidatePersonName).toHaveBeenCalledTimes(1);
    expect(mockValidatePersonName).toHaveReturnedWith(null);
  });

  it("returns empty error string when given alphabet only display name with the symbol `,`", () => {
    mockValidatePersonName("John,Doe");
    expect(mockValidatePersonName).toHaveBeenCalledTimes(1);
    expect(mockValidatePersonName).toHaveReturnedWith(null);
  });

  it("returns empty error string when given alphabet only display name with the symbol `.`", () => {
    mockValidatePersonName("John.Doe");
    expect(mockValidatePersonName).toHaveBeenCalledTimes(1);
    expect(mockValidatePersonName).toHaveReturnedWith(null);
  });

  it("returns empty error string when given alphabet only display name with the symbol `-`", () => {
    mockValidatePersonName("John-Doe");
    expect(mockValidatePersonName).toHaveBeenCalledTimes(1);
    expect(mockValidatePersonName).toHaveReturnedWith(null);
  });

  it("returns empty error string when given alphanumeric with length of 256 (the default maxLength)", () => {
    mockValidatePersonName(
      "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzab" +
        "cdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmno" +
        "pqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdef" +
        "ghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuv"
    );
    expect(mockValidatePersonName).toHaveBeenCalledTimes(1);
    expect(mockValidatePersonName).toHaveReturnedWith(null);
  });

  it("returns error string containing exceedLengthLimit when given alphanumeric with length of 257", () => {
    mockValidatePersonName(
      "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyza" +
        "bcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghij" +
        "klmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcde" +
        "fghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvw"
    );
    expect(mockValidatePersonName).toHaveBeenCalledTimes(1);
    expect(mockValidatePersonName).toHaveReturnedWith(ValidatePersonNameErrorType.exceedLengthLimit);
  });

  it("returns error string 'empty' when given empty string", () => {
    mockValidatePersonName("");
    expect(mockValidatePersonName).toHaveBeenCalledTimes(1);
    expect(mockValidatePersonName).toHaveReturnedWith(ValidatePersonNameErrorType.empty);
  });

  it("returns error string invalidFormat when given string with at least 1 number", () => {
    mockValidatePersonName("John Doe the 1st");
    expect(mockValidatePersonName).toHaveBeenCalledTimes(1);
    expect(mockValidatePersonName).toHaveReturnedWith(ValidatePersonNameErrorType.invalidFormat);
  });

  it("returns error string invalidFormat when given string with at least 1 symbol other than `',. -`", () => {
    mockValidatePersonName("$$$$ John Doe!!!");
    expect(mockValidatePersonName).toHaveBeenCalledTimes(1);
    expect(mockValidatePersonName).toHaveReturnedWith(ValidatePersonNameErrorType.invalidFormat);
  });
});
