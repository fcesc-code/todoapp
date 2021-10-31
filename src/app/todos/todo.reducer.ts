import { createReducer, on } from '@ngrx/store';
import { Action, ActionReducer, TypedAction } from '@ngrx/store/src/models';
import { TodoDTO } from './models/todo.dto';
import { TODO_ACTIONS } from './todo.actions';

export const initialState: TodoDTO[] = [];

const _todoReducer = createReducer(
  initialState,
  on(TODO_ACTIONS.createTodo, (state, { title }) => [
    ...state,
    new TodoDTO(title),
  ])
);

export function todoReducer(state: any, action: any) {
  return _todoReducer(state, action);
}
