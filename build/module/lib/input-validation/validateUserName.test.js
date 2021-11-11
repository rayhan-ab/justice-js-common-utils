/*
 * Copyright (c) 2020. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { validateUserName, ValidateUserNameErrorType } from "./validateUserName";
var mockValidateUserName = jest.fn(validateUserName);
afterEach(mockValidateUserName.mockClear);
afterAll(mockValidateUserName.mockRestore);
describe("validateUserName returns correct output", function () {
    it("returns empty error string when given empty string, but it is not a required field", function () {
        mockValidateUserName("", { isRequired: false });
        expect(mockValidateUserName).toHaveBeenCalledTimes(1);
        expect(mockValidateUserName).toHaveReturnedWith(null);
    });
    it("returns empty error string when given alphabet only", function () {
        mockValidateUserName("AccelByte");
        expect(mockValidateUserName).toHaveBeenCalledTimes(1);
        expect(mockValidateUserName).toHaveReturnedWith(null);
    });
    it("returns empty error string when given alphanumeric and started with numeric", function () {
        mockValidateUserName("01AccelByte");
        expect(mockValidateUserName).toHaveBeenCalledTimes(1);
        expect(mockValidateUserName).toHaveReturnedWith(null);
    });
    it("returns empty error string when given alphanumeric and numeric at the end of username", function () {
        mockValidateUserName("AccelByte12");
        expect(mockValidateUserName).toHaveBeenCalledTimes(1);
        expect(mockValidateUserName).toHaveReturnedWith(null);
    });
    it("returns empty error string when given alphabet and symbol `_`", function () {
        mockValidateUserName("John__Doe");
        expect(mockValidateUserName).toHaveBeenCalledTimes(1);
        expect(mockValidateUserName).toHaveReturnedWith(null);
    });
    it("returns empty error string when given alphabet and symbol `-`", function () {
        mockValidateUserName("John--Doe");
        expect(mockValidateUserName).toHaveBeenCalledTimes(1);
        expect(mockValidateUserName).toHaveReturnedWith(null);
    });
    it("returns empty error string when given alphanumeric with length of 48", function () {
        mockValidateUserName("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuv");
        expect(mockValidateUserName).toHaveBeenCalledTimes(1);
        expect(mockValidateUserName).toHaveReturnedWith(null);
    });
    it("returns invalidFormat error string when given alphabet and space", function () {
        mockValidateUserName("Accel Byte");
        expect(mockValidateUserName).toHaveBeenCalledTimes(1);
        expect(mockValidateUserName).toHaveReturnedWith(ValidateUserNameErrorType.invalidFormat);
    });
    it("returns invalidFormat error string when given alphabet and space at the end", function () {
        mockValidateUserName("AccelByte ");
        expect(mockValidateUserName).toHaveBeenCalledTimes(1);
        expect(mockValidateUserName).toHaveReturnedWith(ValidateUserNameErrorType.invalidFormat);
    });
    it("returns invalidFormat error string when given alphanumeric and numeric first with space", function () {
        mockValidateUserName("01 Accel Byte");
        expect(mockValidateUserName).toHaveBeenCalledTimes(1);
        expect(mockValidateUserName).toHaveReturnedWith(ValidateUserNameErrorType.invalidFormat);
    });
    it("returns error string containing exceedLengthLimit when given alphanumeric with length of 49", function () {
        mockValidateUserName("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvw");
        expect(mockValidateUserName).toHaveBeenCalledTimes(1);
        expect(mockValidateUserName).toHaveReturnedWith(ValidateUserNameErrorType.exceedLengthLimit);
    });
    it("returns error string 'empty' when given empty string", function () {
        mockValidateUserName("");
        expect(mockValidateUserName).toHaveBeenCalledTimes(1);
        expect(mockValidateUserName).toHaveReturnedWith(ValidateUserNameErrorType.empty);
    });
    it("returns error string invalidFormat when given string with at least 1 symbol other than `_`", function () {
        mockValidateUserName("$.John-D'o!e");
        expect(mockValidateUserName).toHaveBeenCalledTimes(1);
        expect(mockValidateUserName).toHaveReturnedWith(ValidateUserNameErrorType.invalidFormat);
    });
    it("returns error string invalidFormat when given string with `_` at the end", function () {
        mockValidateUserName("JohnDoe_");
        expect(mockValidateUserName).toHaveBeenCalledTimes(1);
        expect(mockValidateUserName).toHaveReturnedWith(ValidateUserNameErrorType.invalidFormat);
    });
    it("returns error string invalidFormat when given string with `_` at the beginning", function () {
        mockValidateUserName("_JohnDoe");
        expect(mockValidateUserName).toHaveBeenCalledTimes(1);
        expect(mockValidateUserName).toHaveReturnedWith(ValidateUserNameErrorType.invalidFormat);
    });
    it("returns error string invalidFormat when given string with `-` at the end", function () {
        mockValidateUserName("JohnDoe-");
        expect(mockValidateUserName).toHaveBeenCalledTimes(1);
        expect(mockValidateUserName).toHaveReturnedWith(ValidateUserNameErrorType.invalidFormat);
    });
    it("returns error string invalidFormat when given string with `-` at the beginning", function () {
        mockValidateUserName("-JohnDoe");
        expect(mockValidateUserName).toHaveBeenCalledTimes(1);
        expect(mockValidateUserName).toHaveReturnedWith(ValidateUserNameErrorType.invalidFormat);
    });
    // tslint:disable-next-line:max-line-length
    it("returns exceedLengthLimit error string when given alphanumeric with length more than maxLength parameter", function () {
        mockValidateUserName("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuv", { maxLength: 16 });
        expect(mockValidateUserName).toHaveBeenCalledTimes(1);
        expect(mockValidateUserName).toHaveReturnedWith(ValidateUserNameErrorType.exceedLengthLimit);
    });
    // tslint:disable-next-line:max-line-length
    it("returns lessThanLengthLimit error string when given alphanumeric with length less than minLength parameter", function () {
        mockValidateUserName("abcde", { minLength: 6 });
        expect(mockValidateUserName).toHaveBeenCalledTimes(1);
        expect(mockValidateUserName).toHaveReturnedWith(ValidateUserNameErrorType.lessThanLengthLimit);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVVc2VyTmFtZS50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9pbnB1dC12YWxpZGF0aW9uL3ZhbGlkYXRlVXNlck5hbWUudGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLGdCQUFnQixFQUFFLHlCQUF5QixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFakYsSUFBTSxvQkFBb0IsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFDdkQsU0FBUyxDQUFDLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQzFDLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUUzQyxRQUFRLENBQUMseUNBQXlDLEVBQUU7SUFDbEQsRUFBRSxDQUFDLG9GQUFvRixFQUFFO1FBQ3ZGLG9CQUFvQixDQUFDLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQ2hELE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RELE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hELENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLHFEQUFxRCxFQUFFO1FBQ3hELG9CQUFvQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2xDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RELE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hELENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLDZFQUE2RSxFQUFFO1FBQ2hGLG9CQUFvQixDQUFDLGFBQWEsQ0FBQyxDQUFDO1FB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