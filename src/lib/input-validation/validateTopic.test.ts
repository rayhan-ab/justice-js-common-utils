/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { validateTopic, ValidateTopicErrorType } from "./validateTopic";

const mockValidateTopic = jest.fn(validateTopic);
afterEach(mockValidateTopic.mockClear);
afterAll(mockValidateTopic.mockRestore);

describe("validateTopic returns correct output", () => {
  it("returns empty error string when given empty string, but it is not a required field", () => {
    mockValidateTopic("", { isRequired: false });
    expect(mockValidateTopic).toHaveBeenCalledTimes(1);
    expect(mockValidateTopic).toHaveReturnedWith(null);
  });

  it("returns empty error string when given uppercase alphabets without separators", () => {
    mockValidateTopic("ABC");
    expect(mockValidateTopic).toHaveBeenCalledTimes(1);
    expect(mockValidateTopic).toHaveReturnedWith(null);
  });

  it("returns empty error string when given uppercase alphabets with single `_` separators ", () => {
    mockValidateTopic("ABC_ABC");
    expect(mockValidateTopic).toHaveBeenCalledTimes(1);
    expect(mockValidateTopic).toHaveReturnedWith(null);
  });

  it("returns empty error string when given uppercase alphabets with 2 `_`separators", () => {
    mockValidateTopic("ABC_ABC_ABC");
    expect(mockValidateTopic).toHaveBeenCalledTimes(1);
    expect(mockValidateTopic).toHaveReturnedWith(null);
  });

  it("returns error string `empty` when given empty string", () => {
    mockValidateTopic("");
    expect(mockValidateTopic).toHaveBeenCalledTimes(1);
    expect(mockValidateTopic).toHaveReturnedWith(ValidateTopicErrorType.empty);
  });
  // tslint:disable-next-line
  it("returns error string `exceedLengthLimit` when given string with length more than default max length (256)", () => {
    mockValidateTopic(
      // tslint:disable-next-line
      "ABC_ABC_ABC_ABCABC_ABC_ABC_ABC_ABC_ABC_ABC_ABCABC_ABC_ABC_ABC_ABC_ABC_ABC_ABCABC_ABC_ABC_ABC_ABC_ABC_ABC_ABC_ABC_ABC_ABC_ABCABC_ABC_ABC_ABCABC_ABC_ABC_ABC_ABC_ABC_ABC_ABCABC_ABC_ABC_ABC_ABC_ABC_ABC_ABCABC_ABC_ABC_ABC_ABC_ABC_ABC_ABCABC_ABC_ABC_ABC_ABC_ABC_A"
    );
    expect(mockValidateTopic).toHaveBeenCalledTimes(1);
    expect(mockValidateTopic).toHaveReturnedWith(ValidateTopicErrorType.exceedLengthLimit);
  });

  it("returns error string `invalidFormat` when given symbol only", () => {
    mockValidateTopic("@#");
    expect(mockValidateTopic).toHaveBeenCalledTimes(1);
    expect(mockValidateTopic).toHaveReturnedWith(ValidateTopicErrorType.invalidFormat);
  });

  it("returns error string `invalidFormat` when given numbers only", () => {
    mockValidateTopic("123");
    expect(mockValidateTopic).toHaveBeenCalledTimes(1);
    expect(mockValidateTopic).toHaveReturnedWith(ValidateTopicErrorType.invalidFormat);
  });

  it("returns error string `invalidFormat` when given lowercase only", () => {
    mockValidateTopic("abc");
    expect(mockValidateTopic).toHaveBeenCalledTimes(1);
    expect(mockValidateTopic).toHaveReturnedWith(ValidateTopicErrorType.invalidFormat);
  });

  it("returns error string `invalidFormat` when given uppercase and lowercase separated by `_`", () => {
    mockValidateTopic("ABC_abc");
    expect(mockValidateTopic).toHaveBeenCalledTimes(1);
    expect(mockValidateTopic).toHaveReturnedWith(ValidateTopicErrorType.invalidFormat);
  });

  it("returns error string `invalidFormat` when given uppercase alphabets that ends in separator `_`", () => {
    mockValidateTopic("ABC_");
    expect(mockValidateTopic).toHaveBeenCalledTimes(1);
    expect(mockValidateTopic).toHaveReturnedWith(ValidateTopicErrorType.invalidFormat);
  });
  // tslint:disable-next-line
  it("returns error string `invalidFormat` when given uppercase alphabets that is separated with double separator `_`", () => {
    mockValidateTopic("ABC__ABC");
    expect(mockValidateTopic).toHaveBeenCalledTimes(1);
    expect(mockValidateTopic).toHaveReturnedWith(ValidateTopicErrorType.invalidFormat);
  });
  // tslint:disable-next-line
  it("returns error string `invalidFormat` when given uppercase alphabets that is separated with invalid separator `$`", () => {
    mockValidateTopic("ABC$ABC");
    expect(mockValidateTopic).toHaveBeenCalledTimes(1);
    expect(mockValidateTopic).toHaveReturnedWith(ValidateTopicErrorType.invalidFormat);
  });
});
