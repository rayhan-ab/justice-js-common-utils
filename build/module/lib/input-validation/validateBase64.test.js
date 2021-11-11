/*
 * Copyright (c) 2020. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { validateBase64, ValidateBase64ErrorType } from "./validateBase64";
var mockValidateBase64 = jest.fn(validateBase64);
afterEach(mockValidateBase64.mockClear);
afterAll(mockValidateBase64.mockRestore);
describe("validateBase64 returns correct output", function () {
    it("returns empty error string when given empty string, but it is not a required field", function () {
        mockValidateBase64("", { isRequired: false });
        expect(mockValidateBase64).toHaveBeenCalledTimes(1);
        expect(mockValidateBase64).toHaveReturnedWith(null);
    });
    it("returns empty error string when given a base64 format", function () {
        mockValidateBase64("aW1wb3J0IFJlYWN0I/GZy+b20gInJl");
        expect(mockValidateBase64).toHaveBeenCalledTimes(1);
        expect(mockValidateBase64).toHaveReturnedWith(null);
    });
    it("returns empty error string when given 1 equal symbol (=) at then end of string", function () {
        mockValidateBase64("aW1wb3J0IFJlYWN0I/GZy+b20gInJl=");
        expect(mockValidateBase64).toHaveBeenCalledTimes(1);
        expect(mockValidateBase64).toHaveReturnedWith(null);
    });
    it("returns empty error string when given 2 equal symbol (=) at then end of string", function () {
        mockValidateBase64("aW1wb3J0IFJlYWN0I/GZy+b20gInJl==");
        expect(mockValidateBase64).toHaveBeenCalledTimes(1);
        expect(mockValidateBase64).toHaveReturnedWith(null);
    });
    it("returns error string invalidFormat when given more than 2 equal symbol (=) at then end of string", function () {
        mockValidateBase64("aW1wb3J0IFJlYWN0I/GZy+b20gInJl===");
        expect(mockValidateBase64).toHaveBeenCalledTimes(1);
        expect(mockValidateBase64).toHaveReturnedWith(ValidateBase64ErrorType.invalidFormat);
    });
    it("returns error string invalidFormat when given a string contains symbols other than +/", function () {
        mockValidateBase64("~!@#$%^&()_}{}|\"'");
        expect(mockValidateBase64).toHaveBeenCalledTimes(1);
        expect(mockValidateBase64).toHaveReturnedWith(ValidateBase64ErrorType.invalidFormat);
    });
    it("returns error string 'invalidFormat' when given a string contains a white space", function () {
        mockValidateBase64("abcde ghijk");
        expect(mockValidateBase64).toHaveBeenCalledTimes(1);
        expect(mockValidateBase64).toHaveReturnedWith(ValidateBase64ErrorType.invalidFormat);
    });
    it("returns error string 'empty' when given empty string", function () {
        mockValidateBase64("");
        expect(mockValidateBase64).toHaveBeenCalledTimes(1);
        expect(mockValidateBase64).toHaveReturnedWith(ValidateBase64ErrorType.empty);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVCYXNlNjQudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvaW5wdXQtdmFsaWRhdGlvbi92YWxpZGF0ZUJhc2U2NC50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFFSCxPQUFPLEVBQUUsY0FBYyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFM0UsSUFBTSxrQkFBa0IsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQ25ELFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUN4QyxRQUFRLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDLENBQUM7QUFFekMsUUFBUSxDQUFDLHVDQUF1QyxFQUFFO0lBQ2hELEVBQUUsQ0FBQyxvRkFBb0YsRUFBRTtRQUN2RixrQkFBa0IsQ0FBQyxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUM5QyxNQUFNLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwRCxNQUFNLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0RCxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyx1REFBdUQsRUFBRTtRQUMxRCxrQkFBa0IsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3JELE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BELE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RELENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLGdGQUFnRixFQUFFO1FBQ25GLGtCQUFrQixDQUFDLGlDQUFpQyxDQUFDLENBQUM7UUFDdEQsTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEQsTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEQsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsZ0ZBQWdGLEVBQUU7UUFDbkYsa0JBQWtCLENBQUMsa0NBQWtDLENBQUMsQ0FBQztRQUN2RCxNQUFNLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwRCxNQUFNLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0RCxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxrR0FBa0csRUFBRTtRQUNyRyxrQkFBa0IsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO1FBQ3hELE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BELE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLHVCQUF1QixDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3ZGLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLHVGQUF1RixFQUFFO1FBQzFGLGtCQUFrQixDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDekMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEQsTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUMsa0JBQWtCLENBQUMsdUJBQXVCLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDdkYsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsaUZBQWlGLEVBQUU7UUFDcEYsa0JBQWtCLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDbEMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEQsTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUMsa0JBQWtCLENBQUMsdUJBQXVCLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDdkYsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsc0RBQXNELEVBQUU7UUFDekQsa0JBQWtCLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDdkIsTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEQsTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUMsa0JBQWtCLENBQUMsdUJBQXVCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0UsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyJ9