/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { validateSku, ValidateSkuErrorType } from "./validateSku";
var mockValidateSku = jest.fn(validateSku);
afterEach(mockValidateSku.mockClear);
afterAll(mockValidateSku.mockRestore);
describe("validateSku returns correct output", function () {
    it("returns empty error string when given empty string, but it is not a required field", function () {
        mockValidateSku("", { isRequired: false });
        expect(mockValidateSku).toHaveBeenCalledTimes(1);
        expect(mockValidateSku).toHaveReturnedWith(null);
    });
    it("returns empty error string when given string with length less than specified max length", function () {
        mockValidateSku("abc-123-abc-123abcd", { maxLength: 20 });
        expect(mockValidateSku).toHaveBeenCalledTimes(1);
        expect(mockValidateSku).toHaveReturnedWith(null);
    });
    it("returns empty error string when given uppercase alphabets without separators ", function () {
        mockValidateSku("ABC");
        expect(mockValidateSku).toHaveBeenCalledTimes(1);
        expect(mockValidateSku).toHaveReturnedWith(null);
    });
    it("returns empty error string when given uppercase alphabets with single `-` separators ", function () {
        mockValidateSku("abc-123");
        expect(mockValidateSku).toHaveBeenCalledTimes(1);
        expect(mockValidateSku).toHaveReturnedWith(null);
    });
    it("returns empty error string when given uppercase alphabets with single `:` separators ", function () {
        mockValidateSku("abc:123");
        expect(mockValidateSku).toHaveBeenCalledTimes(1);
        expect(mockValidateSku).toHaveReturnedWith(null);
    });
    it("returns empty error string when given uppercase alphabets with single `_` separators ", function () {
        mockValidateSku("abc_123");
        expect(mockValidateSku).toHaveBeenCalledTimes(1);
        expect(mockValidateSku).toHaveReturnedWith(null);
    });
    it("returns empty error string when given uppercase alphabets with 2 different separators `-` and `:` ", function () {
        mockValidateSku("abc-123:ABC");
        expect(mockValidateSku).toHaveBeenCalledTimes(1);
        expect(mockValidateSku).toHaveReturnedWith(null);
    });
    it("returns error string `empty` when given empty string", function () {
        mockValidateSku("");
        expect(mockValidateSku).toHaveBeenCalledTimes(1);
        expect(mockValidateSku).toHaveReturnedWith(ValidateSkuErrorType.empty);
    });
    it("returns error string `exceedLengthLimit` when given string with length more than default max length (32)", function () {
        mockValidateSku("abc-123-abc-123abc-123-abc-1234-a");
        expect(mockValidateSku).toHaveBeenCalledTimes(1);
        expect(mockValidateSku).toHaveReturnedWith(ValidateSkuErrorType.exceedLengthLimit);
    });
    it("returns error string `exceedLengthLimit` when given string with length more than specified max length", function () {
        mockValidateSku("abc-123-abc-123abc-12", { maxLength: 20 });
        expect(mockValidateSku).toHaveBeenCalledTimes(1);
        expect(mockValidateSku).toHaveReturnedWith(ValidateSkuErrorType.exceedLengthLimit);
    });
    it("returns error string `invalidFormat` when given symbol only", function () {
        mockValidateSku("@");
        expect(mockValidateSku).toHaveBeenCalledTimes(1);
        expect(mockValidateSku).toHaveReturnedWith(ValidateSkuErrorType.invalidFormat);
    });
    it("returns error string `invalidFormat` when given uppercase alphabets that ends in separator `-`", function () {
        mockValidateSku("ABC-");
        expect(mockValidateSku).toHaveBeenCalledTimes(1);
        expect(mockValidateSku).toHaveReturnedWith(ValidateSkuErrorType.invalidFormat);
    });
    // tslint:disable-next-line
    it("returns error string `invalidFormat` when given uppercase alphabets and numeric that is separated with double separator `:`", function () {
        mockValidateSku("123::ABC");
        expect(mockValidateSku).toHaveBeenCalledTimes(1);
        expect(mockValidateSku).toHaveReturnedWith(ValidateSkuErrorType.invalidFormat);
    });
    // tslint:disable-next-line
    it("returns error string `invalidFormat` when given numeric and lowercase alphabet that is separated with invalid separator `$`", function () {
        mockValidateSku("123$abc");
        expect(mockValidateSku).toHaveBeenCalledTimes(1);
        expect(mockValidateSku).toHaveReturnedWith(ValidateSkuErrorType.invalidFormat);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVTa3UudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvaW5wdXQtdmFsaWRhdGlvbi92YWxpZGF0ZVNrdS50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFFSCxPQUFPLEVBQUUsV0FBVyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWxFLElBQU0sZUFBZSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDN0MsU0FBUyxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNyQyxRQUFRLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBRXRDLFFBQVEsQ0FBQyxvQ0FBb0MsRUFBRTtJQUM3QyxFQUFFLENBQUMsb0ZBQW9GLEVBQUU7UUFDdkYsZUFBZSxDQUFDLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQzNDLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqRCxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkQsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMseUZBQXlGLEVBQUU7UUFDNUYsZUFBZSxDQUFDLHFCQUFxQixFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDMUQsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pELE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuRCxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQywrRUFBK0UsRUFBRTtRQUNsRixlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkIs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