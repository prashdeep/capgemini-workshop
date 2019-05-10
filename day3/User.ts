class User {

    constructor(private _name:string, private _age?:number, private _salary?:number){
        this._name = name;
        //this._age = age;
        //this._salary = salary;
    }

    get name(){
        return this.name;
    }
    set name(name: string){
        this.name = name;
    }

    set salary (salary:number){
        this._salary = salary;
    }

    toString(){
        return `Name: ${this._name} and Age: ${this._age} with salary: ${this._salary}`;
    }
}

let ramesh = new User("Ramesh",22,30000);
let user = new User("July",null, 3000);

console.log(ramesh.name);
//user.setName("Varsha");
user.name = "Harsha";