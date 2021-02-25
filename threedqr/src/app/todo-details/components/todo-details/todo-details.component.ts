import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { map, finalize, catchError } from 'rxjs/operators';
import { TodoService } from 'src/app/todo/services/todo.service';
import { ITodoDetails } from '../../models/ITodoDetails';
import { TodoDetailsService } from '../../services/todo-details.service';

@Component({
  selector: 'tdqr-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.less'],
})
export class TodoDetailsComponent implements OnInit {
  private sub = new Subscription();
  item: ITodoDetails;

  constructor(
    private router: Router,
    private _todoDetailsService: TodoDetailsService,
    private _todoService: TodoService,
  ) {}

  ngOnInit(): void {
    this._todoService.loading$.next(true);
    this.sub.add(
      this._todoDetailsService.getTodoItem().pipe(
        map((data) => {
          this.item = data;
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
  }

  onClick() {
    this.router.navigate(['/']);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
