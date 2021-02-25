import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateFakeLoader, TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';

import { TodoListComponent } from './todo-list.component';
import { TodoService } from '../../services/todo.service';
import { of, BehaviorSubject } from 'rxjs';

class MockTodoService {
  loading$ = new BehaviorSubject(true);
  getTodoItems() {
    return of([]);
  }
}

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;
  let mockTodoService = new MockTodoService();

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoListComponent],
      imports: [

        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useClass: TranslateFakeLoader,
          },
        }),
      ],
      providers: [TranslateService, {provide: TodoService, useValue: mockTodoService}],
    });

    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getTodoItems', ()=> {
    spyOn(mockTodoService, 'getTodoItems').and.returnValue(of([]));;
    component.ngOnInit();
    expect(mockTodoService.getTodoItems).toHaveBeenCalled();
  })
});
