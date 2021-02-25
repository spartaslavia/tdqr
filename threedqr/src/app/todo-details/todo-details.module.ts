import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TodoDetailsRoutingModule } from './todo-details-routing.module';
import { TodoDetailsComponent } from './components/todo-details/todo-details.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [TodoDetailsComponent],
  imports: [
    CommonModule,
    TranslateModule,
    MatIconModule,
    MatButtonModule,
    TodoDetailsRoutingModule,
  ],
})
export class TodoDetailsModule {}
