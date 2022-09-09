import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError, retry, catchError } from 'rxjs';
import { server } from 'src/app/app.config';
import { ILoggedin } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private server = server;

  constructor(
    private http: HttpClient
  ) { }

  login(user: {email: string, password: string}): Observable<ILoggedin> {
    return this.http.post<ILoggedin>(`${this.server}/auth/login`, user)
    .pipe(
      retry(1),
      catchError(this.errorHandeller)
    );
  }

  errorHandeller(error: HttpErrorResponse) {
    return throwError(() => error);
  }
}
