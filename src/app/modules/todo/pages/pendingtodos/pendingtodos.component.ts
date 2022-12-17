import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { appName } from 'src/app/app.config';
import { ITodo } from '../../interfaces/todo.interface';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-pendingtodos',
  templateUrl: './pendingtodos.component.html',
  styleUrls: ['./pendingtodos.component.scss']
})
export class PendingtodosComponent implements OnInit {

  public appName = appName;
  public todos: ITodo[] = [];
  public tableCols: string[] = ['title', 'date', 'status', 'action'];


  constructor(
    private Title: Title,
    private Todo: TodoService
  ) { }

  ngOnInit(): void {
    this.Title.setTitle(`Pending Todos - ${this.appName}`);
    this.loadTodos();
  }

  loadTodos(){
    this.Todo.completedTodos(0, 100)
    .subscribe({
      next: (data) => {
        this.todos = data;
      } 
    });
  }

}
