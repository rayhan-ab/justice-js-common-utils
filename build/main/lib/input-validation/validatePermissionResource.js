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
exports.ValidatePermissionResourceErrorType = types_1.ExtendEnum(validateLength_1.ValidateLengthErrorType, errorType_1.CommonValidationErrorType.invalidFormat);
exports.validatePermissionResource = function (value, _a) {
    var _b = (_a === void 0 ? {} : _a).isRequired, isRequired = _b === void 0 ? true : _b;
    var REGEX = "^[A-Z]+([:]{1}([A-Z]+|(({[a-zA-Z]+})|[a-zA-Z0-9]+|\\*)))*$";
    if (validator_1.isEmpty(value)) {
        if (!isRequired) {
            return null;
        }
        return exports.ValidatePermissionResourceErrorType.empty;
    }
    if (!validator_1.matches(value, REGEX)) {
        return exports.ValidatePermissionResourceErrorType.invalidFormat;
    }
    return validateLength_1.validateLength(value);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVQZXJtaXNzaW9uUmVzb3VyY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2lucHV0LXZhbGlkYXRpb24vdmFsaWRhdGVQZXJtaXNzaW9uUmVzb3VyY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7O0dBSUc7O0FBRUgsdUNBQTZDO0FBQzdDLDJDQUFxRDtBQUNyRCxrREFBaUU7QUFDakUsbURBQTJFO0FBRTlELFFBQUEsbUNBQW1DLEdBQUcsa0JBQVUsQ0FDM0Qsd0NBQXVCLEVBQ3ZCLHFDQUF5QixDQUFDLGFBQWEsQ0FDeEMsQ0FBQztBQU9XLFFBQUEsMEJBQTBCLEdBQUcsVUFDeEMsS0FBYSxFQUNiLEVBQTZEO1FBQTNELHlDQUFpQixFQUFqQixzQ0FBaUI7SUFFbkIsSUFBTSxLQUFLLEdBQUcsNERBQTRELENBQUM7SUFDM0UsSUFBSSxtQkFBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ2xCLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDZixPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsT0FBTywyQ0FBbUMsQ0FBQyxLQUFLLENBQUM7S0FDbEQ7SUFDRCxJQUFJLENBQUMsbUJBQU8sQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEVBQUU7UUFDMUIsT0FBTywyQ0FBbUMsQ0FBQyxhQUFhLENBQUM7S0FDMUQ7SUFDRCxPQUFPLCtCQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDL0IsQ0FBQyxDQUFDIn0=