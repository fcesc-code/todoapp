import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoListItemComponent } from './todo-list-item/todo-list-item.component';
import { TodoAddComponent } from './todo-add/todo-add.component';

@NgModule({
  declarations: [TodoListComponent, TodoListItemComponent, TodoAddComponent],
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  exports: [TodoListItemComponent, TodoListComponent, TodoAddComponent],
})
export class TodoModule {}
