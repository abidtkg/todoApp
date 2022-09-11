import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { appName } from 'src/app/app.config';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public appName = appName;

  constructor(
    private Title: Title
  ) { }

  ngOnInit(): void {
    this.Title.setTitle(`About - ${this.appName}`);
  }

}
