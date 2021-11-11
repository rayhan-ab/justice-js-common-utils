/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { validateEmail, ValidateEmailErrorType } from "./validateEmail";
var mockValidateEmail = jest.fn(validateEmail);
afterEach(mockValidateEmail.mockClear);
afterAll(mockValidateEmail.mockRestore);
describe("validateEmail returns correct output", function () {
    it("returns empty error string when given empty string, but it is not a required field", function () {
        mockValidateEmail("", { isRequired: false });
        expect(mockValidateEmail).toHaveBeenCalledTimes(1);
        expect(mockValidateEmail).toHaveReturnedWith(null);
    });
    it("returns empty error string when given all lowercase, complete email", function () {
        mockValidateEmail("test@accelbyte.net");
        expect(mockValidateEmail).toHaveBeenCalledTimes(1);
        expect(mockValidateEmail).toHaveReturnedWith(null);
    });
    it("returns empty error string when given dot separated username, all lowercase, complete email", function () {
        mockValidateEmail("test.account@accelbyte.net");
        expect(mockValidateEmail).toHaveBeenCalledTimes(1);
        expect(mockValidateEmail).toHaveReturnedWith(null);
    });
    it("returns empty error string when given combination of all allowed characters for each email section", function () {
        mockValidateEmail("T3st_+&*.4ccount@By-t3.Net");
        expect(mockValidateEmail).toHaveBeenCalledTimes(1);
        expect(mockValidateEmail).toHaveReturnedWith(null);
    });
    it("returns error string 'empty' when given empty string", function () {
        mockValidateEmail("");
        expect(mockValidateEmail).toHaveBeenCalledTimes(1);
        expect(mockValidateEmail).toHaveReturnedWith(ValidateEmailErrorType.empty);
    });
    // tslint:disable-next-line
    it("returns error string 'exceedLengthLimit' when given string with length more than default max email length (254)", function () {
        mockValidateEmail(
        // tslint:disable-next-line
        "testtesttesttestttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest@accelbyte.net");
        expect(mockValidateEmail).toHaveBeenCalledTimes(1);
        expect(mockValidateEmail).toHaveReturnedWith(ValidateEmailErrorType.exceedLengthLimit);
    });
    it("returns error string 'invalidFormat' when given incomplete email", function () {
        mockValidateEmail("test");
        expect(mockValidateEmail).toHaveBeenCalledTimes(1);
        expect(mockValidateEmail).toHaveReturnedWith(ValidateEmailErrorType.invalidFormat);
    });
    it("returns error string 'invalidFormat' when given incomplete email", function () {
        mockValidateEmail("test@accelbyte");
        expect(mockValidateEmail).toHaveBeenCalledTimes(1);
        expect(mockValidateEmail).toHaveReturnedWith(ValidateEmailErrorType.invalidFormat);
    });
    it("returns error string 'invalidFormat' when given incomplete email", function () {
        mockValidateEmail("@accelbyte.net");
        expect(mockValidateEmail).toHaveBeenCalledTimes(1);
        expect(mockValidateEmail).toHaveReturnedWith(ValidateEmailErrorType.invalidFormat);
    });
    it("returns error string 'invalidFormat' when given complete email, but invalid username characters", function () {
        mockValidateEmail("$$$$@accelbyte.net");
        expect(mockValidateEmail).toHaveBeenCalledTimes(1);
        expect(mockValidateEmail).toHaveReturnedWith(ValidateEmailErrorType.invalidFormat);
    });
    it("returns error string 'invalidFormat' when given complete email, but invalid hostname characters", function () {
        mockValidateEmail("$$$$@___.net");
        expect(mockValidateEmail).toHaveBeenCalledTimes(1);
        expect(mockValidateEmail).toHaveReturnedWith(ValidateEmailErrorType.invalidFormat);
    });
    // tslint:disable-next-line
    it("returns error string 'invalidFormat' when given complete email, but invalid top level domain characters, only alphabets allowed", function () {
        mockValidateEmail("$$$$@accelbyte.123");
        expect(mockValidateEmail).toHaveBeenCalledTimes(1);
        expect(mockValidateEmail).toHaveReturnedWith(ValidateEmailErrorType.invalidFormat);
    });
    // tslint:disable-next-line
    it("returns error string 'invalidFormat' when given complete email, but top level domain character count is less than 2", function () {
        mockValidateEmail("test@accelbyte.n");
        expect(mockValidateEmail).toHaveBeenCalledTimes(1);
        expect(mockValidateEmail).toHaveReturnedWith(ValidateEmailErrorType.invalidFormat);
    });
    // tslint:disable-next-line
    it("returns error string 'invalidFormat' when given complete email, but top level domain character count is more than 7", function () {
        mockValidateEmail("test@accelbyte.netnetne");
        expect(mockValidateEmail).toHaveBeenCalledTimes(1);
        expect(mockValidateEmail).toHaveReturnedWith(ValidateEmailErrorType.invalidFormat);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVFbWFpbC50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9pbnB1dC12YWxpZGF0aW9uL3ZhbGlkYXRlRW1haWwudGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLGFBQWEsRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXhFLElBQU0saUJBQWlCLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUNqRCxTQUFTLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDdkMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBRXhDLFFBQVEsQ0FBQyxzQ0FBc0MsRUFBRTtJQUMvQyxFQUFFLENBQUMsb0ZBQW9GLEVBQUU7UUFDdkYsaUJBQWlCLENBQUMsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDN0MsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkQsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckQsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMscUVBQXFFLEVBQUU7UUFDeEUsaUJBQWlCLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUN4QyxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuRCxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyRCxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyw2RkFBNkYsRUFBRTtRQUNoRyxpQkFBaUIsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1FBQ2hELE1B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