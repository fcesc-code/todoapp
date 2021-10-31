import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TodoDTO } from '../models/todo.dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient) {}

  getAllTodos(): Observable<TodoDTO[]> {
    return Object.assign(this.http.get('../assets/mocks/todos.json'));
  }
}
