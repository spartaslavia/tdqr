import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { ITodoItem } from '../../models/interfaces';
import { pipe, Subscription } from 'rxjs';
import { catchError, finalize, map } from 'rxjs/operators';

@Component({
  selector: 'tdqr-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.less'],
})
export class TodoListComponent implements OnInit {
  private sub = new Subscription();
  list: ITodoItem[] = [];

  constructor(private _todoService: TodoService) {}

  ngOnInit(): void {
    this._todoService.loading$.next(true);
    this.initTodoData();
  }

  private initTodoData() {
    // setTimeout(() => {
      this.sub.add(
        this._todoService
          .getTodoItems()
          .pipe(
            map((data) => {
              this.list = data;
            }),
            finalize(() => {
              this._todoService.loading$.next(false);
            }),
            catchError((err) => {
              return err;
            })
          )
          .subscribe()
      );
    // }, 1000); // data loading simulation
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
