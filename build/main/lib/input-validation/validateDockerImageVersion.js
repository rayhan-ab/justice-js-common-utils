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
exports.ValidateDockerVersionErrorType = types_1.ExtendEnum(validateLength_1.ValidateLengthErrorType, errorType_1.CommonValidationErrorType.invalidFormat);
exports.validateDockerImageVersion = function (value, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.maxLength, maxLength = _c === void 0 ? numbers_1.MAX_SHORT_TEXT_LENGTH : _c, _d = _b.isRequired, isRequired = _d === void 0 ? true : _d;
    var REGEX = "[^A-Za-z0-9-_.]";
    if (validator_1.isEmpty(value)) {
        if (!isRequired) {
            return null;
        }
        return exports.ValidateDockerVersionErrorType.empty;
    }
    if (validator_1.matches(value, REGEX)) {
        return exports.ValidateDockerVersionErrorType.invalidFormat;
    }
    return validateLength_1.validateLength(value, { max: maxLength });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVEb2NrZXJJbWFnZVZlcnNpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2lucHV0LXZhbGlkYXRpb24vdmFsaWRhdGVEb2NrZXJJbWFnZVZlcnNpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7O0dBSUc7O0FBRUgsdUNBQTZDO0FBQzdDLDJDQUFxRDtBQUNyRCxrREFBaUU7QUFDakUsOENBQTJEO0FBQzNELG1EQUEyRTtBQUU5RCxRQUFBLDhCQUE4QixHQUFHLGtCQUFVLENBQ3RELHdDQUF1QixFQUN2QixxQ0FBeUIsQ0FBQyxhQUFhLENBQ3hDLENBQUM7QUFTVyxRQUFBLDBCQUEwQixHQUFHLFVBQ3hDLEtBQWEsRUFDYixFQUF1RjtRQUF2Riw0QkFBdUYsRUFBckYsaUJBQWlDLEVBQWpDLGdFQUFpQyxFQUFFLGtCQUFpQixFQUFqQixzQ0FBaUI7SUFFdEQsSUFBTSxLQUFLLEdBQUcsaUJBQWlCLENBQUM7SUFDaEMsSUFBSSxtQkFBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ2xCLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDZixPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsT0FBTyxzQ0FBOEIsQ0FBQyxLQUFLLENBQUM7S0FDN0M7SUFFRCxJQUFJLG1CQUFPLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxFQUFFO1FBQ3pCLE9BQU8sc0NBQThCLENBQUMsYUFBYSxDQUFDO0tBQ3JEO0lBRUQsT0FBTywrQkFBYyxDQUFDLEtBQUssRUFBRSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO0FBQ25ELENBQUMsQ0FBQyJ9