import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { appName } from 'src/app/app.config';

@Component({
  selector: 'app-completedtodos',
  templateUrl: './completedtodos.component.html',
  styleUrls: ['./completedtodos.component.scss']
})
export class CompletedtodosComponent implements OnInit {

  public appName = appName;

  constructor(
    private Title: Title
  ) { }

  ngOnInit(): void {
    this.Title.setTitle(`Completed Todos - ${this.appName}`);
  }

}
