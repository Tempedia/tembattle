import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { TemtemApiService } from 'src/app/service/temtem-api.service';

@Component({
  selector: 'app-temtem-technique-priority-painter',
  templateUrl: './temtem-technique-priority-painter.component.html',
  styleUrls: ['./temtem-technique-priority-painter.component.scss'],
})
export class TemtemTechniquePriorityPainterComponent implements OnChanges {
  @Input() type = '';
  @Input() hold = 0;

  @ViewChild('painter') canvas!: ElementRef;

  constructor(private api: TemtemApiService) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.getTemtemType();
  }

  color = 'white';
  async getTemtemType() {
    try {
      const r = await this.api.getTemtemType(this.type);
      this.color = r.data.color;
      this.paint();
    } catch (error) {}
  }

  paint() {
    const canvas = this.canvas.nativeElement;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = this.color;
    ctx.strokeStyle = this.color;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(0, canvas.height);
    ctx.lineTo(5, canvas.height);
    ctx.lineTo(40, 0);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
    let i = 0;
    let start = 5;
    let holdWidth = 10;
    while (i < this.hold) {
      ctx.beginPath();
      ctx.moveTo(start + 5, canvas.height);
      ctx.lineTo(start + holdWidth + 5, canvas.height);
      ctx.lineTo(start + 35 + holdWidth + 5, 0);
      ctx.lineTo(start + 35 + 5, 0);
      ctx.closePath();
      ctx.fill();
      start = start + holdWidth + 5;
      i++;
    }
    // ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
}
