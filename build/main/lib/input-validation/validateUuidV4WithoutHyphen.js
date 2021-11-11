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
exports.ValidateUuidV4WithoutHyphenErrorType = types_1.Enum(errorType_1.CommonValidationErrorType.empty, errorType_1.CommonValidationErrorType.invalidFormat);
exports.validateUuidV4WithoutHyphen = function (value, _a) {
    var _b = (_a === void 0 ? {} : _a).isRequired, isRequired = _b === void 0 ? true : _b;
    var REGEX = "^[0-9a-f]{12}4[0-9a-f]{3}[89ab][0-9a-f]{15}$";
    if (validator_1.isEmpty(value)) {
        if (!isRequired) {
            return null;
        }
        return exports.ValidateUuidV4WithoutHyphenErrorType.empty;
    }
    if (!validator_1.matches(value, REGEX)) {
        return exports.ValidateUuidV4WithoutHyphenErrorType.invalidFormat;
    }
    return null;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVVdWlkVjRXaXRob3V0SHlwaGVuLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9pbnB1dC12YWxpZGF0aW9uL3ZhbGlkYXRlVXVpZFY0V2l0aG91dEh5cGhlbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7R0FJRzs7QUFFSCx1Q0FBNkM7QUFDN0MsMkNBQXlDO0FBQ3pDLGtEQUFpRTtBQUVwRCxRQUFBLG9DQUFvQyxHQUFHLFlBQUksQ0FDdEQscUNBQXlCLENBQUMsS0FBSyxFQUMvQixxQ0FBeUIsQ0FBQyxhQUFhLENBQ3hDLENBQUM7QUFPVyxRQUFBLDJCQUEyQixHQUFHLFVBQ3pDLEtBQWEsRUFDYixFQUE4RDtRQUE1RCx5Q0FBaUIsRUFBakIsc0NBQWlCO0lBRW5CLElBQU0sS0FBSyxHQUFHLDhDQUE4QyxDQUFDO0lBQzdELElBQUksbUJBQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUNsQixJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2YsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELE9BQU8sNENBQW9DLENBQUMsS0FBSyxDQUFDO0tBQ25EO0lBQ0QsSUFBSSxDQUFDLG1CQUFPLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxFQUFFO1FBQzFCLE9BQU8sNENBQW9DLENBQUMsYUFBYSxDQUFDO0tBQzNEO0lBRUQsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDLENBQUMifQ==