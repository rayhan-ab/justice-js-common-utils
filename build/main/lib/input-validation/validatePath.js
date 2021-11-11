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
var validateLength_1 = require("./validateLength");
exports.ValidatePathErrorType = types_1.ExtendEnum(validateLength_1.ValidateLengthErrorType, errorType_1.CommonValidationErrorType.invalidFormat);
exports.validatePath = function (value, _a) {
    var _b = (_a === void 0 ? {} : _a).isRequired, isRequired = _b === void 0 ? true : _b;
    var REGEX = "^(\\/[a-zA-Z0-9_-]+)+$";
    if (validator_1.isEmpty(value)) {
        if (!isRequired) {
            return null;
        }
        return exports.ValidatePathErrorType.empty;
    }
    if (!validator_1.matches(value, REGEX)) {
        return exports.ValidatePathErrorType.invalidFormat;
    }
    return validateLength_1.validateLength(value);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVQYXRoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9pbnB1dC12YWxpZGF0aW9uL3ZhbGlkYXRlUGF0aC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7R0FJRzs7QUFFSCx1Q0FBNkM7QUFDN0MsMkNBQXFEO0FBQ3JELGtEQUFpRTtBQUNqRSxtREFBMkU7QUFFOUQsUUFBQSxxQkFBcUIsR0FBRyxrQkFBVSxDQUFDLHdDQUF1QixFQUFFLHFDQUF5QixDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBT3JHLFFBQUEsWUFBWSxHQUFHLFVBQUMsS0FBYSxFQUFFLEVBQW1EO1FBQWpELHlDQUFpQixFQUFqQixzQ0FBaUI7SUFDN0QsSUFBTSxLQUFLLEdBQUcsd0JBQXdCLENBQUM7SUFDdkMsSUFBSSxtQkFBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ2xCLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDZixPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsT0FBTyw2QkFBcUIsQ0FBQyxLQUFLLENBQUM7S0FDcEM7SUFDRCxJQUFJLENBQUMsbUJBQU8sQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEVBQUU7UUFDMUIsT0FBTyw2QkFBcUIsQ0FBQyxhQUFhLENBQUM7S0FDNUM7SUFDRCxPQUFPLCtCQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDL0IsQ0FBQyxDQUFDIn0=