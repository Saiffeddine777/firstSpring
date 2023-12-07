import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
   
  constructor(private router: Router){

  }
  navigateToUsers(){
    this.router.navigate(["/users"])
  }
  naviagteToCreateUser(){
    this.router.navigate(["/createUser"])
  }
  navigateToPosts(){
    this.router.navigate(["/posts"])
  }
  
}
