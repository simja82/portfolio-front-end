import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SeriesService {

  //Array Series
  series: any [] = [
    {
        id : 1,
        card : "https://images.pexels.com/photos/15014725/pexels-photo-15014725.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title : "Broken",
        logline : "Some quick example text to build on the card title and make up the bulk of the card's content.",
        storyline : {
          one: "Some quick example text to build on the card title and make up the bulk of the card's content.",
          two: "Some quick example text to build on the card title and make up the bulk of the card's content.",
          three : "Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        synopsis : {
          one: "Some quick example text to build on the card title and make up the bulk of the card's content.",
          two: "Some quick example text to build on the card title and make up the bulk of the card's content.",
          three : "Some quick example text to build on the card title and make up the bulk of the card's content.",
          four : "Some quick example text to build on the card title and make up the bulk of the card's content.",
          five : "Some quick example text to build on the card title and make up the bulk of the card's content.",
          six : "Some quick example text to build on the card title and make up the bulk of the card's content.",
          seven : "Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        format : "Serie - 4x10x50",
        genre : "Drama Thriller",
        stage : "En Producción",
        rights : "2021",
        icon : "fa-solid fa-eye orange",
    },
    {
        id : 2,
        card : "https://images.pexels.com/photos/15014730/pexels-photo-15014730.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title : "Canon",
        logline : "Some quick example text to build on the card title and make up the bulk of the card's content.",
        storyline : {
          one: "Some quick example text to build on the card title and make up the bulk of the card's content.",
          two: "Some quick example text to build on the card title and make up the bulk of the card's content.",
          three : "Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        synopsis : {
          one: "Some quick example text to build on the card title and make up the bulk of the card's content.",
          two: "Some quick example text to build on the card title and make up the bulk of the card's content.",
          three : "Some quick example text to build on the card title and make up the bulk of the card's content.",
          four : "Some quick example text to build on the card title and make up the bulk of the card's content.",
          five : "Some quick example text to build on the card title and make up the bulk of the card's content.",
          six : "Some quick example text to build on the card title and make up the bulk of the card's content.",
          seven : "Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        format : " Serie 5x8x45",
        genre : "Drama",
        stage : "En Producción",
        rights : "2021",
        icon : "fa-solid fa-eye orange",
    },
    {
        id : 3,
        card : "https://images.pexels.com/photos/15014726/pexels-photo-15014726.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title : "Code: Criminal",
        logline : "Some quick example text to build on the card title and make up the bulk of the card's content.",
        storyline : {
          one: "Some quick example text to build on the card title and make up the bulk of the card's content.",
          two: "Some quick example text to build on the card title and make up the bulk of the card's content.",
          three : "Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        synopsis : {
          one: "Some quick example text to build on the card title and make up the bulk of the card's content.",
          two: "Some quick example text to build on the card title and make up the bulk of the card's content.",
          three : "Some quick example text to build on the card title and make up the bulk of the card's content.",
          four : "Some quick example text to build on the card title and make up the bulk of the card's content.",
          five : "Some quick example text to build on the card title and make up the bulk of the card's content.",
          six : "Some quick example text to build on the card title and make up the bulk of the card's content.",
          seven : "Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        format : "Serie 5x20x60",
        genre : "Social Drama",
        stage : "En Producción",
        rights : "2021",
        icon : "fa-solid fa-eye orange",
    },
    {
        id : 4,
        card : "https://images.pexels.com/photos/15014732/pexels-photo-15014732.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title : "Eigth Grade",
        logline : "Some quick example text to build on the card title and make up the bulk of the card's content.",
        storyline : {
          one: "Some quick example text to build on the card title and make up the bulk of the card's content.",
          two: "Some quick example text to build on the card title and make up the bulk of the card's content.",
          three : "Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        synopsis : {
          one: "Some quick example text to build on the card title and make up the bulk of the card's content.",
          two: "Some quick example text to build on the card title and make up the bulk of the card's content.",
          three : "Some quick example text to build on the card title and make up the bulk of the card's content.",
          four : "Some quick example text to build on the card title and make up the bulk of the card's content.",
          five : "Some quick example text to build on the card title and make up the bulk of the card's content.",
          six : "Some quick example text to build on the card title and make up the bulk of the card's content.",
          seven : "Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        format : "Serie 4x12x50",
        genre : "Youth Drama",
        stage : "En Producción",
        rights : "2021",
        icon : "fa-solid fa-eye orange",
    },
    {
        id : 5,
        card : "https://images.pexels.com/photos/15014734/pexels-photo-15014734.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title : "Flowers into the sea",
        logline : "Some quick example text to build on the card title and make up the bulk of the card's content.",
        storyline : {
          one: "Some quick example text to build on the card title and make up the bulk of the card's content.",
          two: "Some quick example text to build on the card title and make up the bulk of the card's content.",
          three : "Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        synopsis : {
          one: "Some quick example text to build on the card title and make up the bulk of the card's content.",
          two: "Some quick example text to build on the card title and make up the bulk of the card's content.",
          three : "Some quick example text to build on the card title and make up the bulk of the card's content.",
          four : "Some quick example text to build on the card title and make up the bulk of the card's content.",
          five : "Some quick example text to build on the card title and make up the bulk of the card's content.",
          six : "Some quick example text to build on the card title and make up the bulk of the card's content.",
          seven : "Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        format : "Serie 1x8x120",
        genre : "Historical Drama",
        stage : "En Producción",
        rights : "2021",
        icon : "fa-solid fa-eye orange",
    },
    {
        id : 6,
        card : "https://images.pexels.com/photos/15014733/pexels-photo-15014733.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title : "Gen",
        logline : "Some quick example text to build on the card title and make up the bulk of the card's content.",
        storyline : {
          one: "Some quick example text to build on the card title and make up the bulk of the card's content.",
          two: "Some quick example text to build on the card title and make up the bulk of the card's content.",
          three : "Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        synopsis : {
          one: "Some quick example text to build on the card title and make up the bulk of the card's content.",
          two: "Some quick example text to build on the card title and make up the bulk of the card's content.",
          three : "Some quick example text to build on the card title and make up the bulk of the card's content.",
          four : "Some quick example text to build on the card title and make up the bulk of the card's content.",
          five : "Some quick example text to build on the card title and make up the bulk of the card's content.",
          six : "Some quick example text to build on the card title and make up the bulk of the card's content.",
          seven : "Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        format : "Serie 4x15x45",
        genre : "Thriller Suspense",
        stage : "En Producción",
        rights : "2021",
        icon : "fa-solid fa-eye orange",
    },
];
  
  constructor() {}

  //Series
  getSeries() {
    return this.series;
  }

  //Serie por id
  getSerie(id: number) {
    return this.series[id];
  }
}
