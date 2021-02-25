import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { ITodoItem } from '../models/interfaces';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private items = [
    {
      tag: 'PRD',
      title: 'Painting a illustration.',
      dateTime: '2018/9/17 pm9:00',
      type: 'type1',
    },
    {
      tag: '100day',
      title: 'Draw its user interface.',
      dateTime: '2018/9/15 pm11:00',
      type: 'type3',
    },
    {
      tag: 'Taobao',
      title: 'Taobao maker festival.',
      dateTime: '2018/9/16 am12:00',
      type: 'type2',
    },
    {
      tag: 'Piano',
      title: 'Taobao maker festival.',
      dateTime: '2018/9/16 am12:00',
      type: 'type4',
    },
    {
      tag: 'Show',
      title: 'Dua lipa Shanghai debut.',
      dateTime: '2018/9/16 am9:00',
      type: 'type5',
    },
    {
      tag: 'Ideas',
      title: 'Taobao maker festival.',
      dateTime: '2018/9/16 am12:00',
      type: 'type6',
    },
  ];

  loading$ = new BehaviorSubject(false);

  constructor() {}

  getTodoItems(): Observable<ITodoItem[]> {
    return of(this.items);
  }
}
