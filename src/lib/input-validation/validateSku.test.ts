/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { validateSku, ValidateSkuErrorType } from "./validateSku";

const mockValidateSku = jest.fn(validateSku);
afterEach(mockValidateSku.mockClear);
afterAll(mockValidateSku.mockRestore);

describe("validateSku returns correct output", () => {
  it("returns empty error string when given empty string, but it is not a required field", () => {
    mockValidateSku("", { isRequired: false });
    expect(mockValidateSku).toHaveBeenCalledTimes(1);
    expect(mockValidateSku).toHaveReturnedWith(null);
  });

  it("returns empty error string when given string with length less than specified max length", () => {
    mockValidateSku("abc-123-abc-123abcd", { maxLength: 20 });
    expect(mockValidateSku).toHaveBeenCalledTimes(1);
    expect(mockValidateSku).toHaveReturnedWith(null);
  });

  it("returns empty error string when given uppercase alphabets without separators ", () => {
    mockValidateSku("ABC");
    expect(mockValidateSku).toHaveBeenCalledTimes(1);
    expect(mockValidateSku).toHaveReturnedWith(null);
  });

  it("returns empty error string when given uppercase alphabets with single `-` separators ", () => {
    mockValidateSku("abc-123");
    expect(mockValidateSku).toHaveBeenCalledTimes(1);
    expect(mockValidateSku).toHaveReturnedWith(null);
  });

  it("returns empty error string when given uppercase alphabets with single `:` separators ", () => {
    mockValidateSku("abc:123");
    expect(mockValidateSku).toHaveBeenCalledTimes(1);
    expect(mockValidateSku).toHaveReturnedWith(null);
  });

  it("returns empty error string when given uppercase alphabets with single `_` separators ", () => {
    mockValidateSku("abc_123");
    expect(mockValidateSku).toHaveBeenCalledTimes(1);
    expect(mockValidateSku).toHaveReturnedWith(null);
  });

  it("returns empty error string when given uppercase alphabets with 2 different separators `-` and `:` ", () => {
    mockValidateSku("abc-123:ABC");
    expect(mockValidateSku).toHaveBeenCalledTimes(1);
    expect(mockValidateSku).toHaveReturnedWith(null);
  });

  it("returns error string `empty` when given empty string", () => {
    mockValidateSku("");
    expect(mockValidateSku).toHaveBeenCalledTimes(1);
    expect(mockValidateSku).toHaveReturnedWith(ValidateSkuErrorType.empty);
  });

  it("returns error string `exceedLengthLimit` when given string with length more than default max length (32)", () => {
    mockValidateSku("abc-123-abc-123abc-123-abc-1234-a");
    expect(mockValidateSku).toHaveBeenCalledTimes(1);
    expect(mockValidateSku).toHaveReturnedWith(ValidateSkuErrorType.exceedLengthLimit);
  });

  it("returns error string `exceedLengthLimit` when given string with length more than specified max length", () => {
    mockValidateSku("abc-123-abc-123abc-12", { maxLength: 20 });
    expect(mockValidateSku).toHaveBeenCalledTimes(1);
    expect(mockValidateSku).toHaveReturnedWith(ValidateSkuErrorType.exceedLengthLimit);
  });

  it("returns error string `invalidFormat` when given symbol only", () => {
    mockValidateSku("@");
    expect(mockValidateSku).toHaveBeenCalledTimes(1);
    expect(mockValidateSku).toHaveReturnedWith(ValidateSkuErrorType.invalidFormat);
  });

  it("returns error string `invalidFormat` when given uppercase alphabets that ends in separator `-`", () => {
    mockValidateSku("ABC-");
    expect(mockValidateSku).toHaveBeenCalledTimes(1);
    expect(mockValidateSku).toHaveReturnedWith(ValidateSkuErrorType.invalidFormat);
  });
  // tslint:disable-next-line
  it("returns error string `invalidFormat` when given uppercase alphabets and numeric that is separated with double separator `:`", () => {
    mockValidateSku("123::ABC");
    expect(mockValidateSku).toHaveBeenCalledTimes(1);
    expect(mockValidateSku).toHaveReturnedWith(ValidateSkuErrorType.invalidFormat);
  });
  // tslint:disable-next-line
  it("returns error string `invalidFormat` when given numeric and lowercase alphabet that is separated with invalid separator `$`", () => {
    mockValidateSku("123$abc");
    expect(mockValidateSku).toHaveBeenCalledTimes(1);
    expect(mockValidateSku).toHaveReturnedWith(ValidateSkuErrorType.invalidFormat);
  });
});
