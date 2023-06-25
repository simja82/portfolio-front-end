export class Divisor {

    id?: number;   
    title: string;
    line_one: string;
    line_two: string;
    line_three: string;
    line_four: string;
    line_five: string;

    constructor
    (
        title: string,
        line_one: string,
        line_two: string,
        line_three: string,
        line_four: string,
        line_five: string,
    )
        
    {
        this.title = title;
        this.line_one = line_one;
        this.line_two = line_two;
        this.line_three = line_three;
        this.line_four = line_four;
        this.line_five = line_five;
    }

}
