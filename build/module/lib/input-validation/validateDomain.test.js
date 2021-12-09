/*
 * Copyright (c) 2021. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { validateDomain, ValidateDomainErrorType } from "./validateDomain";
var mockValidateDomain = jest.fn(validateDomain);
afterEach(mockValidateDomain.mockClear);
afterAll(mockValidateDomain.mockRestore);
describe("validateDomain returns correct output", function () {
    it("returns empty error string when given empty string, but it is not a required field", function () {
        mockValidateDomain("", { isRequired: false });
        expect(mockValidateDomain).toHaveBeenCalledTimes(1);
        expect(mockValidateDomain).toHaveReturnedWith(null);
    });
    it("returns error string `empty` when given empty string", function () {
        mockValidateDomain("");
        expect(mockValidateDomain).toHaveBeenCalledTimes(1);
        expect(mockValidateDomain).toHaveReturnedWith(ValidateDomainErrorType.empty);
    });
    it("returns error string containing `exceedLengthLimit` when given alpha with length of more than 63", function () {
        mockValidateDomain("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl");
        expect(mockValidateDomain).toHaveBeenCalledTimes(1);
        expect(mockValidateDomain).toHaveReturnedWith(ValidateDomainErrorType.exceedLengthLimit);
    });
    it("returns error string `invalid format` when given alphanumeric with symbol", function () {
        mockValidateDomain("alpha123#!@#");
        expect(mockValidateDomain).toHaveBeenCalledTimes(1);
        expect(mockValidateDomain).toHaveReturnedWith(ValidateDomainErrorType.invalidFormat);
    });
    it("returns error string `invalid format` when it contains valid regex alphanumeric with" +
        " dash in the beginning of the string", function () {
        mockValidateDomain("-alpha123");
        expect(mockValidateDomain).toHaveBeenCalledTimes(1);
        expect(mockValidateDomain).toHaveReturnedWith(ValidateDomainErrorType.invalidFormat);
    });
    it("returns error string `invalid format` when it contains valid regex alphanumeric with" +
        " dash in the end of the string", function () {
        mockValidateDomain("alpha123-");
        expect(mockValidateDomain).toHaveBeenCalledTimes(1);
        expect(mockValidateDomain).toHaveReturnedWith(ValidateDomainErrorType.invalidFormat);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVEb21haW4udGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvaW5wdXQtdmFsaWRhdGlvbi92YWxpZGF0ZURvbWFpbi50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFFSCxPQUFPLEVBQUUsY0FBYyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFM0UsSUFBTSxrQkFBa0IsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQ25ELFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUN4QyxRQUFRLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDLENBQUM7QUFFekMsUUFBUSxDQUFDLHVDQUF1QyxFQUFFO0lBQ2hELEVBQUUsQ0FBQyxvRkFBb0YsRUFBRTtRQUN2RixrQkFBa0IsQ0FBQyxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUM5QyxNQUFNLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwRCxNQUFNLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0RCxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxzREFBc0QsRUFBRTtRQUN6RCxrQkFBa0IsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN2QixNQUFNLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwRCxNQUFNLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyx1QkFBdUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvRSxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxrR0FBa0csRUFBRTtRQUNyRyxrQkFBa0IsQ0FBQyxrRUFBa0UsQ0FBQyxDQUFDO1FBQ3ZGLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BELE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLHVCQUF1QixDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDM0YsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsMkVBQTJFLEVBQUU7UUFDOUUsa0JBQWtCLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDbkMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEQsTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUMsa0JBQWtCLENBQUMsdUJBQXVCLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDdkYsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQ0Esc0ZBQXNGO1FBQ3BGLHNDQUFzQyxFQUN4QztRQUNFLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2hDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BELE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLHVCQUF1QixDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3pGLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUNBLHNGQUFzRjtRQUNwRixnQ0FBZ0MsRUFDbEM7UUFDRSxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNoQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwRCxNQUFNLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyx1QkFBdUIsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN6RixDQUFDLENBQUMsQ0FBQztBQUVMLENBQUMsQ0FBQyxDQUFDIn0=