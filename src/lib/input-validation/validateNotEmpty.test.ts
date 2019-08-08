/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { validateNotEmpty, ValidateNotEmptyErrorType } from "./validateNotEmpty";

const mockValidateNotEmpty = jest.fn(validateNotEmpty);
afterEach(mockValidateNotEmpty.mockClear);
afterAll(mockValidateNotEmpty.mockRestore);

describe("validateNotEmpty returns correct output", () => {
  it("returns empty error string when given any string that is not empty", () => {
    mockValidateNotEmpty("test123!@#$^&*");
    expect(mockValidateNotEmpty).toHaveBeenCalledTimes(1);
    expect(mockValidateNotEmpty).toHaveReturnedWith(null);
  });

  it("returns error string 'empty' when given an empty string", () => {
    mockValidateNotEmpty("");
    expect(mockValidateNotEmpty).toHaveBeenCalledTimes(1);
    expect(mockValidateNotEmpty).toHaveReturnedWith(ValidateNotEmptyErrorType.empty);
  });
});
