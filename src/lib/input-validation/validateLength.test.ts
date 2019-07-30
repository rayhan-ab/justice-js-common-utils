/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { validateLength, ValidateLengthErrorType } from "./validateLength";

const mockValidateLength = jest.fn(validateLength);
afterEach(mockValidateLength.mockClear);
afterAll(mockValidateLength.mockRestore);

describe("validateLength returns correct output", () => {
  it("returns empty error string when given a string with length of the default min length (1)", () => {
    mockValidateLength("1");
    expect(mockValidateLength).toHaveBeenCalledTimes(1);
    expect(mockValidateLength).toHaveReturnedWith(null);
  });

  it("returns empty error string when given a string with length of the default max length (256)", () => {
    mockValidateLength(
      // tslint:disable-next-line
      "1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456"
    );
    expect(mockValidateLength).toHaveBeenCalledTimes(1);
    expect(mockValidateLength).toHaveReturnedWith(null);
  });

  it("returns empty error string when given a string with length of custom min length (3)", () => {
    mockValidateLength("123", { min: 3 });
    expect(mockValidateLength).toHaveBeenCalledTimes(1);
    expect(mockValidateLength).toHaveReturnedWith(null);
  });

  it("returns empty error string when given a string with length of custom max length (10)", () => {
    mockValidateLength("1234567890", { max: 10 });
    expect(mockValidateLength).toHaveBeenCalledTimes(1);
    expect(mockValidateLength).toHaveReturnedWith(null);
  });

  it("returns error string 'lessThanLengthLimit' when given a string less than min option", () => {
    mockValidateLength("12", { min: 3 });
    expect(mockValidateLength).toHaveBeenCalledTimes(1);
    expect(mockValidateLength).toHaveReturnedWith(ValidateLengthErrorType.lessThanLengthLimit);
  });

  it("returns error string 'exceedLengthLimit' when given a string more than max option", () => {
    mockValidateLength("12345678901", { max: 10 });
    expect(mockValidateLength).toHaveBeenCalledTimes(1);
    expect(mockValidateLength).toHaveReturnedWith(ValidateLengthErrorType.exceedLengthLimit);
  });

  it("returns error string 'empty' when given empty string", () => {
    mockValidateLength("");
    expect(mockValidateLength).toHaveBeenCalledTimes(1);
    expect(mockValidateLength).toHaveReturnedWith(ValidateLengthErrorType.empty);
  });

  it("returns error string 'invalidOption' when given minus min option", () => {
    mockValidateLength("1", { min: -5 });
    expect(mockValidateLength).toHaveBeenCalledTimes(1);
    expect(mockValidateLength).toHaveReturnedWith(ValidateLengthErrorType.invalidOption);
  });

  it("returns error string 'invalidOption' when given minus max option", () => {
    mockValidateLength("1", { max: -10 });
    expect(mockValidateLength).toHaveBeenCalledTimes(1);
    expect(mockValidateLength).toHaveReturnedWith(ValidateLengthErrorType.invalidOption);
  });

  it("returns error string 'invalidOption' when given max option smaller than min option", () => {
    mockValidateLength("1", { min: 10, max: 3 });
    expect(mockValidateLength).toHaveBeenCalledTimes(1);
    expect(mockValidateLength).toHaveReturnedWith(ValidateLengthErrorType.invalidOption);
  });
});
