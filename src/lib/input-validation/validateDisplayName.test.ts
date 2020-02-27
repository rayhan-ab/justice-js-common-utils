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
  it("returns null when using japanese 'ジョンドー' text", () => {
    mockValidateDisplayName("ジョンドー", { allowUnicode: true });
    expect(mockValidateDisplayName).toHaveBeenCalledTimes(1);
    expect(mockValidateDisplayName).toHaveReturnedWith(null);
  });

  it("returns invalidFormat when using japanese 'ジョンドー' text with no allowUnicode param", () => {
    mockValidateDisplayName("ジョンドー");
    expect(mockValidateDisplayName).toHaveBeenCalledTimes(1);
    expect(mockValidateDisplayName).toHaveReturnedWith(ValidateDisplayNameErrorType.invalidFormat);
  });

  it("returns invalidFormat when using JP 'ジョン・ドウ' (with middle point (・)) text", () => {
    mockValidateDisplayName("ジョン・ドウ", { allowUnicode: true });
    expect(mockValidateDisplayName).toHaveBeenCalledTimes(1);
    expect(mockValidateDisplayName).toHaveReturnedWith(ValidateDisplayNameErrorType.invalidFormat);
  });

  it("returns null when using RU 'гладиатор' text", () => {
    mockValidateDisplayName("гладиатор", { allowUnicode: true });
    expect(mockValidateDisplayName).toHaveBeenCalledTimes(1);
    expect(mockValidateDisplayName).toHaveReturnedWith(null);
  });

  it("returns invalidFormat when using RU 'гладиатор' text with no allowUnicode param", () => {
    mockValidateDisplayName("гладиатор");
    expect(mockValidateDisplayName).toHaveBeenCalledTimes(1);
    expect(mockValidateDisplayName).toHaveReturnedWith(ValidateDisplayNameErrorType.invalidFormat);
  });

  it("returns null when using AR '١المصارع١' text", () => {
    mockValidateDisplayName("المصارع", { allowUnicode: true });
    expect(mockValidateDisplayName).toHaveBeenCalledTimes(1);
    expect(mockValidateDisplayName).toHaveReturnedWith(null);
  });

  it("returns null when using THAI 'จอห์น' text", () => {
    mockValidateDisplayName("จอห์น", { allowUnicode: true });
    expect(mockValidateDisplayName).toHaveBeenCalledTimes(1);
    expect(mockValidateDisplayName).toHaveReturnedWith(null);
  });

  it("returns null when using TAMIL 'ஜான்' text", () => {
    mockValidateDisplayName("ஜான்", { allowUnicode: true });
    expect(mockValidateDisplayName).toHaveBeenCalledTimes(1);
    expect(mockValidateDisplayName).toHaveReturnedWith(null);
  });

  it("returns null when using URDU 'جان' text", () => {
    mockValidateDisplayName("جان", { allowUnicode: true });
    expect(mockValidateDisplayName).toHaveBeenCalledTimes(1);
    expect(mockValidateDisplayName).toHaveReturnedWith(null);
  });

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

  it("returns empty error string when given alphanumeric with length of 48", () => {
    mockValidateDisplayName("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuv");
    expect(mockValidateDisplayName).toHaveBeenCalledTimes(1);
    expect(mockValidateDisplayName).toHaveReturnedWith(null);
  });

  it("returns error string containing exceedLengthLimit when given alphanumeric with length of 49", () => {
    mockValidateDisplayName("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvw");
    expect(mockValidateDisplayName).toHaveBeenCalledTimes(1);
    expect(mockValidateDisplayName).toHaveReturnedWith(ValidateDisplayNameErrorType.exceedLengthLimit);
  });

  it("returns error string containing invalidFormat with given long string with space at the end", () => {
    mockValidateDisplayName("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvsafdsafsdfgsdfgw ");
    expect(mockValidateDisplayName).toHaveBeenCalledTimes(1);
    expect(mockValidateDisplayName).toHaveReturnedWith(ValidateDisplayNameErrorType.invalidFormat);
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

  // tslint:disable-next-line:max-line-length
  it("returns invalidFormat when given EN string with 1 symbol other than `',. -` with strictlyAllowSpecialCharacters", () => {
    mockValidateDisplayName("John Doe", { strictlyAllowSpecialCharacters: false });
    expect(mockValidateDisplayName).toHaveBeenCalledTimes(1);
    expect(mockValidateDisplayName).toHaveReturnedWith(ValidateDisplayNameErrorType.invalidFormat);
  });

  // tslint:disable-next-line:max-line-length
  it("returns invalidFormat when given RU string with 1 symbol other than `',. -` with strictlyAllowSpecialCharacters", () => {
    mockValidateDisplayName("глади атор", { allowUnicode: true, strictlyAllowSpecialCharacters: false });
    expect(mockValidateDisplayName).toHaveBeenCalledTimes(1);
    expect(mockValidateDisplayName).toHaveReturnedWith(ValidateDisplayNameErrorType.invalidFormat);
  });
});
