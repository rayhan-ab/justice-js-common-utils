/*
 * Copyright (c) 2021 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
export var WILDCARD_SIGN = "*";
export var CrudType;
(function (CrudType) {
    CrudType["CREATE"] = "CREATE";
    CrudType["READ"] = "READ";
    CrudType["UPDATE"] = "UPDATE";
    CrudType["DELETE"] = "DELETE";
})(CrudType || (CrudType = {}));
export var CrudBitType;
(function (CrudBitType) {
    // tslint:disable:no-bitwise
    CrudBitType[CrudBitType["Create"] = 1] = "Create";
    CrudBitType[CrudBitType["Read"] = 2] = "Read";
    CrudBitType[CrudBitType["Update"] = 4] = "Update";
    CrudBitType[CrudBitType["Delete"] = 8] = "Delete";
    // tslint:enable:no-bitwise
})(CrudBitType || (CrudBitType = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL3Blcm1pc3Npb24tZ3VhcmQvdHlwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUVILE1BQU0sQ0FBQyxJQUFNLGFBQWEsR0FBRyxHQUFHLENBQUM7QUFFakMsTUFBTSxDQUFOLElBQVksUUFLWDtBQUxELFdBQVksUUFBUTtJQUNsQiw2QkFBaUIsQ0FBQTtJQUNqQix5QkFBYSxDQUFBO0lBQ2IsNkJBQWlCLENBQUE7SUFDakIsNkJBQWlCLENBQUE7QUFDbkIsQ0FBQyxFQUxXLFFBQVEsS0FBUixRQUFRLFFBS25CO0FBRUQsTUFBTSxDQUFOLElBQVksV0FPWDtBQVBELFdBQVksV0FBVztJQUNyQiw0QkFBNEI7SUFDNUIsaURBQWUsQ0FBQTtJQUNmLDZDQUFhLENBQUE7SUFDYixpREFBZSxDQUFBO0lBQ2YsaURBQWUsQ0FBQTtJQUNmLDJCQUEyQjtBQUM3QixDQUFDLEVBUFcsV0FBVyxLQUFYLFdBQVcsUUFPdEIifQ==