"use strict";
/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var validateAlphanumeric_1 = require("./validateAlphanumeric");
var mockValidateAlphaNumeric = jest.fn(validateAlphanumeric_1.validateAlphanumeric);
afterEach(mockValidateAlphaNumeric.mockClear);
afterAll(mockValidateAlphaNumeric.mockRestore);
describe("validateAlphanumeric returns correct output", function () {
    it("returns empty error string when given empty string, but it is not a required field", function () {
        mockValidateAlphaNumeric("", { isRequired: false });
        expect(mockValidateAlphaNumeric).toHaveBeenCalledTimes(1);
        expect(mockValidateAlphaNumeric).toHaveReturnedWith(null);
    });
    it("returns empty error string when given alphanumeric", function () {
        mockValidateAlphaNumeric("alpha123");
        expect(mockValidateAlphaNumeric).toHaveBeenCalledTimes(1);
        expect(mockValidateAlphaNumeric).toHaveReturnedWith(null);
    });
    it("returns empty error string when given alphanumeric with length of 1", function () {
        mockValidateAlphaNumeric("a");
        expect(mockValidateAlphaNumeric).toHaveBeenCalledTimes(1);
        expect(mockValidateAlphaNumeric).toHaveReturnedWith(null);
    });
    it("returns empty error string when given alphanumeric with length of 256 (the default maxLength)", function () {
        mockValidateAlphaNumeric("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzab" +
            "cdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmno" +
            "pqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdef" +
            "ghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuv");
        expect(mockValidateAlphaNumeric).toHaveBeenCalledTimes(1);
        expect(mockValidateAlphaNumeric).toHaveReturnedWith(null);
    });
    it("returns empty error string when given alphanumeric with length of 20 (custom maxLength)", function () {
        mockValidateAlphaNumeric("abcdefghijklmnopqrst", { maxLength: 20 });
        expect(mockValidateAlphaNumeric).toHaveBeenCalledTimes(1);
        expect(mockValidateAlphaNumeric).toHaveReturnedWith(null);
    });
    it("returns error string containing exceedLengthLimit when given alphanumeric with length of 257", function () {
        mockValidateAlphaNumeric("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyza" +
            "bcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghij" +
            "klmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcde" +
            "fghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvw");
        expect(mockValidateAlphaNumeric).toHaveBeenCalledTimes(1);
        expect(mockValidateAlphaNumeric).toHaveReturnedWith(validateAlphanumeric_1.ValidateAlphaNumericErrorType.exceedLengthLimit);
    });
    // tslint:disable-next-line
    it("returns error string `exceedLengthLimit when given alphanumeric with length of 21 (with 20 set as custom maxLength)", function () {
        mockValidateAlphaNumeric("abcdefghijklmnopqrstu", { maxLength: 20 });
        expect(mockValidateAlphaNumeric).toHaveBeenCalledTimes(1);
        expect(mockValidateAlphaNumeric).toHaveReturnedWith(validateAlphanumeric_1.ValidateAlphaNumericErrorType.exceedLengthLimit);
    });
    it("returns error string containing invalidFormat when given alphanumeric with some symbols", function () {
        mockValidateAlphaNumeric("alpha123!!");
        expect(mockValidateAlphaNumeric).toHaveBeenCalledTimes(1);
        expect(mockValidateAlphaNumeric).toHaveReturnedWith(validateAlphanumeric_1.ValidateAlphaNumericErrorType.invalidFormat);
    });
    it("returns error string containing 'empty' when given empty string", function () {
        mockValidateAlphaNumeric("");
        expect(mockValidateAlphaNumeric).toHaveBeenCalledTimes(1);
        expect(mockValidateAlphaNumeric).toHaveReturnedWith(validateAlphanumeric_1.ValidateAlphaNumericErrorType.empty);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVBbHBoYW51bWVyaWMudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvaW5wdXQtdmFsaWRhdGlvbi92YWxpZGF0ZUFscGhhbnVtZXJpYy50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7OztHQUlHOztBQUVILCtEQUE2RjtBQUU3RixJQUFNLHdCQUF3QixHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsMkNBQW9CLENBQUMsQ0FBQztBQUMvRCxTQUFTLENBQUMsd0JBQXdCLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDOUMsUUFBUSxDQUFDLHdCQUF3QixDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBRS9DLFFBQVEsQ0FBQyw2Q0FBNkMsRUFBRTtJQUN0RCxFQUFFLENBQUMsb0ZBQW9GLEVBQUU7UUFDdkYsd0JBQXdCLENBQUMsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDcEQsTUFBTSxDQUFDLHdCQUF3QixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUQsTUFBTSxDQUFDLHdCQUF3QixDQUFDLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUQsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsb0RBQW9ELEVBQUU7UUFDdkQsd0JBQXdCLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDckMsTUFBTSxDQUFDLHdCQUF3QixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUQsTUFBTSxDQUFDLHdCQUF3QixDQUFDLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUQsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMscUVBQXFFLEVBQUU7UUFDeEUsd0JBQXdCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDOUIsTUFBTSxDQUFDLHdCQUF3QixDQUFDLENBQUMscUJB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