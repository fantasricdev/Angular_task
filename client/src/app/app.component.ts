import { Component } from '@angular/core';
import { HttpserviceService } from './service/httpservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  todaydate;
  constructor(private myservice: HttpserviceService) { }
  ngOnInit() {
    this.todaydate = this.myservice.showTodayDate();
    // localStorage.setItem('BASE_URL', 'http://192.168.1.190:3000/todos/');
    localStorage.setItem('BASE_URL', 'todos/');
    localStorage.setItem('login',"1")
  }
}
