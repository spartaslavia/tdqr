import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TodoService } from 'src/app/todo/services/todo.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'tdqr-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  constructor(private translateService: TranslateService, public todoService: TodoService) { }

  ngOnInit(): void {
    this.translateService.use(environment.defaultLocale);
  }

}
