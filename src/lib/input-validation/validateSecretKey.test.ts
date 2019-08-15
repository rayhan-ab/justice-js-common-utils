/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { validateSecretKey, ValidateSecretKeyErrorType } from "./validateSecretKey";

const mockValidateSecretKey = jest.fn(validateSecretKey);
afterEach(mockValidateSecretKey.mockClear);
afterAll(mockValidateSecretKey.mockRestore);

describe("validateSecretKey returns correct output", () => {
  it("returns empty error string when given empty string, but it is not a required field", () => {
    mockValidateSecretKey("", { isRequired: false });
    expect(mockValidateSecretKey).toHaveBeenCalledTimes(1);
    expect(mockValidateSecretKey).toHaveReturnedWith(null);
  });

  it("returns empty error string when given a string containing only symbols other than asterisks", () => {
    mockValidateSecretKey("~!@#$%^&()_+}{}|\"':?></");
    expect(mockValidateSecretKey).toHaveBeenCalledTimes(1);
    expect(mockValidateSecretKey).toHaveReturnedWith(null);
  });

  it("returns empty error string when given a string containing only alphabets", () => {
    mockValidateSecretKey("asdfghjkl");
    expect(mockValidateSecretKey).toHaveBeenCalledTimes(1);
    expect(mockValidateSecretKey).toHaveReturnedWith(null);
  });

  it("returns empty error string when given a string contains an asterisk", () => {
    mockValidateSecretKey("abcde*ghijk");
    expect(mockValidateSecretKey).toHaveBeenCalledTimes(1);
    expect(mockValidateSecretKey).toHaveReturnedWith(ValidateSecretKeyErrorType.invalidFormat);
  });

  it("returns error string 'invalidFormat' when given a string contains a white space", () => {
    mockValidateSecretKey("abcde ghijk");
    expect(mockValidateSecretKey).toHaveBeenCalledTimes(1);
    expect(mockValidateSecretKey).toHaveReturnedWith(ValidateSecretKeyErrorType.invalidFormat);
  });

  it("returns error string 'empty' when given empty string", () => {
    mockValidateSecretKey("");
    expect(mockValidateSecretKey).toHaveBeenCalledTimes(1);
    expect(mockValidateSecretKey).toHaveReturnedWith(ValidateSecretKeyErrorType.empty);
  });
});
