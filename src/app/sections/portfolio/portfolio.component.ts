import { Component } from '@angular/core';
import { Portfolio } from 'src/app/portfolio';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

  raizImagenes:string = "../assets/img/proyectofinal/";

  album: Portfolio[] = [ //Asi es como puedo rellenar una interface con los campos que pedi del archivo dragonball.ts
  { imagen: this.raizImagenes + "Lugares1.png", titulo:"Lugares 1", parrafo:"Lugares", filter:"filter-app", delay:"0" },
  { imagen: this.raizImagenes + "Vacaciones3.jpg", titulo:"Vacaciones 3", parrafo:"Vacaciones", filter:"filter-web", delay:"0.1" },
  { imagen: this.raizImagenes + "Lugares2.jpg", titulo:"Lugares 2", parrafo:"Lugares", filter:"filter-app", delay:"0.2" },
  { imagen: this.raizImagenes + "Turismo2.jpg", titulo:"Turismo 2", parrafo:"Turismo", filter:"filter-card", delay:"0" },
  { imagen: this.raizImagenes + "Vacaciones2.png", titulo:"Vacaciones 2", parrafo:"Vacaciones", filter:"filter-web", delay:"0.1" },
  { imagen: this.raizImagenes + "Lugares3.jpg", titulo:"Lugares 3", parrafo:"Lugares", filter:"filter-app", delay:"0.2" },
  { imagen: this.raizImagenes + "Turismo1.png", titulo:"Turismo 1", parrafo:"Turismo", filter:"filter-card", delay:"0" },
  { imagen: this.raizImagenes + "Turismo3.png", titulo:"Turismo 3", parrafo:"Turismo", filter:"filter-card", delay:"0.1" },
  { imagen: this.raizImagenes + "Vacaciones1.jpg", titulo:"Vacaciones 1", parrafo:"Vacaciones", filter:"filter-web", delay:"0.2" },

];

}
