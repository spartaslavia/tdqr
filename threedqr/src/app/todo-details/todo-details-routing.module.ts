import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoDetailsComponent } from './components/todo-details/todo-details.component';

const routes: Routes = [{
  path: '',
  component: TodoDetailsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoDetailsRoutingModule { }
