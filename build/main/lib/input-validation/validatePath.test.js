"use strict";
/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var validatePath_1 = require("./validatePath");
var mockValidatePath = jest.fn(validatePath_1.validatePath);
afterEach(mockValidatePath.mockClear);
afterAll(mockValidatePath.mockRestore);
describe("validatePath returns correct output", function () {
    it("returns empty error string when given empty string, but it is not a required field", function () {
        mockValidatePath("", { isRequired: false });
        expect(mockValidatePath).toHaveBeenCalledTimes(1);
        expect(mockValidatePath).toHaveReturnedWith(null);
    });
    it("returns empty error string when given a path", function () {
        mockValidatePath("/path");
        expect(mockValidatePath).toHaveBeenCalledTimes(1);
        expect(mockValidatePath).toHaveReturnedWith(null);
    });
    it("returns empty error string when given a path 2 level down", function () {
        mockValidatePath("/path/path");
        expect(mockValidatePath).toHaveBeenCalledTimes(1);
        expect(mockValidatePath).toHaveReturnedWith(null);
    });
    it("returns empty error string when given alphanumeric with length of 256 (the default maxLength)", function () {
        mockValidatePath("/abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzab" +
            "cdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmno" +
            "pqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdef" +
            "ghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstu");
        expect(mockValidatePath).toHaveBeenCalledTimes(1);
        expect(mockValidatePath).toHaveReturnedWith(null);
    });
    it("returns error string 'empty' when given empty string", function () {
        mockValidatePath("");
        expect(mockValidatePath).toHaveBeenCalledTimes(1);
        expect(mockValidatePath).toHaveReturnedWith(validatePath_1.ValidatePathErrorType.empty);
    });
    it("returns error string 'invalidFormat' when given a string that is not starting with `/`", function () {
        mockValidatePath("path");
        expect(mockValidatePath).toHaveBeenCalledTimes(1);
        expect(mockValidatePath).toHaveReturnedWith(validatePath_1.ValidatePathErrorType.invalidFormat);
    });
    it("returns error string 'invalidFormat' when given a string that is only `/`", function () {
        mockValidatePath("/");
        expect(mockValidatePath).toHaveBeenCalledTimes(1);
        expect(mockValidatePath).toHaveReturnedWith(validatePath_1.ValidatePathErrorType.invalidFormat);
    });
    // tslint:disable-next-line
    it("returns error string 'invalidFormat' when given a string that is starting with `/` but followed with another `/`", function () {
        mockValidatePath("//");
        expect(mockValidatePath).toHaveBeenCalledTimes(1);
        expect(mockValidatePath).toHaveReturnedWith(validatePath_1.ValidatePathErrorType.invalidFormat);
    });
    it("returns error string 'invalidFormat' when given a string that is ends with `/`", function () {
        mockValidatePath("/path/");
        expect(mockValidatePath).toHaveBeenCalledTimes(1);
        expect(mockValidatePath).toHaveReturnedWith(validatePath_1.ValidatePathErrorType.invalidFormat);
    });
    it("returns error string 'invalidFormat' when given a string that is ends with double `/`", function () {
        mockValidatePath("/path//");
        expect(mockValidatePath).toHaveBeenCalledTimes(1);
        expect(mockValidatePath).toHaveReturnedWith(validatePath_1.ValidatePathErrorType.invalidFormat);
    });
    it("returns error string containing exceedLengthLimit when given alphanumeric with length of 257", function () {
        mockValidatePath("/abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyza" +
            "bcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghij" +
            "klmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcde" +
            "fghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuv");
        expect(mockValidatePath).toHaveBeenCalledTimes(1);
        expect(mockValidatePath).toHaveReturnedWith(validatePath_1.ValidatePathErrorType.exceedLengthLimit);
    });
    it("returns empty error string when given a string with combination of underscore, hyphen and number", function () {
        mockValidatePath("/path/path_test-123/new-path");
        expect(mockValidatePath).toHaveBeenCalledTimes(1);
        expect(mockValidatePath).toHaveReturnedWith(null);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVQYXRoLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2lucHV0LXZhbGlkYXRpb24vdmFsaWRhdGVQYXRoLnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7O0dBSUc7O0FBRUgsK0NBQXFFO0FBRXJFLElBQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQywyQkFBWSxDQUFDLENBQUM7QUFDL0MsU0FBUyxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ3RDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUV2QyxRQUFRLENBQUMscUNBQXFDLEVBQUU7SUFDOUMsRUFBRSxDQUFDLG9GQUFvRixFQUFFO1FBQ3ZGLGdCQUFnQixDQUFDLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQzVDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BELENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLDhDQUE4QyxFQUFFO1FBQ2pELGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzFCLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BELENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLDJEQUEyRCxFQUFFO1FBQzlELGdCQUFnQixDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQy9CLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BELENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLCtGQUErRixFQUFFO1FBQ2xHLGdCQUFnQixDQUNkLHlEQUF5RDtZQUN2RCxtRUFBbUU7WUFDbkUsdUVBQXVFO1lBQ3ZFLHFFQUFxRSxDQUN4RSxDQUFDO1FBQ0YsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEQsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEQsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsc0RBQXNELEVBQUU7UUFDekQsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDckIsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEQsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUMsa0JBQWtCLENBQUMsb0NBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0UsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsd0ZBQXdGLEVBQUU7UUFDM0YsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekIsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEQsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUMsa0JBQWtCLENBQUMsb0NBQXFCLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDbkYsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsMkVBQTJFLEVBQUU7UUFDOUUsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdEIsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEQsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUMsa0JBQWtCLENBQUMsb0NBQXFCLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDbkYsQ0FBQyxDQUFDLENBQUM7SUFDSCwyQkFBMkI7SUFDM0IsRUFBRSxDQUFDLGtIQUFrSCxFQUFFO1FBQ3JILGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZCLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLG9DQUFxQixDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ25GLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLGdGQUFnRixFQUFFO1FBQ25GLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzNCLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLG9DQUFxQixDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ25GLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLHVGQUF1RixFQUFFO1FBQzFGLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzVCLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLG9DQUFxQixDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ25GLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLDhGQUE4RixFQUFFO1FBQ2pHLGdCQUFnQixDQUNkLHdEQUF3RDtZQUN0RCwrREFBK0Q7WUFDL0QsMkVBQTJFO1lBQzNFLHVFQUF1RSxDQUMxRSxDQUFDO1FBQ0YsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEQsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUMsa0JBQWtCLENBQUMsb0NBQXFCLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUN2RixDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxrR0FBa0csRUFBRTtRQUNyRyxnQkFBZ0IsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO1FBQ2pELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BELENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMifQ==