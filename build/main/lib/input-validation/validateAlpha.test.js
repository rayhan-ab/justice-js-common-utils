"use strict";
/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var errorType_1 = require("./constant/errorType");
var validateAlpha_1 = require("./validateAlpha");
var mockValidateAlpha = jest.fn(validateAlpha_1.validateAlpha);
afterEach(mockValidateAlpha.mockClear);
afterAll(mockValidateAlpha.mockRestore);
describe("validateAlpha returns correct output", function () {
    it("returns empty error string when given empty string, but it is not a required field", function () {
        mockValidateAlpha("", { isRequired: false });
        expect(mockValidateAlpha).toHaveBeenCalledTimes(1);
        expect(mockValidateAlpha).toHaveReturnedWith(null);
    });
    it("returns empty error string when given alpha with length of 1", function () {
        mockValidateAlpha("a");
        expect(mockValidateAlpha).toHaveBeenCalledTimes(1);
        expect(mockValidateAlpha).toHaveReturnedWith(null);
    });
    it("returns empty error string when given alpha with length of 256 (the default maxLength)", function () {
        mockValidateAlpha("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzab" +
            "cdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmno" +
            "pqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdef" +
            "ghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuv");
        expect(mockValidateAlpha).toHaveBeenCalledTimes(1);
        expect(mockValidateAlpha).toHaveReturnedWith(null);
    });
    it("returns empty error string when given alpha with length of 20 (custom maxLength)", function () {
        mockValidateAlpha("abcdefghijklmnopqrst", { maxLength: 20 });
        expect(mockValidateAlpha).toHaveBeenCalledTimes(1);
        expect(mockValidateAlpha).toHaveReturnedWith(null);
    });
    it("returns empty error string when given alpha with all uppercase (with the option isUppercaseOnly=true)", function () {
        mockValidateAlpha("ABCDEFGHIJKLMNOPQRST", { isUppercaseOnly: true });
        expect(mockValidateAlpha).toHaveBeenCalledTimes(1);
        expect(mockValidateAlpha).toHaveReturnedWith(null);
    });
    it("returns empty error string when given alpha with all lowercase (with the option isLowercaseOnly=true)", function () {
        mockValidateAlpha("asdfghjkl", { isLowercaseOnly: true });
        expect(mockValidateAlpha).toHaveBeenCalledTimes(1);
        expect(mockValidateAlpha).toHaveReturnedWith(null);
    });
    it("returns error string containing exceedLengthLimit when given alpha with length of 257", function () {
        mockValidateAlpha("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyza" +
            "bcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghij" +
            "klmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcde" +
            "fghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvw");
        expect(mockValidateAlpha).toHaveBeenCalledTimes(1);
        expect(mockValidateAlpha).toHaveReturnedWith(validateAlpha_1.ValidateAlphaErrorType.exceedLengthLimit);
    });
    // tslint:disable-next-line
    it("returns error string `exceedLengthLimit when given alpha with length of 21 (with 20 set as custom maxLength)", function () {
        mockValidateAlpha("abcdefghijklmnopqrstu", { maxLength: 20 });
        expect(mockValidateAlpha).toHaveBeenCalledTimes(1);
        expect(mockValidateAlpha).toHaveReturnedWith(validateAlpha_1.ValidateAlphaErrorType.exceedLengthLimit);
    });
    it("returns error string containing invalidFormat when given alpha with some symbols", function () {
        mockValidateAlpha("alpha123!!");
        expect(mockValidateAlpha).toHaveBeenCalledTimes(1);
        expect(mockValidateAlpha).toHaveReturnedWith(validateAlpha_1.ValidateAlphaErrorType.invalidFormat);
    });
    it("returns error string when given alphanumeric", function () {
        mockValidateAlpha("alpha123");
        expect(mockValidateAlpha).toHaveBeenCalledTimes(1);
        expect(mockValidateAlpha).toHaveReturnedWith(validateAlpha_1.ValidateAlphaErrorType.invalidFormat);
    });
    // tslint:disable-next-line max-line-length
    it("returns error string when given alpha with some lower case characters (with the option isUppercaseOnly=true)", function () {
        mockValidateAlpha("abcdEFGHIJKLMNOPQRST", { isUppercaseOnly: true });
        expect(mockValidateAlpha).toHaveBeenCalledTimes(1);
        expect(mockValidateAlpha).toHaveReturnedWith(validateAlpha_1.ValidateAlphaErrorType.invalidFormat);
    });
    // tslint:disable-next-line max-line-length
    it("returns error string when given alpha with some upper case characters (with the option isLowercaseOnly=true)", function () {
        mockValidateAlpha("abcdEFGHIJKLMNOPQRST", { isLowercaseOnly: true });
        expect(mockValidateAlpha).toHaveBeenCalledTimes(1);
        expect(mockValidateAlpha).toHaveReturnedWith(validateAlpha_1.ValidateAlphaErrorType.invalidFormat);
    });
    it("returns error string containing 'empty' when given empty string", function () {
        mockValidateAlpha("");
        expect(mockValidateAlpha).toHaveBeenCalledTimes(1);
        expect(mockValidateAlpha).toHaveReturnedWith(validateAlpha_1.ValidateAlphaErrorType.empty);
    });
    it("returns error string invalid option when given both isLowercase and isUppercase option set to true)", function () {
        var invalidOptionMock = function () {
            return mockValidateAlpha("abcdEFGHIJKLMNOPQRST", { isLowercaseOnly: true, isUppercaseOnly: true });
        };
        expect(invalidOptionMock).toThrowError(errorType_1.ThrownErrorType.invalidOption);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVBbHBoYS50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9pbnB1dC12YWxpZGF0aW9uL3ZhbGlkYXRlQWxwaGEudGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7R0FJRzs7QUFFSCxrREFBdUQ7QUFDdkQsaURBQXdFO0FBRXhFLElBQU0saUJBQWlCLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyw2QkFBYSxDQUFDLENBQUM7QUFDakQsU0FBUyxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ3ZDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUV4QyxRQUFRLENBQUMsc0NBQXNDLEVBQUU7SUFDL0MsRUFBRSxDQUFDLG9GQUFvRixFQUFFO1FBQ3ZGLGlCQUFpQixDQUFDLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQzdDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25ELE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JELENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLDhEQUE4RCxFQUFFO1FBQ2pFLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25ELE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JELENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLHdGQUF3RixFQUFFO1FBQzNGLGlCQUFpQixDQUNmLHdEQUF3RDtZQUN0RCxtRUFBbUU7WUFDbkUsdUVBQXVFO1lBQ3ZFLHNFQUFzRSxDQUN6RSxD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