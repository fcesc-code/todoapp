"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.todoReducer = exports.initialState = void 0;
var store_1 = require("@ngrx/store");
var todo_dto_1 = require("./models/todo.dto");
var todo_actions_1 = require("./todo.actions");
exports.initialState = [];
var _todoReducer = store_1.createReducer(exports.initialState, store_1.on(todo_actions_1.TODO_ACTIONS.createTodo, function (state, _a) {
    var title = _a.title;
    return __spreadArrays(state, [
        new todo_dto_1.TodoDTO(title),
    ]);
}), store_1.on(todo_actions_1.TODO_ACTIONS.completeTodo, function (state, _a) {
    var id = _a.id;
    return state.map(function (todo) {
        if (todo.id === id) {
            return __assign(__assign({}, todo), { done: true });
        }
        else {
            return todo;
        }
    });
}), store_1.on(todo_actions_1.TODO_ACTIONS.editTodo, function (state, _a) {
    var id = _a.id, title = _a.title;
    return state.map(function (todo) {
        if (todo.id === id) {
            return __assign(__assign({}, todo), { title: title });
        }
        else {
            return todo;
        }
    });
}));
function todoReducer(state, action) {
    return _todoReducer(state, action);
}
exports.todoReducer = todoReducer;
