import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TodoService } from '../../services/todo.service';
import { appName } from 'src/app/app.config';
import { ITodo } from '../../interfaces/todo.interface';
import { HelperService } from 'src/app/modules/shared/services/helper.service';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {


  public appName = appName;
  public todos: ITodo[] = [];
  public tableCols: string[] = ['title', 'date', 'status', 'action'];


  constructor(
    private Todo: TodoService,
    private Title: Title,
    private Helper: HelperService
  ) { }

  ngOnInit(): void {
    this.Title.setTitle(`Todos - ${this.appName}`);
    this.loadTodos();
  }

  loadTodos(){
    this.Todo.todos()
    .subscribe({
      next: (data) => {
        for(let i = 0; i < data.length; i++){
          data[i].date = this.Helper.toLocalDateTime(data[i].date);
        }
        this.todos = data;
      }
    });
  }

}
