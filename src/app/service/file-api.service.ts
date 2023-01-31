import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class FileApiService {
  constructor(private http: HttpService) {}

  buildurl(path: string, queryMap: any = null): string {
    return this.http.buildurl('/files' + path, queryMap);
  }

  fileurl(filename: string) {
    return this.buildurl('/' + filename);
  }
}
