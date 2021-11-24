/*
 * Copyright (c) 2021. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { validateDatabaseName, ValidateDatabaseNameErrorType } from "./validateDatabaseName";
var mockValidateDatabaseName = jest.fn(validateDatabaseName);
afterEach(mockValidateDatabaseName.mockClear);
afterAll(mockValidateDatabaseName.mockRestore);
describe("validateDatabaseName return correct output", function () {
    it("return empty error string when given empty string, but it is not a required field", function () {
        mockValidateDatabaseName("", { isRequired: false });
        expect(mockValidateDatabaseName).toHaveBeenCalledTimes(1);
        expect(mockValidateDatabaseName).toHaveReturnedWith(null);
    });
    it("return error string `empty` when given empty string", function () {
        mockValidateDatabaseName("");
        expect(mockValidateDatabaseName).toHaveBeenCalledTimes(1);
        expect(mockValidateDatabaseName).toHaveReturnedWith(ValidateDatabaseNameErrorType.empty);
    });
    it("returns empty error string when given alpha with length of 1", function () {
        mockValidateDatabaseName("a");
        expect(mockValidateDatabaseName).toHaveBeenCalledTimes(1);
        expect(mockValidateDatabaseName).toHaveReturnedWith(null);
    });
    it("returns error string containing `exceedLengthLimit` when given alpha with length of 257", function () {
        mockValidateDatabaseName("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyza" +
            "bcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghij" +
            "klmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcde" +
            "fghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvw");
        expect(mockValidateDatabaseName).toHaveBeenCalledTimes(1);
        expect(mockValidateDatabaseName).toHaveReturnedWith(ValidateDatabaseNameErrorType.exceedLengthLimit);
    });
    it("returns error string `invalid format` when given alphanumeric with symbol", function () {
        mockValidateDatabaseName("alpha123#!@#");
        expect(mockValidateDatabaseName).toHaveBeenCalledTimes(1);
        expect(mockValidateDatabaseName).toHaveReturnedWith(ValidateDatabaseNameErrorType.invalidFormat);
    });
    // tslint:disable-next-line:max-line-length
    it("returns empty error string when it contains valid regex alphanumeric with underscore in the middle of the string", function () {
        mockValidateDatabaseName("alp_ha");
        expect(mockValidateDatabaseName).toHaveBeenCalledTimes(1);
        expect(mockValidateDatabaseName).toHaveReturnedWith(null);
    });
    it("returns empty error string when it contains valid regex alphanumeric with underscore" +
        " in the beginning of the string", function () {
        mockValidateDatabaseName("_alpha");
        expect(mockValidateDatabaseName).toHaveBeenCalledTimes(1);
        expect(mockValidateDatabaseName).toHaveReturnedWith(null);
    });
    // tslint:disable-next-line:max-line-length
    it("returns empty error string when it contains valid regex alphanumeric with underscore in the end of the string", function () {
        mockValidateDatabaseName("alpha_");
        expect(mockValidateDatabaseName).toHaveBeenCalledTimes(1);
        expect(mockValidateDatabaseName).toHaveReturnedWith(null);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVEYXRhYmFzZU5hbWUudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvaW5wdXQtdmFsaWRhdGlvbi92YWxpZGF0ZURhdGFiYXNlTmFtZS50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFFSCxPQUFPLEVBQUMsb0JBQW9CLEVBQUUsNkJBQTZCLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUUzRixJQUFNLHdCQUF3QixHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQUMvRCxTQUFTLENBQUMsd0JBQXdCLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDOUMsUUFBUSxDQUFDLHdCQUF3QixDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBRS9DLFFBQVEsQ0FBQyw0Q0FBNEMsRUFBRTtJQUNyRCxFQUFFLENBQUMsbUZBQW1GLEVBQUU7UUFDdEYsd0JBQXdCLENBQUMsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDcEQsTUFBTSxDQUFDLHdCQUF3QixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUQsTUFBTSxDQUFDLHdCQUF3QixDQUFDLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUQsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMscURBQXFELEVBQUU7UUFDeEQsd0JBQXdCLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDN0IsTUFBTSxDQUFDLHdCQUF3QixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUQsTUFBTSxDQUFDLHdCQUF3QixDQUFDLENBQUMsa0JBQWtCLENBQUMsNkJBQTZCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0YsQ0FBQyxDQUFDLENBQUE7SUFDRixFQUFFLENBQUMsOERBQThELEVBQUU7UUFDakUsd0JBQXdCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDOUIsTUFBTSxDQUFDLHdCQUF3QixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUQsTUFBTSxDQUFDLHdCQUF3QixDQUFDLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUQsQ0FBQyxDQUFDLENBQUM7SUFDSCxFQUFFLENBQUMseUZBQXlGLEVBQUU7UUFDNUYsd0JBQXdCLENBQ3RCLHVEQUF1RDtZQUNyRCwrREFBK0Q7WUFDL0QsMkVBQTJFO1lBQzNFLHdFQUF3RSxDQUMzRSxDQUFDO1FBQ0YsTUFBTSxDQUFDLHdCQUF3QixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUQsTUFBTSxDQUFDLHdCQUF3QixDQUFDLENBQUMsa0JBQWtCLENBQUMsNkJBQTZCLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUN2RyxDQUFDLENBQUMsQ0FBQztJQUNILEVBQUUsQ0FBQywyRUFBMkUsRUFBRTtRQUM5RSx3QkFBd0IsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUN6QyxNQUFNLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxRCxNQUFNLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyw2QkFBNkIsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNuRyxDQUFDLENBQUMsQ0FBQztJQUNILDJDQUEyQztJQUMzQyxFQUFFLENBQUMsa0hBQWtILEVBQUU7UUFDckgsd0JBQXdCLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbkMsTUFBTSxDQUFDLHdCQUF3QixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUQsTUFBTSxDQUFDLHdCQUF3QixDQUFDLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUQsQ0FBQyxDQUFDLENBQUM7SUFDSCxFQUFFLENBQ0Esc0ZBQXNGO1FBQ3BGLGlDQUFpQyxFQUNuQztRQUNFLHdCQUF3QixDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ25DLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFELE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVELENBQUMsQ0FDRixDQUFDO0lBQ0YsMkNBQTJDO0lBQzNDLEVBQUUsQ0FBQywrR0FBK0csRUFBRTtRQUNsSCx3QkFBd0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNuQyxNQUFNLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxRCxNQUFNLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1RCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIn0=