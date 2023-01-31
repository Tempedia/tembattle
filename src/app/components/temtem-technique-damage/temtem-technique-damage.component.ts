import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-temtem-technique-damage',
  templateUrl: './temtem-technique-damage.component.html',
  styleUrls: ['./temtem-technique-damage.component.scss'],
})
export class TemtemTechniqueDamageComponent {
  @Input() damage = 0;
}
