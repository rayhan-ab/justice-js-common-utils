"use strict";
/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var validateChannelName_1 = require("./validateChannelName");
var mockValidateChannelName = jest.fn(validateChannelName_1.validateChannelName);
afterEach(mockValidateChannelName.mockClear);
afterAll(mockValidateChannelName.mockRestore);
describe("validateChannelName returns correct output", function () {
    it("returns empty error string when given empty string, but it is not a required field", function () {
        mockValidateChannelName("", { isRequired: false });
        expect(mockValidateChannelName).toHaveBeenCalledTimes(1);
        expect(mockValidateChannelName).toHaveReturnedWith(null);
    });
    it("returns empty error string when given channel name alphabet only without channel name separator", function () {
        mockValidateChannelName("abc");
        expect(mockValidateChannelName).toHaveBeenCalledTimes(1);
        expect(mockValidateChannelName).toHaveReturnedWith(null);
    });
    it("returns empty error string when given channel name number only without channel name separator", function () {
        mockValidateChannelName("123");
        expect(mockValidateChannelName).toHaveBeenCalledTimes(1);
        expect(mockValidateChannelName).toHaveReturnedWith(null);
    });
    it("returns empty error string when given channel name alphabet only with channel name separator", function () {
        mockValidateChannelName("abc-abc");
        expect(mockValidateChannelName).toHaveBeenCalledTimes(1);
        expect(mockValidateChannelName).toHaveReturnedWith(null);
    });
    it("returns empty error string when given channel name number only with channel name separator", function () {
        mockValidateChannelName("123-123");
        expect(mockValidateChannelName).toHaveBeenCalledTimes(1);
        expect(mockValidateChannelName).toHaveReturnedWith(null);
    });
    it("returns empty error string when given channel name number and alphabet with channel name separator", function () {
        mockValidateChannelName("123-abc");
        expect(mockValidateChannelName).toHaveBeenCalledTimes(1);
        expect(mockValidateChannelName).toHaveReturnedWith(null);
    });
    it("returns empty error string when given channel name with 2 channel name separator", function () {
        mockValidateChannelName("abc-abc-def");
        expect(mockValidateChannelName).toHaveBeenCalledTimes(1);
        expect(mockValidateChannelName).toHaveReturnedWith(null);
    });
    it("returns error string `empty` when given empty string", function () {
        mockValidateChannelName("");
        expect(mockValidateChannelName).toHaveBeenCalledTimes(1);
        expect(mockValidateChannelName).toHaveReturnedWith(validateChannelName_1.ValidateChannelNameErrorType.empty);
    });
    it("returns error string `exceedLengthLimit` when given string with length more than default max length (64)", function () {
        mockValidateChannelName("abc-abc-abc-abc-abc-abc-abc-abc-abc-abc-abc-abc-abc-abc-abc-abc-abc");
        expect(mockValidateChannelName).toHaveBeenCalledTimes(1);
        expect(mockValidateChannelName).toHaveReturnedWith(validateChannelName_1.ValidateChannelNameErrorType.exceedLengthLimit);
    });
    it("returns error string `invalidFormat` when given symbol only", function () {
        mockValidateChannelName("@#");
        expect(mockValidateChannelName).toHaveBeenCalledTimes(1);
        expect(mockValidateChannelName).toHaveReturnedWith(validateChannelName_1.ValidateChannelNameErrorType.invalidFormat);
    });
    it("returns error string `invalidFormat` when given alphabets that ends in channel separator", function () {
        mockValidateChannelName("abc-");
        expect(mockValidateChannelName).toHaveBeenCalledTimes(1);
        expect(mockValidateChannelName).toHaveReturnedWith(validateChannelName_1.ValidateChannelNameErrorType.invalidFormat);
    });
    // tslint:disable-next-line
    it("returns error string `invalidFormat` when given alphabets that is separated with double channel separator", function () {
        mockValidateChannelName("abc--abc");
        expect(mockValidateChannelName).toHaveBeenCalledTimes(1);
        expect(mockValidateChannelName).toHaveReturnedWith(validateChannelName_1.ValidateChannelNameErrorType.invalidFormat);
    });
    it("returns error string `invalidFormat` when given alphabet that is separated with invalid separator `$`", function () {
        mockValidateChannelName("abc$abc");
        expect(mockValidateChannelName).toHaveBeenCalledTimes(1);
        expect(mockValidateChannelName).toHaveReturnedWith(validateChannelName_1.ValidateChannelNameErrorType.invalidFormat);
    });
    it("returns error string `invalidFormat` when given a bit long string with an invalid character", function () {
        mockValidateChannelName("euroereojfoejeofjefjaklfjalkfjlajf*");
        expect(mockValidateChannelName).toHaveBeenCalledTimes(1);
        expect(mockValidateChannelName).toHaveReturnedWith(validateChannelName_1.ValidateChannelNameErrorType.invalidFormat);
    });
    it("returns error string `exceedLengthLimit` when given an invalid string that exceeds the length limit", function () {
        mockValidateChannelName("accelbyteaccelbyteaccelbyteaccelbyteaccelbyteaccelbyteaccelbytes ");
        expect(mockValidateChannelName).toHaveBeenCalledTimes(1);
        expect(mockValidateChannelName).toHaveReturnedWith(validateChannelName_1.ValidateChannelNameErrorType.exceedLengthLimit);
    });
    it("return error string `invalidFormat` when given combination betwen underscore and dash only", function () {
        mockValidateChannelName("-_");
        expect(mockValidateChannelName).toHaveBeenCalledTimes(1);
        expect(mockValidateChannelName).toHaveReturnedWith(validateChannelName_1.ValidateChannelNameErrorType.invalidFormat);
    });
    it("return empty error string when given channel name with underscore", function () {
        mockValidateChannelName("unranked_game_name");
        expect(mockValidateChannelName).toHaveBeenCalledTimes(1);
        expect(mockValidateChannelName).toHaveReturnedWith(null);
    });
    it("return empty error string when given channel name with underscore and uppercase", function () {
        mockValidateChannelName("UNRANKED_GAME_NAME");
        expect(mockValidateChannelName).toHaveBeenCalledTimes(1);
        expect(mockValidateChannelName).toHaveReturnedWith(null);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVDaGFubmVsTmFtZS50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9pbnB1dC12YWxpZGF0aW9uL3ZhbGlkYXRlQ2hhbm5lbE5hbWUudGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7R0FJRzs7QUFFSCw2REFBMEY7QUFFMUYsSUFBTSx1QkFBdUIsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLHlDQUFtQixDQUFDLENBQUM7QUFDN0QsU0FBUyxDQUFDLHVCQUF1QixDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQzdDLFFBQVEsQ0FBQyx1QkFBdUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUU5QyxRQUFRLENBQUMsNENBQTRDLEVBQUU7SUFDckQsRUFBRSxDQUFDLG9GQUFvRixFQUFFO1FBQ3ZGLHVCQUF1QixDQUFDLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQ25ELE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pELE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNELENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLGlHQUFpRyxFQUFFO1FBQ3BHLHVCQUF1QixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9CLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pELE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNELENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLCtGQUErRixFQUFFO1FBQ2xHLHVCQUF1QixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9CLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLHFCQUFx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