import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-temtem-portrait',
  templateUrl: './temtem-portrait.component.html',
  styleUrls: ['./temtem-portrait.component.scss'],
})
export class TemtemPortraitComponent {
  @Input() icon = '';
  @Input() lumaIcon = '';
  @Input() luma = false;
}
