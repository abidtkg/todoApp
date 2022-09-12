import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodosComponent } from './pages/todos/todos.component';
import { MatTabsModule } from '@angular/material/tabs';
import { TodoService } from './services/todo.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { SharedModule } from '../shared/shared.module';
import { CompletedtodosComponent } from './pages/completedtodos/completedtodos.component';
import { PendingtodosComponent } from './pages/pendingtodos/pendingtodos.component';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    TodosComponent,
    CompletedtodosComponent,
    PendingtodosComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    MatTabsModule,
    MatToolbarModule,
    MatButtonModule,
    FormsModule,
    MatIconModule,
    MatMenuModule,
    SharedModule,
    MatListModule,
    MatTableModule
  ],
  providers: [
    TodoService
  ]
})
export class TodoModule { }
