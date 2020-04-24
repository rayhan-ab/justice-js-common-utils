/*
 * Copyright (c) 2020. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { validateKubelessName, ValidateKubelessNameErrorType } from "./validateKubelessName";

const mockValidateKubelessName = jest.fn(validateKubelessName);
afterEach(mockValidateKubelessName.mockClear);
afterAll(mockValidateKubelessName.mockRestore);

describe("validateKubelessName returns correct output", () => {
  it("returns empty error string when given empty string, but it is not a required field", () => {
    mockValidateKubelessName("", { isRequired: false });
    expect(mockValidateKubelessName).toHaveBeenCalledTimes(1);
    expect(mockValidateKubelessName).toHaveReturnedWith(null);
  });
  it("returns empty error string when given alpha with length of 1", () => {
    mockValidateKubelessName("k");
    expect(mockValidateKubelessName).toHaveBeenCalledTimes(1);
    expect(mockValidateKubelessName).toHaveReturnedWith(null);
  });
  it("returns empty error string when given alpha with length of 2", () => {
    mockValidateKubelessName("ku");
    expect(mockValidateKubelessName).toHaveBeenCalledTimes(1);
    expect(mockValidateKubelessName).toHaveReturnedWith(null);
  });
  it("returns error string containing `exceedLengthLimit` when given alpha with length of 65", () => {
    mockValidateKubelessName("asdasdasdasdasasdadasdasdasdasdasdasdasdasdasdasdasasdadasdaadasd");
    expect(mockValidateKubelessName).toHaveBeenCalledTimes(1);
    expect(mockValidateKubelessName).toHaveReturnedWith(ValidateKubelessNameErrorType.exceedLengthLimit);
  });
  it("returns error string `invalid format` when given symbol at the end of word", () => {
    mockValidateKubelessName("kubeless!@#");
    expect(mockValidateKubelessName).toHaveBeenCalledTimes(1);
    expect(mockValidateKubelessName).toHaveReturnedWith(ValidateKubelessNameErrorType.invalidFormat);
  });
  it("returns error string `invalid format` when given symbol at the beginning of word", () => {
    mockValidateKubelessName("!@#kubeless");
    expect(mockValidateKubelessName).toHaveBeenCalledTimes(1);
    expect(mockValidateKubelessName).toHaveReturnedWith(ValidateKubelessNameErrorType.invalidFormat);
  });
  it("returns error string `invalid format` when given symbol at the middle of word", () => {
    mockValidateKubelessName("kube!@#less");
    expect(mockValidateKubelessName).toHaveBeenCalledTimes(1);
    expect(mockValidateKubelessName).toHaveReturnedWith(ValidateKubelessNameErrorType.invalidFormat);
  });
  it("returns error string `invalid format` when given hyphens at the beginning of word", () => {
    mockValidateKubelessName("-kubeless");
    expect(mockValidateKubelessName).toHaveBeenCalledTimes(1);
    expect(mockValidateKubelessName).toHaveReturnedWith(ValidateKubelessNameErrorType.invalidFormat);
  });
  it("returns error string `invalid format` when given hyphens at the end of word", () => {
    mockValidateKubelessName("kubeless-");
    expect(mockValidateKubelessName).toHaveBeenCalledTimes(1);
    expect(mockValidateKubelessName).toHaveReturnedWith(ValidateKubelessNameErrorType.invalidFormat);
  });
  // tslint:disable-next-line:max-line-length
  it("returns empty error string when it when given hyphen at the middle of word", () => {
    mockValidateKubelessName("kube-less");
    expect(mockValidateKubelessName).toHaveBeenCalledTimes(1);
    expect(mockValidateKubelessName).toHaveReturnedWith(null);
  });
  it("returns empty error string when it when given more than 1 hyphens at the middle of word", () => {
    mockValidateKubelessName("kube--less");
    expect(mockValidateKubelessName).toHaveBeenCalledTimes(1);
    expect(mockValidateKubelessName).toHaveReturnedWith(null);
  });
  it("returns empty error string when the words contain valid pattern multiple times", () => {
    mockValidateKubelessName("kube--kubeless-kubeless");
    expect(mockValidateKubelessName).toHaveBeenCalledTimes(1);
    expect(mockValidateKubelessName).toHaveReturnedWith(null);
  });
  it("returns error string `invalid format` when given numbers at the beginning of the word", () => {
    mockValidateKubelessName("123kubeless");
    expect(mockValidateKubelessName).toHaveBeenCalledTimes(1);
    expect(mockValidateKubelessName).toHaveReturnedWith(ValidateKubelessNameErrorType.invalidFormat);
  });
  it("returns empty error string when the words contain number in the middle of the word", () => {
    mockValidateKubelessName("kube123less");
    expect(mockValidateKubelessName).toHaveBeenCalledTimes(1);
    expect(mockValidateKubelessName).toHaveReturnedWith(null);
  });
  it("returns empty error string when the words contain number in the end of the word", () => {
    mockValidateKubelessName("kubeless123");
    expect(mockValidateKubelessName).toHaveBeenCalledTimes(1);
    expect(mockValidateKubelessName).toHaveReturnedWith(null);
  });
  it("returns empty error string when the words contain valid pattern multiple times using hyphens and numbers", () => {
    mockValidateKubelessName("kube--kubel12312ess-kubeless");
    expect(mockValidateKubelessName).toHaveBeenCalledTimes(1);
    expect(mockValidateKubelessName).toHaveReturnedWith(null);
  });
});
