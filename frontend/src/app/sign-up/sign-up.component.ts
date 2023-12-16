import { Component } from '@angular/core';
import axios from "axios"
import { environment } from 'src/environments/environment';


type newUser ={
  firstName :string;
  lastName:string;
  userName:string;
  password:string;
  confirmedPassword :string;
  phoneNumber:string;
  adress:string;
  role:string;
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
    
   hiUser!: newUser;
   noMatch : boolean | undefined;
   inserted :boolean | undefined;
   error : boolean | undefined
   constructor(){
     this.hiUser ={
      firstName : "",
      role : "",
      lastName : "",
      userName : "",
      adress : "",
      phoneNumber : "",
      confirmedPassword : "",
      password : ""
    }
     this.noMatch = undefined
     this.inserted  = false
     this.error = false;
   }

   async handleSignUp(){
     try{
      if(this.hiUser.password===this.hiUser.confirmedPassword){
        const {data} = await axios.post(`${environment.backendUrl}/api/users/signUp`,{
          firstName :this.hiUser.firstName ,
          lastName:this.hiUser.lastName,
          userName:this.hiUser.userName,
          password:this.hiUser.password,
          phoneNumber:this.hiUser.phoneNumber,
          adress:this.hiUser.adress,
          role:this.hiUser.role
         })
         if (data){
            this.inserted = true
         }
      }
      else{
        this.noMatch = true;
        setTimeout(()=>{
          this.noMatch = false
       },1500)
      }
       console.log(this.hiUser)
       
     }
     catch(err){
        this.error = true;
      throw err
     }

   }
   
}
