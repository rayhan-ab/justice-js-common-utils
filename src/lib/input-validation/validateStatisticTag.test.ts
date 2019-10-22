/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { validateStatisticTag, ValidateStatisticTagErrorType } from "./validateStatisticTag";

const mockValidateStatisticTag = jest.fn(validateStatisticTag);
afterEach(mockValidateStatisticTag.mockClear);
afterAll(mockValidateStatisticTag.mockRestore);

describe("validateTag returns correct output", () => {
  it("returns empty error string when given empty string, but it is not a required field", () => {
    mockValidateStatisticTag("", { isRequired: false });
    expect(mockValidateStatisticTag).toHaveBeenCalledTimes(1);
    expect(mockValidateStatisticTag).toHaveReturnedWith(null);
  });

  it("returns empty error string when given uppercase alphabets without separators", () => {
    mockValidateStatisticTag("ABC");
    expect(mockValidateStatisticTag).toHaveBeenCalledTimes(1);
    expect(mockValidateStatisticTag).toHaveReturnedWith(null);
  });

  it("returns empty error string when given lowercase alphabets without separators", () => {
    mockValidateStatisticTag("abc");
    expect(mockValidateStatisticTag).toHaveBeenCalledTimes(1);
    expect(mockValidateStatisticTag).toHaveReturnedWith(null);
  });

  it("returns empty error string when given number without separators", () => {
    mockValidateStatisticTag("123");
    expect(mockValidateStatisticTag).toHaveBeenCalledTimes(1);
    expect(mockValidateStatisticTag).toHaveReturnedWith(null);
  });

  it("returns empty error string when given alphabets with single `_` separators ", () => {
    mockValidateStatisticTag("abc_ABC");
    expect(mockValidateStatisticTag).toHaveBeenCalledTimes(1);
    expect(mockValidateStatisticTag).toHaveReturnedWith(null);
  });

  it("returns empty error string when given alphabets and number with 2 separators `_`", () => {
    mockValidateStatisticTag("abc_ABC_123");
    expect(mockValidateStatisticTag).toHaveBeenCalledTimes(1);
    expect(mockValidateStatisticTag).toHaveReturnedWith(null);
  });

  it("returns error string `empty` when given empty string", () => {
    mockValidateStatisticTag("");
    expect(mockValidateStatisticTag).toHaveBeenCalledTimes(1);
    expect(mockValidateStatisticTag).toHaveReturnedWith(ValidateStatisticTagErrorType.empty);
  });

  it("returns error string `exceedLengthLimit` when given string with length more than default max length (34)", () => {
    mockValidateStatisticTag("abc_ABC_123_abc_ABC_123_abc_ABC_12345");
    expect(mockValidateStatisticTag).toHaveBeenCalledTimes(1);
    expect(mockValidateStatisticTag).toHaveReturnedWith(ValidateStatisticTagErrorType.exceedLengthLimit);
  });

  it("returns error string `invalidFormat` when given string start with underscore", () => {
    mockValidateStatisticTag("_abc");
    expect(mockValidateStatisticTag).toHaveBeenCalledTimes(1);
    expect(mockValidateStatisticTag).toHaveReturnedWith(ValidateStatisticTagErrorType.invalidFormat);
  });

  it("returns error string `invalidFormat` when given string end with underscore", () => {
    mockValidateStatisticTag("abc_");
    expect(mockValidateStatisticTag).toHaveBeenCalledTimes(1);
    expect(mockValidateStatisticTag).toHaveReturnedWith(ValidateStatisticTagErrorType.invalidFormat);
  });

  it("returns error string `invalidFormat` when given symbol only", () => {
    mockValidateStatisticTag("@");
    expect(mockValidateStatisticTag).toHaveBeenCalledTimes(1);
    expect(mockValidateStatisticTag).toHaveReturnedWith(ValidateStatisticTagErrorType.invalidFormat);
  });

  // tslint:disable-next-line
  it("returns error string `invalidFormat` when given string separated with invalid separator `$`", () => {
    mockValidateStatisticTag("123$abc");
    expect(mockValidateStatisticTag).toHaveBeenCalledTimes(1);
    expect(mockValidateStatisticTag).toHaveReturnedWith(ValidateStatisticTagErrorType.invalidFormat);
  });
});
