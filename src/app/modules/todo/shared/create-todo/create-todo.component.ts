import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ICreateTodo } from '../../interfaces/todo.interface';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss']
})
export class CreateTodoComponent implements OnInit {

  public title: string = '';
  public description: string = '';
  public isProcessing: boolean = false;

  constructor(
    private Todo: TodoService,
    private Snackbar: MatSnackBar,
    private DialogRef: MatDialogRef<CreateTodoComponent>
  ) { }

  ngOnInit(): void {
  }

  create(){
    this.isProcessing = true;
    const todo: ICreateTodo = {
      title: this.title,
      description: this.description
    }

    this.Todo.create(todo)
    .subscribe({
      next: (data) => {
        this.Snackbar.open('Todo Created!', 'Close');
        this.DialogRef.close(true);
      },
      error: (error) => {
        this.isProcessing = false;
        this.Snackbar.open(error.error.error, 'Close');
      }
    });
  }

}
