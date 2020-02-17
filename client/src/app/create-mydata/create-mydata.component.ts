import { Component, OnInit , Output, EventEmitter } from '@angular/core';
import { HttpserviceService } from '../service/httpservice.service';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-mydata',
  templateUrl: './create-mydata.component.html',
  styleUrls: ['./create-mydata.component.scss']
})
export class CreateMydataComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  phonenumber = new FormControl('', [Validators.required]);
  hide = true;
  @Output() private numberGenerated = new EventEmitter<number>();
 
  public message = 'Save Successful!_child';

  variable:boolean[]=[];
  item1: string;
  item2: string;
  item3: string;
  item4: string;
  item5: string;
  item6: string;
  item7: string;
  // my_data: any[];

  name: string;
  age: number;
  sex: string;
  major: string;
  major_list: string[];
  sex_list: string[];
  users: any[];
  constructor(private myservice: HttpserviceService) { }


  saveMyDataToDB() {
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
    
    let user = { item1: this.item1, item2: this.item2, item3: this.item3, item4: this.item4, item5: this.item5, item6: this.item6, item7: this.item7 };
    console.log(user);
    this.myservice.saveMydata(user).subscribe((data) => {
      alert(this.message);     
      this.numberGenerated.emit();
    })
  }

  ngOnInit() {
    this.item1="";
    this.item2="";
    this.item3="";
    this.item4="";
    this.item5="";
    this.item6="";
    this.item7="";
    // this.my_data = [];

    this.name = '';
    this.age = null;
    this.sex = 'male';
    this.major = 'physics';
    this.major_list = ['physics', 'mathematics', 'chemistry', 'english', 'infrared', 'nightsenser'];
    this.sex_list = ['male', 'female'];
    this.users = [];
    // this.getAllData();
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



}
