import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todos';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  Todos:Todo[];
  constructor(
    private  todoService: TodoService
  ) { }

  ngOnInit(): void {
    this.todoService.getTodos()
      .subscribe(data => this.Todos = data);
  }

  deleteTodo(todo: Todo){
    this.Todos = this.Todos.filter(t => t.id !== todo.id);
    console.log(`Delted > ${todo.id} - ${todo.title}`);

    this.todoService.deleteTodo(todo).subscribe();
  }

  // ADD TODO ITEM
  addTodo(todo: Todo){
    this.todoService.addTodo(todo).subscribe(data => this.Todos.push(data));
  }
}
