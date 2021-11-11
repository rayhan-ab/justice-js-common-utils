"use strict";
/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var validateComplexPassword_1 = require("./validateComplexPassword");
var mockValidateComplexPassword = jest.fn(validateComplexPassword_1.validateComplexPassword);
afterEach(mockValidateComplexPassword.mockClear);
afterAll(mockValidateComplexPassword.mockRestore);
describe("validateComplexPassword returns correct output", function () {
    it("returns empty error string when given empty string, but it is not a required field", function () {
        mockValidateComplexPassword("", { isRequired: false });
        expect(mockValidateComplexPassword).toHaveBeenCalledTimes(1);
        expect(mockValidateComplexPassword).toHaveReturnedWith(null);
    });
    // tslint:disable-next-line
    it("returns empty error string when given at least 3 out of 4 rule (uppercase, lowercase, numbers, special characters) with 8 character (minimum)", function () {
        mockValidateComplexPassword("asdASD12");
        expect(mockValidateComplexPassword).toHaveBeenCalledTimes(1);
        expect(mockValidateComplexPassword).toHaveReturnedWith(null);
    });
    // tslint:disable-next-line
    it("returns empty error string when given at least 3 out of 4 rule (uppercase, lowercase, numbers, special characters) with 32 character (maximum)", function () {
        mockValidateComplexPassword("asdASD1234asdASD1234asdASD1234as");
        expect(mockValidateComplexPassword).toHaveBeenCalledTimes(1);
        expect(mockValidateComplexPassword).toHaveReturnedWith(null);
    });
    it("returns error string 'empty' when given empty string", function () {
        mockValidateComplexPassword("");
        expect(mockValidateComplexPassword).toHaveBeenCalledTimes(1);
        expect(mockValidateComplexPassword).toHaveReturnedWith(validateComplexPassword_1.ValidateComplexPasswordErrorType.empty);
    });
    // tslint:disable-next-line
    it("returns error string 'invalidFormat' when given at least 3 out of 4 rule (uppercase, lowercase, numbers, special characters) but less than 8 character", function () {
        mockValidateComplexPassword("asdASD1");
        expect(mockValidateComplexPassword).toHaveBeenCalledTimes(1);
        expect(mockValidateComplexPassword).toHaveReturnedWith(validateComplexPassword_1.ValidateComplexPasswordErrorType.invalidFormat);
    });
    // tslint:disable-next-line
    it("returns error string 'invalidFormat' when given at least 3 out of 4 rule (uppercase, lowercase, numbers, special characters) but more than 32 character", function () {
        mockValidateComplexPassword("asdASD1234asdASD1234asdASD1234567");
        expect(mockValidateComplexPassword).toHaveBeenCalledTimes(1);
        expect(mockValidateComplexPassword).toHaveReturnedWith(validateComplexPassword_1.ValidateComplexPasswordErrorType.invalidFormat);
    });
    // tslint:disable-next-line
    it("returns error string 'invalidFormat' when given less than 3 out of 4 rule (uppercase, lowercase, numbers, special characters)", function () {
        mockValidateComplexPassword("asdasdASDASD");
        expect(mockValidateComplexPassword).toHaveBeenCalledTimes(1);
        expect(mockValidateComplexPassword).toHaveReturnedWith(validateComplexPassword_1.ValidateComplexPasswordErrorType.invalidFormat);
    });
    // tslint:disable-next-line
    it("returns error string 'invalidFormat' when given at least 3 out of 4 rule (uppercase, lowercase, numbers, special characters), but there are more than 2 equal characters in a row", function () {
        mockValidateComplexPassword("aaasdASD123");
        expect(mockValidateComplexPassword).toHaveBeenCalledTimes(1);
        expect(mockValidateComplexPassword).toHaveReturnedWith(validateComplexPassword_1.ValidateComplexPasswordErrorType.invalidFormat);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVDb21wbGV4UGFzc3dvcmQudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvaW5wdXQtdmFsaWRhdGlvbi92YWxpZGF0ZUNvbXBsZXhQYXNzd29yZC50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7OztHQUlHOztBQUVILHFFQUFzRztBQUV0RyxJQUFNLDJCQUEyQixHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsaURBQXVCLENBQUMsQ0FBQztBQUNyRSxTQUFTLENBQUMsMkJBQTJCLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDakQsUUFBUSxDQUFDLDJCQUEyQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBRWxELFFBQVEsQ0FBQyxnREFBZ0QsRUFBRTtJQUN6RCxFQUFFLENBQUMsb0ZBQW9GLEVBQUU7UUFDdkYsMkJBQTJCLENBQUMsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDdkQsTUFBTSxDQUFDLDJCQUEyQixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0QsTUFBTSxDQUFDLDJCQUEyQixDQUFDLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0QsQ0FBQyxDQUFDLENBQUM7SUFDSCwyQkFBMkI7SUFDM0IsRUFBRSxDQUFDLCtJQUErSSxFQUFFO1FBQ2xKLDJCQUEyQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3hDLE1BQU0sQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdELE1BQU0sQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9ELENBQUMsQ0FBQyxDQUFDO0lBQ0gsMkJBQTJCO0lBQzNCLEVBQUUsQ0FBQyxnSkFBZ0osRUFBRTtRQUNuSiwyQkFBMkIsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO1FBQ2hFLE1BQU0sQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdELE1BQU0sQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9ELENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLHNEQUFzRCxFQUFFO1FBQ3pELDJCQUEyQixDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2hDLE1BQU0sQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdELE1BQU0sQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLDBEQUFnQyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pHLENBQUMsQ0FBQyxDQUFDO0lBQ0gsMkJBQTJCO0lBQzNCLEVBQUUsQ0FBQyx3SkFBd0osRUFBRTtRQUMzSiwyQkFBMkIsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN2QyxNQUFNLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3RCxNQUFNLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQywwREFBZ0MsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN6RyxDQUFDLENBQUMsQ0FBQztJQUNILDJCQUEyQjtJQUMzQixFQUFFLENBQUMseUpBQXlKLEVBQUU7UUFDNUosMkJBQTJCLENBQUMsbUNBQW1DLENBQUMsQ0FBQztRQUNqRSxNQUFNLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3RCxNQUFNLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQywwREFBZ0MsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN6RyxDQUFDLENBQUMsQ0FBQztJQUNILDJCQUEyQjtJQUMzQixFQUFFLENBQUMsK0hBQStILEVBQUU7UUFDbEksMkJBQTJCLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDNUMsTUFBTSxDQUFDLDJCQUEyQixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0QsTUFBTSxDQUFDLDJCQUEyQixDQUFDLENBQUMsa0JBQWtCLENBQUMsMERBQWdDLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDekcsQ0FBQyxDQUFDLENBQUM7SUFDSCwyQkFBMkI7SUFDM0IsRUFBRSxDQUFDLG1MQUFtTCxFQUFFO1FBQ3RMLDJCQUEyQixDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzNDLE1BQU0sQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdELE1BQU0sQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLDBEQUFnQyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3pHLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMifQ==