/*
 * Copyright (c) 2021. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { validateDomain, ValidateDomainErrorType } from "./validateDomain";

const mockValidateDomain = jest.fn(validateDomain);
afterEach(mockValidateDomain.mockClear);
afterAll(mockValidateDomain.mockRestore);

describe("validateDomain returns correct output", () => {
  it("returns empty error string when given empty string, but it is not a required field", () => {
    mockValidateDomain("", { isRequired: false });
    expect(mockValidateDomain).toHaveBeenCalledTimes(1);
    expect(mockValidateDomain).toHaveReturnedWith(null);
  });

  it("returns error string `empty` when given empty string", () => {
    mockValidateDomain("");
    expect(mockValidateDomain).toHaveBeenCalledTimes(1);
    expect(mockValidateDomain).toHaveReturnedWith(ValidateDomainErrorType.empty);
  });

  it("returns error string containing `exceedLengthLimit` when given alpha with length of more than 63", () => {
    mockValidateDomain("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl");
    expect(mockValidateDomain).toHaveBeenCalledTimes(1);
    expect(mockValidateDomain).toHaveReturnedWith(ValidateDomainErrorType.exceedLengthLimit);
  });

  it("returns error string `invalid format` when given alphanumeric with symbol", () => {
    mockValidateDomain("alpha123#!@#");
    expect(mockValidateDomain).toHaveBeenCalledTimes(1);
    expect(mockValidateDomain).toHaveReturnedWith(ValidateDomainErrorType.invalidFormat);
  });

  it(
    "returns error string `invalid format` when it contains valid regex alphanumeric with" +
      " dash in the beginning of the string",
    () => {
      mockValidateDomain("-alpha123");
      expect(mockValidateDomain).toHaveBeenCalledTimes(1);
      expect(mockValidateDomain).toHaveReturnedWith(ValidateDomainErrorType.invalidFormat);
  });

  it(
    "returns error string `invalid format` when it contains valid regex alphanumeric with" +
      " dash in the end of the string",
    () => {
      mockValidateDomain("alpha123-");
      expect(mockValidateDomain).toHaveBeenCalledTimes(1);
      expect(mockValidateDomain).toHaveReturnedWith(ValidateDomainErrorType.invalidFormat);
  });

});
