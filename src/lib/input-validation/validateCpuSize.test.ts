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
    expect(mockValidateCpuSize).toHaveReturnedWith(ValidateCpuSizeErrorType.exceedLengthLimit);
  });

  it("returns error string 'empty' when given empty string", () => {
    mockValidateCpuSize("");
    expect(mockValidateCpuSize).toHaveBeenCalledTimes(1);
    expect(mockValidateCpuSize).toHaveReturnedWith(ValidateCpuSizeErrorType.empty);
  });
  // tslint:disable-next-line
  it("returns error string 'invalidFormat' when given a string started in numbers and ended in characters other than `m`", () => {
    mockValidateCpuSize("10000z");
    expect(mockValidateCpuSize).toHaveBeenCalledTimes(1);
    expect(mockValidateCpuSize).toHaveReturnedWith(ValidateCpuSizeErrorType.invalidFormat);
  });

  it("returns error string 'invalidFormat' when given a string containing only numbers", () => {
    mockValidateCpuSize("10000");
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
