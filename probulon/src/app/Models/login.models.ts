export class LogIng{
    _id: number; 
    _email: string; 
    _password: string;
    constructor(id: number = 0, email: string = '', password: string = ''){
        this._id = id;
        this._email = email; 
        this._password = password; 
    } 
}