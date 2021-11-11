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
var numbers_1 = require("./constant/numbers");
var validateLength_1 = require("./validateLength");
exports.ValidateEmailErrorType = types_1.ExtendEnum(validateLength_1.ValidateLengthErrorType, errorType_1.CommonValidationErrorType.invalidFormat);
exports.validateEmail = function (value, _a) {
    var _b = (_a === void 0 ? {} : _a).isRequired, isRequired = _b === void 0 ? true : _b;
    var REGEX = "^[a-zA-Z0-9_+&*-]+(?:\\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,7}$";
    if (validator_1.isEmpty(value)) {
        if (!isRequired) {
            return null;
        }
        return exports.ValidateEmailErrorType.empty;
    }
    if (!validator_1.matches(value, REGEX)) {
        return exports.ValidateEmailErrorType.invalidFormat;
    }
    return validateLength_1.validateLength(value, { max: numbers_1.MAX_EMAIL_LENGTH });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVFbWFpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvaW5wdXQtdmFsaWRhdGlvbi92YWxpZGF0ZUVtYWlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7OztHQUlHOztBQUVILHVDQUE2QztBQUM3QywyQ0FBcUQ7QUFDckQsa0RBQWlFO0FBQ2pFLDhDQUFzRDtBQUN0RCxtREFBMkU7QUFFOUQsUUFBQSxzQkFBc0IsR0FBRyxrQkFBVSxDQUFDLHdDQUF1QixFQUFFLHFDQUF5QixDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBT3RHLFFBQUEsYUFBYSxHQUFHLFVBQUMsS0FBYSxFQUFFLEVBQWdEO1FBQTlDLHlDQUFpQixFQUFqQixzQ0FBaUI7SUFDOUQsSUFBTSxLQUFLLEdBQUcsaUZBQWlGLENBQUM7SUFDaEcsSUFBSSxtQkFBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ2xCLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDZixPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsT0FBTyw4QkFBc0IsQ0FBQyxLQUFLLENBQUM7S0FDckM7SUFDRCxJQUFJLENBQUMsbUJBQU8sQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEVBQUU7UUFDMUIsT0FBTyw4QkFBc0IsQ0FBQyxhQUFhLENBQUM7S0FDN0M7SUFDRCxPQUFPLCtCQUFjLENBQUMsS0FBSyxFQUFFLEVBQUUsR0FBRyxFQUFFLDBCQUFnQixFQUFFLENBQUMsQ0FBQztBQUMxRCxDQUFDLENBQUMifQ==