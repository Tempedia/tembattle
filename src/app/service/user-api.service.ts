import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class UserApiService {
  constructor(private http: HttpService) {}

  getUserTeam(id: string) {
    const url = this.http.buildurl(`/user/team/${id}`);
    return this.http.fget(url);
  }
}
