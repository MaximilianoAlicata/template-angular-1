import { Component } from '@angular/core';
import { About } from 'src/app/about';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  icon_box: About[] = [ //Asi es como puedo rellenar una interface con los campos que pedi del archivo dragonball.ts
  { icon:"fa fa-shopping-bag", titulo:"Nuestra experiencia", delay:"0s",
    descripcion:"Con años de experiencia en la industria de viajes, nuestro equipo de expertos ha construido relaciones sólidas con proveedores de confianza y conocemos de primera mano los mejores lugares para visitar, las actividades más emocionantes y los alojamientos más cómodos." },
  { icon:"fa fa-photo", titulo:"Nuestros Valores", delay:"0.2s",
    descripcion:'En FUNGO TRAVEL, nos apasiona brindar experiencias de viaje excepcionales. Nos esforzamos por ofrecer un servicio personalizado y de calidad, centrándonos en la satisfacción del cliente y en superar tus expectativas.' },
  { icon:"fa fa-bar-chart", titulo:"Nuestros Objetivos", delay:"0.4s",
    descripcion:"Nuestro objetivo principal es hacer que tus sueños de viaje se hagan realidad. Queremos facilitarte la planificación y reserva de tus viajes, ofreciéndote opciones cuidadosamente seleccionadas que se ajusten a tus preferencias y necesidades. Nos esforzamos por brindarte una experiencia de compra sin problemas." },
];
  
  ngOnInit(){
    this.resaltarPalabra();
  }

  resaltarPalabra(){
    // Recorre manualmente los elementos de icon_box
    for (let i = 0; i < this.icon_box.length; i++) {
      const icon = this.icon_box[i];
      // Verifica si es el ítem [1] y agrega el estilo de resaltado
      if (i === 1) {
      icon.descripcion = icon.descripcion.replace('FUNGO TRAVEL', '<span>FUNGO TRAVEL</span>');
      }
    }
  }

}
