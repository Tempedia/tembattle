import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TemtemApiService } from 'src/app/service/temtem-api.service';

@Component({
  selector: 'app-temtem-type-icon',
  templateUrl: './temtem-type-icon.component.html',
  styleUrls: ['./temtem-type-icon.component.scss'],
})
export class TemtemTypeIconComponent implements OnChanges {
  @Input() type = '';
  @Input() size = 64;
  constructor(private api: TemtemApiService) {}

  url = '';
  ngOnChanges(changes: SimpleChanges): void {
    this.url = this.api.temtemTypeIconUrl(this.type);
  }
}
