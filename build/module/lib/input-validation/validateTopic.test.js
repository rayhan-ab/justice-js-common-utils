/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { validateTopic, ValidateTopicErrorType } from "./validateTopic";
var mockValidateTopic = jest.fn(validateTopic);
afterEach(mockValidateTopic.mockClear);
afterAll(mockValidateTopic.mockRestore);
describe("validateTopic returns correct output", function () {
    it("returns empty error string when given empty string, but it is not a required field", function () {
        mockValidateTopic("", { isRequired: false });
        expect(mockValidateTopic).toHaveBeenCalledTimes(1);
        expect(mockValidateTopic).toHaveReturnedWith(null);
    });
    it("returns empty error string when given uppercase alphabets without separators", function () {
        mockValidateTopic("ABC");
        expect(mockValidateTopic).toHaveBeenCalledTimes(1);
        expect(mockValidateTopic).toHaveReturnedWith(null);
    });
    it("returns empty error string when given uppercase alphabets with single `_` separators ", function () {
        mockValidateTopic("ABC_ABC");
        expect(mockValidateTopic).toHaveBeenCalledTimes(1);
        expect(mockValidateTopic).toHaveReturnedWith(null);
    });
    it("returns empty error string when given uppercase alphabets with 2 `_`separators", function () {
        mockValidateTopic("ABC_ABC_ABC");
        expect(mockValidateTopic).toHaveBeenCalledTimes(1);
        expect(mockValidateTopic).toHaveReturnedWith(null);
    });
    it("returns error string `empty` when given empty string", function () {
        mockValidateTopic("");
        expect(mockValidateTopic).toHaveBeenCalledTimes(1);
        expect(mockValidateTopic).toHaveReturnedWith(ValidateTopicErrorType.empty);
    });
    // tslint:disable-next-line
    it("returns error string `exceedLengthLimit` when given string with length more than default max length (256)", function () {
        mockValidateTopic(
        // tslint:disable-next-line
        "ABC_ABC_ABC_ABCABC_ABC_ABC_ABC_ABC_ABC_ABC_ABCABC_ABC_ABC_ABC_ABC_ABC_ABC_ABCABC_ABC_ABC_ABC_ABC_ABC_ABC_ABC_ABC_ABC_ABC_ABCABC_ABC_ABC_ABCABC_ABC_ABC_ABC_ABC_ABC_ABC_ABCABC_ABC_ABC_ABC_ABC_ABC_ABC_ABCABC_ABC_ABC_ABC_ABC_ABC_ABC_ABCABC_ABC_ABC_ABC_ABC_ABC_A");
        expect(mockValidateTopic).toHaveBeenCalledTimes(1);
        expect(mockValidateTopic).toHaveReturnedWith(ValidateTopicErrorType.exceedLengthLimit);
    });
    it("returns error string `invalidFormat` when given symbol only", function () {
        mockValidateTopic("@#");
        expect(mockValidateTopic).toHaveBeenCalledTimes(1);
        expect(mockValidateTopic).toHaveReturnedWith(ValidateTopicErrorType.invalidFormat);
    });
    it("returns error string `invalidFormat` when given numbers only", function () {
        mockValidateTopic("123");
        expect(mockValidateTopic).toHaveBeenCalledTimes(1);
        expect(mockValidateTopic).toHaveReturnedWith(ValidateTopicErrorType.invalidFormat);
    });
    it("returns error string `invalidFormat` when given lowercase only", function () {
        mockValidateTopic("abc");
        expect(mockValidateTopic).toHaveBeenCalledTimes(1);
        expect(mockValidateTopic).toHaveReturnedWith(ValidateTopicErrorType.invalidFormat);
    });
    it("returns error string `invalidFormat` when given uppercase and lowercase separated by `_`", function () {
        mockValidateTopic("ABC_abc");
        expect(mockValidateTopic).toHaveBeenCalledTimes(1);
        expect(mockValidateTopic).toHaveReturnedWith(ValidateTopicErrorType.invalidFormat);
    });
    it("returns error string `invalidFormat` when given uppercase alphabets that ends in separator `_`", function () {
        mockValidateTopic("ABC_");
        expect(mockValidateTopic).toHaveBeenCalledTimes(1);
        expect(mockValidateTopic).toHaveReturnedWith(ValidateTopicErrorType.invalidFormat);
    });
    // tslint:disable-next-line
    it("returns error string `invalidFormat` when given uppercase alphabets that is separated with double separator `_`", function () {
        mockValidateTopic("ABC__ABC");
        expect(mockValidateTopic).toHaveBeenCalledTimes(1);
        expect(mockValidateTopic).toHaveReturnedWith(ValidateTopicErrorType.invalidFormat);
    });
    // tslint:disable-next-line
    it("returns error string `invalidFormat` when given uppercase alphabets that is separated with invalid separator `$`", function () {
        mockValidateTopic("ABC$ABC");
        expect(mockValidateTopic).toHaveBeenCalledTimes(1);
        expect(mockValidateTopic).toHaveReturnedWith(ValidateTopicErrorType.invalidFormat);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVUb3BpYy50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9pbnB1dC12YWxpZGF0aW9uL3ZhbGlkYXRlVG9waWMudGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLGFBQWEsRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXhFLElBQU0saUJBQWlCLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUNqRCxTQUFTLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDdkMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBRXhDLFFBQVEsQ0FBQyxzQ0FBc0MsRUFBRTtJQUMvQyxFQUFFLENBQUMsb0ZBQW9GLEVBQUU7UUFDdkYsaUJBQWlCLENBQUMsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDN0MsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkQsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckQsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsOEVBQThFLEVBQUU7UUFDakYsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekIsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkQsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckQsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsdUZBQXVGLEVBQUU7UUFDMUYsaUJBQWlCLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDN0IsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkQsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckQsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsZ0ZBQWdGLEVBQUU7UUFDbkYsaUJBQWlCLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDakMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkQsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckQsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsc0RBQXNELEVBQUU7UUFDekQsaUJBQWlCLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDdEIsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkQsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUMsa0JBQWtCLENBQUMsc0JBQXNCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0UsQ0FBQyxDQUFDLENBQUM7SUFDSCwyQkFBMkI7SUFDM0IsRUFBRSxDQUFDLDJHQUEyRyxFQUFFO1FBQzlHLGlCQUFpQjtRQUNmLDJCQUEyQjtRQUMzQixtUUFBbVEsQ0FDcFEsQ0FBQztRQUNGLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25ELE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLHNCQUFzQixDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDekYsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsNkRBQTZELEVBQUU7UUFDaEUsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkQsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUMsa0JBQWtCLENBQUMsc0JBQXNCLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDckYsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsOERBQThELEVBQUU7UUFDakUsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekIsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkQsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUMsa0JBQWtCLENBQUMsc0JBQXNCLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDckYsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsZ0VBQWdFLEVBQUU7UUFDbkUsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekIsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkQsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUMsa0JBQWtCLENBQUMsc0JBQXNCLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDckYsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsMEZBQTBGLEVBQUU7UUFDN0YsaUJBQWlCLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDN0IsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkQsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUMsa0JBQWtCLENBQUMsc0JBQXNCLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDckYsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsZ0dBQWdHLEVBQUU7UUFDbkcsaUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUIsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkQsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUMsa0JBQWtCLENBQUMsc0JBQXNCLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDckYsQ0FBQyxDQUFDLENBQUM7SUFDSCwyQkFBMkI7SUFDM0IsRUFBRSxDQUFDLGlIQUFpSCxFQUFFO1FBQ3BILGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzlCLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25ELE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLHNCQUFzQixDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3JGLENBQUMsQ0FBQyxDQUFDO0lBQ0gsMkJBQTJCO0lBQzNCLEVBQUUsQ0FBQyxrSEFBa0gsRUFBRTtRQUNySCxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM3QixNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuRCxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxzQkFBc0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNyRixDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIn0=