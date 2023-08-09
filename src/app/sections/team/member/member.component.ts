import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent {

  @Input() nombre?: string;
  @Input() puesto?: string;
  @Input() imagen?: string;

}
