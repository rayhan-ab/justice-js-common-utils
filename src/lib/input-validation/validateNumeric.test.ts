/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { ThrownErrorType } from "./constant/errorType";
import { validateNumeric, ValidateNumericErrorType } from "./validateNumeric";

const mockValidateNumeric = jest.fn(validateNumeric);
afterEach(mockValidateNumeric.mockClear);
afterAll(mockValidateNumeric.mockRestore);

describe("validateNumeric returns correct output", () => {
  it("returns empty error string when given empty string, but it is not a required field", () => {
    mockValidateNumeric("", { isRequired: false });
    expect(mockValidateNumeric).toHaveBeenCalledTimes(1);
    expect(mockValidateNumeric).toHaveReturnedWith(null);
  });

  it("returns empty error string when given a number within the default range", () => {
    mockValidateNumeric("100");
    expect(mockValidateNumeric).toHaveBeenCalledTimes(1);
    expect(mockValidateNumeric).toHaveReturnedWith(null);
  });

  it("returns empty error string when given a string with value of the default max value", () => {
    mockValidateNumeric(String(Number.MAX_SAFE_INTEGER));
    expect(mockValidateNumeric).toHaveBeenCalledTimes(1);
    expect(mockValidateNumeric).toHaveReturnedWith(null);
  });

  it("returns empty error string when given a string with value of custom min value (3)", () => {
    mockValidateNumeric("3", { min: 3 });
    expect(mockValidateNumeric).toHaveBeenCalledTimes(1);
    expect(mockValidateNumeric).toHaveReturnedWith(null);
  });

  it("returns empty error string when given a string with value of custom max value (10)", () => {
    mockValidateNumeric("10", { max: 10 });
    expect(mockValidateNumeric).toHaveBeenCalledTimes(1);
    expect(mockValidateNumeric).toHaveReturnedWith(null);
  });

  it("returns error string 'invalidValue' when given string that is not a number", () => {
    mockValidateNumeric("a");
    expect(mockValidateNumeric).toHaveBeenCalledTimes(1);
    expect(mockValidateNumeric).toHaveReturnedWith(ValidateNumericErrorType.invalidValue);
  });

  it("returns error string 'lessThanMinimumValue' when given a number less than min option", () => {
    mockValidateNumeric("-6", { min: -5 });
    expect(mockValidateNumeric).toHaveBeenCalledTimes(1);
    expect(mockValidateNumeric).toHaveReturnedWith(ValidateNumericErrorType.lessThanMinimumValue);
  });

  it("returns error string 'exceedMaximumValue' when given a number more than max option", () => {
    mockValidateNumeric("11", { max: 10 });
    expect(mockValidateNumeric).toHaveBeenCalledTimes(1);
    expect(mockValidateNumeric).toHaveReturnedWith(ValidateNumericErrorType.exceedMaximumValue);
  });

  it("returns error string 'empty' when given empty string", () => {
    mockValidateNumeric("");
    expect(mockValidateNumeric).toHaveBeenCalledTimes(1);
    expect(mockValidateNumeric).toHaveReturnedWith(ValidateNumericErrorType.empty);
  });

  it("Throws error invalid option' when given max option smaller than min option", () => {
    const invalidOptionMock = () => mockValidateNumeric("1", { min: 10, max: -99 });
    expect(invalidOptionMock).toThrowError(ThrownErrorType.invalidOption);
  });

  it("returns error string 'containsExcludedNumber' when given a string should excluded", () => {
    mockValidateNumeric("0", { min: -1, excludedNumbers: [0] });
    expect(mockValidateNumeric).toHaveBeenCalledTimes(1);
    expect(mockValidateNumeric).toHaveReturnedWith(ValidateNumericErrorType.invalidValue);
  });

  it("returns empty error string when given a string not excluded string", () => {
    mockValidateNumeric("-1", { min: -1, excludedNumbers: [0] });
    expect(mockValidateNumeric).toHaveBeenCalledTimes(1);
    expect(mockValidateNumeric).toHaveReturnedWith(null);
  });
});
