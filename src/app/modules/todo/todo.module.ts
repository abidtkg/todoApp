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


@NgModule({
  declarations: [
    TodosComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    MatTabsModule,
    MatToolbarModule,
    MatButtonModule,
    FormsModule,
    MatIconModule
  ],
  providers: [
    TodoService
  ]
})
export class TodoModule { }
