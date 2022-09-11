import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { appName } from 'src/app/app.config';

@Component({
  selector: 'app-pendingtodos',
  templateUrl: './pendingtodos.component.html',
  styleUrls: ['./pendingtodos.component.scss']
})
export class PendingtodosComponent implements OnInit {

  public appName = appName;

  constructor(
    private Title: Title
  ) { }

  ngOnInit(): void {
    this.Title.setTitle(`Pending Todos - ${this.appName}`);
  }

}
