/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { validatePermissionResource, ValidatePermissionResourceErrorType } from "./validatePermissionResource";

const mockValidatePermissionResource = jest.fn(validatePermissionResource);
afterEach(mockValidatePermissionResource.mockClear);
afterAll(mockValidatePermissionResource.mockRestore);

describe("validatePermissionResource returns correct output", () => {
  it("returns empty error string when given uppercase alphabet only", () => {
    mockValidatePermissionResource("PERMISSION");
    expect(mockValidatePermissionResource).toHaveBeenCalledTimes(1);
    expect(mockValidatePermissionResource).toHaveReturnedWith(null);
  });

  it("returns empty error string when given uppercase alphabet, separated by a single `:`", () => {
    mockValidatePermissionResource("PERMISSION:RESOURCE");
    expect(mockValidatePermissionResource).toHaveBeenCalledTimes(1);
    expect(mockValidatePermissionResource).toHaveReturnedWith(null);
  });
  // tslint:disable-next-line
  it("returns empty error string when given uppercase alphabet followed by a variable, separated by a single `:`", () => {
    mockValidatePermissionResource("PERMISSION:{variable}");
    expect(mockValidatePermissionResource).toHaveBeenCalledTimes(1);
    expect(mockValidatePermissionResource).toHaveReturnedWith(null);
  });
  // tslint:disable-next-line
  it("returns empty error string when given uppercase alphabet, followed by a variable and another alphabet, each separated by a single `:`", () => {
    mockValidatePermissionResource("PERMISSION:{variable}:RESOURCE");
    expect(mockValidatePermissionResource).toHaveBeenCalledTimes(1);
    expect(mockValidatePermissionResource).toHaveReturnedWith(null);
  });
  // tslint:disable-next-line
  it("returns empty error string when given uppercase alphabet, followed by a variable, two times, each separated by a single `:`", () => {
    mockValidatePermissionResource("PERMISSION:{variable}:RESOURCE:{variable}");
    expect(mockValidatePermissionResource).toHaveBeenCalledTimes(1);
    expect(mockValidatePermissionResource).toHaveReturnedWith(null);
  });

  it("returns error string 'empty' when given empty string", () => {
    mockValidatePermissionResource("");
    expect(mockValidatePermissionResource).toHaveBeenCalledTimes(1);
    expect(mockValidatePermissionResource).toHaveReturnedWith(ValidatePermissionResourceErrorType.empty);
  });

  it("returns error string 'invalidFormat' when given lowercase alphabets", () => {
    mockValidatePermissionResource("permission");
    expect(mockValidatePermissionResource).toHaveBeenCalledTimes(1);
    expect(mockValidatePermissionResource).toHaveReturnedWith(ValidatePermissionResourceErrorType.invalidFormat);
  });

  it("returns error string 'invalidFormat' when given numeric characters", () => {
    mockValidatePermissionResource("1234");
    expect(mockValidatePermissionResource).toHaveBeenCalledTimes(1);
    expect(mockValidatePermissionResource).toHaveReturnedWith(ValidatePermissionResourceErrorType.invalidFormat);
  });

  it("returns error string 'invalidFormat' when given uppercase alphabets, but ended in a `:`", () => {
    mockValidatePermissionResource("PERMISSION:");
    expect(mockValidatePermissionResource).toHaveBeenCalledTimes(1);
    expect(mockValidatePermissionResource).toHaveReturnedWith(ValidatePermissionResourceErrorType.invalidFormat);
  });

  it("returns error string 'invalidFormat' when given uppercase alphabets, but separated with a double `:`", () => {
    mockValidatePermissionResource("PERMISSION::RESOURCE");
    expect(mockValidatePermissionResource).toHaveBeenCalledTimes(1);
    expect(mockValidatePermissionResource).toHaveReturnedWith(ValidatePermissionResourceErrorType.invalidFormat);
  });
  // tslint:disable-next-line
  it("returns error string 'invalidFormat' when given uppercase alphabets, but separated with symbol other than `:`", () => {
    mockValidatePermissionResource("PERMISSION-RESOURCE");
    expect(mockValidatePermissionResource).toHaveBeenCalledTimes(1);
    expect(mockValidatePermissionResource).toHaveReturnedWith(ValidatePermissionResourceErrorType.invalidFormat);
  });
  // tslint:disable-next-line
  it("returns error string 'invalidFormat' when given uppercase alphabets, followed by a variable, but in numeric characters", () => {
    mockValidatePermissionResource("PERMISSION:{1234}");
    expect(mockValidatePermissionResource).toHaveBeenCalledTimes(1);
    expect(mockValidatePermissionResource).toHaveReturnedWith(ValidatePermissionResourceErrorType.invalidFormat);
  });
  // tslint:disable-next-line
  it("returns error string 'invalidFormat' when given uppercase alphabets, followed by a variable, but the variable wrapped in symbol other than `{}`", () => {
    mockValidatePermissionResource("PERMISSION:[variable]");
    expect(mockValidatePermissionResource).toHaveBeenCalledTimes(1);
    expect(mockValidatePermissionResource).toHaveReturnedWith(ValidatePermissionResourceErrorType.invalidFormat);
  });
  // tslint:disable-next-line
  it("returns error string 'exceedLengthLimit' when given valid permission resource format, but length is more than 256", () => {
    mockValidatePermissionResource(
      // tslint:disable-next-line
      "PERMISSION:RESOURCE:PERMISSION:RESOURCE:PERMISSION:RESOURCE:PERMISSION:RESOURCE:PERMISSION:RESOURCE:PERMISSION:RESOURCE:PERMISSION:RESOURCE:PERMISSION:RESOURCE:PERMISSION:RESOURCE:PERMISSION:RESOURCE:PERMISSION:RESOURCE:PERMISSION:RESOURCE:PERMISSION:RESOUR"
    );
    expect(mockValidatePermissionResource).toHaveBeenCalledTimes(1);
    expect(mockValidatePermissionResource).toHaveReturnedWith(ValidatePermissionResourceErrorType.exceedLengthLimit);
  });
});
