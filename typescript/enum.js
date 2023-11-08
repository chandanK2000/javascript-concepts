"use strict";
var role;
(function (role) {
    role[role["admin"] = 0] = "admin";
    role[role["manager"] = 1] = "manager";
    role[role["engineer"] = 2] = "engineer";
    role[role["user"] = 3] = "user";
})(role || (role = {}));
//when we type role.ad=>it is coming suggestion like admin, manager, engineer
console.log(role);
