import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  constructor(private http: HttpClient) { }
  getAllMydata(): Observable<any> {
    return this.http.get<any>(localStorage.getItem('BASE_URL') + 'mydata_show');
  }
  saveMydata(user: any): Observable<any> {
    return this.http.post<any>(localStorage.getItem('BASE_URL') + 'mydata_add', user);
  }
  deleteMydata(id: number) {
    return this.http.delete(localStorage.getItem('BASE_URL') + 'mydata_del/' + id);
  }
  getMydataOne(id: number) {
    return this.http.get<any>(localStorage.getItem('BASE_URL') + 'mydata_showone/' + id);
  }
  editMydata(user: any): Observable<any> {
    return this.http.post<any>(localStorage.getItem('BASE_URL') + 'mydata_update/', user);
  } 
  showTodayDate() {
    let ndate = new Date();
    return ndate;
  }
}
