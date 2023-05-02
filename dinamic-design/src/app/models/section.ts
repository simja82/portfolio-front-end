export class Section {

    id?: number;   
    about: string;
    studies: string;
    experiences: string;
    projects: string;
    skills: string;
    technicals: string;
    softs: string;
    languages: string;
    hobbies: string;
    comments: string;
    contact: string;

    constructor
    (
        about: string,
        studies: string,
        experiences: string,
        projects: string,
        skills: string,
        technicals: string,
        softs: string,
        languages: string,
        hobbies: string,
        comments: string,
        contact: string
    )
        
    {
        this.about = about;
        this.studies = studies;
        this.experiences = experiences;
        this.projects = projects;
        this.skills = skills;
        this.technicals = technicals;
        this.softs = softs;
        this.languages = languages;
        this.hobbies = hobbies;
        this.comments = comments;
        this.contact = contact;   
    }

}
