/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { validatePermissionResource, ValidatePermissionResourceErrorType } from "./validatePermissionResource";
var mockValidatePermissionResource = jest.fn(validatePermissionResource);
afterEach(mockValidatePermissionResource.mockClear);
afterAll(mockValidatePermissionResource.mockRestore);
describe("validatePermissionResource returns correct output", function () {
    it("returns empty error string when given empty string, but it is not a required field", function () {
        mockValidatePermissionResource("", { isRequired: false });
        expect(mockValidatePermissionResource).toHaveBeenCalledTimes(1);
        expect(mockValidatePermissionResource).toHaveReturnedWith(null);
    });
    it("returns empty error string when given uppercase alphabet only", function () {
        mockValidatePermissionResource("PERMISSION");
        expect(mockValidatePermissionResource).toHaveBeenCalledTimes(1);
        expect(mockValidatePermissionResource).toHaveReturnedWith(null);
    });
    it("returns empty error string when given uppercase alphabet, separated by a single `:`", function () {
        mockValidatePermissionResource("PERMISSION:RESOURCE");
        expect(mockValidatePermissionResource).toHaveBeenCalledTimes(1);
        expect(mockValidatePermissionResource).toHaveReturnedWith(null);
    });
    // tslint:disable-next-line
    it("returns empty error string when given uppercase alphabet followed by a variable, separated by a single `:`", function () {
        mockValidatePermissionResource("PERMISSION:{variable}");
        expect(mockValidatePermissionResource).toHaveBeenCalledTimes(1);
        expect(mockValidatePermissionResource).toHaveReturnedWith(null);
    });
    // tslint:disable-next-line
    it("returns empty error string when given uppercase alphabet, followed by a variable and another alphabet, each separated by a single `:`", function () {
        mockValidatePermissionResource("PERMISSION:{variable}:RESOURCE");
        expect(mockValidatePermissionResource).toHaveBeenCalledTimes(1);
        expect(mockValidatePermissionResource).toHaveReturnedWith(null);
    });
    // tslint:disable-next-line
    it("returns empty error string when given uppercase alphabet, followed by a variable, two times, each separated by a single `:`", function () {
        mockValidatePermissionResource("PERMISSION:{variable}:RESOURCE:{variable}");
        expect(mockValidatePermissionResource).toHaveBeenCalledTimes(1);
        expect(mockValidatePermissionResource).toHaveReturnedWith(null);
    });
    // tslint:disable-next-line
    it("returns empty error string when given uppercase alphabet, followed by a variable, and then another variable that is a *", function () {
        mockValidatePermissionResource("PERMISSION:{variable}:RESOURCE:*");
        expect(mockValidatePermissionResource).toHaveBeenCalledTimes(1);
        expect(mockValidatePermissionResource).toHaveReturnedWith(null);
    });
    // tslint:disable-next-line
    it("returns empty error string when given uppercase alphabet, followed by * variable, two times", function () {
        mockValidatePermissionResource("PERMISSION:*:RESOURCE:*");
        expect(mockValidatePermissionResource).toHaveBeenCalledTimes(1);
        expect(mockValidatePermissionResource).toHaveReturnedWith(null);
    });
    // tslint:disable-next-line
    it("returns empty error string when given uppercase alphabet, followed by alphanumeric string as variable, two times", function () {
        mockValidatePermissionResource("PERMISSION:accelbyte:RESOURCE:12345");
        expect(mockValidatePermissionResource).toHaveBeenCalledTimes(1);
        expect(mockValidatePermissionResource).toHaveReturnedWith(null);
    });
    it("returns error string 'empty' when given empty string", function () {
        mockValidatePermissionResource("");
        expect(mockValidatePermissionResource).toHaveBeenCalledTimes(1);
        expect(mockValidatePermissionResource).toHaveReturnedWith(ValidatePermissionResourceErrorType.empty);
    });
    it("returns error string 'invalidFormat' when given lowercase alphabets", function () {
        mockValidatePermissionResource("permission");
        expect(mockValidatePermissionResource).toHaveBeenCalledTimes(1);
        expect(mockValidatePermissionResource).toHaveReturnedWith(ValidatePermissionResourceErrorType.invalidFormat);
    });
    it("returns error string 'invalidFormat' when given numeric characters", function () {
        mockValidatePermissionResource("1234");
        expect(mockValidatePermissionResource).toHaveBeenCalledTimes(1);
        expect(mockValidatePermissionResource).toHaveReturnedWith(ValidatePermissionResourceErrorType.invalidFormat);
    });
    it("returns error string 'invalidFormat' when given uppercase alphabets, but ended in a `:`", function () {
        mockValidatePermissionResource("PERMISSION:");
        expect(mockValidatePermissionResource).toHaveBeenCalledTimes(1);
        expect(mockValidatePermissionResource).toHaveReturnedWith(ValidatePermissionResourceErrorType.invalidFormat);
    });
    it("returns error string 'invalidFormat' when given uppercase alphabets, but separated with a double `:`", function () {
        mockValidatePermissionResource("PERMISSION::RESOURCE");
        expect(mockValidatePermissionResource).toHaveBeenCalledTimes(1);
        expect(mockValidatePermissionResource).toHaveReturnedWith(ValidatePermissionResourceErrorType.invalidFormat);
    });
    // tslint:disable-next-line
    it("returns error string 'invalidFormat' when given uppercase alphabets, but separated with symbol other than `:`", function () {
        mockValidatePermissionResource("PERMISSION-RESOURCE");
        expect(mockValidatePermissionResource).toHaveBeenCalledTimes(1);
        expect(mockValidatePermissionResource).toHaveReturnedWith(ValidatePermissionResourceErrorType.invalidFormat);
    });
    // tslint:disable-next-line
    it("returns error string 'invalidFormat' when given uppercase alphabets, followed by a variable placeholder, but in numeric characters", function () {
        mockValidatePermissionResource("PERMISSION:{1234}");
        expect(mockValidatePermissionResource).toHaveBeenCalledTimes(1);
        expect(mockValidatePermissionResource).toHaveReturnedWith(ValidatePermissionResourceErrorType.invalidFormat);
    });
    // tslint:disable-next-line
    it("returns error string 'invalidFormat' when given uppercase alphabets, followed by a variable with value other than * or alphanumeric", function () {
        mockValidatePermissionResource("PERMISSION:$$$$:RESOURCE");
        expect(mockValidatePermissionResource).toHaveBeenCalledTimes(1);
        expect(mockValidatePermissionResource).toHaveReturnedWith(ValidatePermissionResourceErrorType.invalidFormat);
    });
    // tslint:disable-next-line
    it("returns error string 'invalidFormat' when given uppercase alphabets, followed by a variable, but the variable wrapped in symbol other than `{}`", function () {
        mockValidatePermissionResource("PERMISSION:[variable]");
        expect(mockValidatePermissionResource).toHaveBeenCalledTimes(1);
        expect(mockValidatePermissionResource).toHaveReturnedWith(ValidatePermissionResourceErrorType.invalidFormat);
    });
    // tslint:disable-next-line
    it("returns error string 'exceedLengthLimit' when given valid permission resource format, but length is more than 256", function () {
        mockValidatePermissionResource(
        // tslint:disable-next-line
        "PERMISSION:RESOURCE:PERMISSION:RESOURCE:PERMISSION:RESOURCE:PERMISSION:RESOURCE:PERMISSION:RESOURCE:PERMISSION:RESOURCE:PERMISSION:RESOURCE:PERMISSION:RESOURCE:PERMISSION:RESOURCE:PERMISSION:RESOURCE:PERMISSION:RESOURCE:PERMISSION:RESOURCE:PERMISSION:RESOUR");
        expect(mockValidatePermissionResource).toHaveBeenCalledTimes(1);
        expect(mockValidatePermissionResource).toHaveReturnedWith(ValidatePermissionResourceErrorType.exceedLengthLimit);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVQZXJtaXNzaW9uUmVzb3VyY2UudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvaW5wdXQtdmFsaWRhdGlvbi92YWxpZGF0ZVBlcm1pc3Npb25SZXNvdXJjZS50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFFSCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUUvRyxJQUFNLDhCQUE4QixHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsMEJBQTBCLENBQUMsQ0FBQztBQUMzRSxTQUFTLENBQUMsOEJBQThCLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDcEQsUUFBUSxDQUFDLDhCQUE4QixDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBRXJELFFBQVEsQ0FBQyxtREFBbUQsRUFBRTtJQUM1RCxFQUFFLENBQUMsb0ZBQW9GLEVBQUU7UUFDdkYsOEJBQThCLENBQUMsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDMUQsTUFBTSxDQUFDLDhCQUE4QixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEUsTUFBTSxDQUFDLDhCQUE4QixDQUFDLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEUsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsK0RBQStELEVBQUU7UUFDbEUsOEJBQThCLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDN0MsTUFBTSxDQUFDLDhCQUE4QixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEUsTUFBTSxDQUFDLDhCQUE4QixDQUFDLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEUsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMscUZBQXFGLEVBQUU7UUFDeEYsOEJBQThCLENB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