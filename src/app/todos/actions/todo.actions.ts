import { createAction, props } from '@ngrx/store';
import { TodoDTO } from '../models/todo.dto';

const TODO_PREFIX: string = '[TODO]';

function prefix(str: string) {
  return `${TODO_PREFIX} ${str.toLowerCase()}`;
}

export const TODO_ACTIONS_TITLES = {
  create: prefix('create todo'),
  update: prefix('update todo'),
  delete: prefix('delete todo'),
  complete: prefix('complete todo'),
  getAll: prefix('get all'),
  getAllSuccess: prefix('get all success'),
  getAllError: prefix('get all error'),
};

export const TODO_ACTIONS = {
  createTodo: createAction(
    TODO_ACTIONS_TITLES.create,
    props<{ title: string }>()
  ),
  completeTodo: createAction(
    TODO_ACTIONS_TITLES.complete,
    props<{ id: number }>()
  ),
  editTodo: createAction(
    TODO_ACTIONS_TITLES.update,
    props<{ id: number; title: string }>()
  ),
  deleteTodo: createAction(TODO_ACTIONS_TITLES.delete, props<{ id: number }>()),
  getAllTodos: createAction(TODO_ACTIONS_TITLES.getAll),
  getAllTodosSuccess: createAction(
    TODO_ACTIONS_TITLES.getAllSuccess,
    props<{ todos: TodoDTO[] }>()
  ),
  getAllTodosError: createAction(
    TODO_ACTIONS_TITLES.getAllError,
    props<{ payload: any }>()
  ),
};
