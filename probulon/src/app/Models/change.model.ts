export class ChangePassword {
    _name: string; 
    _email: string; 
    constructor(name: string = '', email: string = ''){
        this._name = name; 
        this._email = email; 
    }
}