"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TodoListItemComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var todo_actions_1 = require("../todo.actions");
var TodoListItemComponent = /** @class */ (function () {
    function TodoListItemComponent(store) {
        this.store = store;
        this.isEditing = false;
    }
    TodoListItemComponent.prototype.ngOnInit = function () {
        this.isEditing = false;
        this.titleInput = new forms_1.FormControl(this.todo.title, forms_1.Validators.required);
    };
    TodoListItemComponent.prototype.submitTask = function () {
        this.isEditing = false;
        if (!this.titleInput.invalid && this.titleInput.value !== this.todo.title) {
            this.store.dispatch(todo_actions_1.TODO_ACTIONS.editTodo({
                id: this.todo.id,
                title: this.titleInput.value
            }));
        }
    };
    TodoListItemComponent.prototype.editTask = function () {
        this.isEditing = true;
        this.titleInput.setValue(this.todo.title);
    };
    TodoListItemComponent.prototype.completeTask = function () {
        this.store.dispatch(todo_actions_1.TODO_ACTIONS.completeTodo({ id: this.todo.id }));
    };
    TodoListItemComponent.prototype.deleteTask = function () {
        this.store.dispatch(todo_actions_1.TODO_ACTIONS.deleteTodo({ id: this.todo.id }));
    };
    __decorate([
        core_1.Input()
    ], TodoListItemComponent.prototype, "todo");
    TodoListItemComponent = __decorate([
        core_1.Component({
            selector: 'app-todo-list-item',
            templateUrl: './todo-list-item.component.html',
            styleUrls: ['./todo-list-item.component.sass']
        })
    ], TodoListItemComponent);
    return TodoListItemComponent;
}());
exports.TodoListItemComponent = TodoListItemComponent;
