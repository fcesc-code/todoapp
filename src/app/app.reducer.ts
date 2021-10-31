// import { TodoDTO } from './todos/models/todo.dto';

// export interface AppState {
//   todos: TodoDTO[];
//   loading: boolean;
//   loaded: boolean;
//   error: any;
// }
import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './todos/reducers/todo.reducer';

export interface AppState {
  todosApp: reducers.TodoState;
}

export const appReducers: ActionReducerMap<AppState> = {
  todosApp: reducers.todoReducer,
};
