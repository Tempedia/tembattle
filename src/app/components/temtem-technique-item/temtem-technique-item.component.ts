import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-temtem-technique-item',
  templateUrl: './temtem-technique-item.component.html',
  styleUrls: ['./temtem-technique-item.component.scss'],
})
export class TemtemTechniqueItemComponent {
  @Input() data: any;
}
