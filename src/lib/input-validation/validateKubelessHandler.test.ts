/*
 * Copyright (c) 2020. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { validateKubelessHandler, ValidateKubelessHandlerErrorType } from "./validateKubelessHandler";

const mockValidateKubelessHandler = jest.fn(validateKubelessHandler);
afterEach(mockValidateKubelessHandler.mockClear);
afterAll(mockValidateKubelessHandler.mockRestore);

describe("validateKubelessHandler returns correct output", () => {
  it("returns empty error string when given empty string, but it is not a required field", () => {
    mockValidateKubelessHandler("", { isRequired: false });
    expect(mockValidateKubelessHandler).toHaveBeenCalledTimes(1);
    expect(mockValidateKubelessHandler).toHaveReturnedWith(null);
  });
  it("returns empty error string when given alpha with length of 1", () => {
    mockValidateKubelessHandler("a");
    expect(mockValidateKubelessHandler).toHaveBeenCalledTimes(1);
    expect(mockValidateKubelessHandler).toHaveReturnedWith(null);
  });
  it("returns error string containing `exceedLengthLimit` when given alpha with length of 257", () => {
    mockValidateKubelessHandler(
      "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyza" +
        "bcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghij" +
        "klmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcde" +
        "fghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvw"
    );
    expect(mockValidateKubelessHandler).toHaveBeenCalledTimes(1);
    expect(mockValidateKubelessHandler).toHaveReturnedWith(ValidateKubelessHandlerErrorType.exceedLengthLimit);
  });
  it("returns error string `invalid format` when given alphanumeric with symbol", () => {
    mockValidateKubelessHandler("alpha123#!@#");
    expect(mockValidateKubelessHandler).toHaveBeenCalledTimes(1);
    expect(mockValidateKubelessHandler).toHaveReturnedWith(ValidateKubelessHandlerErrorType.invalidFormat);
  });
  it("returns error string `invalid format` when given alphanumeric with symbol", () => {
    mockValidateKubelessHandler("_alpha123#!@#");
    expect(mockValidateKubelessHandler).toHaveBeenCalledTimes(1);
    expect(mockValidateKubelessHandler).toHaveReturnedWith(ValidateKubelessHandlerErrorType.invalidFormat);
  });
  // tslint:disable-next-line:max-line-length
  it("returns empty error string when it contains valid regex alphanumeric with underscore in the middle of the string", () => {
    mockValidateKubelessHandler("alp_ha");
    expect(mockValidateKubelessHandler).toHaveBeenCalledTimes(1);
    expect(mockValidateKubelessHandler).toHaveReturnedWith(null);
  });
  it(
    "returns empty error string when it contains valid regex alphanumeric with underscore" +
      " in the beginning of the string",
    () => {
      mockValidateKubelessHandler("_alpha");
      expect(mockValidateKubelessHandler).toHaveBeenCalledTimes(1);
      expect(mockValidateKubelessHandler).toHaveReturnedWith(null);
    }
  );
  // tslint:disable-next-line:max-line-length
  it("returns empty error string when it contains valid regex alphanumeric with underscore in the end of the string", () => {
    mockValidateKubelessHandler("alpha_");
    expect(mockValidateKubelessHandler).toHaveBeenCalledTimes(1);
    expect(mockValidateKubelessHandler).toHaveReturnedWith(null);
  });
});
