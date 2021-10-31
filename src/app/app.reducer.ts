import { TodoDTO } from './todos/models/todo.dto';

export interface AppState {
  todos: TodoDTO[];
  loading: boolean;
  loaded: boolean;
  error: any;
}
