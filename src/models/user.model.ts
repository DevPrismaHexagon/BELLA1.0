export class user {
    id:number;
    name:String;
    mail:String;
    role:String;
    status:String;
    password:String;

    constructor(
        id:number,
        name:String, 
        mail:String, 
        role:String,
        status:String,
        password:String
        )
    {
        this.id         =id;
        this.name       =name;
        this.mail       =mail;
        this.role       =role;
        this.status     =status;
        this.password   =password;
    }
}