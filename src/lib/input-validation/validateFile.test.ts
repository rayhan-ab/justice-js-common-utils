/*
 * Copyright (c) 2021. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { validateFile, ValidateFileErrorType } from "./validateFile";

const mockValidateFile = jest.fn(validateFile);
afterEach(mockValidateFile.mockClear);
afterAll(mockValidateFile.mockRestore);

describe("validateFile returns correct output", () => {
  it("returns null when given empty file, but it is not a required field", () => {
    mockValidateFile(null, { isRequired: false });
    expect(mockValidateFile).toHaveBeenCalledTimes(1);
    expect(mockValidateFile).toHaveReturnedWith(null);
  });

  it("returns error string 'empty' when given empty file", () => {
    mockValidateFile(null);
    expect(mockValidateFile).toHaveBeenCalledTimes(1);
    expect(mockValidateFile).toHaveReturnedWith(ValidateFileErrorType.empty);
  });

  it("returns null when file extension is include in acceptedFileExtensions", () => {
    const file = new File([new ArrayBuffer(1)], "file.csv", { type: "text/csv" });

    mockValidateFile(file, { acceptedFileExtensions: [".pdf", ".csv"] });
    expect(mockValidateFile).toHaveBeenCalledTimes(1);
    expect(mockValidateFile).toHaveReturnedWith(null);
  });

  it("returns error string 'invalidExtensions' when file extension is not in acceptedFileExtensions", () => {
    const file = new File([new ArrayBuffer(1)], "file.jpg", { type: "image/jpg" });

    mockValidateFile(file, { acceptedFileExtensions: [".pdf", ".csv"] });
    expect(mockValidateFile).toHaveBeenCalledTimes(1);
    expect(mockValidateFile).toHaveReturnedWith(ValidateFileErrorType.invalidFileExtensions);
  });

  it("returns null when given any file but acceptedFileExtensions is undefined", () => {
    const file = new File([new ArrayBuffer(1)], "file.png", { type: "image/png" });

    mockValidateFile(file);
    expect(mockValidateFile).toHaveBeenCalledTimes(1);
    expect(mockValidateFile).toHaveReturnedWith(null);
  });
});
