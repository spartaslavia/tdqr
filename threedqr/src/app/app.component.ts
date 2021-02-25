import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';
import { TodoService } from './todo/services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent implements OnInit {
  title = 'threedqr';

  constructor(private _translateService: TranslateService,) {}

  ngOnInit() {
    this._translateService.use(environment.defaultLocale);
  }
}
