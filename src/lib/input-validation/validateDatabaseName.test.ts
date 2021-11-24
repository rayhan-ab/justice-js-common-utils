/*
 * Copyright (c) 2021. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import {validateDatabaseName, ValidateDatabaseNameErrorType} from "./validateDatabaseName";

const mockValidateDatabaseName = jest.fn(validateDatabaseName);
afterEach(mockValidateDatabaseName.mockClear);
afterAll(mockValidateDatabaseName.mockRestore);

describe("validateDatabaseName return correct output", () => {
  it("return empty error string when given empty string, but it is not a required field", () => {
    mockValidateDatabaseName("", { isRequired: false });
    expect(mockValidateDatabaseName).toHaveBeenCalledTimes(1);
    expect(mockValidateDatabaseName).toHaveReturnedWith(null);
  });

  it("return error string `empty` when given empty string", () => {
    mockValidateDatabaseName("");
    expect(mockValidateDatabaseName).toHaveBeenCalledTimes(1);
    expect(mockValidateDatabaseName).toHaveReturnedWith(ValidateDatabaseNameErrorType.empty);
  })
  it("returns empty error string when given alpha with length of 1", () => {
    mockValidateDatabaseName("a");
    expect(mockValidateDatabaseName).toHaveBeenCalledTimes(1);
    expect(mockValidateDatabaseName).toHaveReturnedWith(null);
  });
  it("returns error string containing `exceedLengthLimit` when given alpha with length of 257", () => {
    mockValidateDatabaseName(
      "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyza" +
        "bcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghij" +
        "klmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcde" +
        "fghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvw"
    );
    expect(mockValidateDatabaseName).toHaveBeenCalledTimes(1);
    expect(mockValidateDatabaseName).toHaveReturnedWith(ValidateDatabaseNameErrorType.exceedLengthLimit);
  });
  it("returns error string `invalid format` when given alphanumeric with symbol", () => {
    mockValidateDatabaseName("alpha123#!@#");
    expect(mockValidateDatabaseName).toHaveBeenCalledTimes(1);
    expect(mockValidateDatabaseName).toHaveReturnedWith(ValidateDatabaseNameErrorType.invalidFormat);
  });
  // tslint:disable-next-line:max-line-length
  it("returns empty error string when it contains valid regex alphanumeric with underscore in the middle of the string", () => {
    mockValidateDatabaseName("alp_ha");
    expect(mockValidateDatabaseName).toHaveBeenCalledTimes(1);
    expect(mockValidateDatabaseName).toHaveReturnedWith(null);
  });
  it(
    "returns empty error string when it contains valid regex alphanumeric with underscore" +
      " in the beginning of the string",
    () => {
      mockValidateDatabaseName("_alpha");
      expect(mockValidateDatabaseName).toHaveBeenCalledTimes(1);
      expect(mockValidateDatabaseName).toHaveReturnedWith(null);
    }
  );
  // tslint:disable-next-line:max-line-length
  it("returns empty error string when it contains valid regex alphanumeric with underscore in the end of the string", () => {
    mockValidateDatabaseName("alpha_");
    expect(mockValidateDatabaseName).toHaveBeenCalledTimes(1);
    expect(mockValidateDatabaseName).toHaveReturnedWith(null);
  });
});
