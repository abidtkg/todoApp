import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TodoService } from '../../services/todo.service';
import { appName } from 'src/app/app.config';
import { ITodo } from '../../interfaces/todo.interface';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  public appName = appName;
  public todos: ITodo[] = [];

  constructor(
    private Todo: TodoService,
    private Title: Title
  ) { }

  ngOnInit(): void {
    this.Title.setTitle(`Todos - ${this.appName}`);
    this.loadTodos();
  }

  loadTodos(){
    this.Todo.todos()
    .subscribe({
      next: (data) => {
        this.todos = data;
      }
    });
  }

}
