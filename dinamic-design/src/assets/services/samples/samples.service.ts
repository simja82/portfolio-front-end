import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SamplesService {
    samples : any[] =
    [
        {
            id : 0,
            card : "https://i.ibb.co/dbKxBCb/loopholes-min.png",
            title : "Loopholes",
            logline :"Some quick example text to build on the card title and make up the bulk of the card's content.",
            format : "1x8x120",
            genre :"Sci-Fi Drama",
            typeLogline : "Logline",
            typeStoryline : "Storyline",
            typeSynopsis : "Synopsis",
            fileLogline : "https://drive.google.com/file/d/1Hbd7K6fh-QHd4eYfEwyOrQYOwE5qYdbI/view?usp=share_link",
            fileStoryline : "https://drive.google.com/file/d/19Y1VgC0uhA3Cd9Nvy6JRKaU7Kjhxv364/view?usp=share_link",
            fileSynopsis : "https://drive.google.com/file/d/1de5su7S4NQnlzaw6N6KwJK1PqZjIBSKk/view?usp=share_link",
            draftLogline : "Blue Draft",
            draftStoryline : "Blue Draft",
            draftSynopsis : "Blue Draft",
            rightsLogline : 2020,
            rightsStoryline : 2020,
            rightsSynopsis : 2020
        },
        {
            id : 1,
            card : "https://i.ibb.co/nrKVY9P/gen-min.png",
            title : "Gen",
            logline :"Some quick example text to build on the card title and make up the bulk of the card's content.",
            format : "4x15x45",
            genre :"Thriller Suspense",
            typeLogline : "Logline",
            typeStoryline : "Storyline",
            typeSynopsis : "Synopsis",
            fileLogline : "https://drive.google.com/file/d/1Hbd7K6fh-QHd4eYfEwyOrQYOwE5qYdbI/view?usp=share_link",
            fileStoryline : "https://drive.google.com/file/d/19Y1VgC0uhA3Cd9Nvy6JRKaU7Kjhxv364/view?usp=share_link",
            fileSynopsis : "https://drive.google.com/file/d/1de5su7S4NQnlzaw6N6KwJK1PqZjIBSKk/view?usp=share_link",
            draftLogline : "Blue Draft",
            draftStoryline : "Blue Draft",
            draftSynopsis : "Blue Draft",
            rightsLogline : 2020,
            rightsStoryline : 2020,
            rightsSynopsis : 2020
        },
        {
            id : 2,
            card : "https://i.ibb.co/2F17GFw/kala-min.png",
            title : "Kala",
            logline :"Some quick example text to build on the card title and make up the bulk of the card's content.",
            format : "4x10x70",
            genre :"Sci-Fi Suspense",
            typeLogline : "Logline",
            typeStoryline : "Storyline",
            typeSynopsis : "Synopsis",
            fileLogline : "https://drive.google.com/file/d/1Hbd7K6fh-QHd4eYfEwyOrQYOwE5qYdbI/view?usp=share_link",
            fileStoryline : "https://drive.google.com/file/d/19Y1VgC0uhA3Cd9Nvy6JRKaU7Kjhxv364/view?usp=share_link",
            fileSynopsis : "https://drive.google.com/file/d/1de5su7S4NQnlzaw6N6KwJK1PqZjIBSKk/view?usp=share_link",
            draftLogline : "Blue Draft",
            draftStoryline : "Blue Draft",
            draftSynopsis : "Blue Draft",
            rightsLogline : 2020,
            rightsStoryline : 2020,
            rightsSynopsis : 2020            
        },
        {
            id : 3,
            card : "https://i.ibb.co/Pg222WK/broken-min.png",
            title : "Broken",
            logline :"Some quick example text to build on the card title and make up the bulk of the card's content.",
            format : "4x10x50",
            genre :"Drama Thriller",
            typeLogline : "Logline",
            typeStoryline : "Storyline",
            typeSynopsis : "Synopsis",
            fileLogline : "https://drive.google.com/file/d/1Hbd7K6fh-QHd4eYfEwyOrQYOwE5qYdbI/view?usp=share_link",
            fileStoryline : "https://drive.google.com/file/d/19Y1VgC0uhA3Cd9Nvy6JRKaU7Kjhxv364/view?usp=share_link",
            fileSynopsis : "https://drive.google.com/file/d/1de5su7S4NQnlzaw6N6KwJK1PqZjIBSKk/view?usp=share_link",
            draftLogline : "Blue Draft",
            draftStoryline : "Blue Draft",
            draftSynopsis : "Blue Draft",
            rightsLogline : 2020,
            rightsStoryline : 2020,
            rightsSynopsis : 2020
        }
    ];

    constructor() {}

    getSamples() {
      return this.samples;
    }
  
}