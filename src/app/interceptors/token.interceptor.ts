import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler){
    const authToken = localStorage.getItem('token') || 'null';
    const insertedToken = request.clone({
      setHeaders: {
        token: authToken
      }
    });
    return next.handle(insertedToken);
  }
}
