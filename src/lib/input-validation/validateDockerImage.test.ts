/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { validateDockerImage, ValidateDockerImageErrorType } from "./validateDockerImage";

const mockValidateDockerImage = jest.fn(validateDockerImage);
afterEach(mockValidateDockerImage.mockClear);
afterAll(mockValidateDockerImage.mockRestore);

describe("validateDockerImage returns correct output", () => {
  it("returns empty error string when given empty string, but it is not a required field", () => {
    mockValidateDockerImage("", { isRequired: false });
    expect(mockValidateDockerImage).toHaveBeenCalledTimes(1);
    expect(mockValidateDockerImage).toHaveReturnedWith(null);
  });

  it("returns empty error string when given all lowercase only", () => {
    mockValidateDockerImage("accelbyte");
    expect(mockValidateDockerImage).toHaveBeenCalledTimes(1);
    expect(mockValidateDockerImage).toHaveReturnedWith(null);
  });

  it("returns empty error string when given all numeric only", () => {
    mockValidateDockerImage("123");
    expect(mockValidateDockerImage).toHaveBeenCalledTimes(1);
    expect(mockValidateDockerImage).toHaveReturnedWith(null);
  });

  it("returns empty error string when given lowercase and numeric combination", () => {
    mockValidateDockerImage("accelbyte123");
    expect(mockValidateDockerImage).toHaveBeenCalledTimes(1);
    expect(mockValidateDockerImage).toHaveReturnedWith(null);
  });

  it("returns empty error string when given all lowercase and `-` separated", () => {
    mockValidateDockerImage("justice-iam-service");
    expect(mockValidateDockerImage).toHaveBeenCalledTimes(1);
    expect(mockValidateDockerImage).toHaveReturnedWith(null);
  });

  it("returns empty error string when given all lowercase, separated with `/` and `-`", () => {
    mockValidateDockerImage("accelbyte/justice-iam-service");
    expect(mockValidateDockerImage).toHaveBeenCalledTimes(1);
    expect(mockValidateDockerImage).toHaveReturnedWith(null);
  });

  it("returns empty error string when given all lowercase, separated with `_` and `-`", () => {
    mockValidateDockerImage("accelbyte_justice-iam-service");
    expect(mockValidateDockerImage).toHaveBeenCalledTimes(1);
    expect(mockValidateDockerImage).toHaveReturnedWith(null);
  });

  it("returns empty error string when given all lowercase, with tag containing numbers and `.` separated", () => {
    mockValidateDockerImage("accelbyte:1.0.0");
    expect(mockValidateDockerImage).toHaveBeenCalledTimes(1);
    expect(mockValidateDockerImage).toHaveReturnedWith(null);
  });
  // tslint:disable-next-line
  it("returns empty error string when given all lowercase, with tag containing numbers and lowercase and is separated by `.` and `-`", () => {
    mockValidateDockerImage("accelbyte:1.0.0beta1-alpine3.10");
    expect(mockValidateDockerImage).toHaveBeenCalledTimes(1);
    expect(mockValidateDockerImage).toHaveReturnedWith(null);
  });

  it("returns empty error string when given all lowercase, with tag containing numbers only", () => {
    mockValidateDockerImage("accelbyte:20190101");
    expect(mockValidateDockerImage).toHaveBeenCalledTimes(1);
    expect(mockValidateDockerImage).toHaveReturnedWith(null);
  });

  it("returns empty error string when given all lowercase, with tag containing lowercase only", () => {
    mockValidateDockerImage("accelbyte:latest");
    expect(mockValidateDockerImage).toHaveBeenCalledTimes(1);
    expect(mockValidateDockerImage).toHaveReturnedWith(null);
  });

  it("returns error string 'empty' when given empty string", () => {
    mockValidateDockerImage("");
    expect(mockValidateDockerImage).toHaveBeenCalledTimes(1);
    expect(mockValidateDockerImage).toHaveReturnedWith(ValidateDockerImageErrorType.empty);
  });
  // tslint:disable-next-line
  it("returns error string 'exceedLengthLimit' when given valid dockerImage format with length more than the default max length (256)", () => {
    mockValidateDockerImage(
      // tslint:disable-next-line
      "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvw"
    );
    expect(mockValidateDockerImage).toHaveBeenCalledTimes(1);
    expect(mockValidateDockerImage).toHaveReturnedWith(ValidateDockerImageErrorType.exceedLengthLimit);
  });

  it("returns error string 'invalidFormat' when given image name with wrong separator", () => {
    mockValidateDockerImage("accel$byte");
    expect(mockValidateDockerImage).toHaveBeenCalledTimes(1);
    expect(mockValidateDockerImage).toHaveReturnedWith(ValidateDockerImageErrorType.invalidFormat);
  });

  it("returns error string 'invalidFormat' when given image name with double `-` separator", () => {
    mockValidateDockerImage("accel--byte");
    expect(mockValidateDockerImage).toHaveBeenCalledTimes(1);
    expect(mockValidateDockerImage).toHaveReturnedWith(ValidateDockerImageErrorType.invalidFormat);
  });

  it("returns error string 'invalidFormat' when given image name with uppercase after `-` separator", () => {
    mockValidateDockerImage("accel-BYTE");
    expect(mockValidateDockerImage).toHaveBeenCalledTimes(1);
    expect(mockValidateDockerImage).toHaveReturnedWith(ValidateDockerImageErrorType.invalidFormat);
  });

  it("returns error string 'invalidFormat' when given image name that ended in tag starter `:`", () => {
    mockValidateDockerImage("accelbyte:");
    expect(mockValidateDockerImage).toHaveBeenCalledTimes(1);
    expect(mockValidateDockerImage).toHaveReturnedWith(ValidateDockerImageErrorType.invalidFormat);
  });

  it("returns error string 'invalidFormat' when given image name that ended in double tag starter `:`", () => {
    mockValidateDockerImage("accelbyte::");
    expect(mockValidateDockerImage).toHaveBeenCalledTimes(1);
    expect(mockValidateDockerImage).toHaveReturnedWith(ValidateDockerImageErrorType.invalidFormat);
  });

  it("returns error string 'invalidFormat' when given valid image name, with tag in uppercase", () => {
    mockValidateDockerImage("accelbyte:AB");
    expect(mockValidateDockerImage).toHaveBeenCalledTimes(1);
    expect(mockValidateDockerImage).toHaveReturnedWith(ValidateDockerImageErrorType.invalidFormat);
  });
  // tslint:disable-next-line
  it("returns error string 'invalidFormat' when given valid image name, with tag containing numeric but wrong separator`$`", () => {
    mockValidateDockerImage("accelbyte:1$0");
    expect(mockValidateDockerImage).toHaveBeenCalledTimes(1);
    expect(mockValidateDockerImage).toHaveReturnedWith(ValidateDockerImageErrorType.invalidFormat);
  });
  // tslint:disable-next-line
  it("returns error string 'invalidFormat' when given valid image name, with tag containing numeric but double separator `-`", () => {
    mockValidateDockerImage("accelbyte:1--0");
    expect(mockValidateDockerImage).toHaveBeenCalledTimes(1);
    expect(mockValidateDockerImage).toHaveReturnedWith(ValidateDockerImageErrorType.invalidFormat);
  });
  // tslint:disable-next-line
  it("returns error string 'invalidFormat' when given valid image name, with tag containing numeric but uppercase after separator `-`", () => {
    mockValidateDockerImage("accelbyte:1-BYTE");
    expect(mockValidateDockerImage).toHaveBeenCalledTimes(1);
    expect(mockValidateDockerImage).toHaveReturnedWith(ValidateDockerImageErrorType.invalidFormat);
  });

  it("returns empty error string when given aws image registry", () => {
    mockValidateDockerImage("175114933870.dkr.ecr.us-west-2.amazonaws.com/sdk-test-intg:latest");
    expect(mockValidateDockerImage).toHaveBeenCalledTimes(1);
    expect(mockValidateDockerImage).toHaveReturnedWith(null);
  });
});
