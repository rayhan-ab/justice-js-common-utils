/*
 * Copyright (c) 2020. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { validateLegalDocumentName, ValidateLegalDocumentNameErrorType } from "./validateLegalDocumentName";

const mockValidateLegalName = jest.fn(validateLegalDocumentName);
afterEach(mockValidateLegalName.mockClear);
afterAll(mockValidateLegalName.mockRestore);

describe("validateLegalName return correnct output", () => {
  it("returns null when given alphabet only display name", () => {
    mockValidateLegalName("AccelByte");
    expect(mockValidateLegalName).toHaveBeenCalledTimes(1);
    expect(mockValidateLegalName).toHaveReturnedWith(null);
  });

  it("returns null when given alphabet and whitespace in the middle of the string", () => {
    mockValidateLegalName("Legal Name");
    expect(mockValidateLegalName).toHaveBeenCalledTimes(1);
    expect(mockValidateLegalName).toHaveReturnedWith(null);
  });

  it("return null when given alphabet string with length of 256", () => {
    mockValidateLegalName(
      // tslint:disable-next-line:max-line-length
      "bdPbTyeqJPmlogztBTBpinRGtjSyTNSPRGtLvQPprfDIYHwcssfsTurmlZdNYaJIAACRsgtrlGyzENojZhfHBjjbKFtdeWYFDCAjhncbXMItZFtGNkmNepnnrWxVyHIbLflApLcsxwRzCPUfimDvXxrAGTecrfehaDayKZgBSBRWoWxntcaZVIJaWOgQkiXUMuazeMczMwABjqpidUUuNdVZIbgckMevCMvUTuYTGKDpXHJNJHAGetqntDImKqPG"
    );
    expect(mockValidateLegalName).toHaveBeenCalledTimes(1);
    expect(mockValidateLegalName).toHaveReturnedWith(null);
  });

  it("returns error string 'empty' when given empty string", () => {
    mockValidateLegalName("");
    expect(mockValidateLegalName).toHaveBeenCalledTimes(1);
    expect(mockValidateLegalName).toHaveReturnedWith(ValidateLegalDocumentNameErrorType.empty);
  });

  it("returns error invalid format string when given numeric only", () => {
    mockValidateLegalName("1234");
    expect(mockValidateLegalName).toHaveBeenCalledTimes(1);
    expect(mockValidateLegalName).toHaveReturnedWith(ValidateLegalDocumentNameErrorType.invalidFormat);
  });

  it("return error invalid format string when given alphanumeric", () => {
    mockValidateLegalName("Legalname1234");
    expect(mockValidateLegalName).toHaveBeenCalledTimes(1);
    expect(mockValidateLegalName).toHaveReturnedWith(ValidateLegalDocumentNameErrorType.invalidFormat);
  });

  it("return error invalid format string when given special character which don't allowed _", () => {
    mockValidateLegalName("Legal_Name");
    expect(mockValidateLegalName).toHaveBeenCalledTimes(1);
    expect(mockValidateLegalName).toHaveReturnedWith(ValidateLegalDocumentNameErrorType.invalidFormat);
  });

  it("return error invalid format string when given special character which don't allowed ;", () => {
    mockValidateLegalName("Legal;Name");
    expect(mockValidateLegalName).toHaveBeenCalledTimes(1);
    expect(mockValidateLegalName).toHaveReturnedWith(ValidateLegalDocumentNameErrorType.invalidFormat);
  });

  it("return error invalid format string when given special character which don't allowed :", () => {
    mockValidateLegalName("Legal:Name");
    expect(mockValidateLegalName).toHaveBeenCalledTimes(1);
    expect(mockValidateLegalName).toHaveReturnedWith(ValidateLegalDocumentNameErrorType.invalidFormat);
  });

  it("return error invalid format string when given special character which don't allowed -", () => {
    mockValidateLegalName("Legal-Name");
    expect(mockValidateLegalName).toHaveBeenCalledTimes(1);
    expect(mockValidateLegalName).toHaveReturnedWith(ValidateLegalDocumentNameErrorType.invalidFormat);
  });

  it("return error invalid format string when given only white", () => {
    mockValidateLegalName(" ");
    expect(mockValidateLegalName).toHaveBeenCalledTimes(1);
    expect(mockValidateLegalName).toHaveReturnedWith(ValidateLegalDocumentNameErrorType.invalidFormat);
  });

  it("return error invalid format string when given string with whitespace at the end of string", () => {
    mockValidateLegalName("Legalname ");
    expect(mockValidateLegalName).toHaveBeenCalledTimes(1);
    expect(mockValidateLegalName).toHaveReturnedWith(ValidateLegalDocumentNameErrorType.invalidFormat);
  });

  it("returns exceedLengthLimit error string when given alphabet with length of maxLength parameter", () => {
    mockValidateLegalName("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuv", { maxLength: 16 });
    expect(mockValidateLegalName).toHaveBeenCalledTimes(1);
    expect(mockValidateLegalName).toHaveReturnedWith(ValidateLegalDocumentNameErrorType.exceedLengthLimit);
  });

  it("return exceedLengthLimit error strign when given alphabet with length of 257", () => {
    mockValidateLegalName(
      // tslint:disable-next-line:max-line-length
      "bdPbTyeqJPmlogztBTBpinRGtjSyTNSPRGtLvQPprfDIYHwcssfsTurmlZdNYaJIAACRsgtrlGyzENojZhfHBjjbKFtdeWYFDCAjhncbXMItZFtGNkmNepnnrWxVyHIbLflApLcsxwRzCPUfimDvXxrAGTecrfehaDayKZgBSBRWoWxntcaZVIJaWOgQkiXUMuazeMczMwABjqpidUUuNdVZIbgckMevCMvUTuYTGKDpXHJNJHAGetqntDImKqPGz"
    );
    expect(mockValidateLegalName).toHaveBeenCalledTimes(1);
    expect(mockValidateLegalName).toHaveReturnedWith(ValidateLegalDocumentNameErrorType.exceedLengthLimit);
  });
});
