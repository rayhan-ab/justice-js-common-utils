/*
 * Copyright (c) 2020. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { validateKubelessHandler, ValidateKubelessHandlerErrorType } from "./validateKubelessHandler";
var mockValidateKubelessHandler = jest.fn(validateKubelessHandler);
afterEach(mockValidateKubelessHandler.mockClear);
afterAll(mockValidateKubelessHandler.mockRestore);
describe("validateKubelessHandler returns correct output", function () {
    it("returns empty error string when given empty string, but it is not a required field", function () {
        mockValidateKubelessHandler("", { isRequired: false });
        expect(mockValidateKubelessHandler).toHaveBeenCalledTimes(1);
        expect(mockValidateKubelessHandler).toHaveReturnedWith(null);
    });
    it("returns empty error string when given alpha with length of 1", function () {
        mockValidateKubelessHandler("a");
        expect(mockValidateKubelessHandler).toHaveBeenCalledTimes(1);
        expect(mockValidateKubelessHandler).toHaveReturnedWith(null);
    });
    it("returns error string containing `exceedLengthLimit` when given alpha with length of 257", function () {
        mockValidateKubelessHandler("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyza" +
            "bcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghij" +
            "klmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcde" +
            "fghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvw");
        expect(mockValidateKubelessHandler).toHaveBeenCalledTimes(1);
        expect(mockValidateKubelessHandler).toHaveReturnedWith(ValidateKubelessHandlerErrorType.exceedLengthLimit);
    });
    it("returns error string `invalid format` when given alphanumeric with symbol", function () {
        mockValidateKubelessHandler("alpha123#!@#");
        expect(mockValidateKubelessHandler).toHaveBeenCalledTimes(1);
        expect(mockValidateKubelessHandler).toHaveReturnedWith(ValidateKubelessHandlerErrorType.invalidFormat);
    });
    it("returns error string `invalid format` when given alphanumeric with symbol", function () {
        mockValidateKubelessHandler("_alpha123#!@#");
        expect(mockValidateKubelessHandler).toHaveBeenCalledTimes(1);
        expect(mockValidateKubelessHandler).toHaveReturnedWith(ValidateKubelessHandlerErrorType.invalidFormat);
    });
    // tslint:disable-next-line:max-line-length
    it("returns empty error string when it contains valid regex alphanumeric with underscore in the middle of the string", function () {
        mockValidateKubelessHandler("alp_ha");
        expect(mockValidateKubelessHandler).toHaveBeenCalledTimes(1);
        expect(mockValidateKubelessHandler).toHaveReturnedWith(null);
    });
    it("returns empty error string when it contains valid regex alphanumeric with underscore" +
        " in the beginning of the string", function () {
        mockValidateKubelessHandler("_alpha");
        expect(mockValidateKubelessHandler).toHaveBeenCalledTimes(1);
        expect(mockValidateKubelessHandler).toHaveReturnedWith(null);
    });
    // tslint:disable-next-line:max-line-length
    it("returns empty error string when it contains valid regex alphanumeric with underscore in the end of the string", function () {
        mockValidateKubelessHandler("alpha_");
        expect(mockValidateKubelessHandler).toHaveBeenCalledTimes(1);
        expect(mockValidateKubelessHandler).toHaveReturnedWith(null);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVLdWJlbGVzc0hhbmRsZXIudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvaW5wdXQtdmFsaWRhdGlvbi92YWxpZGF0ZUt1YmVsZXNzSGFuZGxlci50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFFSCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUV0RyxJQUFNLDJCQUEyQixHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsdUJBQXVCLENBQUMsQ0FBQztBQUNyRSxTQUFTLENBQUMsMkJBQTJCLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDakQsUUFBUSxDQUFDLDJCQUEyQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBRWxELFFBQVEsQ0FBQyxnREFBZ0QsRUFBRTtJQUN6RCxFQUFFLENBQUMsb0ZBQW9GLEVBQUU7UUFDdkYsMkJBQTJCLENBQUMsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDdkQsTUFBTSxDQUFDLDJCQUEyQixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0QsTUFBTSxDQUFDLDJCQUEyQixDQUFDLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0QsQ0FBQyxDQUFDLENBQUM7SUFDSCxFQUFFLENBQUMsOERBQThELEVBQUU7UUFDakUsMkJBQTJCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsTUFBTSxDQUFDLDJCQUEyQixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0QsTUFBTSxDQUFDLDJCQUEyQixDQUFDLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0QsQ0FBQyxDQUFDLENBQUM7SUFDSCxFQUFFLENBQUMseUZBQXlGLEVBQUU7UUFDNUYsMkJBQTJCLENBQ3pCLHVEQUF1RDtZQUNyRCwrREFBK0Q7WUFDL0QsMkVBQTJFO1lBQzNFLHdFQUF3RSxDQUMzRSxDQUFDO1FBQ0YsTUFBTSxDQUFDLDJCQUEyQixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0QsTUFBTSxDQUFDLDJCQUEyQixDQUFDLENBQUMsa0JBQWtCLENBQUMsZ0NBQWdDLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUM3RyxDQUFDLENBQUMsQ0FBQztJQUNILEVBQUUsQ0FBQywyRUFBMkUsRUFBRTtRQUM5RSwyQkFBMkIsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUM1QyxNQUFNLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3RCxNQUFNLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxnQ0FBZ0MsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN6RyxDQUFDLENBQUMsQ0FBQztJQUNILEVBQUUsQ0FBQywyRUFBMkUsRUFBRTtRQUM5RSwyQkFBMkIsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUM3QyxNQUFNLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3RCxNQUFNLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxnQ0FBZ0MsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN6RyxDQUFDLENBQUMsQ0FBQztJQUNILDJDQUEyQztJQUMzQyxFQUFFLENBQUMsa0hBQWtILEVBQUU7UUFDckgsMkJBQTJCLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdEMsTUFBTSxDQUFDLDJCQUEyQixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0QsTUFBTSxDQUFDLDJCQUEyQixDQUFDLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0QsQ0FBQyxDQUFDLENBQUM7SUFDSCxFQUFFLENBQ0Esc0ZBQXNGO1FBQ3BGLGlDQUFpQyxFQUNuQztRQUNFLDJCQUEyQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3RDLE1BQU0sQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdELE1BQU0sQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9ELENBQUMsQ0FDRixDQUFDO0lBQ0YsMkNBQTJDO0lBQzNDLEVBQUUsQ0FBQywrR0FBK0csRUFBRTtRQUNsSCwyQkFBMkIsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN0QyxNQUFNLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3RCxNQUFNLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvRCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIn0=