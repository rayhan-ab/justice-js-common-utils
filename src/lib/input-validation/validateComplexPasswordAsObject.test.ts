/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import {
  validateComplexPasswordAsObject,
  ValidateComplexPasswordAsObjectErrorType,
} from "./validateComplexPasswordAsObject";

const mockValidateComplexPasswordAsObject = jest.fn(validateComplexPasswordAsObject);
afterEach(mockValidateComplexPasswordAsObject.mockClear);
afterAll(mockValidateComplexPasswordAsObject.mockRestore);

describe("validateComplexPasswordAsObject returns correct output", () => {
  // tslint:disable-next-line
  it("all of fields returns false when given at least 5 out of 5 rule (uppercase and lowercase, min characters, max characters, two charactes in a row, combain letters and numbers) with 8 character (minimum)", () => {
    mockValidateComplexPasswordAsObject("asdASD12");
    expect(mockValidateComplexPasswordAsObject).toHaveBeenCalledTimes(1);
    expect(mockValidateComplexPasswordAsObject).toHaveReturnedWith({
      isAllValid: true,
      letterAndNumber: null,
      maxLength: null,
      minLength: null,
      twoCharactersInArow: null,
      uppercaseAndLowerCase: null,
    });
  });
  // tslint:disable-next-line
  it("validateComplexPasswordAsObject returns empty error string when given at least 5 out of 5 rule (uppercase and lowercase, min characters, max characters, two charactes in a row, combain letters and numbers) with 8 character (minimum) with 32 character (maximum)", () => {
    mockValidateComplexPasswordAsObject("asdASD1234asdASD1234asdASD1234as");
    expect(mockValidateComplexPasswordAsObject).toHaveBeenCalledTimes(1);
    expect(mockValidateComplexPasswordAsObject).toHaveReturnedWith({
      isAllValid: true,
      letterAndNumber: null,
      maxLength: null,
      minLength: null,
      twoCharactersInArow: null,
      uppercaseAndLowerCase: null,
    });
  });
  // tslint:disable-next-line
  it("validateComplexPasswordAsObject returns error object letterAndNumber and upperCaseAndLowerCase when given empty string", () => {
    mockValidateComplexPasswordAsObject("");
    expect(mockValidateComplexPasswordAsObject).toHaveBeenCalledTimes(1);
    expect(mockValidateComplexPasswordAsObject).toHaveReturnedWith({
      isAllValid: false,
      letterAndNumber: ValidateComplexPasswordAsObjectErrorType.notContainsLetterAndNumber,
      maxLength: null,
      minLength: null,
      twoCharactersInArow: null,
      uppercaseAndLowerCase: ValidateComplexPasswordAsObjectErrorType.notContainsUpperCaseAndLowerCase,
    });
  });
  // tslint:disable-next-line
  it("validateComplexPasswordAsObject returns error object minLength true when given at least 5 out of 5 rule (uppercase and lowercase, min characters, max characters, two charactes in a row, combain letters and numbers) but less than 8 character", () => {
    mockValidateComplexPasswordAsObject("asdASD1");
    expect(mockValidateComplexPasswordAsObject).toHaveBeenCalledTimes(1);
    expect(mockValidateComplexPasswordAsObject).toHaveReturnedWith({
      isAllValid: false,
      letterAndNumber: null,
      maxLength: null,
      minLength: ValidateComplexPasswordAsObjectErrorType.lessThanLengthLimit,
      twoCharactersInArow: null,
      uppercaseAndLowerCase: null,
    });
  });
  // tslint:disable-next-line
  it("validateComplexPasswordAsObject returns error object maxLength true when given at least 5 out of 5 rule (uppercase and lowercase, min characters, max characters, two charactes in a row, combain letters and numbers) but more than 32 character", () => {
    mockValidateComplexPasswordAsObject("asdASD1234asdASD1234asdASD1234567");
    expect(mockValidateComplexPasswordAsObject).toHaveBeenCalledTimes(1);
    expect(mockValidateComplexPasswordAsObject).toHaveReturnedWith({
      isAllValid: false,
      letterAndNumber: null,
      maxLength: ValidateComplexPasswordAsObjectErrorType.exceedLengthLimit,
      minLength: null,
      twoCharactersInArow: null,
      uppercaseAndLowerCase: null,
    });
  });
  // tslint:disable-next-line
  it("validateComplexPasswordAsObject returns error object letterAndNumber true when given at least 5 out of 5 rule (uppercase and lowercase, min characters, max characters, two charactes in a row, combain letters and numbers)", () => {
    mockValidateComplexPasswordAsObject("asdasdASDASD");
    expect(mockValidateComplexPasswordAsObject).toHaveBeenCalledTimes(1);
    expect(mockValidateComplexPasswordAsObject).toHaveReturnedWith({
      isAllValid: false,
      letterAndNumber: ValidateComplexPasswordAsObjectErrorType.notContainsLetterAndNumber,
      maxLength: null,
      minLength: null,
      twoCharactersInArow: null,
      uppercaseAndLowerCase: null,
    });
  });
  // tslint:disable-next-line
  it("validateComplexPasswordAsObject returns error object letterAndNumber true when given at least 5 out of 5 rule (uppercase and lowercase, min characters, max characters, two charactes in a row, combain letters and numbers)", () => {
    mockValidateComplexPasswordAsObject("asdasd123");
    expect(mockValidateComplexPasswordAsObject).toHaveBeenCalledTimes(1);
    expect(mockValidateComplexPasswordAsObject).toHaveReturnedWith({
      isAllValid: false,
      letterAndNumber: null,
      maxLength: null,
      minLength: null,
      twoCharactersInArow: null,
      uppercaseAndLowerCase: ValidateComplexPasswordAsObjectErrorType.notContainsUpperCaseAndLowerCase,
    });
  });
  // tslint:disable-next-line
  it("validateComplexPasswordAsObject returns error string 'invalidFormat' when given at least 5 out of 5 rule (uppercase and lowercase, min characters, max characters, two charactes in a row, combain letters and numbers) but there are more than 2 equal characters in a row", () => {
    mockValidateComplexPasswordAsObject("aaasdASD123");
    expect(mockValidateComplexPasswordAsObject).toHaveBeenCalledTimes(1);
    expect(mockValidateComplexPasswordAsObject).toHaveReturnedWith({
      isAllValid: false,
      letterAndNumber: null,
      maxLength: null,
      minLength: null,
      twoCharactersInArow: ValidateComplexPasswordAsObjectErrorType.containsTwoCharactersInArrow,
      uppercaseAndLowerCase: null,
    });
  });
});
