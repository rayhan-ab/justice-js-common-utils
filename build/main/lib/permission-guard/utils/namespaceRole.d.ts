import { NamespaceRole, NamespaceRoleWithPermission, RolePermission, RoleWithManager } from "../models/role";
export declare function getAdminRoles(roles: RoleWithManager[]): string[];
export declare function getAdminNamespaceRoles(namespaceRoles: NamespaceRole[], roles: RoleWithManager[]): NamespaceRole[];
export declare function getRoleIdsByNamespace(namespaceRoles: NamespaceRole[], namespace?: string): string[];
export declare function getCurrentUserRoles(roles: RoleWithManager[], userRoleIds: string[]): RoleWithManager[];
export declare function getCurrentUserPermissions(roles: RoleWithManager[]): RolePermission[];
export declare function getCurrentUserNamespacedPermissions(namespaceRoleWithPermission: NamespaceRoleWithPermission[]): RolePermission[];
export declare function isUserHasAdminRole(userNamespaceRoles: string[], adminRoles: string[]): boolean;
export declare const replacePermissionNamespace: (permission: RolePermission, namespace: string) => RolePermission;
