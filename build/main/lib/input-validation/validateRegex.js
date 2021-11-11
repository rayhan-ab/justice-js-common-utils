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
exports.ValidateRegexErrorType = types_1.Enum(errorType_1.CommonValidationErrorType.invalidFormat);
exports.validateRegex = function (value, regex) {
    if (!validator_1.matches(value, regex)) {
        return exports.ValidateRegexErrorType.invalidFormat;
    }
    return null;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVSZWdleC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvaW5wdXQtdmFsaWRhdGlvbi92YWxpZGF0ZVJlZ2V4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7OztHQUlHOztBQUVILHVDQUFvQztBQUNwQywyQ0FBeUM7QUFDekMsa0RBQWlFO0FBRXBELFFBQUEsc0JBQXNCLEdBQUcsWUFBSSxDQUFDLHFDQUF5QixDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBR3ZFLFFBQUEsYUFBYSxHQUFHLFVBQUMsS0FBYSxFQUFFLEtBQWE7SUFDeEQsSUFBSSxDQUFDLG1CQUFPLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxFQUFFO1FBQzFCLE9BQU8sOEJBQXNCLENBQUMsYUFBYSxDQUFDO0tBQzdDO0lBRUQsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDLENBQUMifQ==