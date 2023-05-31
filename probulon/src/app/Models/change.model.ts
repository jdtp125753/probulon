export class Change {
    id: number;
    name: string; 
    email: string; 
    constructor(id:number = 0, name: string = '', email: string = ''){
        this.id = id; 
        this.name = name; 
        this.email = email; 
    }
}