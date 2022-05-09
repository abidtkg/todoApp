import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private Todo: TodoService
  ) { }

  ngOnInit(): void {
    this.Todo.testimonials()
    .subscribe(data => {
      console.log(data)
    }, error => {
      console.log(error)
    })
  }

}
