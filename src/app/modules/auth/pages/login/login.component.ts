import { Component, OnInit } from '@angular/core';
import { appName } from 'src/app/app.config';
import { AuthService } from '../../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public appName = appName;

  public inEmail: string = '';
  public inPassword: string = '';

  public isProcessing: boolean = false;

  constructor(
    private Auth: AuthService,
    private Snackbar: MatSnackBar,
    private Title: Title,
    private Router: Router
  ) { }

  ngOnInit(): void {
    this.Title.setTitle(`Login - ${this.appName}`);
    if(this.Auth.loggedIn() == true) {
      this.Router.navigate(['/todo/todos']);
    }
  }

  login(){
    this.isProcessing = true;
    this.Auth.login({email: this.inEmail, password: this.inPassword})
    .subscribe({
      next: (data) => {
        localStorage.setItem('token', data.token);
        this.Snackbar.open('Logged In', 'Close');
        this.Router.navigate(['/todo/todos']);
      },
      error: (error) => {
        this.isProcessing = false;
        this.Snackbar.open(error.error.error, 'Close');
      }
    });
  }

}
