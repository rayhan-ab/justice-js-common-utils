/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { validateUuidV4WithoutHyphen, ValidateUuidV4WithoutHyphenErrorType } from "./validateUuidV4WithoutHyphen";

const mockValidateUuidV4WithoutHyphen = jest.fn(validateUuidV4WithoutHyphen);
afterEach(mockValidateUuidV4WithoutHyphen.mockClear);
afterAll(mockValidateUuidV4WithoutHyphen.mockRestore);

describe("validateUuidV4WithoutHyphen returns correct output", () => {
  it("returns empty error string when given empty string, but it is not a required field", () => {
    mockValidateUuidV4WithoutHyphen("", { isRequired: false });
    expect(mockValidateUuidV4WithoutHyphen).toHaveBeenCalledTimes(1);
    expect(mockValidateUuidV4WithoutHyphen).toHaveReturnedWith(null);
  });

  it("returns empty error string when given a uuid v4 format without Hyphen", () => {
    mockValidateUuidV4WithoutHyphen("ee796cd4ee9449748268b77c4343e147");
    expect(mockValidateUuidV4WithoutHyphen).toHaveBeenCalledTimes(1);
    expect(mockValidateUuidV4WithoutHyphen).toHaveReturnedWith(null);
  });

  it("returns error string invalidFormat when given a uuid v4 format with Hyphen", () => {
    mockValidateUuidV4WithoutHyphen("ee796cd4-ee94-4974-8268-b77c4343e147");
    expect(mockValidateUuidV4WithoutHyphen).toHaveBeenCalledTimes(1);
    expect(mockValidateUuidV4WithoutHyphen).toHaveReturnedWith(ValidateUuidV4WithoutHyphenErrorType.invalidFormat);
  });

  it("returns error string invalidFormat when given any string less than 32 character", () => {
    mockValidateUuidV4WithoutHyphen("ee796cd4ee9449748268b77c4343e14");
    expect(mockValidateUuidV4WithoutHyphen).toHaveBeenCalledTimes(1);
    expect(mockValidateUuidV4WithoutHyphen).toHaveReturnedWith(ValidateUuidV4WithoutHyphenErrorType.invalidFormat);
  });

  it("returns error string invalidFormat when given any string more than 32 character", () => {
    mockValidateUuidV4WithoutHyphen("ee796cd4ee9449748268b77c4343e1478");
    expect(mockValidateUuidV4WithoutHyphen).toHaveBeenCalledTimes(1);
    expect(mockValidateUuidV4WithoutHyphen).toHaveReturnedWith(ValidateUuidV4WithoutHyphenErrorType.invalidFormat);
  });

  it("returns error string invalidFormat when given random string", () => {
    mockValidateUuidV4WithoutHyphen("123 abcd");
    expect(mockValidateUuidV4WithoutHyphen).toHaveBeenCalledTimes(1);
    expect(mockValidateUuidV4WithoutHyphen).toHaveReturnedWith(ValidateUuidV4WithoutHyphenErrorType.invalidFormat);
  });

  it("returns error string 'empty' when given empty string", () => {
    mockValidateUuidV4WithoutHyphen("");
    expect(mockValidateUuidV4WithoutHyphen).toHaveBeenCalledTimes(1);
    expect(mockValidateUuidV4WithoutHyphen).toHaveReturnedWith(ValidateUuidV4WithoutHyphenErrorType.empty);
  });
});
