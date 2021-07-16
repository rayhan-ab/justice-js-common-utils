/*
 * Copyright (c) 2020. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { validateSeasonPassCode, ValidateSeasonPassCodeErrorType } from "./validateSeasonPassCode";

const mockValidateSeasonPassCode = jest.fn(validateSeasonPassCode);
afterEach(mockValidateSeasonPassCode.mockClear);
afterAll(mockValidateSeasonPassCode.mockRestore);

describe("validateSeasonPassCode returns correct output", () => {
  it("returns empty error string when given empty string, but it is not a required field", () => {
    mockValidateSeasonPassCode("", { isRequired: false });
    expect(mockValidateSeasonPassCode).toHaveBeenCalledTimes(1);
    expect(mockValidateSeasonPassCode).toHaveReturnedWith(null);
  });

  it("returns empty error string when given lowercase alphabets without separators", () => {
    mockValidateSeasonPassCode("abc");
    expect(mockValidateSeasonPassCode).toHaveBeenCalledTimes(1);
    expect(mockValidateSeasonPassCode).toHaveReturnedWith(null);
  });

  it("returns empty error string when given lowercase alphabets with single `-` separators ", () => {
    mockValidateSeasonPassCode("abc-abc");
    expect(mockValidateSeasonPassCode).toHaveBeenCalledTimes(1);
    expect(mockValidateSeasonPassCode).toHaveReturnedWith(null);
  });

  it("returns empty error string when given lowercase alphabets with single `_` separators ", () => {
    mockValidateSeasonPassCode("abc_abc");
    expect(mockValidateSeasonPassCode).toHaveBeenCalledTimes(1);
    expect(mockValidateSeasonPassCode).toHaveReturnedWith(null);
  });

  it("returns empty error string when given lowercase alphabets with single `:` separators ", () => {
    mockValidateSeasonPassCode("abc:abc");
    expect(mockValidateSeasonPassCode).toHaveBeenCalledTimes(1);
    expect(mockValidateSeasonPassCode).toHaveReturnedWith(null);
  });

  it("returns empty error string when given lowercase alphabets with 2 `-` separators", () => {
    mockValidateSeasonPassCode("abc-abc-abc");
    expect(mockValidateSeasonPassCode).toHaveBeenCalledTimes(1);
    expect(mockValidateSeasonPassCode).toHaveReturnedWith(null);
  });

  it("returns empty error string when given lowercase alphabets with 2 `_` separators", () => {
    mockValidateSeasonPassCode("abc_abc_abc");
    expect(mockValidateSeasonPassCode).toHaveBeenCalledTimes(1);
    expect(mockValidateSeasonPassCode).toHaveReturnedWith(null);
  });

  it("returns empty error string when given lowercase alphabets with 2 `:` separators", () => {
    mockValidateSeasonPassCode("abc:abc:abc");
    expect(mockValidateSeasonPassCode).toHaveBeenCalledTimes(1);
    expect(mockValidateSeasonPassCode).toHaveReturnedWith(null);
  });

  it("returns empty error string when given lowercase alphabets with combination separators `-`, `_`, and `:`", () => {
    mockValidateSeasonPassCode("abc-abc_abc:abc");
    expect(mockValidateSeasonPassCode).toHaveBeenCalledTimes(1);
    expect(mockValidateSeasonPassCode).toHaveReturnedWith(null);
  });

  it("returns empty error string when given lowercase alphabets with combination separators `-`, `_`, and `:`", () => {
    mockValidateSeasonPassCode("abc_abc-abc:abc");
    expect(mockValidateSeasonPassCode).toHaveBeenCalledTimes(1);
    expect(mockValidateSeasonPassCode).toHaveReturnedWith(null);
  });

  it("returns empty error string when given lowercase alphabets and numeric with  `-` separators", () => {
    mockValidateSeasonPassCode("abc-123");
    expect(mockValidateSeasonPassCode).toHaveBeenCalledTimes(1);
    expect(mockValidateSeasonPassCode).toHaveReturnedWith(null);
  });

  it("returns empty error string when given lowercase alphabets and numeric with  `_` separators", () => {
    mockValidateSeasonPassCode("abc_123");
    expect(mockValidateSeasonPassCode).toHaveBeenCalledTimes(1);
    expect(mockValidateSeasonPassCode).toHaveReturnedWith(null);
  });

  it("returns empty error string when given lowercase alphabets and numeric with  `_` separators", () => {
    mockValidateSeasonPassCode("abc:123");
    expect(mockValidateSeasonPassCode).toHaveBeenCalledTimes(1);
    expect(mockValidateSeasonPassCode).toHaveReturnedWith(null);
  });

  it("returns error string `empty` when given empty string", () => {
    mockValidateSeasonPassCode("");
    expect(mockValidateSeasonPassCode).toHaveBeenCalledTimes(1);
    expect(mockValidateSeasonPassCode).toHaveReturnedWith(ValidateSeasonPassCodeErrorType.empty);
  });
  // tslint:disable-next-line
  it("returns error string `exceedLengthLimit` when given string with length more than default max length (256)", () => {
    mockValidateSeasonPassCode(
      // tslint:disable-next-line
      "abc-abc-abc-abcabc-abc-abc-abc-abc-abc-abc-abcabc-abc-abc-abc-abc-abc-abc-abcabc-abc-abc-abc-abc-abc-abc-abc-abc-abc-abc-abcabc-abc-abc-abcabc-abc-abc-abc-abc-abc-abc-abcabc-abc-abc-abc-abc-abc-abc-abcabc-abc-abc-abc-abc-abc-abc-abcabc-abc-abc-abc-abc-abc-a"
    );
    expect(mockValidateSeasonPassCode).toHaveBeenCalledTimes(1);
    expect(mockValidateSeasonPassCode).toHaveReturnedWith(ValidateSeasonPassCodeErrorType.exceedLengthLimit);
  });

  it("returns error string `invalidFormat` when given symbol only", () => {
    mockValidateSeasonPassCode("@#");
    expect(mockValidateSeasonPassCode).toHaveBeenCalledTimes(1);
    expect(mockValidateSeasonPassCode).toHaveReturnedWith(ValidateSeasonPassCodeErrorType.invalidFormat);
  });

  it("returns empty error string when given numbers only", () => {
    mockValidateSeasonPassCode("123");
    expect(mockValidateSeasonPassCode).toHaveBeenCalledTimes(1);
    expect(mockValidateSeasonPassCode).toHaveReturnedWith(null);
  });

  it("returns error string `invalidFormat` when given uppercase only", () => {
    mockValidateSeasonPassCode("ABC");
    expect(mockValidateSeasonPassCode).toHaveBeenCalledTimes(1);
    expect(mockValidateSeasonPassCode).toHaveReturnedWith(ValidateSeasonPassCodeErrorType.invalidFormat);
  });

  it("returns error string `invalidFormat` when given uppercase and lowercase separated by `-`", () => {
    mockValidateSeasonPassCode("ABC-abc");
    expect(mockValidateSeasonPassCode).toHaveBeenCalledTimes(1);
    expect(mockValidateSeasonPassCode).toHaveReturnedWith(ValidateSeasonPassCodeErrorType.invalidFormat);
  });

  it("returns error string `invalidFormat` when given uppercase and lowercase separated by `_`", () => {
    mockValidateSeasonPassCode("ABC_abc");
    expect(mockValidateSeasonPassCode).toHaveBeenCalledTimes(1);
    expect(mockValidateSeasonPassCode).toHaveReturnedWith(ValidateSeasonPassCodeErrorType.invalidFormat);
  });

  it("returns error string `invalidFormat` when given uppercase and lowercase separated by `:`", () => {
    mockValidateSeasonPassCode("ABC:abc");
    expect(mockValidateSeasonPassCode).toHaveBeenCalledTimes(1);
    expect(mockValidateSeasonPassCode).toHaveReturnedWith(ValidateSeasonPassCodeErrorType.invalidFormat);
  });

  it("returns error string `invalidFormat` when given lowercase alphabets that ends in hyphen `-`", () => {
    mockValidateSeasonPassCode("abc-");
    expect(mockValidateSeasonPassCode).toHaveBeenCalledTimes(1);
    expect(mockValidateSeasonPassCode).toHaveReturnedWith(ValidateSeasonPassCodeErrorType.invalidFormat);
  });

  it("returns error string `invalidFormat` when given lowercase alphabets that ends in hyphen `_`", () => {
    mockValidateSeasonPassCode("abc_");
    expect(mockValidateSeasonPassCode).toHaveBeenCalledTimes(1);
    expect(mockValidateSeasonPassCode).toHaveReturnedWith(ValidateSeasonPassCodeErrorType.invalidFormat);
  });

  it("returns error string `invalidFormat` when given lowercase alphabets that ends in hyphen `:`", () => {
    mockValidateSeasonPassCode("abc:");
    expect(mockValidateSeasonPassCode).toHaveBeenCalledTimes(1);
    expect(mockValidateSeasonPassCode).toHaveReturnedWith(ValidateSeasonPassCodeErrorType.invalidFormat);
  });

  // tslint:disable-next-line
  it("returns error string `invalidFormat` when given lowercase alphabets that is separated with double hyphen `-`", () => {
    mockValidateSeasonPassCode("abc--abc");
    expect(mockValidateSeasonPassCode).toHaveBeenCalledTimes(1);
    expect(mockValidateSeasonPassCode).toHaveReturnedWith(ValidateSeasonPassCodeErrorType.invalidFormat);
  });

  // tslint:disable-next-line
  it("returns error string `invalidFormat` when given lowercase alphabets that is separated with double hyphen `_`", () => {
    mockValidateSeasonPassCode("abc__abc");
    expect(mockValidateSeasonPassCode).toHaveBeenCalledTimes(1);
    expect(mockValidateSeasonPassCode).toHaveReturnedWith(ValidateSeasonPassCodeErrorType.invalidFormat);
  });

  // tslint:disable-next-line
  it("returns error string `invalidFormat` when given lowercase alphabets that is separated with double hyphen `:`", () => {
    mockValidateSeasonPassCode("abc::abc");
    expect(mockValidateSeasonPassCode).toHaveBeenCalledTimes(1);
    expect(mockValidateSeasonPassCode).toHaveReturnedWith(ValidateSeasonPassCodeErrorType.invalidFormat);
  });

  // tslint:disable-next-line
  it("returns error string `invalidFormat` when given lowercase alphabets that is separated with combination of `_` and `-`", () => {
    mockValidateSeasonPassCode("abc-_abc");
    expect(mockValidateSeasonPassCode).toHaveBeenCalledTimes(1);
    expect(mockValidateSeasonPassCode).toHaveReturnedWith(ValidateSeasonPassCodeErrorType.invalidFormat);
  });
  // tslint:disable-next-line
  it("returns error string `invalidFormat` when given lowercase alphabets that is separated with combination of `_` and `-`", () => {
    mockValidateSeasonPassCode("abc_-abc");
    expect(mockValidateSeasonPassCode).toHaveBeenCalledTimes(1);
    expect(mockValidateSeasonPassCode).toHaveReturnedWith(ValidateSeasonPassCodeErrorType.invalidFormat);
  });

  // tslint:disable-next-line
  it("returns error string `invalidFormat` when given lowercase alphabets that is separated with combination of `_`, `-`, and `:`", () => {
    mockValidateSeasonPassCode("abc-_:abc");
    expect(mockValidateSeasonPassCode).toHaveBeenCalledTimes(1);
    expect(mockValidateSeasonPassCode).toHaveReturnedWith(ValidateSeasonPassCodeErrorType.invalidFormat);
  });

  // tslint:disable-next-line
  it("returns error string `invalidFormat` when given lowercase alphabets that is separated with invalid separator `$`", () => {
    mockValidateSeasonPassCode("abc$abc");
    expect(mockValidateSeasonPassCode).toHaveBeenCalledTimes(1);
    expect(mockValidateSeasonPassCode).toHaveReturnedWith(ValidateSeasonPassCodeErrorType.invalidFormat);
  });
});
