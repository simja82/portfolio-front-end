export class Account {

    id?: number;
    email: string;
    password: string;
    fullname: string

    constructor
    (
        email: string,
        password: string,
        fullname: string
    )
        
    {
        this.email=email;
        this.password=password;
        this.fullname=fullname;
    }

}
