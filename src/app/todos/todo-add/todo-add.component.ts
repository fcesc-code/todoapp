import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { TODO_ACTIONS } from '../actions/todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.sass'],
})
export class TodoAddComponent implements OnInit {
  titleInput: FormControl;

  constructor(private store: Store<AppState>) {
    this.titleInput = new FormControl('', Validators.required);
  }

  ngOnInit(): void {}

  addTodoTask(): void {
    if (this.titleInput.valid) {
      this.store.dispatch(
        TODO_ACTIONS.createTodo({ title: this.titleInput.value })
      );
      this.titleInput.reset();
    }
  }
}
