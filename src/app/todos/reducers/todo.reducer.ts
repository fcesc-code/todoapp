import { createReducer, on } from '@ngrx/store';
import { TodoDTO } from '../models/todo.dto';
import { TODO_ACTIONS } from '../actions/todo.actions';
import { state } from '@angular/animations';

export interface TodoState {
  todos: TodoDTO[];
  loading: boolean;
  loaded: boolean;
  error: any;
}

export const initialState: TodoState = {
  todos: [new TodoDTO('Terminar práctica 2')],
  loading: false,
  loaded: false,
  error: null,
};

const _todoReducer = createReducer(
  initialState,
  on(TODO_ACTIONS.createTodo, (state, { title }) => ({
    ...state,
    loading: false,
    loaded: false,
    todos: [...state.todos, new TodoDTO(title)],
  })),
  on(TODO_ACTIONS.completeTodo, (state, { id }) => {
    return {
      ...state,
      loading: false,
      loaded: false,
      todos: state.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            done: true,
          };
        } else {
          return todo;
        }
      }),
    };
  }),
  on(TODO_ACTIONS.editTodo, (state, { id, title }) => {
    return {
      ...state,
      loading: false,
      loaded: false,
      todos: state.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            title,
          };
        } else {
          return todo;
        }
      }),
    };
  }),
  on(TODO_ACTIONS.deleteTodo, (state, { id }) => {
    return {
      ...state,
      loading: false,
      loaded: false,
      todos: state.todos.filter((todo) => todo.id !== id),
    };
  }),
  on(TODO_ACTIONS.getAllTodos, (state) => ({
    ...state,
    loading: true,
  })),
  on(TODO_ACTIONS.getAllTodosSuccess, (state, { todos }) => ({
    ...state,
    loading: false,
    loaded: true,
    todos: [...todos],
  })),
  on(TODO_ACTIONS.getAllTodosError, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: payload,
  }))
);

export function todoReducer(state: any, action: any) {
  return _todoReducer(state, action);
}
