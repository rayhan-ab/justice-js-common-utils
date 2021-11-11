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
exports.ValidateDockerImageErrorType = types_1.ExtendEnum(validateLength_1.ValidateLengthErrorType, errorType_1.CommonValidationErrorType.invalidFormat);
exports.validateDockerImage = function (value, _a) {
    var _b = (_a === void 0 ? {} : _a).isRequired, isRequired = _b === void 0 ? true : _b;
    var REGEX = "^[a-z0-9]+([.\\/_-]{1}[a-z0-9]+)*([:]{1}([0-9a-z]+([.-]{1}[0-9a-z]+)*)+)?$";
    if (validator_1.isEmpty(value)) {
        if (!isRequired) {
            return null;
        }
        return exports.ValidateDockerImageErrorType.empty;
    }
    if (!validator_1.matches(value, REGEX)) {
        return exports.ValidateDockerImageErrorType.invalidFormat;
    }
    return validateLength_1.validateLength(value);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVEb2NrZXJJbWFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvaW5wdXQtdmFsaWRhdGlvbi92YWxpZGF0ZURvY2tlckltYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7OztHQUlHOztBQUVILHVDQUE2QztBQUM3QywyQ0FBcUQ7QUFDckQsa0RBQWlFO0FBQ2pFLG1EQUEyRTtBQUU5RCxRQUFBLDRCQUE0QixHQUFHLGtCQUFVLENBQ3BELHdDQUF1QixFQUN2QixxQ0FBeUIsQ0FBQyxhQUFhLENBQ3hDLENBQUM7QUFPVyxRQUFBLG1CQUFtQixHQUFHLFVBQUMsS0FBYSxFQUFFLEVBQXNEO1FBQXBELHlDQUFpQixFQUFqQixzQ0FBaUI7SUFDcEUsSUFBTSxLQUFLLEdBQUcsNEVBQTRFLENBQUM7SUFDM0YsSUFBSSxtQkFBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ2xCLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDZixPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsT0FBTyxvQ0FBNEIsQ0FBQyxLQUFLLENBQUM7S0FDM0M7SUFDRCxJQUFJLENBQUMsbUJBQU8sQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEVBQUU7UUFDMUIsT0FBTyxvQ0FBNEIsQ0FBQyxhQUFhLENBQUM7S0FDbkQ7SUFDRCxPQUFPLCtCQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDL0IsQ0FBQyxDQUFDIn0=