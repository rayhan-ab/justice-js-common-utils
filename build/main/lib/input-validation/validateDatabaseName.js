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
var numbers_1 = require("./constant/numbers");
var validateLength_1 = require("./validateLength");
exports.ValidateDatabaseNameErrorType = types_1.ExtendEnum(validateLength_1.ValidateLengthErrorType, errorType_1.CommonValidationErrorType.invalidFormat);
exports.validateDatabaseName = function (value, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.maxLength, maxLength = _c === void 0 ? numbers_1.MAX_SHORT_TEXT_LENGTH : _c, _d = _b.isRequired, isRequired = _d === void 0 ? true : _d;
    var REGEX = "[a-zA-Z0-9_]$";
    if (validator_1.isEmpty(value)) {
        if (!isRequired) {
            return null;
        }
        return exports.ValidateDatabaseNameErrorType.empty;
    }
    if (!validator_1.matches(value, REGEX)) {
        return exports.ValidateDatabaseNameErrorType.invalidFormat;
    }
    return validateLength_1.validateLength(value, { max: maxLength });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVEYXRhYmFzZU5hbWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2lucHV0LXZhbGlkYXRpb24vdmFsaWRhdGVEYXRhYmFzZU5hbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7O0dBSUc7O0FBRUgsdUNBQTZDO0FBQzdDLDJDQUFxRDtBQUNyRCxrREFBaUU7QUFDakUsOENBQTJEO0FBQzNELG1EQUEyRTtBQUU5RCxRQUFBLDZCQUE2QixHQUFHLGtCQUFVLENBQ3JELHdDQUF1QixFQUN2QixxQ0FBeUIsQ0FBQyxhQUFhLENBQ3hDLENBQUM7QUFRVyxRQUFBLG9CQUFvQixHQUFHLFVBQ2xDLEtBQWEsRUFDYixFQUEwRjtRQUExRiw0QkFBMEYsRUFBeEYsaUJBQWlDLEVBQWpDLGdFQUFpQyxFQUFFLGtCQUFpQixFQUFqQixzQ0FBaUI7SUFFdEQsSUFBTSxLQUFLLEdBQUcsZUFBZSxDQUFDO0lBQzlCLElBQUksbUJBQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUNsQixJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2YsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELE9BQU8scUNBQTZCLENBQUMsS0FBSyxDQUFDO0tBQzVDO0lBQ0QsSUFBSSxDQUFDLG1CQUFPLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxFQUFFO1FBQzFCLE9BQU8scUNBQTZCLENBQUMsYUFBYSxDQUFDO0tBQ3BEO0lBQ0QsT0FBTywrQkFBYyxDQUFDLEtBQUssRUFBRSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFBO0FBQ2xELENBQUMsQ0FBQyJ9