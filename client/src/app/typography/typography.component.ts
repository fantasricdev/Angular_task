import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})
export class TypographyComponent implements OnInit {
  id: string;
  password: string;
  hide = true;
  constructor(private router: Router) { }

  
  ngOnInit() {

  }
  login(){
    if(this.id == "admin" && this.password == "admin123"){
      alert("Correct login info !!!");
      localStorage.setItem('login',"3");
      this.router.navigate(['/user-profile']);
    }else{
      alert("Don't correct your login info. please input again.")
    }
  }

}
