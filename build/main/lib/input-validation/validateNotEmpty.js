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
exports.ValidateNotEmptyErrorType = types_1.Enum(errorType_1.CommonValidationErrorType.empty);
exports.validateNotEmpty = function (value, options) {
    if (validator_1.isEmpty(value, options)) {
        return exports.ValidateNotEmptyErrorType.empty;
    }
    return null;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVOb3RFbXB0eS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvaW5wdXQtdmFsaWRhdGlvbi92YWxpZGF0ZU5vdEVtcHR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7OztHQUlHOztBQUVILHVDQUFvQztBQUNwQywyQ0FBeUM7QUFDekMsa0RBQWlFO0FBRXBELFFBQUEseUJBQXlCLEdBQUcsWUFBSSxDQUFDLHFDQUF5QixDQUFDLEtBQUssQ0FBQyxDQUFDO0FBT2xFLFFBQUEsZ0JBQWdCLEdBQUcsVUFBQyxLQUFhLEVBQUUsT0FBaUI7SUFDL0QsSUFBSSxtQkFBTyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsRUFBRTtRQUMzQixPQUFPLGlDQUF5QixDQUFDLEtBQUssQ0FBQztLQUN4QztJQUNELE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQyxDQUFDIn0=