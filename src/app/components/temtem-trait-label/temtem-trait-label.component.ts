import { Component, Input, OnChanges } from '@angular/core';
import { TemtemApiService } from 'src/app/service/temtem-api.service';

@Component({
  selector: 'app-temtem-trait-label',
  templateUrl: './temtem-trait-label.component.html',
  styleUrls: ['./temtem-trait-label.component.scss'],
})
export class TemtemTraitLabelComponent implements OnChanges {
  @Input() trait = '';
  constructor(private api: TemtemApiService) {}
  ngOnChanges() {
    this.getTemtemTrait();
  }

  data: any = null;
  async getTemtemTrait() {
    try {
      const r = await this.api.getTemtemTrait(this.trait);
      this.data = r.data;
    } catch (error) {}
  }
}
