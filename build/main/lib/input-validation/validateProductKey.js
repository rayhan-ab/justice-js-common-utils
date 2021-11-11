"use strict";
/*
 * Copyright (c) 2021. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var validator_1 = require("validator");
var types_1 = require("../../types/types");
var errorType_1 = require("./constant/errorType");
var validateLength_1 = require("./validateLength");
exports.ValidateProductKeyErrorType = types_1.ExtendEnum(validateLength_1.ValidateLengthErrorType, errorType_1.CommonValidationErrorType.invalidFormat);
var MAX_LENGTH = 120;
exports.validateProductKey = function (value, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.isRequired, isRequired = _c === void 0 ? true : _c, _d = _b.max, max = _d === void 0 ? MAX_LENGTH : _d;
    var REGEX = "^([a-z0-9]+)(_?[a-z0-9])*$";
    if (validator_1.isEmpty(value)) {
        if (!isRequired) {
            return null;
        }
        return exports.ValidateProductKeyErrorType.empty;
    }
    if (!validator_1.matches(value, REGEX) && value.length <= max) {
        return exports.ValidateProductKeyErrorType.invalidFormat;
    }
    return validateLength_1.validateLength(value, { max: max });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVQcm9kdWN0S2V5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9pbnB1dC12YWxpZGF0aW9uL3ZhbGlkYXRlUHJvZHVjdEtleS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7R0FJRzs7QUFFSCx1Q0FBNkM7QUFDN0MsMkNBQXFEO0FBQ3JELGtEQUFpRTtBQUNqRSxtREFBMkU7QUFFOUQsUUFBQSwyQkFBMkIsR0FBRyxrQkFBVSxDQUFDLHdDQUF1QixFQUFFLHFDQUF5QixDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBUXhILElBQU0sVUFBVSxHQUFHLEdBQUcsQ0FBQztBQUVWLFFBQUEsa0JBQWtCLEdBQUcsVUFDaEMsS0FBYSxFQUNiLEVBQXVFO1FBQXZFLDRCQUF1RSxFQUFyRSxrQkFBaUIsRUFBakIsc0NBQWlCLEVBQUUsV0FBZ0IsRUFBaEIscUNBQWdCO0lBRXJDLElBQU0sS0FBSyxHQUFHLDRCQUE0QixDQUFDO0lBQzNDLElBQUksbUJBQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUNsQixJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2YsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELE9BQU8sbUNBQTJCLENBQUMsS0FBSyxDQUFDO0tBQzFDO0lBQ0QsSUFBSSxDQUFDLG1CQUFPLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBQyxNQUFNLElBQUksR0FBRyxFQUFFO1FBQ2pELE9BQU8sbUNBQTJCLENBQUMsYUFBYSxDQUFDO0tBQ2xEO0lBQ0QsT0FBTywrQkFBYyxDQUFDLEtBQUssRUFBRSxFQUFFLEdBQUcsS0FBQSxFQUFFLENBQUMsQ0FBQztBQUN4QyxDQUFDLENBQUMifQ==