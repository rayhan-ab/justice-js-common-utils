/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { validateOrderNumber, ValidateOrderNumberErrorType } from "./validateOrderNumber";

const mockValidateOrderNumber = jest.fn(validateOrderNumber);
afterEach(mockValidateOrderNumber.mockClear);
afterAll(mockValidateOrderNumber.mockRestore);

describe("validateOrderNumber returns correct output", () => {
  it("returns empty error string when given an order number with correct format", () => {
    mockValidateOrderNumber("O1234567890123456");
    expect(mockValidateOrderNumber).toHaveBeenCalledTimes(1);
    expect(mockValidateOrderNumber).toHaveReturnedWith(null);
  });
  // tslint:disable-next-line
  it("returns error string invalid format when given an order number with a seemingly correct format, but is 1 character longer", () => {
    mockValidateOrderNumber("O12345678901234567");
    expect(mockValidateOrderNumber).toHaveBeenCalledTimes(1);
    expect(mockValidateOrderNumber).toHaveReturnedWith(ValidateOrderNumberErrorType.invalidFormat);
  });
  // tslint:disable-next-line
  it("returns error string invalid format when given an order number with a seemingly correct format, but is 1 character shorter", () => {
    mockValidateOrderNumber("O123456789012345");
    expect(mockValidateOrderNumber).toHaveBeenCalledTimes(1);
    expect(mockValidateOrderNumber).toHaveReturnedWith(ValidateOrderNumberErrorType.invalidFormat);
  });

  it("returns error string invalidFormat when given random string", () => {
    mockValidateOrderNumber("123abc789def345");
    expect(mockValidateOrderNumber).toHaveBeenCalledTimes(1);
    expect(mockValidateOrderNumber).toHaveReturnedWith(ValidateOrderNumberErrorType.invalidFormat);
  });

  it("returns error string 'empty' when given empty string", () => {
    mockValidateOrderNumber("");
    expect(mockValidateOrderNumber).toHaveBeenCalledTimes(1);
    expect(mockValidateOrderNumber).toHaveReturnedWith(ValidateOrderNumberErrorType.empty);
  });
});
