"use strict";
/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var validateNotEmpty_1 = require("./validateNotEmpty");
var mockValidateNotEmpty = jest.fn(validateNotEmpty_1.validateNotEmpty);
afterEach(mockValidateNotEmpty.mockClear);
afterAll(mockValidateNotEmpty.mockRestore);
describe("validateNotEmpty returns correct output", function () {
    it("returns empty error string when given any string that is not empty", function () {
        mockValidateNotEmpty("test123!@#$^&*");
        expect(mockValidateNotEmpty).toHaveBeenCalledTimes(1);
        expect(mockValidateNotEmpty).toHaveReturnedWith(null);
    });
    it("returns error string 'empty' when given an empty string", function () {
        mockValidateNotEmpty("");
        expect(mockValidateNotEmpty).toHaveBeenCalledTimes(1);
        expect(mockValidateNotEmpty).toHaveReturnedWith(validateNotEmpty_1.ValidateNotEmptyErrorType.empty);
    });
    it("returns empty error string when given space", function () {
        mockValidateNotEmpty(" ", { ignore_whitespace: true });
        expect(mockValidateNotEmpty).toHaveBeenCalledTimes(1);
        expect(mockValidateNotEmpty).toHaveReturnedWith(validateNotEmpty_1.ValidateNotEmptyErrorType.empty);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVOb3RFbXB0eS50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9pbnB1dC12YWxpZGF0aW9uL3ZhbGlkYXRlTm90RW1wdHkudGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7R0FJRzs7QUFFSCx1REFBaUY7QUFFakYsSUFBTSxvQkFBb0IsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLG1DQUFnQixDQUFDLENBQUM7QUFDdkQsU0FBUyxDQUFDLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQzFDLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUUzQyxRQUFRLENBQUMseUNBQXlDLEVBQUU7SUFDbEQsRUFBRSxDQUFDLG9FQUFvRSxFQUFFO1FBQ3ZFLG9CQUFvQixDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDdkMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEQsTUFBTSxDQUFDLG9CQUFvQixDQUFDLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEQsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMseURBQXlELEVBQUU7UUFDNUQsb0JBQW9CLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDekIsTUFBTSxDQUFDLG9CQUFvQixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEQsTUFBTSxDQUFDLG9CQUFvQixDQUFDLENBQUMsa0JBQWtCLENBQUMsNENBQXlCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkYsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsNkNBQTZDLEVBQUU7UUFDaEQsb0JBQW9CLENBQUMsR0FBRyxFQUFFLEVBQUUsaUJBQWlCLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUN2RCxNQUFNLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0RCxNQUFNLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyw0Q0FBeUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuRixDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIn0=