import { Component, OnInit } from '@angular/core';
import { IUserLogin } from 'src/app/interfaces/User.interface';
import { AuthService } from 'src/app/services/auth.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  public showProcess = false;
  public inEmail: string = '';
  public inPassword: string = '';

  constructor(
    private Auth: AuthService,
    private _snackBar: MatSnackBar,
    private Router: Router
  ) { }

  ngOnInit(): void {
  }

  doLogin(){
    this.showProcess = true;
    const payload: IUserLogin = {
      email: this.inEmail,
      password: this.inPassword
    }
    this.Auth.login(payload)
    .subscribe(data => {
      localStorage.setItem('token', data.token || '');
      this.showProcess = false;
      this._snackBar.open('✔️ Logged in');
    }, error => {
      this.showProcess = false;
      this._snackBar.open(`⚠️ Username or password error`);
    })
  }

}