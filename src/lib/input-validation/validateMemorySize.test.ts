/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { validateMemorySize, ValidateMemorySizeErrorType } from "./validateMemorySize";

const mockValidateMemorySize = jest.fn(validateMemorySize);
afterEach(mockValidateMemorySize.mockClear);
afterAll(mockValidateMemorySize.mockRestore);

describe("validateMemorySize returns correct output", () => {
  it("returns empty error string when given empty string, but it is not a required field", () => {
    mockValidateMemorySize("", { isRequired: false });
    expect(mockValidateMemorySize).toHaveBeenCalledTimes(1);
    expect(mockValidateMemorySize).toHaveReturnedWith(null);
  });

  it("returns empty error string when given a string started in numbers", () => {
    mockValidateMemorySize("100");
    expect(mockValidateMemorySize).toHaveBeenCalledTimes(1);
    expect(mockValidateMemorySize).toHaveReturnedWith(null);
  });
  // tslint:disable-next-line
  it("returns empty error string when given a string started in numbers, with a total max length of 9", () => {
    mockValidateMemorySize("1000000");
    expect(mockValidateMemorySize).toHaveBeenCalledTimes(1);
    expect(mockValidateMemorySize).toHaveReturnedWith(null);
  });
  // tslint:disable-next-line
  it("returns error string 'exceedLengthLimit' when given a string started in numbers, with a total max length of more than 9", () => {
    mockValidateMemorySize("1000000000");
    expect(mockValidateMemorySize).toHaveBeenCalledTimes(1);
    expect(mockValidateMemorySize).toHaveReturnedWith(ValidateMemorySizeErrorType.exceedLengthLimit);
  });

  it("returns error string 'empty' when given empty string", () => {
    mockValidateMemorySize("");
    expect(mockValidateMemorySize).toHaveBeenCalledTimes(1);
    expect(mockValidateMemorySize).toHaveReturnedWith(ValidateMemorySizeErrorType.empty);
  });

  it("returns error string 'invalidFormat' when given a string containing numbers and string", () => {
    mockValidateMemorySize("10000m");
    expect(mockValidateMemorySize).toHaveBeenCalledTimes(1);
    expect(mockValidateMemorySize).toHaveReturnedWith(ValidateMemorySizeErrorType.invalidFormat);
  });

  it("returns error string 'invalidFormat' when given a string containing only symbols", () => {
    mockValidateMemorySize("!!!");
    expect(mockValidateMemorySize).toHaveBeenCalledTimes(1);
    expect(mockValidateMemorySize).toHaveReturnedWith(ValidateMemorySizeErrorType.invalidFormat);
  });

  it("returns error string 'invalidFormat' when given a string containing alphabets", () => {
    mockValidateMemorySize("asd");
    expect(mockValidateMemorySize).toHaveBeenCalledTimes(1);
    expect(mockValidateMemorySize).toHaveReturnedWith(ValidateMemorySizeErrorType.invalidFormat);
  });
});
