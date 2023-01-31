import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { HttpService } from './http.service';
import { MessageService } from './message.service';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  constructor(
    private router: Router,
    private http: HttpService,
    private message: MessageService
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.status === 400) {
          this.message.error('Client Error');
          return throwError(() => new Error('400'));
        } else if (err.status === 401) {
          this.router.navigateByUrl('/login');
          this.http.reset();
          return new Observable<never>();
        } else if (err.status === 403) {
          this.message.error('Forbidden');
          return throwError(() => new Error('403'));
        } else if (err.status === 404) {
          this.message.error('Not Found');
          return throwError(() => new Error('404'));
        } else {
          this.message.error('Network Error');
          return throwError(() => err);
        }
      })
    );
  }
}
