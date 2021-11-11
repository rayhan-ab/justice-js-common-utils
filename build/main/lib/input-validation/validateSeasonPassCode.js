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
exports.ValidateSeasonPassCodeErrorType = types_1.ExtendEnum(validateLength_1.ValidateLengthErrorType, errorType_1.CommonValidationErrorType.invalidFormat, errorType_1.CommonValidationErrorType.alreadyUsed);
exports.validateSeasonPassCode = function (value, _a) {
    var _b = (_a === void 0 ? {} : _a).isRequired, isRequired = _b === void 0 ? true : _b;
    var REGEX = "^[a-z0-9]+([_:-]{1}[a-z0-9]+)*$";
    if (validator_1.isEmpty(value)) {
        if (!isRequired) {
            return null;
        }
        return exports.ValidateSeasonPassCodeErrorType.empty;
    }
    if (!validator_1.matches(value, REGEX)) {
        return exports.ValidateSeasonPassCodeErrorType.invalidFormat;
    }
    return validateLength_1.validateLength(value);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVTZWFzb25QYXNzQ29kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvaW5wdXQtdmFsaWRhdGlvbi92YWxpZGF0ZVNlYXNvblBhc3NDb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7OztHQUlHOztBQUVILHVDQUE2QztBQUM3QywyQ0FBcUQ7QUFDckQsa0RBQWlFO0FBQ2pFLG1EQUEyRTtBQUU5RCxRQUFBLCtCQUErQixHQUFHLGtCQUFVLENBQ3ZELHdDQUF1QixFQUN2QixxQ0FBeUIsQ0FBQyxhQUFhLEVBQ3ZDLHFDQUF5QixDQUFDLFdBQVcsQ0FDdEMsQ0FBQztBQU9XLFFBQUEsc0JBQXNCLEdBQUcsVUFBQyxLQUFhLEVBQUUsRUFBeUQ7UUFBdkQseUNBQWlCLEVBQWpCLHNDQUFpQjtJQUN2RSxJQUFNLEtBQUssR0FBRyxpQ0FBaUMsQ0FBQztJQUNoRCxJQUFJLG1CQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDbEIsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNmLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxPQUFPLHVDQUErQixDQUFDLEtBQUssQ0FBQztLQUM5QztJQUNELElBQUksQ0FBQyxtQkFBTyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsRUFBRTtRQUMxQixPQUFPLHVDQUErQixDQUFDLGFBQWEsQ0FBQztLQUN0RDtJQUNELE9BQU8sK0JBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUMvQixDQUFDLENBQUMifQ==