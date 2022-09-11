import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError, retry, catchError } from 'rxjs';
import { server } from 'src/app/app.config';
import { ILoggedin, IRegister, IRegisterResponse } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private server = server;

  constructor(
    private http: HttpClient,
    private Router: Router
  ) { }

  login(user: {email: string, password: string}): Observable<ILoggedin> {
    return this.http.post<ILoggedin>(`${this.server}/auth/login`, user)
    .pipe(
      retry(1),
      catchError(this.errorHandeller)
    );
  }

  register(user: IRegister): Observable<IRegisterResponse> {
    return this.http.post<IRegisterResponse>(`${this.server}/auth/create`, user)
    .pipe(
      retry(1),
      catchError(this.errorHandeller)
    );
  }

  loggedIn(): Boolean {
    return !!localStorage.getItem('token');
  }
  
  logOut(): void {
    localStorage.removeItem('token');
    this.Router.navigate(['/auth/login']);
  }

  errorHandeller(error: HttpErrorResponse) {
    return throwError(() => error);
  }
}
