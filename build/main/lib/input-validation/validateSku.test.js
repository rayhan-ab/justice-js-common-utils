"use strict";
/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var validateSku_1 = require("./validateSku");
var mockValidateSku = jest.fn(validateSku_1.validateSku);
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
        expect(mockValidateSku).toHaveReturnedWith(validateSku_1.ValidateSkuErrorType.empty);
    });
    it("returns error string `exceedLengthLimit` when given string with length more than default max length (32)", function () {
        mockValidateSku("abc-123-abc-123abc-123-abc-1234-a");
        expect(mockValidateSku).toHaveBeenCalledTimes(1);
        expect(mockValidateSku).toHaveReturnedWith(validateSku_1.ValidateSkuErrorType.exceedLengthLimit);
    });
    it("returns error string `exceedLengthLimit` when given string with length more than specified max length", function () {
        mockValidateSku("abc-123-abc-123abc-12", { maxLength: 20 });
        expect(mockValidateSku).toHaveBeenCalledTimes(1);
        expect(mockValidateSku).toHaveReturnedWith(validateSku_1.ValidateSkuErrorType.exceedLengthLimit);
    });
    it("returns error string `invalidFormat` when given symbol only", function () {
        mockValidateSku("@");
        expect(mockValidateSku).toHaveBeenCalledTimes(1);
        expect(mockValidateSku).toHaveReturnedWith(validateSku_1.ValidateSkuErrorType.invalidFormat);
    });
    it("returns error string `invalidFormat` when given uppercase alphabets that ends in separator `-`", function () {
        mockValidateSku("ABC-");
        expect(mockValidateSku).toHaveBeenCalledTimes(1);
        expect(mockValidateSku).toHaveReturnedWith(validateSku_1.ValidateSkuErrorType.invalidFormat);
    });
    // tslint:disable-next-line
    it("returns error string `invalidFormat` when given uppercase alphabets and numeric that is separated with double separator `:`", function () {
        mockValidateSku("123::ABC");
        expect(mockValidateSku).toHaveBeenCalledTimes(1);
        expect(mockValidateSku).toHaveReturnedWith(validateSku_1.ValidateSkuErrorType.invalidFormat);
    });
    // tslint:disable-next-line
    it("returns error string `invalidFormat` when given numeric and lowercase alphabet that is separated with invalid separator `$`", function () {
        mockValidateSku("123$abc");
        expect(mockValidateSku).toHaveBeenCalledTimes(1);
        expect(mockValidateSku).toHaveReturnedWith(validateSku_1.ValidateSkuErrorType.invalidFormat);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVTa3UudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvaW5wdXQtdmFsaWRhdGlvbi92YWxpZGF0ZVNrdS50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7OztHQUlHOztBQUVILDZDQUFrRTtBQUVsRSxJQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLHlCQUFXLENBQUMsQ0FBQztBQUM3QyxTQUFTLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ3JDLFFBQVEsQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLENBQUM7QUFFdEMsUUFBUSxDQUFDLG9DQUFvQyxFQUFFO0lBQzdDLEVBQUUsQ0FBQyxvRkFBb0YsRUFBRTtRQUN2RixlQUFlLENBQUMsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDM0MsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pELE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuRCxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyx5RkFBeUYsRUFBRTtRQUM1RixlQUFlLENBQUMscUJBQXFCLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUMxRCxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakQsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25ELENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLCtFQUErRSxFQUFFO1FBQ2xGLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2QixNQUFNLENBQUMsZUFBZSxDQUFDLENBQUMscUJBQXFCLENBQUMs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