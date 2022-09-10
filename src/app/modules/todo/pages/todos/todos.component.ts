import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TodoService } from '../../services/todo.service';
import { appName } from 'src/app/app.config';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  public appName = appName;

  constructor(
    private Todo: TodoService,
    private Title: Title
  ) { }

  ngOnInit(): void {
    this.Title.setTitle(`Todos - ${this.appName}`);
  }

}
