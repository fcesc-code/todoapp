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
  ]),
  on(TODO_ACTIONS.completeTodo, (state, { id }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          done: true,
        };
      } else {
        return todo;
      }
    });
  }),
  on(TODO_ACTIONS.editTodo, (state, { id, title }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          title,
        };
      } else {
        return todo;
      }
    });
  }),
  on(TODO_ACTIONS.deleteTodo, (state, { id }) => {
    return state.filter((todo) => todo.id !== id);
  })
);

export function todoReducer(state: any, action: any) {
  return _todoReducer(state, action);
}
