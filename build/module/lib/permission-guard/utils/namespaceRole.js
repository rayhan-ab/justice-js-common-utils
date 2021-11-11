/*
 * Copyright (c) 2021 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { WILDCARD_SIGN } from "../types";
// Get list of admin role id
export function getAdminRoles(roles) {
    return roles.reduce(function (filtered, role) {
        if (role.adminRole === true) {
            filtered.push(role.roleId);
        }
        return filtered;
    }, []);
}
// Get list of admin namespace role
export function getAdminNamespaceRoles(namespaceRoles, roles) {
    return namespaceRoles.filter(function (namespaceRole) {
        return roles.find(function (role) { return role.adminRole === true && role.roleId === namespaceRole.roleId; });
    });
}
// Get list of role id based on selected namespace
export function getRoleIdsByNamespace(namespaceRoles, namespace) {
    return namespaceRoles.reduce(function (filtered, role) {
        if (namespace) {
            if (role.namespace === namespace || role.namespace === WILDCARD_SIGN) {
                filtered.push(role.roleId);
            }
        }
        else {
            filtered.push(role.roleId);
        }
        return filtered;
    }, []);
}
// Get list of roles owned by current user
export function getCurrentUserRoles(roles, userRoleIds) {
    return roles.filter(function (role) { return userRoleIds.includes(role.roleId) && Array.isArray(role.permissions) && role.permissions.length > 0; });
}
// Get list of permission owned by current user
export function getCurrentUserPermissions(roles) {
    return roles.reduce(function (acc, role) {
        return acc.concat(role.permissions);
    }, []);
}
// Get list of permission with namespace owned by current user
export function getCurrentUserNamespacedPermissions(namespaceRoleWithPermission) {
    return namespaceRoleWithPermission.reduce(function (acc, curr) {
        return acc.concat(curr.permissions);
    }, []);
}
// Check whether current user has admin role
export function isUserHasAdminRole(userNamespaceRoles, adminRoles) {
    return adminRoles.some(function (role) { return userNamespaceRoles.includes(role); });
}
// Replace {namespace} string with real namespace value
export var replacePermissionNamespace = function (permission, namespace) {
    return {
        resource: permission.resource.replace("{namespace}", namespace),
        action: permission.action,
    };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmFtZXNwYWNlUm9sZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvcGVybWlzc2lvbi1ndWFyZC91dGlscy9uYW1lc3BhY2VSb2xlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFHSCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBRXpDLDRCQUE0QjtBQUM1QixNQUFNLFVBQVUsYUFBYSxDQUFDLEtBQXdCO0lBQ3BELE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFDLFFBQWtCLEVBQUUsSUFBcUI7UUFDNUQsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLElBQUksRUFBRTtZQUMzQixRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUM1QjtRQUNELE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUNULENBQUM7QUFFRCxtQ0FBbUM7QUFDbkMsTUFBTSxVQUFVLHNCQUFzQixDQUFDLGNBQStCLEVBQUUsS0FBd0I7SUFDOUYsT0FBTyxjQUFjLENBQUMsTUFBTSxDQUFDLFVBQUMsYUFBYTtRQUN6QyxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBQyxJQUFJLElBQUssT0FBQSxJQUFJLENBQUMsU0FBUyxLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLGFBQWEsQ0FBQyxNQUFNLEVBQS9ELENBQStELENBQUMsQ0FBQztJQUMvRixDQUFDLENBQUMsQ0FBQztBQUNMLENBQUM7QUFFRCxrREFBa0Q7QUFDbEQsTUFBTSxVQUFVLHFCQUFxQixDQUFDLGNBQStCLEVBQUUsU0FBa0I7SUFDdkYsT0FBTyxjQUFjLENBQUMsTUFBTSxDQUFDLFVBQUMsUUFBa0IsRUFBRSxJQUFtQjtRQUNuRSxJQUFJLFNBQVMsRUFBRTtZQUNiLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxTQUFTLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxhQUFhLEVBQUU7Z0JBQ3BFLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQzVCO1NBQ0Y7YUFBTTtZQUNMLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzVCO1FBQ0QsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ1QsQ0FBQztBQUVELDBDQUEwQztBQUMxQyxNQUFNLFVBQVUsbUJBQW1CLENBQUMsS0FBd0IsRUFBRSxXQUFxQjtJQUNqRixPQUFPLEtBQUssQ0FBQyxNQUFNLENBQ2pCLFVBQUMsSUFBSSxJQUFLLE9BQUEsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFuRyxDQUFtRyxDQUM5RyxDQUFDO0FBQ0osQ0FBQztBQUVELCtDQUErQztBQUMvQyxNQUFNLFVBQVUseUJBQXlCLENBQUMsS0FBd0I7SUFDaEUsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQUMsR0FBcUIsRUFBRSxJQUFxQjtRQUMvRCxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3RDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUNULENBQUM7QUFFRCw4REFBOEQ7QUFDOUQsTUFBTSxVQUFVLG1DQUFtQyxDQUNqRCwyQkFBMEQ7SUFFMUQsT0FBTywyQkFBMkIsQ0FBQyxNQUFNLENBQUMsVUFBQyxHQUFxQixFQUFFLElBQUk7UUFDcEUsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN0QyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDVCxDQUFDO0FBRUQsNENBQTRDO0FBQzVDLE1BQU0sVUFBVSxrQkFBa0IsQ0FBQyxrQkFBNEIsRUFBRSxVQUFvQjtJQUNuRixPQUFPLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBQyxJQUFJLElBQUssT0FBQSxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQWpDLENBQWlDLENBQUMsQ0FBQztBQUN0RSxDQUFDO0FBRUQsdURBQXVEO0FBQ3ZELE1BQU0sQ0FBQyxJQUFNLDBCQUEwQixHQUFHLFVBQUMsVUFBMEIsRUFBRSxTQUFpQjtJQUN0RixPQUFPO1FBQ0wsUUFBUSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxTQUFTLENBQUM7UUFDL0QsTUFBTSxFQUFFLFVBQVUsQ0FBQyxNQUFNO0tBQzFCLENBQUM7QUFDSixDQUFDLENBQUMifQ==