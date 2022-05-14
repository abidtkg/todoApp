import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/pages/about/about.component';
import { LoginComponent } from './components/pages/auth/login/login.component';
import { SignupComponent } from './components/pages/auth/signup/signup.component';
import { HomeComponent } from './components/pages/home/home.component';
import { TodosComponent } from './components/pages/todos/todos.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'todos', component: TodosComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
