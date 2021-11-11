"use strict";
/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var validateSecretKey_1 = require("./validateSecretKey");
var mockValidateSecretKey = jest.fn(validateSecretKey_1.validateSecretKey);
afterEach(mockValidateSecretKey.mockClear);
afterAll(mockValidateSecretKey.mockRestore);
describe("validateSecretKey returns correct output", function () {
    it("returns empty error string when given empty string, but it is not a required field", function () {
        mockValidateSecretKey("", { isRequired: false });
        expect(mockValidateSecretKey).toHaveBeenCalledTimes(1);
        expect(mockValidateSecretKey).toHaveReturnedWith(null);
    });
    it("returns empty error string when given a string containing only symbols other than asterisks", function () {
        mockValidateSecretKey("~!@#$%^&()_+}{}|\"':?></");
        expect(mockValidateSecretKey).toHaveBeenCalledTimes(1);
        expect(mockValidateSecretKey).toHaveReturnedWith(null);
    });
    it("returns empty error string when given a string containing only alphabets", function () {
        mockValidateSecretKey("asdfghjkl");
        expect(mockValidateSecretKey).toHaveBeenCalledTimes(1);
        expect(mockValidateSecretKey).toHaveReturnedWith(null);
    });
    it("returns empty error string when given a string contains an asterisk", function () {
        mockValidateSecretKey("abcde*ghijk");
        expect(mockValidateSecretKey).toHaveBeenCalledTimes(1);
        expect(mockValidateSecretKey).toHaveReturnedWith(validateSecretKey_1.ValidateSecretKeyErrorType.invalidFormat);
    });
    it("returns error string 'invalidFormat' when given a string contains a white space", function () {
        mockValidateSecretKey("abcde ghijk");
        expect(mockValidateSecretKey).toHaveBeenCalledTimes(1);
        expect(mockValidateSecretKey).toHaveReturnedWith(validateSecretKey_1.ValidateSecretKeyErrorType.invalidFormat);
    });
    it("returns error string 'empty' when given empty string", function () {
        mockValidateSecretKey("");
        expect(mockValidateSecretKey).toHaveBeenCalledTimes(1);
        expect(mockValidateSecretKey).toHaveReturnedWith(validateSecretKey_1.ValidateSecretKeyErrorType.empty);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVTZWNyZXRLZXkudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvaW5wdXQtdmFsaWRhdGlvbi92YWxpZGF0ZVNlY3JldEtleS50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7OztHQUlHOztBQUVILHlEQUFvRjtBQUVwRixJQUFNLHFCQUFxQixHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMscUNBQWlCLENBQUMsQ0FBQztBQUN6RCxTQUFTLENBQUMscUJBQXFCLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDM0MsUUFBUSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBRTVDLFFBQVEsQ0FBQywwQ0FBMEMsRUFBRTtJQUNuRCxFQUFFLENBQUMsb0ZBQW9GLEVBQUU7UUFDdkYscUJBQXFCLENBQUMsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDakQsTUFBTSxDQUFDLHFCQUFxQixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkQsTUFBTSxDQUFDLHFCQUFxQixDQUFDLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekQsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsNkZBQTZGLEVBQUU7UUFDaEcscUJBQXFCLENBQUMsMEJBQTBCLENBQUMsQ0FBQztRQUNsRCxNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2RCxNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6RCxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQywwRUFBMEUsRUFBRTtRQUM3RSxxQkFBcUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNuQyxNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2RCxNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6RCxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxxRUFBcUUsRUFBRTtRQUN4RSxxQkFBcUIsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNyQyxNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2RCxNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyw4Q0FBMEIsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUM3RixDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxpRkFBaUYsRUFBRTtRQUNwRixxQkFBcUIsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNyQyxNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2RCxNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyw4Q0FBMEIsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUM3RixDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxzREFBc0QsRUFBRTtRQUN6RCxxQkFBcUIsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMxQixNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2RCxNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyw4Q0FBMEIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNyRixDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIn0=