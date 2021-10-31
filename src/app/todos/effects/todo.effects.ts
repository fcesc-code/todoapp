import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TODO_ACTIONS } from '../actions/todo.actions';
import { TodoService } from '../services/todo.service';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class TodoEffects {
  constructor(private actions$: Actions, private todoService: TodoService) {}

  getTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TODO_ACTIONS.getAllTodos),
      mergeMap(() =>
        this.todoService.getAllTodos().pipe(
          map((todos) => TODO_ACTIONS.getAllTodosSuccess({ todos })),
          catchError((error) =>
            of(TODO_ACTIONS.getAllTodosError({ payload: error }))
          )
        )
      )
    )
  );
}
