import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ITodo } from '../../interfaces/todo.interface';

@Component({
  selector: 'app-view-todo',
  templateUrl: './view-todo.component.html',
  styleUrls: ['./view-todo.component.scss']
})
export class ViewTodoComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ViewTodoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ITodo
  ) { }

  ngOnInit(): void {
  }

  close(){
    this.dialogRef.close();
  }
}
