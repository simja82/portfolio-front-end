export class DeveloperProfile {

    id?: number;   
    icon: string;
    name_intro: string;
    line_one: string;
    photo: string;
    phrase_one: string;
    phrase_two: string;
    author: string;
    credit: string;

    constructor
    (
        icon: string,
        name_intro: string,
        line_one: string,
        photo: string,
        phrase_one: string,
        phrase_two: string,
        author: string,
        credit: string
    )
        
    {
        this.icon=icon;
        this.name_intro=name_intro;
        this.line_one=line_one;
        this.photo=photo;
        this.phrase_one=phrase_one;
        this.phrase_two=phrase_two;
        this.author=author;
        this.credit=credit;
    }

}
