import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-team-temtem-item',
  templateUrl: './team-temtem-item.component.html',
  styleUrls: ['./team-temtem-item.component.scss'],
})
export class TeamTemtemItemComponent {
  @Input() data: any;
}
