import { createAction, props } from '@ngrx/store';

const TODO_PREFIX: string = '[TODO]';
function prefix(str: string) {
  return `${TODO_PREFIX} ${str.toLowerCase()}`;
}
export const TODO_ACTIONS_TITLES = {
  create: prefix('create todo'),
  update: prefix('update todo'),
  delete: prefix('delete todo'),
  complete: prefix('complete todo'),
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
};
