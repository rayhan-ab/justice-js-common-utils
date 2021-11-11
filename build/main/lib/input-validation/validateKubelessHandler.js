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
exports.ValidateKubelessHandlerErrorType = types_1.ExtendEnum(validateLength_1.ValidateLengthErrorType, errorType_1.CommonValidationErrorType.invalidFormat);
exports.validateKubelessHandler = function (value, _a) {
    var _b = (_a === void 0 ? {} : _a).isRequired, isRequired = _b === void 0 ? true : _b;
    var REGEX = "[a-zA-Z0-9_]$";
    var MAX_HANDLER_LENGTH = 256;
    if (validator_1.isEmpty(value)) {
        if (!isRequired) {
            return null;
        }
        return exports.ValidateKubelessHandlerErrorType.empty;
    }
    if (!validator_1.matches(value, REGEX)) {
        return exports.ValidateKubelessHandlerErrorType.invalidFormat;
    }
    return validateLength_1.validateLength(value, { max: MAX_HANDLER_LENGTH });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVLdWJlbGVzc0hhbmRsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2lucHV0LXZhbGlkYXRpb24vdmFsaWRhdGVLdWJlbGVzc0hhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7O0dBSUc7O0FBRUgsdUNBQTZDO0FBQzdDLDJDQUFxRDtBQUNyRCxrREFBaUU7QUFDakUsbURBQTJFO0FBRTlELFFBQUEsZ0NBQWdDLEdBQUcsa0JBQVUsQ0FDeEQsd0NBQXVCLEVBQ3ZCLHFDQUF5QixDQUFDLGFBQWEsQ0FDeEMsQ0FBQztBQU9XLFFBQUEsdUJBQXVCLEdBQUcsVUFBQyxLQUFhLEVBQUUsRUFBMEQ7UUFBeEQseUNBQWlCLEVBQWpCLHNDQUFpQjtJQUN4RSxJQUFNLEtBQUssR0FBRyxlQUFlLENBQUM7SUFDOUIsSUFBTSxrQkFBa0IsR0FBRyxHQUFHLENBQUM7SUFDL0IsSUFBSSxtQkFBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ2xCLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDZixPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsT0FBTyx3Q0FBZ0MsQ0FBQyxLQUFLLENBQUM7S0FDL0M7SUFDRCxJQUFJLENBQUMsbUJBQU8sQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEVBQUU7UUFDMUIsT0FBTyx3Q0FBZ0MsQ0FBQyxhQUFhLENBQUM7S0FDdkQ7SUFDRCxPQUFPLCtCQUFjLENBQUMsS0FBSyxFQUFFLEVBQUUsR0FBRyxFQUFFLGtCQUFrQixFQUFFLENBQUMsQ0FBQztBQUM1RCxDQUFDLENBQUMifQ==