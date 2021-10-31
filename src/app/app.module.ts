import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoModule } from './todos/todo.module';
import { StoreModule } from '@ngrx/store';
import { todoReducer } from './todos/todo.reducer';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TodoModule,
    StoreModule.forRoot({ todos: todoReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
