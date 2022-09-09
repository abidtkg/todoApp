import { Component, OnInit } from '@angular/core';
import { appName } from 'src/app/app.config';
import { AuthService } from '../../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';


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
    private Snackbar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  login(){
    this.Auth.login({email: this.inEmail, password: this.inPassword})
    .subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (error) => {
        this.Snackbar.open(error.error.error, 'Close');
      }
    });
  }

}
