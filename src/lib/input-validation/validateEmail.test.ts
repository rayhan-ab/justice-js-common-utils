/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { validateEmail, ValidateEmailErrorType } from "./validateEmail";

const mockValidateEmail = jest.fn(validateEmail);
afterEach(mockValidateEmail.mockClear);
afterAll(mockValidateEmail.mockRestore);

describe("validateEmail returns correct output", () => {
  it("returns empty error string when given empty string, but it is not a required field", () => {
    mockValidateEmail("", { isRequired: false });
    expect(mockValidateEmail).toHaveBeenCalledTimes(1);
    expect(mockValidateEmail).toHaveReturnedWith(null);
  });

  it("returns empty error string when given all lowercase, complete email", () => {
    mockValidateEmail("test@accelbyte.net");
    expect(mockValidateEmail).toHaveBeenCalledTimes(1);
    expect(mockValidateEmail).toHaveReturnedWith(null);
  });

  it("returns empty error string when given dot separated username, all lowercase, complete email", () => {
    mockValidateEmail("test.account@accelbyte.net");
    expect(mockValidateEmail).toHaveBeenCalledTimes(1);
    expect(mockValidateEmail).toHaveReturnedWith(null);
  });

  it("returns empty error string when given combination of all allowed characters for each email section", () => {
    mockValidateEmail("T3st_+&*.4ccount@By-t3.Net");
    expect(mockValidateEmail).toHaveBeenCalledTimes(1);
    expect(mockValidateEmail).toHaveReturnedWith(null);
  });

  it("returns error string 'empty' when given empty string", () => {
    mockValidateEmail("");
    expect(mockValidateEmail).toHaveBeenCalledTimes(1);
    expect(mockValidateEmail).toHaveReturnedWith(ValidateEmailErrorType.empty);
  });
  // tslint:disable-next-line
  it("returns error string 'exceedLengthLimit' when given string with length more than default max email length (254)", () => {
    mockValidateEmail(
      // tslint:disable-next-line
      "testtesttesttestttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest@accelbyte.net"
    );
    expect(mockValidateEmail).toHaveBeenCalledTimes(1);
    expect(mockValidateEmail).toHaveReturnedWith(ValidateEmailErrorType.exceedLengthLimit);
  });

  it("returns error string 'invalidFormat' when given incomplete email", () => {
    mockValidateEmail("test");
    expect(mockValidateEmail).toHaveBeenCalledTimes(1);
    expect(mockValidateEmail).toHaveReturnedWith(ValidateEmailErrorType.invalidFormat);
  });

  it("returns error string 'invalidFormat' when given incomplete email", () => {
    mockValidateEmail("test@accelbyte");
    expect(mockValidateEmail).toHaveBeenCalledTimes(1);
    expect(mockValidateEmail).toHaveReturnedWith(ValidateEmailErrorType.invalidFormat);
  });

  it("returns error string 'invalidFormat' when given incomplete email", () => {
    mockValidateEmail("@accelbyte.net");
    expect(mockValidateEmail).toHaveBeenCalledTimes(1);
    expect(mockValidateEmail).toHaveReturnedWith(ValidateEmailErrorType.invalidFormat);
  });

  it("returns error string 'invalidFormat' when given complete email, but invalid username characters", () => {
    mockValidateEmail("$$$$@accelbyte.net");
    expect(mockValidateEmail).toHaveBeenCalledTimes(1);
    expect(mockValidateEmail).toHaveReturnedWith(ValidateEmailErrorType.invalidFormat);
  });

  it("returns error string 'invalidFormat' when given complete email, but invalid hostname characters", () => {
    mockValidateEmail("$$$$@___.net");
    expect(mockValidateEmail).toHaveBeenCalledTimes(1);
    expect(mockValidateEmail).toHaveReturnedWith(ValidateEmailErrorType.invalidFormat);
  });
  // tslint:disable-next-line
  it("returns error string 'invalidFormat' when given complete email, but invalid top level domain characters, only alphabets allowed", () => {
    mockValidateEmail("$$$$@accelbyte.123");
    expect(mockValidateEmail).toHaveBeenCalledTimes(1);
    expect(mockValidateEmail).toHaveReturnedWith(ValidateEmailErrorType.invalidFormat);
  });
  // tslint:disable-next-line
  it("returns error string 'invalidFormat' when given complete email, but top level domain character count is less than 2", () => {
    mockValidateEmail("test@accelbyte.n");
    expect(mockValidateEmail).toHaveBeenCalledTimes(1);
    expect(mockValidateEmail).toHaveReturnedWith(ValidateEmailErrorType.invalidFormat);
  });
  // tslint:disable-next-line
  it("returns error string 'invalidFormat' when given complete email, but top level domain character count is more than 7", () => {
    mockValidateEmail("test@accelbyte.netnetne");
    expect(mockValidateEmail).toHaveBeenCalledTimes(1);
    expect(mockValidateEmail).toHaveReturnedWith(ValidateEmailErrorType.invalidFormat);
  });
});
