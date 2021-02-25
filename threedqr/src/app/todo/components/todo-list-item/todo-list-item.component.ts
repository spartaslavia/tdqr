import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ITodoItem } from '../../models/interfaces';

@Component({
  selector: 'tdqr-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.less'],
})
export class TodoListItemComponent implements OnInit {
  
  @Input() item: ITodoItem;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onClick() {
    this.router.navigate(['details']);
  }
}
