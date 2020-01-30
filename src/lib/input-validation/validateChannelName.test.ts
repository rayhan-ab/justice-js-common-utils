/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { validateChannelName, ValidateChannelNameErrorType } from "./validateChannelName";

const mockValidateChannelName = jest.fn(validateChannelName);
afterEach(mockValidateChannelName.mockClear);
afterAll(mockValidateChannelName.mockRestore);

describe("validateChannelName returns correct output", () => {
  it("returns empty error string when given empty string, but it is not a required field", () => {
    mockValidateChannelName("", { isRequired: false });
    expect(mockValidateChannelName).toHaveBeenCalledTimes(1);
    expect(mockValidateChannelName).toHaveReturnedWith(null);
  });

  it("returns empty error string when given channel name alphabet only without channel name separator", () => {
    mockValidateChannelName("abc");
    expect(mockValidateChannelName).toHaveBeenCalledTimes(1);
    expect(mockValidateChannelName).toHaveReturnedWith(null);
  });

  it("returns empty error string when given channel name number only without channel name separator", () => {
    mockValidateChannelName("123");
    expect(mockValidateChannelName).toHaveBeenCalledTimes(1);
    expect(mockValidateChannelName).toHaveReturnedWith(null);
  });

  it("returns empty error string when given channel name alphabet only with channel name separator", () => {
    mockValidateChannelName("abc-abc");
    expect(mockValidateChannelName).toHaveBeenCalledTimes(1);
    expect(mockValidateChannelName).toHaveReturnedWith(null);
  });

  it("returns empty error string when given channel name number only with channel name separator", () => {
    mockValidateChannelName("123-123");
    expect(mockValidateChannelName).toHaveBeenCalledTimes(1);
    expect(mockValidateChannelName).toHaveReturnedWith(null);
  });

  it("returns empty error string when given channel name number and alphabet with channel name separator", () => {
    mockValidateChannelName("123-abc");
    expect(mockValidateChannelName).toHaveBeenCalledTimes(1);
    expect(mockValidateChannelName).toHaveReturnedWith(null);
  });

  it("returns empty error string when given channel name with 2 channel name separator", () => {
    mockValidateChannelName("abc-abc-def");
    expect(mockValidateChannelName).toHaveBeenCalledTimes(1);
    expect(mockValidateChannelName).toHaveReturnedWith(null);
  });

  it("returns error string `invalidFormat` when given uppercase alphabets without channel name separators", () => {
    mockValidateChannelName("ABC");
    expect(mockValidateChannelName).toHaveBeenCalledTimes(1);
    expect(mockValidateChannelName).toHaveReturnedWith(ValidateChannelNameErrorType.invalidFormat);
  });
  // tslint:disable-next-line
  it("returns error string `invalidFormat` when given lowercase & uppercase alphabets with channel name separator", () => {
    mockValidateChannelName("abc-ABC");
    expect(mockValidateChannelName).toHaveBeenCalledTimes(1);
    expect(mockValidateChannelName).toHaveReturnedWith(ValidateChannelNameErrorType.invalidFormat);
  });

  it("returns error string `empty` when given empty string", () => {
    mockValidateChannelName("");
    expect(mockValidateChannelName).toHaveBeenCalledTimes(1);
    expect(mockValidateChannelName).toHaveReturnedWith(ValidateChannelNameErrorType.empty);
  });

  it("returns error string `exceedLengthLimit` when given string with length more than default max length (64)", () => {
    mockValidateChannelName("abc-abc-abc-abc-abc-abc-abc-abc-abc-abc-abc-abc-abc-abc-abc-abc-abc");
    expect(mockValidateChannelName).toHaveBeenCalledTimes(1);
    expect(mockValidateChannelName).toHaveReturnedWith(ValidateChannelNameErrorType.exceedLengthLimit);
  });

  it("returns error string `invalidFormat` when given symbol only", () => {
    mockValidateChannelName("@#");
    expect(mockValidateChannelName).toHaveBeenCalledTimes(1);
    expect(mockValidateChannelName).toHaveReturnedWith(ValidateChannelNameErrorType.invalidFormat);
  });

  it("returns error string `invalidFormat` when given alphabets that ends in channel separator", () => {
    mockValidateChannelName("abc-");
    expect(mockValidateChannelName).toHaveBeenCalledTimes(1);
    expect(mockValidateChannelName).toHaveReturnedWith(ValidateChannelNameErrorType.invalidFormat);
  });
  // tslint:disable-next-line
  it("returns error string `invalidFormat` when given alphabets that is separated with double channel separator", () => {
    mockValidateChannelName("abc--abc");
    expect(mockValidateChannelName).toHaveBeenCalledTimes(1);
    expect(mockValidateChannelName).toHaveReturnedWith(ValidateChannelNameErrorType.invalidFormat);
  });
  it("returns error string `invalidFormat` when given alphabet that is separated with invalid separator `$`", () => {
    mockValidateChannelName("abc$abc");
    expect(mockValidateChannelName).toHaveBeenCalledTimes(1);
    expect(mockValidateChannelName).toHaveReturnedWith(ValidateChannelNameErrorType.invalidFormat);
  });
});
