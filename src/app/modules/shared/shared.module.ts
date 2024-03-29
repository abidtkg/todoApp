import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { NavComponent } from './layout/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { ConfirmationComponent } from './dialogs/confirmation/confirmation.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { AboutComponent } from './pages/about/about.component';
import { SharedRoutingModule } from './shared-routing.module';
import { MatCardModule } from '@angular/material/card';
import { HomeComponent } from './pages/home/home.component';
import { HelperService } from './services/helper.service';



@NgModule({
  declarations: [
    NotfoundComponent,
    NavComponent,
    ConfirmationComponent,
    AboutComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatIconModule,
    MatMenuModule,
    MatDialogModule,
    MatDividerModule,
    SharedRoutingModule,
    MatCardModule
  ],
  exports: [
    NotfoundComponent,
    NavComponent,
    ConfirmationComponent
  ],
  providers: [
    HelperService
  ]
})
export class SharedModule { }
