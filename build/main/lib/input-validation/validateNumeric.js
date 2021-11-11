"use strict";
/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var validator_1 = require("validator");
var types_1 = require("../../types/types");
var errorType_1 = require("./constant/errorType");
exports.ValidateNumericErrorType = types_1.Enum(errorType_1.CommonValidationErrorType.empty, errorType_1.CommonValidationErrorType.lessThanMinimumValue, errorType_1.CommonValidationErrorType.exceedMaximumValue, errorType_1.CommonValidationErrorType.invalidValue, errorType_1.CommonValidationErrorType.containsDecimal);
exports.validateNumeric = function (value, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.min, min = _c === void 0 ? Number.MIN_SAFE_INTEGER : _c, _d = _b.max, max = _d === void 0 ? Number.MAX_SAFE_INTEGER : _d, _e = _b.isRequired, isRequired = _e === void 0 ? true : _e, _f = _b.excludedNumbers, excludedNumbers = _f === void 0 ? [] : _f, _g = _b.allowDecimal, allowDecimal = _g === void 0 ? true : _g;
    var isMaxOptionSmallerThanMinOption = max < min;
    var isDecimalNumber = Number(value) % 1 !== 0;
    if (isMaxOptionSmallerThanMinOption) {
        throw new Error(errorType_1.ThrownErrorType.invalidOption);
    }
    if (validator_1.isEmpty(value)) {
        if (!isRequired) {
            return null;
        }
        return exports.ValidateNumericErrorType.empty;
    }
    if (!validator_1.isNumeric(value) || Number(value) in excludedNumbers) {
        return exports.ValidateNumericErrorType.invalidValue;
    }
    if (Number(value) < min) {
        return exports.ValidateNumericErrorType.lessThanMinimumValue;
    }
    if (Number(value) > max) {
        return exports.ValidateNumericErrorType.exceedMaximumValue;
    }
    if (!allowDecimal && isDecimalNumber) {
        return exports.ValidateNumericErrorType.containsDecimal;
    }
    return null;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVOdW1lcmljLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9pbnB1dC12YWxpZGF0aW9uL3ZhbGlkYXRlTnVtZXJpYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7R0FJRzs7QUFFSCx1Q0FBK0M7QUFDL0MsMkNBQXlDO0FBQ3pDLGtEQUFrRjtBQUVyRSxRQUFBLHdCQUF3QixHQUFHLFlBQUksQ0FDMUMscUNBQXlCLENBQUMsS0FBSyxFQUMvQixxQ0FBeUIsQ0FBQyxvQkFBb0IsRUFDOUMscUNBQXlCLENBQUMsa0JBQWtCLEVBQzVDLHFDQUF5QixDQUFDLFlBQVksRUFDdEMscUNBQXlCLENBQUMsZUFBZSxDQUMxQyxDQUFDO0FBV1csUUFBQSxlQUFlLEdBQUcsVUFDN0IsS0FBYSxFQUNiLEVBTTZCO1FBTjdCLDRCQU02QixFQUwzQixXQUE2QixFQUE3QixrREFBNkIsRUFDN0IsV0FBNkIsRUFBN0Isa0RBQTZCLEVBQzdCLGtCQUFpQixFQUFqQixzQ0FBaUIsRUFDakIsdUJBQW9CLEVBQXBCLHlDQUFvQixFQUNwQixvQkFBbUIsRUFBbkIsd0NBQW1CO0lBR3JCLElBQU0sK0JBQStCLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUNsRCxJQUFNLGVBQWUsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoRCxJQUFJLCtCQUErQixFQUFFO1FBQ25DLE1BQU0sSUFBSSxLQUFLLENBQUMsMkJBQWUsQ0FBQyxhQUFhLENBQUMsQ0FBQztLQUNoRDtJQUNELElBQUksbUJBQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUNsQixJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2YsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELE9BQU8sZ0NBQXdCLENBQUMsS0FBSyxDQUFDO0tBQ3ZDO0lBQ0QsSUFBSSxDQUFDLHFCQUFTLENBQUMsS0FBSyxDQUFDLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLGVBQWUsRUFBRTtRQUN6RCxPQUFPLGdDQUF3QixDQUFDLFlBQVksQ0FBQztLQUM5QztJQUNELElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsRUFBRTtRQUN2QixPQUFPLGdDQUF3QixDQUFDLG9CQUFvQixDQUFDO0tBQ3REO0lBQ0QsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxFQUFFO1FBQ3ZCLE9BQU8sZ0NBQXdCLENBQUMsa0JBQWtCLENBQUM7S0FDcEQ7SUFDRCxJQUFJLENBQUMsWUFBWSxJQUFJLGVBQWUsRUFBRTtRQUNwQyxPQUFPLGdDQUF3QixDQUFDLGVBQWUsQ0FBQztLQUNqRDtJQUVELE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQyxDQUFDIn0=