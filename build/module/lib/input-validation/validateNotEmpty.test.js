/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { validateNotEmpty, ValidateNotEmptyErrorType } from "./validateNotEmpty";
var mockValidateNotEmpty = jest.fn(validateNotEmpty);
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
        expect(mockValidateNotEmpty).toHaveReturnedWith(ValidateNotEmptyErrorType.empty);
    });
    it("returns empty error string when given space", function () {
        mockValidateNotEmpty(" ", { ignore_whitespace: true });
        expect(mockValidateNotEmpty).toHaveBeenCalledTimes(1);
        expect(mockValidateNotEmpty).toHaveReturnedWith(ValidateNotEmptyErrorType.empty);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVOb3RFbXB0eS50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9pbnB1dC12YWxpZGF0aW9uL3ZhbGlkYXRlTm90RW1wdHkudGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLGdCQUFnQixFQUFFLHlCQUF5QixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFakYsSUFBTSxvQkFBb0IsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFDdkQsU0FBUyxDQUFDLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQzFDLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUUzQyxRQUFRLENBQUMseUNBQXlDLEVBQUU7SUFDbEQsRUFBRSxDQUFDLG9FQUFvRSxFQUFFO1FBQ3ZFLG9CQUFvQixDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDdkMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEQsTUFBTSxDQUFDLG9CQUFvQixDQUFDLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEQsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMseURBQXlELEVBQUU7UUFDNUQsb0JBQW9CLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDekIsTUFBTSxDQUFDLG9CQUFvQixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEQsTUFBTSxDQUFDLG9CQUFvQixDQUFDLENBQUMsa0JBQWtCLENBQUMseUJBQXlCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkYsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsNkNBQTZDLEVBQUU7UUFDaEQsb0JBQW9CLENBQUMsR0FBRyxFQUFFLEVBQUUsaUJBQWlCLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUN2RCxNQUFNLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0RCxNQUFNLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyx5QkFBeUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuRixDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIn0=