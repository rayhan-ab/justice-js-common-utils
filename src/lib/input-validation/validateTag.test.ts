/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { validateTag, ValidateTagErrorType } from "./validateTag";

const mockValidateTag = jest.fn(validateTag);
afterEach(mockValidateTag.mockClear);
afterAll(mockValidateTag.mockRestore);

describe("validateTag returns correct output", () => {
  it("returns empty error string when given empty string, but it is not a required field", () => {
    mockValidateTag("", { isRequired: false });
    expect(mockValidateTag).toHaveBeenCalledTimes(1);
    expect(mockValidateTag).toHaveReturnedWith(null);
  });

  it("returns empty error string when given uppercase alphabets without separators ", () => {
    mockValidateTag("ABC");
    expect(mockValidateTag).toHaveBeenCalledTimes(1);
    expect(mockValidateTag).toHaveReturnedWith(null);
  });

  it("returns empty error string when given uppercase alphabets with single `-` separators ", () => {
    mockValidateTag("abc-123");
    expect(mockValidateTag).toHaveBeenCalledTimes(1);
    expect(mockValidateTag).toHaveReturnedWith(null);
  });

  it("returns empty error string when given uppercase alphabets with single `:` separators ", () => {
    mockValidateTag("abc:123");
    expect(mockValidateTag).toHaveBeenCalledTimes(1);
    expect(mockValidateTag).toHaveReturnedWith(null);
  });

  it("returns empty error string when given uppercase alphabets with single `_` separators ", () => {
    mockValidateTag("abc_123");
    expect(mockValidateTag).toHaveBeenCalledTimes(1);
    expect(mockValidateTag).toHaveReturnedWith(null);
  });

  it("returns empty error string when given uppercase alphabets with 2 different separators `-` and `:` ", () => {
    mockValidateTag("abc-123:ABC");
    expect(mockValidateTag).toHaveBeenCalledTimes(1);
    expect(mockValidateTag).toHaveReturnedWith(null);
  });

  it("returns error string `empty` when given empty string", () => {
    mockValidateTag("");
    expect(mockValidateTag).toHaveBeenCalledTimes(1);
    expect(mockValidateTag).toHaveReturnedWith(ValidateTagErrorType.empty);
  });

  it("returns error string `exceedLengthLimit` when given string with length more than default max length (30)", () => {
    mockValidateTag("abc-123-abc-123abc-123-abc-1234");
    expect(mockValidateTag).toHaveBeenCalledTimes(1);
    expect(mockValidateTag).toHaveReturnedWith(ValidateTagErrorType.exceedLengthLimit);
  });

  it("returns error string `invalidFormat` when given symbol only", () => {
    mockValidateTag("@");
    expect(mockValidateTag).toHaveBeenCalledTimes(1);
    expect(mockValidateTag).toHaveReturnedWith(ValidateTagErrorType.invalidFormat);
  });

  it("returns error string `invalidFormat` when given uppercase alphabets that ends in separator `-`", () => {
    mockValidateTag("ABC-");
    expect(mockValidateTag).toHaveBeenCalledTimes(1);
    expect(mockValidateTag).toHaveReturnedWith(ValidateTagErrorType.invalidFormat);
  });
  // tslint:disable-next-line
  it("returns error string `invalidFormat` when given uppercase alphabets and numeric that is separated with double separator `:`", () => {
    mockValidateTag("123::ABC");
    expect(mockValidateTag).toHaveBeenCalledTimes(1);
    expect(mockValidateTag).toHaveReturnedWith(ValidateTagErrorType.invalidFormat);
  });
  // tslint:disable-next-line
  it("returns error string `invalidFormat` when given numeric and lowercase alphabet that is separated with invalid separator `$`", () => {
    mockValidateTag("123$abc");
    expect(mockValidateTag).toHaveBeenCalledTimes(1);
    expect(mockValidateTag).toHaveReturnedWith(ValidateTagErrorType.invalidFormat);
  });
});
