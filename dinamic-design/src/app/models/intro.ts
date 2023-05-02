export class Intro {

    id?: number;   
    overview: string;
    /*
    industry: string;
    history: string;
    line_one: string;
    line_two: string;
    */

    constructor
    (
        overview: string
        /*
        ,
        industry: string,
        history: string,
        line_one: string,
        line_two: string 
        */
    )
        
    {
        this.overview = overview;
        /*
        this.industry = industry;
        this.history = history;
        this.line_one = line_one;
        this.line_two = line_two;   
        */
    }

}
