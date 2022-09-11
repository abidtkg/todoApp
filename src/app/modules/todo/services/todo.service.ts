import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { server } from 'src/app/app.config';
import { Observable, throwError, retry, catchError } from 'rxjs';
import { ITodo } from '../interfaces/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private server = server;

  constructor(
    private http: HttpClient
  ) { }

  todos(): Observable<ITodo[]> {
    return this.http.get<ITodo[]>(`${this.server}/todo/list`)
    .pipe(
      retry(1),
      catchError(this.errorHandeller)
    );
  }

  errorHandeller(error: HttpErrorResponse) {
    return throwError(() => error);
  }
}
