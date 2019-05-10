import {User} from './User';
import {LeaveStatus} from './modules/Status'

let ramesh = new User("Ramesh",22,30000);
let user = new User("July",null, 3000);

console.log(ramesh.name);
//user.setName("Varsha");
user.name = "Harsha";

console.log( LeaveStatus.PENDING);