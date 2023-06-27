export class DeveloperProfile {

    id?: number;   
    overview: string;
    fullname: string;
    line_one: string;
    photo: string;
    phrase_one: string;
    phrase_two: string;
    author: string;
    credit: string;

    constructor
    (
        overview: string,
        fullname: string,
        line_one: string,
        photo: string,
        phrase_one: string,
        phrase_two: string,
        author: string,
        credit: string
    )
        
    {
        this.overview=overview;
        this.fullname=fullname;
        this.line_one=line_one;
        this.photo=photo;
        this.phrase_one=phrase_one;
        this.phrase_two=phrase_two;
        this.author=author;
        this.credit=credit;
    }

}
