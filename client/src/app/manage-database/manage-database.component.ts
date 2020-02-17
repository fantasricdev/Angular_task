import { Component, OnInit, Input, Output, EventEmitter, ViewChild, OnChanges } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { HttpserviceService } from '../service/httpservice.service';

import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-manage-database',
  templateUrl: './manage-database.component.html',
  styleUrls: ['./manage-database.component.scss']
})
export class ManageDatabaseComponent implements OnInit, OnChanges{

  email = new FormControl('', [Validators.required, Validators.email]);
  phonenumber = new FormControl('', [Validators.required]);
  hide = true;

  displayedColumns = ['id', 'slider', 'password', 'phonenumber', 'email', 'checkbox', 'dropdown', 'radiobutton', 'edit', 'delete'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
    


  @Output() private numberGenerated2 = new EventEmitter<number>();
  @Input() users: any[];
  public message = "Save Successful!_parent";

  constructor(private myservice: HttpserviceService ) {

    

    console.log('datasource: ', this.users);
   }

  flagvalue: boolean;
  item1: string;
  item2: string;
  item3: string;
  item4: string;
  item5: string;
  item6: string;
  item7: string;
  variable:boolean[]=[];

  major_list: string[];

  id: string;
  counter : number;
  tablecounter : number;


  ngOnInit() {
    this.users = [];
    console.log('users: ', this.users);
    this.flagvalue = false
    this.counter = this.users.length;
    this.tablecounter = 0;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.major_list = ['physics', 'mathematics', 'chemistry', 'english', 'infrared', 'nightsenser'];

  }

  ngOnChanges() {
    console.log('users onchange: ', this.users);
    this.dataSource = new MatTableDataSource(this.users);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }
    this.item1 =value.toString();
    return value;
  }
  getErrorphonenumber(){
    return this.phonenumber.hasError('required') ? 'You must enter a value' :
        '';
  }
  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

  editmydata() {
    var r = confirm("Do you want update this item ?");
    if (r == true) {
      if(this.variable[0] && this.variable[1] && this.variable[2] ){
        this.item5 = "Chocolate & Vanilla & Strawberry" ;
      }else if(this.variable[0] && this.variable[1]){
        this.item5 = "Chocolate & Vanilla " ;
      }else if(this.variable[1] && this.variable[2]){
        this.item5 = "  Vanilla & Strawberry" ;
      }else if(this.variable[0] && this.variable[2]){
        this.item5 = "Chocolate  & Strawberry" ;
      }else if(this.variable[0] ){
        this.item5 = "Chocolate" ;
      }else if(this.variable[1] ){
        this.item5 = " Vanilla " ;
      }else if(this.variable[2] ){
        this.item5 = " Strawberry" ;
      }
      
      let user = { id: this.id, item1: this.item1, item2: this.item2, item3: this.item3, item4: this.item4, item5: this.item5, item6: this.item6, item7: this.item7 };
      console.log(user);
      this.myservice.editMydata(user).subscribe((data) => {
        alert("Updated !!!");
        window.location.reload();
      })      
    } else {

    }
    this.flagvalue = false
  }

  del_edit(number, flag) {
    if (flag == 1) {
      localStorage.setItem('key', '1');

      this.myservice.getMydataOne(number).subscribe(data => {
        console.log('dataone', data);
        this.item1 = data.item1
        this.item2 = data.item2
        this.item3 = data.item3
        this.item4 = data.item4
        this.item5 = data.item5
        this.item6 = data.item6
        this.item7 = data.item7
        this.id = data._id
        this.flagvalue = true
      })
    } else if (flag == 2) {
      localStorage.setItem('key', '2');
      var r = confirm("Do you want delete this item ?");
      if (r == true) {
        this.numberGenerated2.emit(number);
      } else {

      }
    }
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}

export interface UserData {
  id: string;
  slider: string;
  password: string;
  phonenumber: string;
  email: string;
  checkbox: string;
  dropdown: string;
  radiobutton: string;
}