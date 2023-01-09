import { Component } from '@angular/core';

@Component({
  selector: 'app-audiovisual-bloopers',
  templateUrl: './audiovisual-bloopers.component.html'
})
export class AudiovisualBloopersComponent {
  //Arrays del Componente
  one : any = [
    {
      blooper : "Estuve casi dos semanas sin encontrarle la vuelta al routing de Angular...",
      mistake : "Al final era parecido a las rutas de CodeIgniter4",
      icon : "fa-solid fa-route fa-5x text-white"
    }
  ];

  be : any = [
    {
      one : "No será frustrante...",
      two : "decían..."
    }
  ];

  two : any = [
    {
      blooper : "Al llegar a Java estuve no solo días sino más de un mes tratando de entender algo...",
      mistake : "Creo que en ningún momento supe cómo buscar las cosas o posiblemente no sabía qué debía buscar...",
      icon : "fa-solid fa-burst fa-5x text-white"
    }
  ];

  break : any = [
    {
      one : "Tomate un descanso,",
      two : "vas a ver que es sencillo..."
    }
  ];

  three : any = [
    {
      blooper : "Todo bien con Stackoverflow... Jamás voy a entender cómo es que a algunos les funciona eso de preguntar cosas...",
      mistake : "Me quedo con GitHub y Codepen que son más amigables...",
      icon : "fa-brands fa-stack-overflow fa-5x text-white"
    }
  ];

  time : any = [
    {
      one : "Es cuestión de dedicarle tiempo...",
      two : "¿más tiempo?"
    }
  ];

  four : any = [
    {
      blooper : "Cerca de diez días pasé intentando saber cómo era el tema de rutas dinámicas con slug...",
      mistake : "Me dí por vencida... Me ganó Angular...",
      icon : "fa-solid fa-pause fa-5x text-white"
    }
  ];

  win : any = [
    {
      one : "¡¡¡Pero no te des por vencida!!!",
      two : "Hasta en ruso busqué respuestas... (no es broma)"
    }
  ];

  five : any = [
    {
      blooper : "¿Pueden creer que no recuerdo un tema importante de Base de Datos que era eliminación lógica?",
      mistake : "Me parece que SQL y yo no nos estamos llevando del todo bien últimamente...",
      icon : "fa-solid fa-xmark fa-5x text-white"
    }
  ];

  memory : any = [
    {
      one : "No es por escasez de memoria mía...",
      two : "Creo que ya estoy quemada..."
    }
  ];

  six : any = [
    {
      blooper : "NetBeans... Delicado NetBeans... Lo quiero tanto como lo detesto... Creo que no existe nada más sensible que NetBeans...",
      mistake : "Horas estuve demorada por un espacio... Sí por un espacio...",
      icon : "fa-solid fa-calendar fa-5x text-white"
    }
  ];

  spaces : any = [
    {
      one : "Siempre hay que estar atento a todo...",
      two : "O escribir sin espacios entre palabras..."
    }
  ];

  seven : any = [
    {
      blooper : "Es posible que muchos ya lo sepan... Yo no sé JS... No lo puse en los créditos...",
      mistake : "En su reemplazo utilicé CSS3 para hacer animaciones...",
      icon : "fa-solid fa-box-tissue fa-5x text-white"
    }
  ];

}
