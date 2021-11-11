"use strict";
/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var validator_1 = require("validator");
var xregexp_1 = __importDefault(require("xregexp"));
var types_1 = require("../../types/types");
var errorType_1 = require("./constant/errorType");
var numbers_1 = require("./constant/numbers");
var validateLength_1 = require("./validateLength");
exports.ValidateDisplayNameErrorType = types_1.ExtendEnum(validateLength_1.ValidateLengthErrorType, errorType_1.CommonValidationErrorType.invalidFormat);
/**
 *
 * @param value
 * @param allowUnicode (true: Allow various language character, false: only allow Alpha Numeric character)
 * @param isRequired
 * @param strictlyAllowSpecialCharacters (true: allow (',. -) in the mid of value, false: Only allow Alpha Numeric)
 * @param maxLength
 *
 * @default allowUnicode false
 * @default isRequired true
 * @default strictlyAllowSpecialCharacters true
 * @default maxLength MAX_DISPLAY_NAME_LENGTH
 */
exports.validateDisplayName = function (value, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.allowUnicode, allowUnicode = _c === void 0 ? false : _c, _d = _b.isRequired, isRequired = _d === void 0 ? true : _d, _e = _b.strictlyAllowSpecialCharacters, strictlyAllowSpecialCharacters = _e === void 0 ? true : _e, _f = _b.maxLength, maxLength = _f === void 0 ? numbers_1.MAX_DISPLAY_NAME_LENGTH : _f;
    var REGEX = "^[a-zA-Z0-9]+(([',. -][a-zA-Z0-9])?[a-zA-Z0-9]*)*$";
    if (validator_1.isEmpty(value)) {
        if (!isRequired) {
            return null;
        }
        return exports.ValidateDisplayNameErrorType.empty;
    }
    if (allowUnicode && !strictlyAllowSpecialCharacters && !xregexp_1.default("^[\\pL\\pN\\pM]*$").test(value)) {
        return exports.ValidateDisplayNameErrorType.invalidFormat;
    }
    if (allowUnicode &&
        strictlyAllowSpecialCharacters &&
        !xregexp_1.default("^[\\pL\\pN\\pM]+([',. -][\\pL\\pN]+)*$").test(value)) {
        return exports.ValidateDisplayNameErrorType.invalidFormat;
    }
    if (!allowUnicode && !strictlyAllowSpecialCharacters && !validator_1.matches(value, /^\w*$/g)) {
        return exports.ValidateDisplayNameErrorType.invalidFormat;
    }
    if (!allowUnicode && strictlyAllowSpecialCharacters && value.trim() !== value) {
        return exports.ValidateDisplayNameErrorType.invalidFormat;
    }
    if (!allowUnicode && strictlyAllowSpecialCharacters && !validator_1.matches(value, REGEX)) {
        return exports.ValidateDisplayNameErrorType.invalidFormat;
    }
    return validateLength_1.validateLength(value, {
        max: maxLength,
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVEaXNwbGF5TmFtZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvaW5wdXQtdmFsaWRhdGlvbi92YWxpZGF0ZURpc3BsYXlOYW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7OztHQUlHOzs7OztBQUVILHVDQUE2QztBQUM3QyxvREFBOEI7QUFDOUIsMkNBQXFEO0FBQ3JELGtEQUFpRTtBQUNqRSw4Q0FBNkQ7QUFDN0QsbURBQTJFO0FBRTlELFFBQUEsNEJBQTRCLEdBQUcsa0JBQVUsQ0FDcEQsd0NBQXVCLEVBQ3ZCLHFDQUF5QixDQUFDLGFBQWEsQ0FDeEMsQ0FBQztBQVVGOzs7Ozs7Ozs7Ozs7R0FZRztBQUNVLFFBQUEsbUJBQW1CLEdBQUcsVUFDakMsS0FBYSxFQUNiLEVBS2tDO1FBTGxDLDRCQUtrQyxFQUpoQyxvQkFBb0IsRUFBcEIseUNBQW9CLEVBQ3BCLGtCQUFpQixFQUFqQixzQ0FBaUIsRUFDakIsc0NBQXFDLEVBQXJDLDBEQUFxQyxFQUNyQyxpQkFBbUMsRUFBbkMsa0VBQW1DO0lBR3JDLElBQU0sS0FBSyxHQUFHLG9EQUFvRCxDQUFDO0lBRW5FLElBQUksbUJBQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUNsQixJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2YsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELE9BQU8sb0NBQTRCLENBQUMsS0FBSyxDQUFDO0tBQzNDO0lBRUQsSUFBSSxZQUFZLElBQUksQ0FBQyw4QkFBOEIsSUFBSSxDQUFDLGlCQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDaEcsT0FBTyxvQ0FBNEIsQ0FBQyxhQUFhLENBQUM7S0FDbkQ7SUFFRCxJQUNFLFlBQVk7UUFDWiw4QkFBOEI7UUFDOUIsQ0FBQyxpQkFBTyxDQUFDLHdDQUF3QyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUM5RDtRQUNBLE9BQU8sb0NBQTRCLENBQUMsYUFBYSxDQUFDO0tBQ25EO0lBRUQsSUFBSSxDQUFDLFlBQVksSUFBSSxDQUFDLDhCQUE4QixJQUFJLENBQUMsbUJBQU8sQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLEVBQUU7UUFDakYsT0FBTyxvQ0FBNEIsQ0FBQyxhQUFhLENBQUM7S0FDbkQ7SUFFRCxJQUFJLENBQUMsWUFBWSxJQUFJLDhCQUE4QixJQUFJLEtBQUssQ0FBQyxJQUFJLEVBQUUsS0FBSyxLQUFLLEVBQUU7UUFDN0UsT0FBTyxvQ0FBNEIsQ0FBQyxhQUFhLENBQUM7S0FDbkQ7SUFFRCxJQUFJLENBQUMsWUFBWSxJQUFJLDhCQUE4QixJQUFJLENBQUMsbUJBQU8sQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEVBQUU7UUFDN0UsT0FBTyxvQ0FBNEIsQ0FBQyxhQUFhLENBQUM7S0FDbkQ7SUFFRCxPQUFPLCtCQUFjLENBQUMsS0FBSyxFQUFFO1FBQzNCLEdBQUcsRUFBRSxTQUFTO0tBQ2YsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDIn0=