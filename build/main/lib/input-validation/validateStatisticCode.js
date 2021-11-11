"use strict";
/*
 * Copyright (c) 2020. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var validator_1 = require("validator");
var types_1 = require("../../types/types");
var errorType_1 = require("./constant/errorType");
var validateLength_1 = require("./validateLength");
exports.ValidateStatisticCodeErrorType = types_1.ExtendEnum(validateLength_1.ValidateLengthErrorType, errorType_1.CommonValidationErrorType.invalidFormat, errorType_1.CommonValidationErrorType.alreadyUsed);
exports.validateStatisticCode = function (value, _a) {
    var _b = (_a === void 0 ? {} : _a).isRequired, isRequired = _b === void 0 ? true : _b;
    var REGEX = "^[a-z0-9]+([-]{0,1}[a-z0-9]+)*$";
    if (validator_1.isEmpty(value)) {
        if (!isRequired) {
            return null;
        }
        return exports.ValidateStatisticCodeErrorType.empty;
    }
    if (!validator_1.matches(value, REGEX)) {
        return exports.ValidateStatisticCodeErrorType.invalidFormat;
    }
    return validateLength_1.validateLength(value);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVTdGF0aXN0aWNDb2RlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9pbnB1dC12YWxpZGF0aW9uL3ZhbGlkYXRlU3RhdGlzdGljQ29kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7R0FJRzs7QUFFSCx1Q0FBNkM7QUFDN0MsMkNBQXFEO0FBQ3JELGtEQUFpRTtBQUNqRSxtREFBMkU7QUFFOUQsUUFBQSw4QkFBOEIsR0FBRyxrQkFBVSxDQUN0RCx3Q0FBdUIsRUFDdkIscUNBQXlCLENBQUMsYUFBYSxFQUN2QyxxQ0FBeUIsQ0FBQyxXQUFXLENBQ3RDLENBQUM7QUFPVyxRQUFBLHFCQUFxQixHQUFHLFVBQUMsS0FBYSxFQUFFLEVBQXdEO1FBQXRELHlDQUFpQixFQUFqQixzQ0FBaUI7SUFDdEUsSUFBTSxLQUFLLEdBQUcsaUNBQWlDLENBQUM7SUFDaEQsSUFBSSxtQkFBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ2xCLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDZixPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsT0FBTyxzQ0FBOEIsQ0FBQyxLQUFLLENBQUM7S0FDN0M7SUFDRCxJQUFJLENBQUMsbUJBQU8sQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEVBQUU7UUFDMUIsT0FBTyxzQ0FBOEIsQ0FBQyxhQUFhLENBQUM7S0FDckQ7SUFDRCxPQUFPLCtCQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDL0IsQ0FBQyxDQUFDIn0=