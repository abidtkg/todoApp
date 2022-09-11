import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { appName } from 'src/app/app.config';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.scss']
})
export class NotfoundComponent implements OnInit {

  public appName = appName;
  public isLoggedIn: boolean = false;

  constructor(
    private Title: Title,
    private Auth: AuthService
  ) { }

  ngOnInit(): void {
    this.Title.setTitle(`404 Not Found - ${this.appName}`)
    if(this.Auth.loggedIn() == true) {
      this.isLoggedIn = true;
    }
  }

}
