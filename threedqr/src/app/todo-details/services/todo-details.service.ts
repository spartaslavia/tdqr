import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { ITodoDetails } from '../models/ITodoDetails';

@Injectable({
  providedIn: 'root'
})
export class TodoDetailsService {

  private todoItem: ITodoDetails = {
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Duis viverra diam non justo. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat.',
    projects: 'PRD Rebrand 2018',
    tags: 'Add Tags',
    title: 'Re-design',
  }

  constructor() { }

  getTodoItem() {
    return of(this.todoItem);
  }
}
