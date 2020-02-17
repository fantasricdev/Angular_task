import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpserviceService } from '../service/httpservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  @Output() private numberGenerated = new EventEmitter<number>();

  public message = "Save Successful!_parent";

  // all_users: any[];
  // filtered_users: any[];

  all_mydata: any[];
  filtered_mydata: any[];
  get_onedata: [];
  counter: number;

  item1: string;
  item2: string;
  item3: string;
  item4: string;
  item5: string;
  item6: string;
  item7: string;

  name: string;
  age: number;
  sex: string;
  major: string;
  major_list: string[];
  sex_list: string[];
  users: any[];

  constructor(private myservice: HttpserviceService) { }

  getAllMydata() {
    this.myservice.getAllMydata().subscribe(data => {
      console.log('data', data);
      if (data.length > 0) {
        this.counter = data.length
        this.all_mydata = data;
        this.filtered_mydata = data;
      }
    })
  }

  del_getOnedata(id: number) {
    if (localStorage.getItem('key') == "1") {
      // console.log("edit", id);
      this.myservice.getMydataOne(id).subscribe(data => {
        console.log('dataone', data);
        if (data.length > 0) {
          // this.item1 = data.item1
        }
      })
    } else {
      this.myservice.deleteMydata(id).subscribe(data => {
        this.getAllMydata();
      })
    }
    console.log("my_request", id);


  }

  getMydataOnes(data: any[]) {
    console.log("getmyOnes:", data);
  }

  ngOnInit() {

    if(localStorage.getItem('login') == "1"){
      alert("please login !!!")
     window.location.href = "/#/typography";
    }
    this.counter = 0

    this.all_mydata = [];
    this.filtered_mydata = [];
    this.getAllMydata();
    this.item1 = "";
    this.item2 = "";
    this.item3 = "";
    this.item4 = "";
    this.item5 = "";
    this.item6 = "";
    this.item7 = "";

    this.name = '';
    this.age = null;
    this.sex = 'male';
    this.major = 'physics';
    this.major_list = ['physics', 'mathematics', 'chemistry', 'english', 'infrared', 'nightsenser'];
    this.sex_list = ['male', 'female'];
    this.users = [];
  }
}
