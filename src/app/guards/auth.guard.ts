import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../modules/auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private Auth: AuthService,
    private Router: Router
  ){}

  canActivate(): boolean {
    if (this.Auth.loggedIn()){
      return true;
    }else{
      this.Router.navigate(['/auth/login']);
      return false;
    }
  }
  
}
