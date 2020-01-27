/*
 * Copyright (c) 2020. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { validateStatisticCode, ValidateStatisticCodeErrorType } from "./validateStatisticCode";

const mockValidateStatisticCode = jest.fn(validateStatisticCode);
afterEach(mockValidateStatisticCode.mockClear);
afterAll(mockValidateStatisticCode.mockRestore);

describe("validateStatisticCode returns correct output", () => {
  it("returns empty error string when given empty string, but it is not a required field", () => {
    mockValidateStatisticCode("", { isRequired: false });
    expect(mockValidateStatisticCode).toHaveBeenCalledTimes(1);
    expect(mockValidateStatisticCode).toHaveReturnedWith(null);
  });

  it("returns empty error string when given lowercase alphabets without separators", () => {
    mockValidateStatisticCode("abc");
    expect(mockValidateStatisticCode).toHaveBeenCalledTimes(1);
    expect(mockValidateStatisticCode).toHaveReturnedWith(null);
  });

  it("returns empty error string when given lowercase alphabets with single `-` separators ", () => {
    mockValidateStatisticCode("abc-abc");
    expect(mockValidateStatisticCode).toHaveBeenCalledTimes(1);
    expect(mockValidateStatisticCode).toHaveReturnedWith(null);
  });

  it("returns empty error string when given lowercase alphabets with 2 `-` separators", () => {
    mockValidateStatisticCode("abc-abc-abc");
    expect(mockValidateStatisticCode).toHaveBeenCalledTimes(1);
    expect(mockValidateStatisticCode).toHaveReturnedWith(null);
  });

  it("returns empty error string when given lowercase alphabets and numeric with  `-` separators", () => {
    mockValidateStatisticCode("abc-123");
    expect(mockValidateStatisticCode).toHaveBeenCalledTimes(1);
    expect(mockValidateStatisticCode).toHaveReturnedWith(null);
  });

  it("returns error string `empty` when given empty string", () => {
    mockValidateStatisticCode("");
    expect(mockValidateStatisticCode).toHaveBeenCalledTimes(1);
    expect(mockValidateStatisticCode).toHaveReturnedWith(ValidateStatisticCodeErrorType.empty);
  });
  // tslint:disable-next-line
  it("returns error string `exceedLengthLimit` when given string with length more than default max length (256)", () => {
    mockValidateStatisticCode(
      // tslint:disable-next-line
      "abc-abc-abc-abcabc-abc-abc-abc-abc-abc-abc-abcabc-abc-abc-abc-abc-abc-abc-abcabc-abc-abc-abc-abc-abc-abc-abc-abc-abc-abc-abcabc-abc-abc-abcabc-abc-abc-abc-abc-abc-abc-abcabc-abc-abc-abc-abc-abc-abc-abcabc-abc-abc-abc-abc-abc-abc-abcabc-abc-abc-abc-abc-abc-a"
    );
    expect(mockValidateStatisticCode).toHaveBeenCalledTimes(1);
    expect(mockValidateStatisticCode).toHaveReturnedWith(ValidateStatisticCodeErrorType.exceedLengthLimit);
  });

  it("returns error string `invalidFormat` when given symbol only", () => {
    mockValidateStatisticCode("@#");
    expect(mockValidateStatisticCode).toHaveBeenCalledTimes(1);
    expect(mockValidateStatisticCode).toHaveReturnedWith(ValidateStatisticCodeErrorType.invalidFormat);
  });

  it("returns empty error string when given numbers only", () => {
    mockValidateStatisticCode("123");
    expect(mockValidateStatisticCode).toHaveBeenCalledTimes(1);
    expect(mockValidateStatisticCode).toHaveReturnedWith(null);
  });

  it("returns error string `invalidFormat` when given uppercase only", () => {
    mockValidateStatisticCode("ABC");
    expect(mockValidateStatisticCode).toHaveBeenCalledTimes(1);
    expect(mockValidateStatisticCode).toHaveReturnedWith(ValidateStatisticCodeErrorType.invalidFormat);
  });

  it("returns error string `invalidFormat` when given uppercase and lowercase separated by `-`", () => {
    mockValidateStatisticCode("ABC-abc");
    expect(mockValidateStatisticCode).toHaveBeenCalledTimes(1);
    expect(mockValidateStatisticCode).toHaveReturnedWith(ValidateStatisticCodeErrorType.invalidFormat);
  });

  it("returns error string `invalidFormat` when given lowercase alphabets that ends in hyphen `-`", () => {
    mockValidateStatisticCode("abc-");
    expect(mockValidateStatisticCode).toHaveBeenCalledTimes(1);
    expect(mockValidateStatisticCode).toHaveReturnedWith(ValidateStatisticCodeErrorType.invalidFormat);
  });
  // tslint:disable-next-line
  it("returns error string `invalidFormat` when given lowercase alphabets that is separated with double hyphen `-`", () => {
    mockValidateStatisticCode("abc--abc");
    expect(mockValidateStatisticCode).toHaveBeenCalledTimes(1);
    expect(mockValidateStatisticCode).toHaveReturnedWith(ValidateStatisticCodeErrorType.invalidFormat);
  });
  // tslint:disable-next-line
  it("returns error string `invalidFormat` when given lowercase alphabets that is separated with invalid separator `$`", () => {
    mockValidateStatisticCode("abc$abc");
    expect(mockValidateStatisticCode).toHaveBeenCalledTimes(1);
    expect(mockValidateStatisticCode).toHaveReturnedWith(ValidateStatisticCodeErrorType.invalidFormat);
  });
});
