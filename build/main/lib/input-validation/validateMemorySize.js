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
exports.ValidateMemorySizeErrorType = types_1.ExtendEnum(validateLength_1.ValidateLengthErrorType, errorType_1.CommonValidationErrorType.invalidFormat);
exports.validateMemorySize = function (value, _a) {
    var _b = (_a === void 0 ? {} : _a).isRequired, isRequired = _b === void 0 ? true : _b;
    var MAX_LENGTH = 9;
    var REGEX = "^[0-9]+$";
    if (validator_1.isEmpty(value)) {
        if (!isRequired) {
            return null;
        }
        return exports.ValidateMemorySizeErrorType.empty;
    }
    if (!validator_1.matches(value, REGEX)) {
        return exports.ValidateMemorySizeErrorType.invalidFormat;
    }
    return validateLength_1.validateLength(value, { max: MAX_LENGTH });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVNZW1vcnlTaXplLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9pbnB1dC12YWxpZGF0aW9uL3ZhbGlkYXRlTWVtb3J5U2l6ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7R0FJRzs7QUFFSCx1Q0FBNkM7QUFDN0MsMkNBQXFEO0FBQ3JELGtEQUFpRTtBQUNqRSxtREFBMkU7QUFFOUQsUUFBQSwyQkFBMkIsR0FBRyxrQkFBVSxDQUFDLHdDQUF1QixFQUFFLHFDQUF5QixDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBTzNHLFFBQUEsa0JBQWtCLEdBQUcsVUFBQyxLQUFhLEVBQUUsRUFBcUQ7UUFBbkQseUNBQWlCLEVBQWpCLHNDQUFpQjtJQUNuRSxJQUFNLFVBQVUsR0FBRyxDQUFDLENBQUM7SUFDckIsSUFBTSxLQUFLLEdBQUcsVUFBVSxDQUFDO0lBQ3pCLElBQUksbUJBQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUNsQixJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2YsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELE9BQU8sbUNBQTJCLENBQUMsS0FBSyxDQUFDO0tBQzFDO0lBQ0QsSUFBSSxDQUFDLG1CQUFPLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxFQUFFO1FBQzFCLE9BQU8sbUNBQTJCLENBQUMsYUFBYSxDQUFDO0tBQ2xEO0lBQ0QsT0FBTywrQkFBYyxDQUFDLEtBQUssRUFBRSxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDO0FBQ3BELENBQUMsQ0FBQyJ9