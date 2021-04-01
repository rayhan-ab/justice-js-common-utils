/*
 * Copyright (c) 2021. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { validateCpuSizeNonNomad, ValidateCpuSizeNonNomadErrorType } from "./validateCpuSizeNonNomad";

const mockValidateCpuSize = jest.fn(validateCpuSizeNonNomad);
afterEach(mockValidateCpuSize.mockClear);
afterAll(mockValidateCpuSize.mockRestore);

describe("validateCpuSize returns correct output", () => {
  it("returns empty error string when given empty string, but it is not a required field", () => {
    mockValidateCpuSize("", { isRequired: false });
    expect(mockValidateCpuSize).toHaveBeenCalledTimes(1);
    expect(mockValidateCpuSize).toHaveReturnedWith(null);
  });

  it("returns empty error string when given a string started in numbers and ended in `m`", () => {
    mockValidateCpuSize("100m");
    expect(mockValidateCpuSize).toHaveBeenCalledTimes(1);
    expect(mockValidateCpuSize).toHaveReturnedWith(null);
  });
  // tslint:disable-next-line
  it("returns empty error string when given a string started in numbers and ended in `m`, with a total max length of 8", () => {
    mockValidateCpuSize("1000000m");
    expect(mockValidateCpuSize).toHaveBeenCalledTimes(1);
    expect(mockValidateCpuSize).toHaveReturnedWith(null);
  });
  // tslint:disable-next-line
  it("returns error string 'exceedLengthLimit' when given a string started in numbers and ended in `m`, with a total max length of more than 8", () => {
    mockValidateCpuSize("10000000m");
    expect(mockValidateCpuSize).toHaveBeenCalledTimes(1);
    expect(mockValidateCpuSize).toHaveReturnedWith(ValidateCpuSizeNonNomadErrorType.exceedLengthLimit);
  });

  it("returns error string 'empty' when given empty string", () => {
    mockValidateCpuSize("");
    expect(mockValidateCpuSize).toHaveBeenCalledTimes(1);
    expect(mockValidateCpuSize).toHaveReturnedWith(ValidateCpuSizeNonNomadErrorType.empty);
  });
  // tslint:disable-next-line
  it("returns error string 'invalidFormat' when given a string started in numbers and ended in characters other than `m`", () => {
    mockValidateCpuSize("10000z");
    expect(mockValidateCpuSize).toHaveBeenCalledTimes(1);
    expect(mockValidateCpuSize).toHaveReturnedWith(ValidateCpuSizeNonNomadErrorType.invalidFormat);
  });

  it("returns error string 'invalidFormat' when given a string containing only numbers", () => {
    mockValidateCpuSize("10000");
    expect(mockValidateCpuSize).toHaveBeenCalledTimes(1);
    expect(mockValidateCpuSize).toHaveReturnedWith(ValidateCpuSizeNonNomadErrorType.invalidFormat);
  });

  it("returns error string 'invalidFormat' when given a string containing only symbols", () => {
    mockValidateCpuSize("!!!");
    expect(mockValidateCpuSize).toHaveBeenCalledTimes(1);
    expect(mockValidateCpuSize).toHaveReturnedWith(ValidateCpuSizeNonNomadErrorType.invalidFormat);
  });

  it("returns error string 'invalidFormat' when given a string containing only alphabets", () => {
    mockValidateCpuSize("asd");
    expect(mockValidateCpuSize).toHaveBeenCalledTimes(1);
    expect(mockValidateCpuSize).toHaveReturnedWith(ValidateCpuSizeNonNomadErrorType.invalidFormat);
  });
});
