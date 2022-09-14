import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TodoService } from '../../services/todo.service';
import { appName } from 'src/app/app.config';
import { ITodo } from '../../interfaces/todo.interface';
import { HelperService } from 'src/app/modules/shared/services/helper.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateTodoComponent } from '../../shared/create-todo/create-todo.component';
import { ConfirmationComponent } from 'src/app/modules/shared/dialogs/confirmation/confirmation.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ViewTodoComponent } from '../view-todo/view-todo.component';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {


  public appName = appName;
  public todos: ITodo[] = [];
  public tableCols: string[] = ['title', 'date', 'status', 'action'];


  constructor(
    private Todo: TodoService,
    private Title: Title,
    private Helper: HelperService,
    private Dialog: MatDialog,
    private Snackbar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.Title.setTitle(`Todos - ${this.appName}`);
    this.loadTodos();
  }

  loadTodos(){
    this.Todo.todos()
    .subscribe({
      next: (data) => {
        for(let i = 0; i < data.length; i++){
          data[i].date = this.Helper.toLocalDateTime(data[i].date);
        }
        this.todos = data;
      }
    });
  }

  create(){
    const dialogRef = this.Dialog.open(CreateTodoComponent, {
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result == true) {
        this.loadTodos()
      }
    })
  }

  delete(todo: ITodo) {
    const dialogRef = this.Dialog.open(ConfirmationComponent, {
      disableClose: true,
      data: {message: 'Are you sure you want to delete the item?'}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result == true) {
        this.Todo.delete(todo)
        .subscribe({
          next: (data) => {
            this.Snackbar.open('Item Deleted!', 'Close');
            this.todos = this.Helper.removeOne(todo._id, this.todos);
          },
          error: (error) => {
            this.Snackbar.open(error.error.error, 'Close');
          }
        });
      }
    });
  }

  view(todo: ITodo) {
    const dialogRef = this.Dialog.open(ViewTodoComponent, {
      disableClose: true,
      data: todo,
      panelClass: 'custom-dialog-container'
    });
  }
}
