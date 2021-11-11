"use strict";
/*
 * Copyright (c) 2020. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var validateLegalDocumentName_1 = require("./validateLegalDocumentName");
var mockValidateLegalName = jest.fn(validateLegalDocumentName_1.validateLegalDocumentName);
afterEach(mockValidateLegalName.mockClear);
afterAll(mockValidateLegalName.mockRestore);
describe("validateLegalName return correnct output", function () {
    it("returns null when given alphabet only display name", function () {
        mockValidateLegalName("AccelByte");
        expect(mockValidateLegalName).toHaveBeenCalledTimes(1);
        expect(mockValidateLegalName).toHaveReturnedWith(null);
    });
    it("returns null when given alphabet and whitespace in the middle of the string", function () {
        mockValidateLegalName("Legal Name");
        expect(mockValidateLegalName).toHaveBeenCalledTimes(1);
        expect(mockValidateLegalName).toHaveReturnedWith(null);
    });
    it("return null when given alphabet string with length of 256", function () {
        mockValidateLegalName(
        // tslint:disable-next-line:max-line-length
        "bdPbTyeqJPmlogztBTBpinRGtjSyTNSPRGtLvQPprfDIYHwcssfsTurmlZdNYaJIAACRsgtrlGyzENojZhfHBjjbKFtdeWYFDCAjhncbXMItZFtGNkmNepnnrWxVyHIbLflApLcsxwRzCPUfimDvXxrAGTecrfehaDayKZgBSBRWoWxntcaZVIJaWOgQkiXUMuazeMczMwABjqpidUUuNdVZIbgckMevCMvUTuYTGKDpXHJNJHAGetqntDImKqPG");
        expect(mockValidateLegalName).toHaveBeenCalledTimes(1);
        expect(mockValidateLegalName).toHaveReturnedWith(null);
    });
    it("returns error string 'empty' when given empty string", function () {
        mockValidateLegalName("");
        expect(mockValidateLegalName).toHaveBeenCalledTimes(1);
        expect(mockValidateLegalName).toHaveReturnedWith(validateLegalDocumentName_1.ValidateLegalDocumentNameErrorType.empty);
    });
    it("returns error invalid format string when given numeric only", function () {
        mockValidateLegalName("1234");
        expect(mockValidateLegalName).toHaveBeenCalledTimes(1);
        expect(mockValidateLegalName).toHaveReturnedWith(validateLegalDocumentName_1.ValidateLegalDocumentNameErrorType.invalidFormat);
    });
    it("return error invalid format string when given alphanumeric", function () {
        mockValidateLegalName("Legalname1234");
        expect(mockValidateLegalName).toHaveBeenCalledTimes(1);
        expect(mockValidateLegalName).toHaveReturnedWith(validateLegalDocumentName_1.ValidateLegalDocumentNameErrorType.invalidFormat);
    });
    it("return error invalid format string when given special character which don't allowed _", function () {
        mockValidateLegalName("Legal_Name");
        expect(mockValidateLegalName).toHaveBeenCalledTimes(1);
        expect(mockValidateLegalName).toHaveReturnedWith(validateLegalDocumentName_1.ValidateLegalDocumentNameErrorType.invalidFormat);
    });
    it("return error invalid format string when given special character which don't allowed ;", function () {
        mockValidateLegalName("Legal;Name");
        expect(mockValidateLegalName).toHaveBeenCalledTimes(1);
        expect(mockValidateLegalName).toHaveReturnedWith(validateLegalDocumentName_1.ValidateLegalDocumentNameErrorType.invalidFormat);
    });
    it("return error invalid format string when given special character which don't allowed :", function () {
        mockValidateLegalName("Legal:Name");
        expect(mockValidateLegalName).toHaveBeenCalledTimes(1);
        expect(mockValidateLegalName).toHaveReturnedWith(validateLegalDocumentName_1.ValidateLegalDocumentNameErrorType.invalidFormat);
    });
    it("return error invalid format string when given special character which don't allowed -", function () {
        mockValidateLegalName("Legal-Name");
        expect(mockValidateLegalName).toHaveBeenCalledTimes(1);
        expect(mockValidateLegalName).toHaveReturnedWith(validateLegalDocumentName_1.ValidateLegalDocumentNameErrorType.invalidFormat);
    });
    it("return error invalid format string when given only white", function () {
        mockValidateLegalName(" ");
        expect(mockValidateLegalName).toHaveBeenCalledTimes(1);
        expect(mockValidateLegalName).toHaveReturnedWith(validateLegalDocumentName_1.ValidateLegalDocumentNameErrorType.invalidFormat);
    });
    it("return error invalid format string when given string with whitespace at the end of string", function () {
        mockValidateLegalName("Legalname ");
        expect(mockValidateLegalName).toHaveBeenCalledTimes(1);
        expect(mockValidateLegalName).toHaveReturnedWith(validateLegalDocumentName_1.ValidateLegalDocumentNameErrorType.invalidFormat);
    });
    it("returns exceedLengthLimit error string when given alphabet with length of maxLength parameter", function () {
        mockValidateLegalName("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuv", { maxLength: 16 });
        expect(mockValidateLegalName).toHaveBeenCalledTimes(1);
        expect(mockValidateLegalName).toHaveReturnedWith(validateLegalDocumentName_1.ValidateLegalDocumentNameErrorType.exceedLengthLimit);
    });
    it("return exceedLengthLimit error strign when given alphabet with length of 257", function () {
        mockValidateLegalName(
        // tslint:disable-next-line:max-line-length
        "bdPbTyeqJPmlogztBTBpinRGtjSyTNSPRGtLvQPprfDIYHwcssfsTurmlZdNYaJIAACRsgtrlGyzENojZhfHBjjbKFtdeWYFDCAjhncbXMItZFtGNkmNepnnrWxVyHIbLflApLcsxwRzCPUfimDvXxrAGTecrfehaDayKZgBSBRWoWxntcaZVIJaWOgQkiXUMuazeMczMwABjqpidUUuNdVZIbgckMevCMvUTuYTGKDpXHJNJHAGetqntDImKqPGz");
        expect(mockValidateLegalName).toHaveBeenCalledTimes(1);
        expect(mockValidateLegalName).toHaveReturnedWith(validateLegalDocumentName_1.ValidateLegalDocumentNameErrorType.exceedLengthLimit);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVMZWdhbERvY3VtZW50TmFtZS50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9pbnB1dC12YWxpZGF0aW9uL3ZhbGlkYXRlTGVnYWxEb2N1bWVudE5hbWUudGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7R0FJRzs7QUFFSCx5RUFBNEc7QUFFNUcsSUFBTSxxQkFBcUIsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLHFEQUF5QixDQUFDLENBQUM7QUFDakUsU0FBUyxDQUFDLHFCQUFxQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQzNDLFFBQVEsQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUU1QyxRQUFRLENBQUMsMENBQTBDLEVBQUU7SUFDbkQsRUFBRSxDQUFDLG9EQUFvRCxFQUFFO1FBQ3ZELHFCQUFxQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ25DLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZELE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pELENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLDZFQUE2RSxFQUFFO1FBQ2hGLHFCQUFxQixDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZELE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pELENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLDJEQUEyRCxFQUFFO1FBQzlELHFCQUFxQjtRQUNuQiwyQ0FBMkM7UUFDM0Msa1FBQWtRLENBQ25RLENBQUM7UUFDRixNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2RCxNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6RCxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxzREFBc0QsRUFBRTtRQUN6RCxxQkFBcUIsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMxQixNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2RCxNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyw4REFBa0MsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3RixDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyw2REFBNkQsRUFBRTtRQUNoRSxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5QixNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2RCxNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyw4REFBa0MsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNyRyxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyw0REFBNEQsRUFBRTtRQUMvRCxxQkFBcUIsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUN2QyxNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2RCxNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyw4REFBa0MsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNyRyxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyx1RkFBdUYsRUFBRTtRQUMxRixxQkFBcUIsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNwQyxNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2RCxNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyw4REFBa0MsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNyRyxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyx1RkFBdUYsRUFBRTtRQUMxRixxQkFBcUIsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNwQyxNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2RCxNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyw4REFBa0MsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNyRyxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyx1RkFBdUYsRUFBRTtRQUMxRixxQkFBcUIsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNwQyxNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2RCxNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyw4REFBa0MsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNyRyxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyx1RkFBdUYsRUFBRTtRQUMxRixxQkFBcUIsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNwQyxNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2RCxNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyw4REFBa0MsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNyRyxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQywwREFBMEQsRUFBRTtRQUM3RCxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMzQixNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2RCxNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyw4REFBa0MsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNyRyxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQywyRkFBMkYsRUFBRTtRQUM5RixxQkFBcUIsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNwQyxNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2RCxNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyw4REFBa0MsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNyRyxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQywrRkFBK0YsRUFBRTtRQUNsRyxxQkFBcUIsQ0FBQyxrREFBa0QsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzdGLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZELE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLDhEQUFrQyxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDekcsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsOEVBQThFLEVBQUU7UUFDakYscUJBQXFCO1FBQ25CLDJDQUEyQztRQUMzQyxtUUFBbVEsQ0FDcFEsQ0FBQztRQUNGLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZELE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLDhEQUFrQyxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDekcsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyJ9