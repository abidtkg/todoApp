import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { appName } from 'src/app/app.config';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationComponent } from '../../dialogs/confirmation/confirmation.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  public appName = appName;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private Auth: AuthService,
    private Dialog: MatDialog,
    private Router: Router
  ) {}

  logOut(){
    const dialogRef = this.Dialog.open(ConfirmationComponent, {
      data: {message: 'Are you sure you want to log out?'}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result == true){
        this.Auth.logOut();
      }
    });
  }

  navigateTo(path: string){
    this.Router.navigate([path]);
  }

}
