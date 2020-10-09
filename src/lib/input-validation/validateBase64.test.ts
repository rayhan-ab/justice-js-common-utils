/*
 * Copyright (c) 2020. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { validateBase64, ValidateBase64ErrorType } from "./validateBase64";

const mockValidateBase64 = jest.fn(validateBase64);
afterEach(mockValidateBase64.mockClear);
afterAll(mockValidateBase64.mockRestore);

describe("validateBase64 returns correct output", () => {
  it("returns empty error string when given empty string, but it is not a required field", () => {
    mockValidateBase64("", { isRequired: false });
    expect(mockValidateBase64).toHaveBeenCalledTimes(1);
    expect(mockValidateBase64).toHaveReturnedWith(null);
  });

  it("returns empty error string when given a base64 format", () => {
    mockValidateBase64("aW1wb3J0IFJlYWN0I/GZy+b20gInJl");
    expect(mockValidateBase64).toHaveBeenCalledTimes(1);
    expect(mockValidateBase64).toHaveReturnedWith(null);
  });

  it("returns empty error string when given 1 equal symbol (=) at then end of string", () => {
    mockValidateBase64("aW1wb3J0IFJlYWN0I/GZy+b20gInJl=");
    expect(mockValidateBase64).toHaveBeenCalledTimes(1);
    expect(mockValidateBase64).toHaveReturnedWith(null);
  });

  it("returns empty error string when given 2 equal symbol (=) at then end of string", () => {
    mockValidateBase64("aW1wb3J0IFJlYWN0I/GZy+b20gInJl==");
    expect(mockValidateBase64).toHaveBeenCalledTimes(1);
    expect(mockValidateBase64).toHaveReturnedWith(null);
  });

  it("returns error string invalidFormat when given more than 2 equal symbol (=) at then end of string", () => {
    mockValidateBase64("aW1wb3J0IFJlYWN0I/GZy+b20gInJl===");
    expect(mockValidateBase64).toHaveBeenCalledTimes(1);
    expect(mockValidateBase64).toHaveReturnedWith(ValidateBase64ErrorType.invalidFormat);
  });

  it("returns error string invalidFormat when given a string contains symbols other than +/", () => {
    mockValidateBase64("~!@#$%^&()_}{}|\"'");
    expect(mockValidateBase64).toHaveBeenCalledTimes(1);
    expect(mockValidateBase64).toHaveReturnedWith(ValidateBase64ErrorType.invalidFormat);
  });

  it("returns error string 'invalidFormat' when given a string contains a white space", () => {
    mockValidateBase64("abcde ghijk");
    expect(mockValidateBase64).toHaveBeenCalledTimes(1);
    expect(mockValidateBase64).toHaveReturnedWith(ValidateBase64ErrorType.invalidFormat);
  });

  it("returns error string 'empty' when given empty string", () => {
    mockValidateBase64("");
    expect(mockValidateBase64).toHaveBeenCalledTimes(1);
    expect(mockValidateBase64).toHaveReturnedWith(ValidateBase64ErrorType.empty);
  });
});
