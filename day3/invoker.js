"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = require("./User");
var Status_1 = require("./modules/Status");
var ramesh = new User_1.User("Ramesh", 22, 30000);
var user = new User_1.User("July", null, 3000);
console.log(ramesh.name);
//user.setName("Varsha");
user.name = "Harsha";
console.log(Status_1.LeaveStatus.PENDING);
