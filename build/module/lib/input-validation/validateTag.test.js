/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { validateTag, ValidateTagErrorType } from "./validateTag";
var mockValidateTag = jest.fn(validateTag);
afterEach(mockValidateTag.mockClear);
afterAll(mockValidateTag.mockRestore);
describe("validateTag returns correct output", function () {
    it("returns empty error string when given empty string, but it is not a required field", function () {
        mockValidateTag("", { isRequired: false });
        expect(mockValidateTag).toHaveBeenCalledTimes(1);
        expect(mockValidateTag).toHaveReturnedWith(null);
    });
    it("returns empty error string when given uppercase alphabets without separators ", function () {
        mockValidateTag("ABC");
        expect(mockValidateTag).toHaveBeenCalledTimes(1);
        expect(mockValidateTag).toHaveReturnedWith(null);
    });
    it("returns empty error string when given alphabets with single `-` separators ", function () {
        mockValidateTag("abc-ABC");
        expect(mockValidateTag).toHaveBeenCalledTimes(1);
        expect(mockValidateTag).toHaveReturnedWith(null);
    });
    it("returns empty error string when given alphabets with single `:` separators ", function () {
        mockValidateTag("abc:ABC");
        expect(mockValidateTag).toHaveBeenCalledTimes(1);
        expect(mockValidateTag).toHaveReturnedWith(null);
    });
    it("returns empty error string when given alphabets with single `_` separators ", function () {
        mockValidateTag("abc_ABC");
        expect(mockValidateTag).toHaveBeenCalledTimes(1);
        expect(mockValidateTag).toHaveReturnedWith(null);
    });
    it("returns empty error string when given alphabets with 2 different separators `-` and `:` ", function () {
        mockValidateTag("abc-abc:ABC");
        expect(mockValidateTag).toHaveBeenCalledTimes(1);
        expect(mockValidateTag).toHaveReturnedWith(null);
    });
    it("returns error string `empty` when given empty string", function () {
        mockValidateTag("");
        expect(mockValidateTag).toHaveBeenCalledTimes(1);
        expect(mockValidateTag).toHaveReturnedWith(ValidateTagErrorType.empty);
    });
    it("returns error string `exceedLengthLimit` when given string with length more than default max length (30)", function () {
        mockValidateTag("abc-ABC-abc-ABCabc-ABC-abc-ABCD");
        expect(mockValidateTag).toHaveBeenCalledTimes(1);
        expect(mockValidateTag).toHaveReturnedWith(ValidateTagErrorType.exceedLengthLimit);
    });
    it("returns error string `invalidFormat` when given numeric", function () {
        mockValidateTag("123");
        expect(mockValidateTag).toHaveBeenCalledTimes(1);
        expect(mockValidateTag).toHaveReturnedWith(ValidateTagErrorType.invalidFormat);
    });
    it("returns error string `invalidFormat` when given symbol only", function () {
        mockValidateTag("@");
        expect(mockValidateTag).toHaveBeenCalledTimes(1);
        expect(mockValidateTag).toHaveReturnedWith(ValidateTagErrorType.invalidFormat);
    });
    it("returns error string `invalidFormat` when given uppercase alphabets that ends in separator `-`", function () {
        mockValidateTag("ABC-");
        expect(mockValidateTag).toHaveBeenCalledTimes(1);
        expect(mockValidateTag).toHaveReturnedWith(ValidateTagErrorType.invalidFormat);
    });
    // tslint:disable-next-line
    it("returns error string `invalidFormat` when given uppercase alphabets and numeric that is separated with double separator `:`", function () {
        mockValidateTag("123::ABC");
        expect(mockValidateTag).toHaveBeenCalledTimes(1);
        expect(mockValidateTag).toHaveReturnedWith(ValidateTagErrorType.invalidFormat);
    });
    // tslint:disable-next-line
    it("returns error string `invalidFormat` when given numeric and lowercase alphabet that is separated with invalid separator `$`", function () {
        mockValidateTag("123$abc");
        expect(mockValidateTag).toHaveBeenCalledTimes(1);
        expect(mockValidateTag).toHaveReturnedWith(ValidateTagErrorType.invalidFormat);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVUYWcudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvaW5wdXQtdmFsaWRhdGlvbi92YWxpZGF0ZVRhZy50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFFSCxPQUFPLEVBQUUsV0FBVyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWxFLElBQU0sZUFBZSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDN0MsU0FBUyxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNyQyxRQUFRLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBRXRDLFFBQVEsQ0FBQyxvQ0FBb0MsRUFBRTtJQUM3QyxFQUFFLENBQUMsb0ZBQW9GLEVBQUU7UUFDdkYsZUFBZSxDQUFDLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQzNDLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqRCxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkQsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsK0VBQStFLEVBQUU7UUFDbEYsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZCLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqRCxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkQsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsNkVBQTZFLEVBQUU7UUFDaEYsZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzNCLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqRCxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkQsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsNkVBQTZFLEVBQUU7UUFDaEYsZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzNCLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqRCxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkQsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsNkVBQTZFLEVBQUU7UUFDaEYsZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzNCLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqRCxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkQsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsMEZBQTBGLEVBQUU7UUFDN0YsZUFBZSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQy9CLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqRCxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkQsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsc0RBQXNELEVBQUU7UUFDekQsZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3BCLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqRCxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUMsa0JBQWtCLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekUsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsMEdBQTBHLEVBQUU7UUFDN0csZUFBZSxDQUFDLGlDQUFpQyxDQUFDLENBQUM7UUFDbkQsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pELE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxvQkFBb0IsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3JGLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLHlEQUF5RCxFQUFFO1FBQzVELGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2QixNQUFNLENBQUMsZUFBZSxDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakQsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLG9CQUFvQixDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ2pGLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLDZEQUE2RCxFQUFFO1FBQ2hFLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyQixNQUFNLENBQUMsZUFBZSxDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakQsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLG9CQUFvQixDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ2pGLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLGdHQUFnRyxFQUFFO1FBQ25HLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4QixNQUFNLENBQUMsZUFBZSxDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakQsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLG9CQUFvQixDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ2pGLENBQUMsQ0FBQyxDQUFDO0lBQ0gsMkJBQTJCO0lBQzNCLEVBQUUsQ0FBQyw2SEFBNkgsRUFBRTtRQUNoSSxlQUFlLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDNUIsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pELE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxvQkFBb0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNqRixDQUFDLENBQUMsQ0FBQztJQUNILDJCQUEyQjtJQUMzQixFQUFFLENBQUMsNkhBQTZILEVBQUU7UUFDaEksZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzNCLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqRCxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUMsa0JBQWtCLENBQUMsb0JBQW9CLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDakYsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyJ9