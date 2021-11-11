"use strict";
/*
 * Copyright (c) 2021 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.WILDCARD_SIGN = "*";
var CrudType;
(function (CrudType) {
    CrudType["CREATE"] = "CREATE";
    CrudType["READ"] = "READ";
    CrudType["UPDATE"] = "UPDATE";
    CrudType["DELETE"] = "DELETE";
})(CrudType = exports.CrudType || (exports.CrudType = {}));
var CrudBitType;
(function (CrudBitType) {
    // tslint:disable:no-bitwise
    CrudBitType[CrudBitType["Create"] = 1] = "Create";
    CrudBitType[CrudBitType["Read"] = 2] = "Read";
    CrudBitType[CrudBitType["Update"] = 4] = "Update";
    CrudBitType[CrudBitType["Delete"] = 8] = "Delete";
    // tslint:enable:no-bitwise
})(CrudBitType = exports.CrudBitType || (exports.CrudBitType = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL3Blcm1pc3Npb24tZ3VhcmQvdHlwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7O0dBSUc7O0FBRVUsUUFBQSxhQUFhLEdBQUcsR0FBRyxDQUFDO0FBRWpDLElBQVksUUFLWDtBQUxELFdBQVksUUFBUTtJQUNsQiw2QkFBaUIsQ0FBQTtJQUNqQix5QkFBYSxDQUFBO0lBQ2IsNkJBQWlCLENBQUE7SUFDakIsNkJBQWlCLENBQUE7QUFDbkIsQ0FBQyxFQUxXLFFBQVEsR0FBUixnQkFBUSxLQUFSLGdCQUFRLFFBS25CO0FBRUQsSUFBWSxXQU9YO0FBUEQsV0FBWSxXQUFXO0lBQ3JCLDRCQUE0QjtJQUM1QixpREFBZSxDQUFBO0lBQ2YsNkNBQWEsQ0FBQTtJQUNiLGlEQUFlLENBQUE7SUFDZixpREFBZSxDQUFBO0lBQ2YsMkJBQTJCO0FBQzdCLENBQUMsRUFQVyxXQUFXLEdBQVgsbUJBQVcsS0FBWCxtQkFBVyxRQU90QiJ9