import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { appName } from 'src/app/app.config';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public appName = appName;

  constructor(
    private Title: Title
  ) { }

  ngOnInit(): void {
    this.Title.setTitle(`${this.appName} - Manage your task easily`);
  }

}
