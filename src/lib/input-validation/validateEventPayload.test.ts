/*
 * Copyright (c) 2022. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { validateEventPayload, ValidateEventPayloadErrorType } from "./validateEventPayload";

const mockValidateEventPayload = jest.fn(validateEventPayload);
afterEach(mockValidateEventPayload.mockClear);
afterAll(mockValidateEventPayload.mockRestore);

describe("validateEventPayload returns correct output", () => {
  it("returns no error when given valid payload", () => {
    mockValidateEventPayload("key:value");
    expect(mockValidateEventPayload).toHaveBeenCalledTimes(1);
    expect(mockValidateEventPayload).toHaveReturnedWith(null);
  });
  it("returns no error when given valid payload with subkey", () => {
    mockValidateEventPayload("key.subkey:value");
    expect(mockValidateEventPayload).toHaveBeenCalledTimes(1);
    expect(mockValidateEventPayload).toHaveReturnedWith(null);
  });
  it("returns error string `invalid format` when given payload with dot at the beginning", () => {
    mockValidateEventPayload(".key:value");
    expect(mockValidateEventPayload).toHaveBeenCalledTimes(1);
    expect(mockValidateEventPayload).toHaveReturnedWith(ValidateEventPayloadErrorType.invalidFormat);
  });
  it("returns error string `invalid format` when given payload with at the beginning", () => {
    mockValidateEventPayload(":key:value");
    expect(mockValidateEventPayload).toHaveBeenCalledTimes(1);
    expect(mockValidateEventPayload).toHaveReturnedWith(ValidateEventPayloadErrorType.invalidFormat);
  });
  it("returns error string `empty` when given empty string", () => {
    mockValidateEventPayload("");
    expect(mockValidateEventPayload).toHaveBeenCalledTimes(1);
    expect(mockValidateEventPayload).toHaveReturnedWith(ValidateEventPayloadErrorType.empty);
  });
  it("returns no error when given empty string, but it is not a required field", () => {
    mockValidateEventPayload("", { isRequired: false });
    expect(mockValidateEventPayload).toHaveBeenCalledTimes(1);
    expect(mockValidateEventPayload).toHaveReturnedWith(null);
  });
  it("returns error string `exceedLengthLimit` when given string with length more than max length", () => {
    mockValidateEventPayload("abc:abc", { maxLength: 5 });
    expect(mockValidateEventPayload).toHaveBeenCalledTimes(1);
    expect(mockValidateEventPayload).toHaveReturnedWith(ValidateEventPayloadErrorType.exceedLengthLimit);
  });
});
