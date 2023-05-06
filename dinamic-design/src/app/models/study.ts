export class Study {

    id?: number;   
    image: string;
    title: string;
    institution: string;
    start_date: string;
    end_date: string;

    constructor
    (
        image: string,
        title: string,
        institution: string,
        start_date: string,
        end_date: string 
    )
        
    {
        this.image = image;
        this.title = title;
        this.institution = institution;
        this.start_date = start_date;
        this.end_date = end_date;
    }

}
