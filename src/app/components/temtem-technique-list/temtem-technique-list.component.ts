import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-temtem-technique-list',
  templateUrl: './temtem-technique-list.component.html',
  styleUrls: ['./temtem-technique-list.component.scss'],
})
export class TemtemTechniqueListComponent {
  @Input() techniques: any[] = [];
}
