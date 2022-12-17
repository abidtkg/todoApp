import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { server } from 'src/app/app.config';
import { Observable, throwError, retry, catchError } from 'rxjs';
import { ICreateTodo, ITodo } from '../interfaces/todo.interface';

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

  create(todo: ICreateTodo): Observable<ITodo> {
    return this.http.post<ITodo>(`${this.server}/todo/create`, todo)
    .pipe(
      retry(1),
      catchError(this.errorHandeller)
    );
  }

  delete(todo: ITodo): Observable<any> {
    return this.http.delete<any>(`${this.server}/todo/delete/${todo._id}`)
    .pipe(
      retry(1),
      catchError(this.errorHandeller)
    );
  }

  updateStatus(completed: boolean, id: string): Observable<any> {
    return this.http.put<any>(`${this.server}/todo/update/${id}`, {completed: completed})
    .pipe(
      retry(1),
      catchError(this.errorHandeller)
    );
  }

  completedTodos(skip: number, limit: number): Observable<ITodo[]> {
    return this.http.get<ITodo[]>(`${this.server}/todo/list/pending/${skip}/${limit}`)
    .pipe(
      retry(1),
      catchError(this.errorHandeller)
    );
  }

  errorHandeller(error: HttpErrorResponse) {
    return throwError(() => error);
  }
}
