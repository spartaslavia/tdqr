import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { TranslateModule } from '@ngx-translate/core';
import { TodoModule } from '../todo/todo.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TranslateModule,
    TodoModule,
    MatProgressSpinnerModule
  ]
})
export class HomeModule { }
