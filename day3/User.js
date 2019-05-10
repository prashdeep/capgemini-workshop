var User = /** @class */ (function () {
    function User(_name, _age, _salary) {
        this._name = _name;
        this._age = _age;
        this._salary = _salary;
        this._name = _name;
        this._age = _age;
        this._salary = _salary;
    }
    Object.defineProperty(User.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "salary", {
        set: function (salary) {
            this._salary = salary;
        },
        enumerable: true,
        configurable: true
    });
    User.prototype.toString = function () {
        return "Name: " + this._name + " and Age: " + this._age + " with salary: " + this._salary;
    };
    return User;
}());
var ramesh = new User("Ramesh", 22, 30000);
var user = new User("July", null, 3000);
console.log(ramesh.name);
//user.setName("Varsha");
user.name = "Harsha";
