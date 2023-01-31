import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FileApiService } from 'src/app/service/file-api.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
})
export class ImageComponent implements OnInit, OnChanges {
  @Input() fileid = '';

  @Input() width: number = 0;
  @Input() height: number = 0;
  @Input() preview = true;

  constructor(private api: FileApiService) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.fileid) {
      if (this.fileid.startsWith('http')) {
        this.url = this.fileid;
      } else {
        this.url = this.api.fileurl(this.fileid);
      }
    } else {
      this.url = '';
    }
  }

  url = '';
}
