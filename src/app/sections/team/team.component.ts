import { Component } from '@angular/core';
import { Team } from 'src/app/team';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent {

  raizImagen:string = "../assets/img/";

  member: Team[] = [ //Asi es como puedo rellenar una interface con los campos que pedi del archivo dragonball.ts
  { nombre:"Walter White", puesto:"Gerente de Ventas", imagen: this.raizImagen + "team-1.jpg" },

  { nombre:"Sarah Jhonson", puesto:"Gerenta de Ventas", imagen: this.raizImagen + "team-2.jpg" },

  { nombre:"William Anderson", puesto:"Coordinador de Servicio al Cliente", imagen: this.raizImagen + "team-3.jpg" },

  { nombre:"Amanda Jepson", puesto:"Analista de Mercado Turístico", imagen: this.raizImagen + "team-4.jpg" },

];

}
