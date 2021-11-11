"use strict";
/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var validateStatisticTag_1 = require("./validateStatisticTag");
var mockValidateStatisticTag = jest.fn(validateStatisticTag_1.validateStatisticTag);
afterEach(mockValidateStatisticTag.mockClear);
afterAll(mockValidateStatisticTag.mockRestore);
describe("validateTag returns correct output", function () {
    it("returns empty error string when given empty string, but it is not a required field", function () {
        mockValidateStatisticTag("", { isRequired: false });
        expect(mockValidateStatisticTag).toHaveBeenCalledTimes(1);
        expect(mockValidateStatisticTag).toHaveReturnedWith(null);
    });
    it("returns empty error string when given uppercase alphabets without separators", function () {
        mockValidateStatisticTag("ABC");
        expect(mockValidateStatisticTag).toHaveBeenCalledTimes(1);
        expect(mockValidateStatisticTag).toHaveReturnedWith(null);
    });
    it("returns empty error string when given lowercase alphabets without separators", function () {
        mockValidateStatisticTag("abc");
        expect(mockValidateStatisticTag).toHaveBeenCalledTimes(1);
        expect(mockValidateStatisticTag).toHaveReturnedWith(null);
    });
    it("returns empty error string when given number without separators", function () {
        mockValidateStatisticTag("123");
        expect(mockValidateStatisticTag).toHaveBeenCalledTimes(1);
        expect(mockValidateStatisticTag).toHaveReturnedWith(null);
    });
    it("returns empty error string when given alphabets with single `_` separators ", function () {
        mockValidateStatisticTag("abc_ABC");
        expect(mockValidateStatisticTag).toHaveBeenCalledTimes(1);
        expect(mockValidateStatisticTag).toHaveReturnedWith(null);
    });
    it("returns empty error string when given alphabets and number with 2 separators `_`", function () {
        mockValidateStatisticTag("abc_ABC_123");
        expect(mockValidateStatisticTag).toHaveBeenCalledTimes(1);
        expect(mockValidateStatisticTag).toHaveReturnedWith(null);
    });
    it("returns error string `empty` when given empty string", function () {
        mockValidateStatisticTag("");
        expect(mockValidateStatisticTag).toHaveBeenCalledTimes(1);
        expect(mockValidateStatisticTag).toHaveReturnedWith(validateStatisticTag_1.ValidateStatisticTagErrorType.empty);
    });
    it("returns error string `exceedLengthLimit` when given string with length more than default max length (34)", function () {
        mockValidateStatisticTag("abc_ABC_123_abc_ABC_123_abc_ABC_12345");
        expect(mockValidateStatisticTag).toHaveBeenCalledTimes(1);
        expect(mockValidateStatisticTag).toHaveReturnedWith(validateStatisticTag_1.ValidateStatisticTagErrorType.exceedLengthLimit);
    });
    it("returns error string `invalidFormat` when given string start with underscore", function () {
        mockValidateStatisticTag("_abc");
        expect(mockValidateStatisticTag).toHaveBeenCalledTimes(1);
        expect(mockValidateStatisticTag).toHaveReturnedWith(validateStatisticTag_1.ValidateStatisticTagErrorType.invalidFormat);
    });
    it("returns error string `invalidFormat` when given string end with underscore", function () {
        mockValidateStatisticTag("abc_");
        expect(mockValidateStatisticTag).toHaveBeenCalledTimes(1);
        expect(mockValidateStatisticTag).toHaveReturnedWith(validateStatisticTag_1.ValidateStatisticTagErrorType.invalidFormat);
    });
    it("returns error string `invalidFormat` when given symbol only", function () {
        mockValidateStatisticTag("@");
        expect(mockValidateStatisticTag).toHaveBeenCalledTimes(1);
        expect(mockValidateStatisticTag).toHaveReturnedWith(validateStatisticTag_1.ValidateStatisticTagErrorType.invalidFormat);
    });
    // tslint:disable-next-line
    it("returns error string `invalidFormat` when given string separated with invalid separator `$`", function () {
        mockValidateStatisticTag("123$abc");
        expect(mockValidateStatisticTag).toHaveBeenCalledTimes(1);
        expect(mockValidateStatisticTag).toHaveReturnedWith(validateStatisticTag_1.ValidateStatisticTagErrorType.invalidFormat);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVTdGF0aXN0aWNUYWcudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvaW5wdXQtdmFsaWRhdGlvbi92YWxpZGF0ZVN0YXRpc3RpY1RhZy50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7OztHQUlHOztBQUVILCtEQUE2RjtBQUU3RixJQUFNLHdCQUF3QixHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsMkNBQW9CLENBQUMsQ0FBQztBQUMvRCxTQUFTLENBQUMsd0JBQXdCLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDOUMsUUFBUSxDQUFDLHdCQUF3QixDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBRS9DLFFBQVEsQ0FBQyxvQ0FBb0MsRUFBRTtJQUM3QyxFQUFFLENBQUMsb0ZBQW9GLEVBQUU7UUFDdkYsd0JBQXdCLENBQUMsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDcEQsTUFBTSxDQUFDLHdCQUF3QixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUQsTUFBTSxDQUFDLHdCQUF3QixDQUFDLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUQsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsOEVBQThFLEVBQUU7UUFDakYsd0JBQXdCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEMsTUFBTSxDQUFDLHdCQUF3QixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUQsTUFBTSxDQUFDLHdCQUF3QixDQUFDLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUQsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsOEVBQThFLEVBQUU7UUFDakYsd0JBQXdCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEMsTUFBTSxDQUFDLHdCQUF3QixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUQsTUFBTSxDQUFDLHdCQUF3QixDQUFDLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUQsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsaUVBQWlFLEVBQUU7UUFDcEUsd0JBQXdCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEMsTUFBTSxDQUFDLHdCQUF3QixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUQsTUFBTSxDQUFDLHdCQUF3QixDQUFDLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUQsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsNkVBQTZFLEVBQUU7UUFDaEYsd0JBQXdCLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDcEMsTUFBTSxDQUFDLHdCQUF3QixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUQsTUFBTSxDQUFDLHdCQUF3QixDQUFDLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUQsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsa0ZBQWtGLEVBQUU7UUFDckYsd0JBQXdCLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDeEMsTUFBTSxDQUFDLHdCQUF3QixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUQsTUFBTSxDQUFDLHdCQUF3QixDQUFDLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUQsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsc0RBQXNELEVBQUU7UUFDekQsd0JBQXdCLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDN0IsTUFBTSxDQUFDLHdCQUF3QixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUQsTUFBTSxDQUFDLHdCQUF3QixDQUFDLENBQUMsa0JBQWtCLENBQUMsb0RBQTZCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0YsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsMEdBQTBHLEVBQUU7UUFDN0csd0JBQXdCLENBQUMsdUNBQXVDLENBQUMsQ0FBQztRQUNsRSxNQUFNLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxRCxNQUFNLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxvREFBNkIsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3ZHLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLDhFQUE4RSxFQUFFO1FBQ2pGLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2pDLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFELE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLG9EQUE2QixDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ25HLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLDRFQUE0RSxFQUFFO1FBQy9FLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2pDLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFELE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLG9EQUE2QixDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ25HLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLDZEQUE2RCxFQUFFO1FBQ2hFLHdCQUF3QixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzlCLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFELE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLG9EQUE2QixDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ25HLENBQUMsQ0FBQyxDQUFDO0lBRUgsMkJBQTJCO0lBQzNCLEVBQUUsQ0FBQyw2RkFBNkYsRUFBRTtRQUNoRyx3QkFBd0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNwQyxNQUFNLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxRCxNQUFNLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxvREFBNkIsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNuRyxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIn0=