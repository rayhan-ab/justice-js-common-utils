"use strict";
/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var errorType_1 = require("./constant/errorType");
var validateLength_1 = require("./validateLength");
var mockValidateLength = jest.fn(validateLength_1.validateLength);
afterEach(mockValidateLength.mockClear);
afterAll(mockValidateLength.mockRestore);
describe("validateLength returns correct output", function () {
    it("returns empty error string when given empty string, but it is not a required field", function () {
        mockValidateLength("", { isRequired: false });
        expect(mockValidateLength).toHaveBeenCalledTimes(1);
        expect(mockValidateLength).toHaveReturnedWith(null);
    });
    it("returns empty error string when given a string with length of the default min length (1)", function () {
        mockValidateLength("1");
        expect(mockValidateLength).toHaveBeenCalledTimes(1);
        expect(mockValidateLength).toHaveReturnedWith(null);
    });
    it("returns empty error string when given a string with length of the default max length (256)", function () {
        mockValidateLength(
        // tslint:disable-next-line
        "1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456");
        expect(mockValidateLength).toHaveBeenCalledTimes(1);
        expect(mockValidateLength).toHaveReturnedWith(null);
    });
    it("returns empty error string when given a string with length of custom min length (3)", function () {
        mockValidateLength("123", { min: 3 });
        expect(mockValidateLength).toHaveBeenCalledTimes(1);
        expect(mockValidateLength).toHaveReturnedWith(null);
    });
    it("returns empty error string when given a string with length of custom max length (10)", function () {
        mockValidateLength("1234567890", { max: 10 });
        expect(mockValidateLength).toHaveBeenCalledTimes(1);
        expect(mockValidateLength).toHaveReturnedWith(null);
    });
    it("returns error string 'lessThanLengthLimit' when given a string less than min option", function () {
        mockValidateLength("12", { min: 3 });
        expect(mockValidateLength).toHaveBeenCalledTimes(1);
        expect(mockValidateLength).toHaveReturnedWith(validateLength_1.ValidateLengthErrorType.lessThanLengthLimit);
    });
    it("returns error string 'exceedLengthLimit' when given a string more than max option", function () {
        mockValidateLength("12345678901", { max: 10 });
        expect(mockValidateLength).toHaveBeenCalledTimes(1);
        expect(mockValidateLength).toHaveReturnedWith(validateLength_1.ValidateLengthErrorType.exceedLengthLimit);
    });
    it("returns error string 'empty' when given empty string", function () {
        mockValidateLength("");
        expect(mockValidateLength).toHaveBeenCalledTimes(1);
        expect(mockValidateLength).toHaveReturnedWith(validateLength_1.ValidateLengthErrorType.empty);
    });
    it("Throws error 'invalid option' when given minus min option", function () {
        var invalidOptionMock = function () { return mockValidateLength("1", { min: -5 }); };
        expect(invalidOptionMock).toThrowError(errorType_1.ThrownErrorType.invalidOption);
    });
    it("Throws error 'invalid option' when given minus max option", function () {
        var invalidOptionMock = function () { return mockValidateLength("1", { max: -10 }); };
        expect(invalidOptionMock).toThrowError(errorType_1.ThrownErrorType.invalidOption);
    });
    it("Throws error 'invalid option' when given max option smaller than min option", function () {
        var invalidOptionMock = function () { return mockValidateLength("1", { min: 10, max: 3 }); };
        expect(invalidOptionMock).toThrowError(errorType_1.ThrownErrorType.invalidOption);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVMZW5ndGgudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvaW5wdXQtdmFsaWRhdGlvbi92YWxpZGF0ZUxlbmd0aC50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7OztHQUlHOztBQUVILGtEQUF1RDtBQUN2RCxtREFBMkU7QUFFM0UsSUFBTSxrQkFBa0IsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLCtCQUFjLENBQUMsQ0FBQztBQUNuRCxTQUFTLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDeEMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBRXpDLFFBQVEsQ0FBQyx1Q0FBdUMsRUFBRTtJQUNoRCxFQUFFLENBQUMsb0ZBQW9GLEVBQUU7UUFDdkYsa0JBQWtCLENBQUMsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDOUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEQsTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEQsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsMEZBQTBGLEVBQUU7UUFDN0Ysa0JBQWtCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDeEIsTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEQsTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEQsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsNEZBQTRGLEVBQUU7UUFDL0Ysa0JBQWtCO1FBQ2hCLDJCQUEyQjtRQUMzQixrUUFBa1EsQ0FDblEsQ0FBQztRQUNGLE1BQU0sQ0FBQyxrQkFB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