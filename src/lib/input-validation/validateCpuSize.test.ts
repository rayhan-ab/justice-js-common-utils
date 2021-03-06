/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { validateCpuSize, ValidateCpuSizeErrorType } from "./validateCpuSize";

const mockValidateCpuSize = jest.fn(validateCpuSize);
afterEach(mockValidateCpuSize.mockClear);
afterAll(mockValidateCpuSize.mockRestore);

describe("validateCpuSize returns correct output", () => {
  it("returns empty error string when given empty string, but it is not a required field", () => {
    mockValidateCpuSize("", { isRequired: false });
    expect(mockValidateCpuSize).toHaveBeenCalledTimes(1);
    expect(mockValidateCpuSize).toHaveReturnedWith(null);
  });

  it("returns empty error string when given a string started in numbers", () => {
    mockValidateCpuSize("100");
    expect(mockValidateCpuSize).toHaveBeenCalledTimes(1);
    expect(mockValidateCpuSize).toHaveReturnedWith(null);
  });
  // tslint:disable-next-line
  it("returns empty error string when given a string started in numbers, with a total max length of 8", () => {
    mockValidateCpuSize("1000000");
    expect(mockValidateCpuSize).toHaveBeenCalledTimes(1);
    expect(mockValidateCpuSize).toHaveReturnedWith(null);
  });
  // tslint:disable-next-line
  it("returns error string 'exceedLengthLimit' when given a string started in numbers, with a total max length of more than 8", () => {
    mockValidateCpuSize("100000000");
    expect(mockValidateCpuSize).toHaveBeenCalledTimes(1);
    expect(mockValidateCpuSize).toHaveReturnedWith(ValidateCpuSizeErrorType.exceedLengthLimit);
  });

  it("returns error string 'empty' when given empty string", () => {
    mockValidateCpuSize("");
    expect(mockValidateCpuSize).toHaveBeenCalledTimes(1);
    expect(mockValidateCpuSize).toHaveReturnedWith(ValidateCpuSizeErrorType.empty);
  });
  // tslint:disable-next-line
  it("returns error string 'invalidFormat' when given a string started in numbers and ended a character", () => {
    mockValidateCpuSize("10000z");
    expect(mockValidateCpuSize).toHaveBeenCalledTimes(1);
    expect(mockValidateCpuSize).toHaveReturnedWith(ValidateCpuSizeErrorType.invalidFormat);
  });

  it("returns error string 'invalidFormat' when given a string containing characters", () => {
    mockValidateCpuSize("100ds");
    expect(mockValidateCpuSize).toHaveBeenCalledTimes(1);
    expect(mockValidateCpuSize).toHaveReturnedWith(ValidateCpuSizeErrorType.invalidFormat);
  });

  it("returns error string 'invalidFormat' when given a string containing only symbols", () => {
    mockValidateCpuSize("!!!");
    expect(mockValidateCpuSize).toHaveBeenCalledTimes(1);
    expect(mockValidateCpuSize).toHaveReturnedWith(ValidateCpuSizeErrorType.invalidFormat);
  });

  it("returns error string 'invalidFormat' when given a string containing only alphabets", () => {
    mockValidateCpuSize("asd");
    expect(mockValidateCpuSize).toHaveBeenCalledTimes(1);
    expect(mockValidateCpuSize).toHaveReturnedWith(ValidateCpuSizeErrorType.invalidFormat);
  });
});
