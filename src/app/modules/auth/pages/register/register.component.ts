import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { appName } from 'src/app/app.config';
import { IRegister } from '../../interfaces/auth.interface';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public appName = appName;
  public isProcessing: boolean = false;

  public inName: string = '';
  public inEmail: string = '';
  public inPassword: string = '';

  constructor(
    private Title: Title,
    private Auth: AuthService,
    private Snackbar: MatSnackBar,
    private Router: Router
  ) { }

  ngOnInit(): void {
    this.Title.setTitle(`Register - ${this.appName}`);
    if(this.Auth.loggedIn() == true){
      this.Router.navigate(['/todo/todos']);
    }
  }

  register(){
    this.isProcessing = true;
    const user: IRegister = {
      name: this.inName,
      email: this.inEmail,
      password: this.inPassword
    }

    this.Auth.register(user)
    .subscribe({
      next: (data) => {
        this.Snackbar.open('Register Success & Logged In', 'Close');
        localStorage.setItem('token', data.token);
        this.Router.navigate(['/todo/todos']);
      },
      error: (error) => {
        this.isProcessing = false;
        this.Snackbar.open(error.error.error, 'Close');
      }
    });
  }

}
