import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class TemtemApiService {
  constructor(private http: HttpService) {}

  buildurl(path: string, queryMap: any = null): string {
    return this.http.buildurl('/temtem' + path, queryMap);
  }

  temtemTypeIconUrl(type: string) {
    const url = this.buildurl(`/type/${type}/icon`);
    return url;
  }

  getTemtemType(type: string) {
    const url = this.buildurl(`/type/${type}`);
    return this.http.fget(url);
  }

  getTemtemTrait(trait: string) {
    const url = this.buildurl(`/trait/${trait}`);
    return this.http.fget(url);
  }
}
