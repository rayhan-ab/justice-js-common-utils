/*
 * Copyright (c) 2021. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { validateJSON, ValidateJSONErrorType } from "./validateJSON";

const mockValidateJSON = jest.fn(validateJSON);
afterEach(mockValidateJSON.mockClear);
afterAll(mockValidateJSON.mockRestore);

describe("validateJSON returns correct output", () => {
  it("returns null when given empty string, but it is not a required field", () => {
    mockValidateJSON("", { isRequired: false });
    expect(mockValidateJSON).toHaveBeenCalledTimes(1);
    expect(mockValidateJSON).toHaveReturnedWith(null);
  });

  it("returns error string 'empty' when given empty string", () => {
    mockValidateJSON("");
    expect(mockValidateJSON).toHaveBeenCalledTimes(1);
    expect(mockValidateJSON).toHaveReturnedWith(ValidateJSONErrorType.empty);
  });

  it("return error invalid format when given string with invalid JSON format", () => {
    mockValidateJSON("adsfasdfasdf");
    expect(mockValidateJSON).toHaveBeenCalledTimes(1);
    expect(mockValidateJSON).toHaveReturnedWith(ValidateJSONErrorType.invalidFormat);
  });

  it("return null when given string with valid JSON format", () => {
    mockValidateJSON('{"hello":"world"}');
    expect(mockValidateJSON).toHaveBeenCalledTimes(1);
    expect(mockValidateJSON).toHaveReturnedWith(null);
  });

  it("return null when given only bracket string", () => {
    mockValidateJSON("{}");
    expect(mockValidateJSON).toHaveBeenCalledTimes(1);
    expect(mockValidateJSON).toHaveReturnedWith(null);
  });

  it("return error invalid format when given number string input", () => {
    mockValidateJSON("123123");
    expect(mockValidateJSON).toHaveBeenCalledTimes(1);
    expect(mockValidateJSON).toHaveReturnedWith(ValidateJSONErrorType.invalidFormat);
  });
});
