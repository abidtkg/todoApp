import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/models/Todos';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo:Todo;
  @Output() deleteTodo:EventEmitter<Todo> = new EventEmitter();

  constructor(
    private todoService: TodoService
  ) { }

  ngOnInit(): void {
  }

  // SET DYNAMIC CSS CLASSES
  setClasses () {
    let classes ={ todo: true, 'is-complete': this.todo.completed }
    return classes;
  }

  onToggle(todo){
    // TOGGLE ACTION ON UI
    todo.completed = !todo.completed

    // TOGGLE ACTION ON SERVER
    this.todoService.toggleCompletedTodo(todo)
      .subscribe(todo => console.log(todo));
  }

  onDelete(todo){
    this.deleteTodo.emit(todo);
  }
  
}
