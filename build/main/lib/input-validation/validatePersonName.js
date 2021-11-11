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
exports.ValidatePersonNameErrorType = types_1.ExtendEnum(validateLength_1.ValidateLengthErrorType, errorType_1.CommonValidationErrorType.invalidFormat);
exports.validatePersonName = function (value, _a) {
    var _b = (_a === void 0 ? {} : _a).isRequired, isRequired = _b === void 0 ? true : _b;
    var REGEX = "^[a-zA-Z]+(([',. -][a-zA-Z])?[a-zA-Z]*)*$";
    if (validator_1.isEmpty(value)) {
        if (!isRequired) {
            return null;
        }
        return exports.ValidatePersonNameErrorType.empty;
    }
    if (!validator_1.matches(value, REGEX)) {
        return exports.ValidatePersonNameErrorType.invalidFormat;
    }
    var validateLengthOptions = { min: 2, max: numbers_1.MAX_DISPLAY_NAME_LENGTH };
    return validateLength_1.validateLength(value, validateLengthOptions);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVQZXJzb25OYW1lLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9pbnB1dC12YWxpZGF0aW9uL3ZhbGlkYXRlUGVyc29uTmFtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7R0FJRzs7QUFFSCx1Q0FBNkM7QUFDN0MsMkNBQXFEO0FBQ3JELGtEQUFpRTtBQUNqRSw4Q0FBNkQ7QUFDN0QsbURBQWlHO0FBRXBGLFFBQUEsMkJBQTJCLEdBQUcsa0JBQVUsQ0FBQyx3Q0FBdUIsRUFBRSxxQ0FBeUIsQ0FBQyxhQUFhLENBQUMsQ0FBQztBQU8zRyxRQUFBLGtCQUFrQixHQUFHLFVBQUMsS0FBYSxFQUFFLEVBQXFEO1FBQW5ELHlDQUFpQixFQUFqQixzQ0FBaUI7SUFDbkUsSUFBTSxLQUFLLEdBQUcsMkNBQTJDLENBQUM7SUFDMUQsSUFBSSxtQkFBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ2xCLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDZixPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsT0FBTyxtQ0FBMkIsQ0FBQyxLQUFLLENBQUM7S0FDMUM7SUFDRCxJQUFJLENBQUMsbUJBQU8sQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEVBQUU7UUFDMUIsT0FBTyxtQ0FBMkIsQ0FBQyxhQUFhLENBQUM7S0FDbEQ7SUFDRCxJQUFNLHFCQUFxQixHQUF5QixFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLGlDQUF1QixFQUFFLENBQUM7SUFDN0YsT0FBTywrQkFBYyxDQUFDLEtBQUssRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO0FBQ3RELENBQUMsQ0FBQyJ9