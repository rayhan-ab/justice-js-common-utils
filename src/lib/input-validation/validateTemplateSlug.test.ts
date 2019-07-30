/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { validateTemplateSlug, ValidateTemplateSlugErrorType } from "./validateTemplateSlug";

const mockValidateTemplateSlug = jest.fn(validateTemplateSlug);
afterEach(mockValidateTemplateSlug.mockClear);
afterAll(mockValidateTemplateSlug.mockRestore);

describe("validateTemplateSlug returns correct output", () => {
  it("returns empty error string when given uppercase alphabets without separators", () => {
    mockValidateTemplateSlug("ABC");
    expect(mockValidateTemplateSlug).toHaveBeenCalledTimes(1);
    expect(mockValidateTemplateSlug).toHaveReturnedWith(null);
  });

  it("returns empty error string when given lowercase alphabets without separators", () => {
    mockValidateTemplateSlug("abc");
    expect(mockValidateTemplateSlug).toHaveBeenCalledTimes(1);
    expect(mockValidateTemplateSlug).toHaveReturnedWith(null);
  });

  it("returns empty error string when given lowercase & uppercase alphabets with single `-` separators ", () => {
    mockValidateTemplateSlug("abc-ABC");
    expect(mockValidateTemplateSlug).toHaveBeenCalledTimes(1);
    expect(mockValidateTemplateSlug).toHaveReturnedWith(null);
  });

  it("returns empty error string when given uppercase alphabets with 2 `-`separators", () => {
    mockValidateTemplateSlug("abc-ABC-abc");
    expect(mockValidateTemplateSlug).toHaveBeenCalledTimes(1);
    expect(mockValidateTemplateSlug).toHaveReturnedWith(null);
  });

  it("returns error string `empty` when given empty string", () => {
    mockValidateTemplateSlug("");
    expect(mockValidateTemplateSlug).toHaveBeenCalledTimes(1);
    expect(mockValidateTemplateSlug).toHaveReturnedWith(ValidateTemplateSlugErrorType.empty);
  });
  // tslint:disable-next-line
  it("returns error string `exceedLengthLimit` when given string with length more than default max length (256)", () => {
    mockValidateTemplateSlug(
      // tslint:disable-next-line
      "abc-ABC-abc-ABCabc-ABC-abc-ABC-abc-ABC-abc-ABCabc-ABC-abc-ABC-abc-ABC-abc-ABCabc-ABC-abc-ABC-abc-ABC-abc-ABC-abc-ABC-abc-ABCabc-ABC-abc-ABCabc-ABC-abc-ABC-abc-ABC-abc-ABCabc-ABC-abc-ABC-abc-ABC-abc-ABCabc-ABC-abc-ABC-abc-ABC-abc-ABCabc-ABC-abc-ABC-abc-ABC-a"
    );
    expect(mockValidateTemplateSlug).toHaveBeenCalledTimes(1);
    expect(mockValidateTemplateSlug).toHaveReturnedWith(ValidateTemplateSlugErrorType.exceedLengthLimit);
  });

  it("returns error string `invalidFormat` when given symbol only", () => {
    mockValidateTemplateSlug("@#");
    expect(mockValidateTemplateSlug).toHaveBeenCalledTimes(1);
    expect(mockValidateTemplateSlug).toHaveReturnedWith(ValidateTemplateSlugErrorType.invalidFormat);
  });

  it("returns error string `invalidFormat` when given numbers only", () => {
    mockValidateTemplateSlug("123");
    expect(mockValidateTemplateSlug).toHaveBeenCalledTimes(1);
    expect(mockValidateTemplateSlug).toHaveReturnedWith(ValidateTemplateSlugErrorType.invalidFormat);
  });

  it("returns error string `invalidFormat` when given lowercase and numbers separated by `-`", () => {
    mockValidateTemplateSlug("abc-123");
    expect(mockValidateTemplateSlug).toHaveBeenCalledTimes(1);
    expect(mockValidateTemplateSlug).toHaveReturnedWith(ValidateTemplateSlugErrorType.invalidFormat);
  });

  it("returns error string `invalidFormat` when given uppercase alphabets that ends in separator `-`", () => {
    mockValidateTemplateSlug("ABC-");
    expect(mockValidateTemplateSlug).toHaveBeenCalledTimes(1);
    expect(mockValidateTemplateSlug).toHaveReturnedWith(ValidateTemplateSlugErrorType.invalidFormat);
  });
  // tslint:disable-next-line
  it("returns error string `invalidFormat` when given uppercase alphabets and numeric that is separated with double separator `:`", () => {
    mockValidateTemplateSlug("abc--ABC");
    expect(mockValidateTemplateSlug).toHaveBeenCalledTimes(1);
    expect(mockValidateTemplateSlug).toHaveReturnedWith(ValidateTemplateSlugErrorType.invalidFormat);
  });
  // tslint:disable-next-line
  it("returns error string `invalidFormat` when given numeric and lowercase alphabet that is separated with invalid separator `$`", () => {
    mockValidateTemplateSlug("ABC_abc");
    expect(mockValidateTemplateSlug).toHaveBeenCalledTimes(1);
    expect(mockValidateTemplateSlug).toHaveReturnedWith(ValidateTemplateSlugErrorType.invalidFormat);
  });
});
