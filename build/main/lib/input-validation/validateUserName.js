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
var numbers_1 = require("./constant/numbers");
var validateLength_1 = require("./validateLength");
exports.ValidateUserNameErrorType = types_1.ExtendEnum(validateLength_1.ValidateLengthErrorType, errorType_1.CommonValidationErrorType.invalidFormat);
exports.MIN_USERNAME_LENGTH = 3;
/**
 *
 * @param value
 * @param isRequired
 * @param maxLength
 * @param minLength
 *
 * @default isRequired true
 * @default maxLength MAX_DISPLAY_NAME_LENGTH
 * @default minLength MIN_USERNAME_LENGTH
 */
exports.validateUserName = function (value, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.isRequired, isRequired = _c === void 0 ? true : _c, _d = _b.maxLength, maxLength = _d === void 0 ? numbers_1.MAX_DISPLAY_NAME_LENGTH : _d, _e = _b.minLength, minLength = _e === void 0 ? exports.MIN_USERNAME_LENGTH : _e;
    var REGEX = "^[^\\W_-][\\w-]+[^\\W_-]$";
    if (validator_1.isEmpty(value)) {
        if (!isRequired) {
            return null;
        }
        return exports.ValidateUserNameErrorType.empty;
    }
    if (!validator_1.matches(value, REGEX)) {
        return exports.ValidateUserNameErrorType.invalidFormat;
    }
    return validateLength_1.validateLength(value, {
        max: maxLength,
        min: minLength,
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVVc2VyTmFtZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvaW5wdXQtdmFsaWRhdGlvbi92YWxpZGF0ZVVzZXJOYW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7OztHQUlHOztBQUVILHVDQUE2QztBQUM3QywyQ0FBcUQ7QUFDckQsa0RBQWlFO0FBQ2pFLDhDQUE2RDtBQUM3RCxtREFBMkU7QUFFOUQsUUFBQSx5QkFBeUIsR0FBRyxrQkFBVSxDQUFDLHdDQUF1QixFQUFFLHFDQUF5QixDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBR3pHLFFBQUEsbUJBQW1CLEdBQUcsQ0FBQyxDQUFDO0FBUXJDOzs7Ozs7Ozs7O0dBVUc7QUFDVSxRQUFBLGdCQUFnQixHQUFHLFVBQzlCLEtBQWEsRUFDYixFQUkrQjtRQUovQiw0QkFJK0IsRUFIN0Isa0JBQWlCLEVBQWpCLHNDQUFpQixFQUNqQixpQkFBbUMsRUFBbkMsa0VBQW1DLEVBQ25DLGlCQUErQixFQUEvQiw0REFBK0I7SUFHakMsSUFBTSxLQUFLLEdBQUcsMkJBQTJCLENBQUM7SUFDMUMsSUFBSSxtQkFBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ2xCLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDZixPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsT0FBTyxpQ0FBeUIsQ0FBQyxLQUFLLENBQUM7S0FDeEM7SUFFRCxJQUFJLENBQUMsbUJBQU8sQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEVBQUU7UUFDMUIsT0FBTyxpQ0FBeUIsQ0FBQyxhQUFhLENBQUM7S0FDaEQ7SUFFRCxPQUFPLCtCQUFjLENBQUMsS0FBSyxFQUFFO1FBQzNCLEdBQUcsRUFBRSxTQUFTO1FBQ2QsR0FBRyxFQUFFLFNBQVM7S0FDZixDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMifQ==