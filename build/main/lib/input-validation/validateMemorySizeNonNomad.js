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
// tslint:disable-next-line:max-line-length
exports.ValidateMemorySizeNonNomadErrorType = types_1.ExtendEnum(validateLength_1.ValidateLengthErrorType, errorType_1.CommonValidationErrorType.invalidFormat);
// tslint:disable-next-line:max-line-length
exports.validateMemorySizeNonNomad = function (value, _a) {
    var _b = (_a === void 0 ? {} : _a).isRequired, isRequired = _b === void 0 ? true : _b;
    var MAX_LENGTH = 9;
    var REGEX = "^[0-9]+Mi$";
    if (validator_1.isEmpty(value)) {
        if (!isRequired) {
            return null;
        }
        return exports.ValidateMemorySizeNonNomadErrorType.empty;
    }
    if (!validator_1.matches(value, REGEX)) {
        return exports.ValidateMemorySizeNonNomadErrorType.invalidFormat;
    }
    return validateLength_1.validateLength(value, { max: MAX_LENGTH });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVNZW1vcnlTaXplTm9uTm9tYWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2lucHV0LXZhbGlkYXRpb24vdmFsaWRhdGVNZW1vcnlTaXplTm9uTm9tYWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7O0dBSUc7O0FBRUgsdUNBQTZDO0FBQzdDLDJDQUFxRDtBQUNyRCxrREFBaUU7QUFDakUsbURBQTJFO0FBRTNFLDJDQUEyQztBQUM5QixRQUFBLG1DQUFtQyxHQUFHLGtCQUFVLENBQzNELHdDQUF1QixFQUN2QixxQ0FBeUIsQ0FBQyxhQUFhLENBQ3hDLENBQUM7QUFNRiwyQ0FBMkM7QUFDOUIsUUFBQSwwQkFBMEIsR0FBRyxVQUN4QyxLQUFhLEVBQ2IsRUFBNkQ7UUFBM0QseUNBQWlCLEVBQWpCLHNDQUFpQjtJQUVuQixJQUFNLFVBQVUsR0FBRyxDQUFDLENBQUM7SUFDckIsSUFBTSxLQUFLLEdBQUcsWUFBWSxDQUFDO0lBQzNCLElBQUksbUJBQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUNsQixJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2YsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELE9BQU8sMkNBQW1DLENBQUMsS0FBSyxDQUFDO0tBQ2xEO0lBQ0QsSUFBSSxDQUFDLG1CQUFPLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxFQUFFO1FBQzFCLE9BQU8sMkNBQW1DLENBQUMsYUFBYSxDQUFDO0tBQzFEO0lBQ0QsT0FBTywrQkFBYyxDQUFDLEtBQUssRUFBRSxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDO0FBQ3BELENBQUMsQ0FBQyJ9