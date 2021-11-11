"use strict";
/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var validateOrderNumber_1 = require("./validateOrderNumber");
var mockValidateOrderNumber = jest.fn(validateOrderNumber_1.validateOrderNumber);
afterEach(mockValidateOrderNumber.mockClear);
afterAll(mockValidateOrderNumber.mockRestore);
describe("validateOrderNumber returns correct output", function () {
    it("returns empty error string when given empty string, but it is not a required field", function () {
        mockValidateOrderNumber("", { isRequired: false });
        expect(mockValidateOrderNumber).toHaveBeenCalledTimes(1);
        expect(mockValidateOrderNumber).toHaveReturnedWith(null);
    });
    it("returns empty error string when given an order number with correct format", function () {
        mockValidateOrderNumber("O1234567890123456");
        expect(mockValidateOrderNumber).toHaveBeenCalledTimes(1);
        expect(mockValidateOrderNumber).toHaveReturnedWith(null);
    });
    // tslint:disable-next-line
    it("returns error string 'invalid format' when given a 16 length order number", function () {
        mockValidateOrderNumber("O123456789012345");
        expect(mockValidateOrderNumber).toHaveBeenCalledTimes(1);
        expect(mockValidateOrderNumber).toHaveReturnedWith(validateOrderNumber_1.ValidateOrderNumberErrorType.invalidFormat);
    });
    it("returns error string invalidFormat when given random string", function () {
        mockValidateOrderNumber("123abc789def345");
        expect(mockValidateOrderNumber).toHaveBeenCalledTimes(1);
        expect(mockValidateOrderNumber).toHaveReturnedWith(validateOrderNumber_1.ValidateOrderNumberErrorType.invalidFormat);
    });
    it("returns error string 'empty' when given empty string", function () {
        mockValidateOrderNumber("");
        expect(mockValidateOrderNumber).toHaveBeenCalledTimes(1);
        expect(mockValidateOrderNumber).toHaveReturnedWith(validateOrderNumber_1.ValidateOrderNumberErrorType.empty);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVPcmRlck51bWJlci50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9pbnB1dC12YWxpZGF0aW9uL3ZhbGlkYXRlT3JkZXJOdW1iZXIudGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7R0FJRzs7QUFFSCw2REFBMEY7QUFFMUYsSUFBTSx1QkFBdUIsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLHlDQUFtQixDQUFDLENBQUM7QUFDN0QsU0FBUyxDQUFDLHVCQUF1QixDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQzdDLFFBQVEsQ0FBQyx1QkFBdUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUU5QyxRQUFRLENBQUMsNENBQTRDLEVBQUU7SUFDckQsRUFBRSxDQUFDLG9GQUFvRixFQUFFO1FBQ3ZGLHVCQUF1QixDQUFDLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQ25ELE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pELE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNELENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLDJFQUEyRSxFQUFFO1FBQzlFLHVCQUF1QixDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDN0MsTUFBTSxDQUFDLHVCQUF1QixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekQsTUFBTSxDQUFDLHVCQUF1QixDQUFDLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0QsQ0FBQyxDQUFDLENBQUM7SUFFSCwyQkFBMkI7SUFDM0IsRUFBRSxDQUFDLDJFQUEyRSxFQUFFO1FBQzlFLHVCQUF1QixDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDNUMsTUFBTSxDQUFDLHVCQUF1QixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekQsTUFBTSxDQUFDLHVCQUF1QixDQUFDLENBQUMsa0JBQWtCLENBQUMsa0RBQTRCLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDakcsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsNkRBQTZELEVBQUU7UUFDaEUsdUJBQXVCLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUMzQyxNQUFNLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6RCxNQUFNLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxrREFBNEIsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNqRyxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxzREFBc0QsRUFBRTtRQUN6RCx1QkFBdUIsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM1QixNQUFNLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6RCxNQUFNLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxrREFBNEIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6RixDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIn0=