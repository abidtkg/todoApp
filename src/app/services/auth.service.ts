import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { server } from 'src/app/app.config';
import { IUserLogin } from '../interfaces/User.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private server = server;

  constructor(
    private http: HttpClient
  ) { }

  login(user: IUserLogin): Observable<IUserLogin> {
    return this.http.post<IUserLogin>(`${this.server}/auth/login`, user)
    .pipe(
      retry(1),
      catchError(this.errorHandeller)
    );
  }

  errorHandeller(error: HttpErrorResponse){
    return throwError(error);
  }
}
