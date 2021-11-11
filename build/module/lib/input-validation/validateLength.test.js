/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { ThrownErrorType } from "./constant/errorType";
import { validateLength, ValidateLengthErrorType } from "./validateLength";
var mockValidateLength = jest.fn(validateLength);
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
        expect(mockValidateLength).toHaveReturnedWith(ValidateLengthErrorType.lessThanLengthLimit);
    });
    it("returns error string 'exceedLengthLimit' when given a string more than max option", function () {
        mockValidateLength("12345678901", { max: 10 });
        expect(mockValidateLength).toHaveBeenCalledTimes(1);
        expect(mockValidateLength).toHaveReturnedWith(ValidateLengthErrorType.exceedLengthLimit);
    });
    it("returns error string 'empty' when given empty string", function () {
        mockValidateLength("");
        expect(mockValidateLength).toHaveBeenCalledTimes(1);
        expect(mockValidateLength).toHaveReturnedWith(ValidateLengthErrorType.empty);
    });
    it("Throws error 'invalid option' when given minus min option", function () {
        var invalidOptionMock = function () { return mockValidateLength("1", { min: -5 }); };
        expect(invalidOptionMock).toThrowError(ThrownErrorType.invalidOption);
    });
    it("Throws error 'invalid option' when given minus max option", function () {
        var invalidOptionMock = function () { return mockValidateLength("1", { max: -10 }); };
        expect(invalidOptionMock).toThrowError(ThrownErrorType.invalidOption);
    });
    it("Throws error 'invalid option' when given max option smaller than min option", function () {
        var invalidOptionMock = function () { return mockValidateLength("1", { min: 10, max: 3 }); };
        expect(invalidOptionMock).toThrowError(ThrownErrorType.invalidOption);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVMZW5ndGgudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvaW5wdXQtdmFsaWRhdGlvbi92YWxpZGF0ZUxlbmd0aC50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFFSCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGNBQWMsRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRTNFLElBQU0sa0JBQWtCLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUNuRCxTQUFTLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDeEMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBRXpDLFFBQVEsQ0FBQyx1Q0FBdUMsRUFBRTtJQUNoRCxFQUFFLENBQUMsb0ZBQW9GLEVBQUU7UUFDdkYsa0JBQWtCLENBQUMsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDOUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEQsTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEQsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsMEZBQTBGLEVBQUU7UUFDN0Ysa0JBQWtCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDeEIsTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEQsTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEQsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsNEZBQTRGLEVBQUU7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