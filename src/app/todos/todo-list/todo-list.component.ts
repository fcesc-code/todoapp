import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { TodoDTO } from '../models/todo.dto';
// import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.sass'],
})
export class TodoListComponent implements OnInit {
  todos: TodoDTO[] = [];

  constructor(
    // private todoService: TodoService
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.store
      .select('todosApp')
      .subscribe((todosResponse) => (this.todos = todosResponse.todos));
    // this.todoService.getAllTodos().subscribe((todos) => console.log(todos));
  }
}
