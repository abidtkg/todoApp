import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { CompletedtodosComponent } from './pages/completedtodos/completedtodos.component';
import { PendingtodosComponent } from './pages/pendingtodos/pendingtodos.component';
import { TodosComponent } from './pages/todos/todos.component';

const routes: Routes = [
  { path: 'todo/todos', component: TodosComponent, canActivate: [AuthGuard] },
  { path: 'todo/pending', component: PendingtodosComponent, canActivate: [AuthGuard] },
  { path: 'todo/completed', component: CompletedtodosComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
