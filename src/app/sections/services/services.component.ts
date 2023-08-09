import { Component } from '@angular/core';
import { Services_box } from 'src/app/services_box';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {

  service_box: Services_box[] = [ //Asi es como puedo rellenar una interface con los campos que pedi del archivo dragonball.ts
  { icon:"ion-ios-analytics-outline", titulo:"Paquetes de Viaje Personalizados", columna:"offset-lg-1", delay:"", duracion:"1.4", color:"#ff689b",
    descripcion:"Diseñamos itinerarios a medida que se ajustan a tus preferencias y necesidades individuales, brindándote una experiencia de viaje única y adaptada a tus gustos." },

  { icon:"ion-ios-bookmarks-outline", titulo:"Reserva de Vuelos", columna:"", delay:"", duracion:"1.4", color:"#e9bf06",
    descripcion:"Te ayudamos a encontrar las mejores tarifas de vuelos para tus viajes, ofreciendo acceso a una amplia selección de aerolíneas y horarios para que encuentres la opción que mejor se adapte a tus necesidades y presupuesto." },

  { icon:"ion-ios-paper-outline", titulo:"Alojamiento de Calidad", columna:"offset-lg-1", delay:"0.1", duracion:"1.4", color:"#3fcdc7",
    descripcion:"Nos asociamos con hoteles y resorts de renombre en todo el mundo para ofrecerte una amplia variedad de opciones de alojamiento que cumplen con altos estándares de calidad y comodidad." },
 
  { icon:"ion-ios-speedometer-outline", titulo:"Experiencias y Actividades", columna:"", delay:"0.1", duracion:"1.4", color:"#41cf2e",
    descripcion:"Te proporcionamos una amplia gama de experiencias y actividades emocionantes para complementar tu viaje, asegurándote de que cada momento de tu viaje sea memorable y una aventura emocionante." },

];

}
