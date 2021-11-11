/*
 * Copyright (c) 2021. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { validateProductKey, ValidateProductKeyErrorType } from "./validateProductKey";
var mockValidateProductKey = jest.fn(validateProductKey);
afterEach(mockValidateProductKey.mockClear);
afterAll(mockValidateProductKey.mockRestore);
describe("validateProductKey returns correct output", function () {
    it("returns empty error string when given empty string, but it is not a required field", function () {
        mockValidateProductKey("", { isRequired: false });
        expect(mockValidateProductKey).toHaveBeenCalledTimes(1);
        expect(mockValidateProductKey).toHaveReturnedWith(null);
    });
    it("returns empty error string when given product key alphabet only", function () {
        mockValidateProductKey("abc");
        expect(mockValidateProductKey).toHaveBeenCalledTimes(1);
        expect(mockValidateProductKey).toHaveReturnedWith(null);
    });
    it("returns empty error string when given product key number only", function () {
        mockValidateProductKey("123");
        expect(mockValidateProductKey).toHaveBeenCalledTimes(1);
        expect(mockValidateProductKey).toHaveReturnedWith(null);
    });
    it("returns empty error string when given product key alphabet only with underscore", function () {
        mockValidateProductKey("abc_abc");
        expect(mockValidateProductKey).toHaveBeenCalledTimes(1);
        expect(mockValidateProductKey).toHaveReturnedWith(null);
    });
    it("returns empty error string when given product key number only with underscore", function () {
        mockValidateProductKey("1231_23");
        expect(mockValidateProductKey).toHaveBeenCalledTimes(1);
        expect(mockValidateProductKey).toHaveReturnedWith(null);
    });
    it("returns empty error string when given product key number and alphabet with underscore", function () {
        mockValidateProductKey("12_3abc");
        expect(mockValidateProductKey).toHaveBeenCalledTimes(1);
        expect(mockValidateProductKey).toHaveReturnedWith(null);
    });
    it("returns empty error string when given product key with 2 underscores", function () {
        mockValidateProductKey("abc_abc_def");
        expect(mockValidateProductKey).toHaveBeenCalledTimes(1);
        expect(mockValidateProductKey).toHaveReturnedWith(null);
    });
    it("returns error string `invalidFormat` when given uppercase alphabets", function () {
        mockValidateProductKey("ABC");
        expect(mockValidateProductKey).toHaveBeenCalledTimes(1);
        expect(mockValidateProductKey).toHaveReturnedWith(ValidateProductKeyErrorType.invalidFormat);
    });
    // tslint:disable-next-line
    it("returns error string `invalidFormat` when given lowercase & uppercase alphabets", function () {
        mockValidateProductKey("abc_ABC");
        expect(mockValidateProductKey).toHaveBeenCalledTimes(1);
        expect(mockValidateProductKey).toHaveReturnedWith(ValidateProductKeyErrorType.invalidFormat);
    });
    it("returns error string `empty` when given empty string", function () {
        mockValidateProductKey("");
        expect(mockValidateProductKey).toHaveBeenCalledTimes(1);
        expect(mockValidateProductKey).toHaveReturnedWith(ValidateProductKeyErrorType.empty);
    });
    it("returns error string `exceedLengthLimit` when given string with length more max length (64)", function () {
        mockValidateProductKey("abc_abc_abc_abc_abc_abc_abc_abc_abc_abc_abc_abc_abc_abc_abc_abc_abc", { max: 64 });
        expect(mockValidateProductKey).toHaveBeenCalledTimes(1);
        expect(mockValidateProductKey).toHaveReturnedWith(ValidateProductKeyErrorType.exceedLengthLimit);
    });
    it("returns error string `invalidFormat` when given symbol only", function () {
        mockValidateProductKey("@#");
        expect(mockValidateProductKey).toHaveBeenCalledTimes(1);
        expect(mockValidateProductKey).toHaveReturnedWith(ValidateProductKeyErrorType.invalidFormat);
    });
    it("returns error string `invalidFormat` when given alphabets that ends with underscore", function () {
        mockValidateProductKey("abc_");
        expect(mockValidateProductKey).toHaveBeenCalledTimes(1);
        expect(mockValidateProductKey).toHaveReturnedWith(ValidateProductKeyErrorType.invalidFormat);
    });
    it("returns error string `invalidFormat` when given alphabets that starts with underscore", function () {
        mockValidateProductKey("_abc");
        expect(mockValidateProductKey).toHaveBeenCalledTimes(1);
        expect(mockValidateProductKey).toHaveReturnedWith(ValidateProductKeyErrorType.invalidFormat);
    });
    // tslint:disable-next-line
    it("returns error string `invalidFormat` when given alphabets that is separated with double underscores", function () {
        mockValidateProductKey("abc__abc");
        expect(mockValidateProductKey).toHaveBeenCalledTimes(1);
        expect(mockValidateProductKey).toHaveReturnedWith(ValidateProductKeyErrorType.invalidFormat);
    });
    it("returns error string `invalidFormat` when given alphabet that is separated with invalid separator ` `", function () {
        mockValidateProductKey("abc abc");
        expect(mockValidateProductKey).toHaveBeenCalledTimes(1);
        expect(mockValidateProductKey).toHaveReturnedWith(ValidateProductKeyErrorType.invalidFormat);
    });
    it("returns error string `exceedLengthLimit` when given an invalid string that exceeds the length limit", function () {
        mockValidateProductKey("accelbyteaccelbyteaccelbyteaccelbyteaccelbyteaccelbyteaccelbytes ", { max: 56 });
        expect(mockValidateProductKey).toHaveBeenCalledTimes(1);
        expect(mockValidateProductKey).toHaveReturnedWith(ValidateProductKeyErrorType.exceedLengthLimit);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVQcm9kdWN0S2V5LnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2lucHV0LXZhbGlkYXRpb24vdmFsaWRhdGVQcm9kdWN0S2V5LnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUVILE9BQU8sRUFBRSxrQkFBa0IsRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXZGLElBQU0sc0JBQXNCLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQzNELFNBQVMsQ0FBQyxzQkFBc0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUM1QyxRQUFRLENBQUMsc0JBQXNCLENBQUMsV0FBVyxDQUFDLENBQUM7QUFFN0MsUUFBUSxDQUFDLDJDQUEyQyxFQUFFO0lBQ3BELEVBQUUsQ0FBQyxvRkFBb0YsRUFBRTtRQUN2RixzQkFBc0IsQ0FBQyxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUNsRCxNQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4RCxNQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxRCxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxpRUFBaUUsRUFBRTtRQUNwRSxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5QixNQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4RCxNQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxRCxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQywrREFBK0QsRUFBRTtRQUNsRSxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5QixNQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4RCxNQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxRCxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxpRkFBaUYsRUFBRTtRQUNwRixzQkFBc0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNsQyxNQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4RCxNQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxRCxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQywrRUFBK0UsRUFBRTtRQUNsRixzQkFBc0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNsQyxNQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4RCxNQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxRCxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyx1RkFBdUYsRUFBRTtRQUMxRixzQkFBc0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNsQyxNQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4RCxNQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxRCxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxzRUFBc0UsRUFBRTtRQUN6RSxzQkFBc0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN0QyxNQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4RCxNQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxr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