/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { ThrownErrorType } from "./constant/errorType";
import { validateNumeric, ValidateNumericErrorType } from "./validateNumeric";
var mockValidateNumeric = jest.fn(validateNumeric);
afterEach(mockValidateNumeric.mockClear);
afterAll(mockValidateNumeric.mockRestore);
describe("validateNumeric returns correct output", function () {
    it("returns empty error string when given empty string, but it is not a required field", function () {
        mockValidateNumeric("", { isRequired: false });
        expect(mockValidateNumeric).toHaveBeenCalledTimes(1);
        expect(mockValidateNumeric).toHaveReturnedWith(null);
    });
    it("returns empty error string when given a number within the default range", function () {
        mockValidateNumeric("100");
        expect(mockValidateNumeric).toHaveBeenCalledTimes(1);
        expect(mockValidateNumeric).toHaveReturnedWith(null);
    });
    it("returns empty error string when given a string with value of the default max value", function () {
        mockValidateNumeric(String(Number.MAX_SAFE_INTEGER));
        expect(mockValidateNumeric).toHaveBeenCalledTimes(1);
        expect(mockValidateNumeric).toHaveReturnedWith(null);
    });
    it("returns empty error string when given a string with value of custom min value (3)", function () {
        mockValidateNumeric("3", { min: 3 });
        expect(mockValidateNumeric).toHaveBeenCalledTimes(1);
        expect(mockValidateNumeric).toHaveReturnedWith(null);
    });
    it("returns empty error string when given a string with value of custom max value (10)", function () {
        mockValidateNumeric("10", { max: 10 });
        expect(mockValidateNumeric).toHaveBeenCalledTimes(1);
        expect(mockValidateNumeric).toHaveReturnedWith(null);
    });
    it("returns error string 'invalidValue' when given string that is not a number", function () {
        mockValidateNumeric("a");
        expect(mockValidateNumeric).toHaveBeenCalledTimes(1);
        expect(mockValidateNumeric).toHaveReturnedWith(ValidateNumericErrorType.invalidValue);
    });
    it("returns error string 'lessThanMinimumValue' when given a number less than min option", function () {
        mockValidateNumeric("-6", { min: -5 });
        expect(mockValidateNumeric).toHaveBeenCalledTimes(1);
        expect(mockValidateNumeric).toHaveReturnedWith(ValidateNumericErrorType.lessThanMinimumValue);
    });
    it("returns error string 'exceedMaximumValue' when given a number more than max option", function () {
        mockValidateNumeric("11", { max: 10 });
        expect(mockValidateNumeric).toHaveBeenCalledTimes(1);
        expect(mockValidateNumeric).toHaveReturnedWith(ValidateNumericErrorType.exceedMaximumValue);
    });
    it("returns error string 'empty' when given empty string", function () {
        mockValidateNumeric("");
        expect(mockValidateNumeric).toHaveBeenCalledTimes(1);
        expect(mockValidateNumeric).toHaveReturnedWith(ValidateNumericErrorType.empty);
    });
    it("Throws error invalid option' when given max option smaller than min option", function () {
        var invalidOptionMock = function () { return mockValidateNumeric("1", { min: 10, max: -99 }); };
        expect(invalidOptionMock).toThrowError(ThrownErrorType.invalidOption);
    });
    it("returns error string 'containsExcludedNumber' when given a string should excluded", function () {
        mockValidateNumeric("0", { min: -1, excludedNumbers: [0] });
        expect(mockValidateNumeric).toHaveBeenCalledTimes(1);
        expect(mockValidateNumeric).toHaveReturnedWith(ValidateNumericErrorType.invalidValue);
    });
    it("returns empty error string when given a string not excluded string", function () {
        mockValidateNumeric("-1", { min: -1, excludedNumbers: [0] });
        expect(mockValidateNumeric).toHaveBeenCalledTimes(1);
        expect(mockValidateNumeric).toHaveReturnedWith(null);
    });
    it("return error string 'containDecimal' when given decimal number, but it is not allow decimal", function () {
        mockValidateNumeric("1.5", { allowDecimal: false });
        expect(mockValidateNumeric).toHaveBeenCalledTimes(1);
        expect(mockValidateNumeric).toHaveReturnedWith(ValidateNumericErrorType.containsDecimal);
    });
    it("return empty error string when given decimal number", function () {
        mockValidateNumeric("1.5");
        expect(mockValidateNumeric).toHaveBeenCalledTimes(1);
        expect(mockValidateNumeric).toHaveReturnedWith(null);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVOdW1lcmljLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2lucHV0LXZhbGlkYXRpb24vdmFsaWRhdGVOdW1lcmljLnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUVILE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsZUFBZSxFQUFFLHdCQUF3QixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFOUUsSUFBTSxtQkFBbUIsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQ3JELFNBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUN6QyxRQUFRLENBQUMsbUJBQW1CLENBQUMsV0FBVyxDQUFDLENBQUM7QUFFMUMsUUFBUSxDQUFDLHdDQUF3QyxFQUFFO0lBQ2pELEVBQUUsQ0FBQyxvRkFBb0YsRUFBRTtRQUN2RixtQkFBbUIsQ0FBQyxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUMvQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyRCxNQUFNLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2RCxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyx5RUFBeUUsRUFBRTtRQUM1RSxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQixNQUFNLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyRCxNQUFNLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2RCxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxvRkFBb0YsRUFB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