import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { TodoDTO } from '../models/todo.dto';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { TODO_ACTIONS } from '../actions/todo.actions';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.sass'],
})
export class TodoListItemComponent implements OnInit {
  @Input() todo!: TodoDTO;

  titleInput!: FormControl;
  isEditing: boolean = false;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.isEditing = false;
    this.titleInput = new FormControl(this.todo.title, Validators.required);
  }

  submitTask() {
    this.isEditing = false;

    if (!this.titleInput.invalid && this.titleInput.value !== this.todo.title) {
      this.store.dispatch(
        TODO_ACTIONS.editTodo({
          id: this.todo.id,
          title: this.titleInput.value,
        })
      );
    }
  }

  editTask() {
    this.isEditing = true;
    this.titleInput.setValue(this.todo.title);
  }

  completeTask() {
    this.store.dispatch(TODO_ACTIONS.completeTodo({ id: this.todo.id }));
  }

  deleteTask() {
    this.store.dispatch(TODO_ACTIONS.deleteTodo({ id: this.todo.id }));
  }
}
