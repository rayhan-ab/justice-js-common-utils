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
exports.ValidateComplexPasswordErrorType = types_1.Enum(errorType_1.CommonValidationErrorType.empty, errorType_1.CommonValidationErrorType.invalidFormat);
/*DEPRECATED
 * please use validateComplexPasswordAsObject instead of this function
 * */
exports.validateComplexPassword = function (value, _a) {
    var _b = (_a === void 0 ? {} : _a).isRequired, isRequired = _b === void 0 ? true : _b;
    var REGEX = 
    // tslint:disable-next-line
    '^(?:(?=.*\\d)(?=.*[A-Z])(?=.*[a-z])|(?=.*\\d)(?=.*[^A-Za-z0-9])(?=.*[a-z])|(?=.*[^A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z])|(?=.*\\d)(?=.*[A-Z])(?=.*[^A-Za-z0-9]))(?!.*(.)\\1{2,})[A-Za-z0-9!~<>,;:_=?*+#."&§%°()\\|\\[\\]\\-\\$\\^\\@\\/]{8,32}$';
    if (validator_1.isEmpty(value)) {
        if (!isRequired) {
            return null;
        }
        return exports.ValidateComplexPasswordErrorType.empty;
    }
    if (!validator_1.matches(value, REGEX)) {
        return exports.ValidateComplexPasswordErrorType.invalidFormat;
    }
    return null;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVDb21wbGV4UGFzc3dvcmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2lucHV0LXZhbGlkYXRpb24vdmFsaWRhdGVDb21wbGV4UGFzc3dvcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7O0dBSUc7O0FBRUgsdUNBQTZDO0FBQzdDLDJDQUF5QztBQUN6QyxrREFBaUU7QUFFcEQsUUFBQSxnQ0FBZ0MsR0FBRyxZQUFJLENBQ2xELHFDQUF5QixDQUFDLEtBQUssRUFDL0IscUNBQXlCLENBQUMsYUFBYSxDQUN4QyxDQUFDO0FBT0Y7O0tBRUs7QUFDUSxRQUFBLHVCQUF1QixHQUFHLFVBQUMsS0FBYSxFQUFFLEVBQTBEO1FBQXhELHlDQUFpQixFQUFqQixzQ0FBaUI7SUFDeEUsSUFBTSxLQUFLO0lBQ1QsMkJBQTJCO0lBQzNCLDRPQUE0TyxDQUFDO0lBQy9PLElBQUksbUJBQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUNsQixJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2YsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELE9BQU8sd0NBQWdDLENBQUMsS0FBSyxDQUFDO0tBQy9DO0lBQ0QsSUFBSSxDQUFDLG1CQUFPLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxFQUFFO1FBQzFCLE9BQU8sd0NBQWdDLENBQUMsYUFBYSxDQUFDO0tBQ3ZEO0lBRUQsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDLENBQUMifQ==