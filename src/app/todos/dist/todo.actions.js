"use strict";
exports.__esModule = true;
exports.TODO_ACTIONS = exports.TODO_ACTIONS_TITLES = void 0;
var store_1 = require("@ngrx/store");
var TODO_PREFIX = '[TODO]';
function prefix(str) {
    return TODO_PREFIX + " " + str.toLowerCase();
}
exports.TODO_ACTIONS_TITLES = {
    create: prefix('create todo'),
    update: prefix('update todo'),
    "delete": prefix('delete todo'),
    complete: prefix('complete todo')
};
exports.TODO_ACTIONS = {
    createTodo: store_1.createAction(exports.TODO_ACTIONS_TITLES.create, store_1.props()),
    completeTodo: store_1.createAction(exports.TODO_ACTIONS_TITLES.complete, store_1.props()),
    editTodo: store_1.createAction(exports.TODO_ACTIONS_TITLES.update, store_1.props()),
    deleteTodo: store_1.createAction(exports.TODO_ACTIONS_TITLES["delete"], store_1.props())
};
