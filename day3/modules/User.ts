export class User {

    constructor(private _name:string, private _age?:number, private _salary?:number){
        this._name = _name;
        this._age = _age;
        this._salary = _salary;
    }

    get name(){
        return this._name;
    }
    set name(name: string){
        this._name = name;
    }

    set salary (salary:number){
        this._salary = salary;
    }

    toString(){
        return `Name: ${this._name} and Age: ${this._age} with salary: ${this._salary}`;
    }
}

