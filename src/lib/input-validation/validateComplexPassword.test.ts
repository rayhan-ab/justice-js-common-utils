/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { validateComplexPassword, ValidateComplexPasswordErrorType } from "./validateComplexPassword";

const mockValidateComplexPassword = jest.fn(validateComplexPassword);
afterEach(mockValidateComplexPassword.mockClear);
afterAll(mockValidateComplexPassword.mockRestore);

describe("validateComplexPassword returns correct output", () => {
  it("returns empty error string when given empty string, but it is not a required field", () => {
    mockValidateComplexPassword("", { isRequired: false });
    expect(mockValidateComplexPassword).toHaveBeenCalledTimes(1);
    expect(mockValidateComplexPassword).toHaveReturnedWith(null);
  });
  // tslint:disable-next-line
  it("returns empty error string when given at least 3 out of 4 rule (uppercase, lowercase, numbers, special characters) with 8 character (minimum)", () => {
    mockValidateComplexPassword("asdASD12");
    expect(mockValidateComplexPassword).toHaveBeenCalledTimes(1);
    expect(mockValidateComplexPassword).toHaveReturnedWith(null);
  });
  // tslint:disable-next-line
  it("returns empty error string when given at least 3 out of 4 rule (uppercase, lowercase, numbers, special characters) with 32 character (maximum)", () => {
    mockValidateComplexPassword("asdASD1234asdASD1234asdASD1234as");
    expect(mockValidateComplexPassword).toHaveBeenCalledTimes(1);
    expect(mockValidateComplexPassword).toHaveReturnedWith(null);
  });

  it("returns error string 'empty' when given empty string", () => {
    mockValidateComplexPassword("");
    expect(mockValidateComplexPassword).toHaveBeenCalledTimes(1);
    expect(mockValidateComplexPassword).toHaveReturnedWith(ValidateComplexPasswordErrorType.empty);
  });
  // tslint:disable-next-line
  it("returns error string 'invalidFormat' when given at least 3 out of 4 rule (uppercase, lowercase, numbers, special characters) but less than 8 character", () => {
    mockValidateComplexPassword("asdASD1");
    expect(mockValidateComplexPassword).toHaveBeenCalledTimes(1);
    expect(mockValidateComplexPassword).toHaveReturnedWith(ValidateComplexPasswordErrorType.invalidFormat);
  });
  // tslint:disable-next-line
  it("returns error string 'invalidFormat' when given at least 3 out of 4 rule (uppercase, lowercase, numbers, special characters) but more than 32 character", () => {
    mockValidateComplexPassword("asdASD1234asdASD1234asdASD1234567");
    expect(mockValidateComplexPassword).toHaveBeenCalledTimes(1);
    expect(mockValidateComplexPassword).toHaveReturnedWith(ValidateComplexPasswordErrorType.invalidFormat);
  });
  // tslint:disable-next-line
  it("returns error string 'invalidFormat' when given less than 3 out of 4 rule (uppercase, lowercase, numbers, special characters)", () => {
    mockValidateComplexPassword("asdasdASDASD");
    expect(mockValidateComplexPassword).toHaveBeenCalledTimes(1);
    expect(mockValidateComplexPassword).toHaveReturnedWith(ValidateComplexPasswordErrorType.invalidFormat);
  });
  // tslint:disable-next-line
  it("returns error string 'invalidFormat' when given at least 3 out of 4 rule (uppercase, lowercase, numbers, special characters), but there are more than 2 equal characters in a row", () => {
    mockValidateComplexPassword("aaasdASD123");
    expect(mockValidateComplexPassword).toHaveBeenCalledTimes(1);
    expect(mockValidateComplexPassword).toHaveReturnedWith(ValidateComplexPasswordErrorType.invalidFormat);
  });
});
