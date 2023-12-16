import { Component } from '@angular/core';

interface loginInfo{
  email: string;
  password:string;
}

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent {
   info !: loginInfo;


  constructor(){
     this.info={
       email:"",
       password:""
     }
  }
  async handleLogin(){
    try{
       console.log(this.info)
    }
    catch(err){
     throw err
    }
  }
}
