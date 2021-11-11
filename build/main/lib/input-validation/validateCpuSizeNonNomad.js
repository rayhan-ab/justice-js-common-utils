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
exports.ValidateCpuSizeNonNomadErrorType = types_1.ExtendEnum(validateLength_1.ValidateLengthErrorType, errorType_1.CommonValidationErrorType.invalidFormat);
exports.validateCpuSizeNonNomad = function (value, _a) {
    var _b = (_a === void 0 ? {} : _a).isRequired, isRequired = _b === void 0 ? true : _b;
    var MAX_LENGTH = 8;
    var REGEX = "^[0-9]+m$";
    if (validator_1.isEmpty(value)) {
        if (!isRequired) {
            return null;
        }
        return exports.ValidateCpuSizeNonNomadErrorType.empty;
    }
    if (!validator_1.matches(value, REGEX)) {
        return exports.ValidateCpuSizeNonNomadErrorType.invalidFormat;
    }
    return validateLength_1.validateLength(value, { max: MAX_LENGTH });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVDcHVTaXplTm9uTm9tYWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2lucHV0LXZhbGlkYXRpb24vdmFsaWRhdGVDcHVTaXplTm9uTm9tYWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7O0dBSUc7O0FBRUgsdUNBQTZDO0FBQzdDLDJDQUFxRDtBQUNyRCxrREFBaUU7QUFDakUsbURBQTJFO0FBRTNFLDJDQUEyQztBQUM5QixRQUFBLGdDQUFnQyxHQUFHLGtCQUFVLENBQ3hELHdDQUF1QixFQUN2QixxQ0FBeUIsQ0FBQyxhQUFhLENBQ3hDLENBQUM7QUFPVyxRQUFBLHVCQUF1QixHQUFHLFVBQUMsS0FBYSxFQUFFLEVBQTBEO1FBQXhELHlDQUFpQixFQUFqQixzQ0FBaUI7SUFDeEUsSUFBTSxVQUFVLEdBQUcsQ0FBQyxDQUFDO0lBQ3JCLElBQU0sS0FBSyxHQUFHLFdBQVcsQ0FBQztJQUMxQixJQUFJLG1CQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDbEIsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNmLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxPQUFPLHdDQUFnQyxDQUFDLEtBQUssQ0FBQztLQUMvQztJQUNELElBQUksQ0FBQyxtQkFBTyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsRUFBRTtRQUMxQixPQUFPLHdDQUFnQyxDQUFDLGFBQWEsQ0FBQztLQUN2RDtJQUNELE9BQU8sK0JBQWMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQztBQUNwRCxDQUFDLENBQUMifQ==