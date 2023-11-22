import { Component } from '@angular/core';
import { Store } from '@ngrx/store'; 
import { User } from '../state/create-user.state';
import  * as UserActions from "../actions/create-user.actions"
import { filter } from 'rxjs';
import axios, { AxiosResponse } from "axios"
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
     user:User;
     inserted :boolean;
     constructor(private store:Store<{user:User}>){
      this.user ={
        firstName:"",
        lastName:"",
        email:"",
        phoneNumber:"",
        userName:"",
        role:""
      }
      this.inserted = false
      this.store.select('user').pipe(
         filter(user => user !== undefined)
       ).subscribe(user => this.user = user);
     }
 
   firstNameChange(firstName:string){
      this.store.dispatch(UserActions.changeFirstname({firstName}))
   }

   lastNameChange(lastName:string){
      this.store.dispatch(UserActions.changeLastName({lastName}))
   }

   emailChange(email:string){
      this.store.dispatch(UserActions.changeEmail({email}))
   }

   roleChange(role:string) {
       this.store.dispatch(UserActions.changeRole({role}))
   }

   phoneNumberChange(phoneNumber:string){
       this.store.dispatch(UserActions.changePhoneNumber({phoneNumber}))
   }
   
   userNameChange(userName: string){
       this.store.dispatch(UserActions.changeUserName({userName}))
   }

   async handlesubmit():Promise<void>{
       console.log(this.user)
      try{
         const response :AxiosResponse = await axios.post(`${environment.backendUrl}/api/users/create`,this.user)
         this.inserted = true
         this.user ={
            firstName:"",
            lastName:"",
            email:"",
            phoneNumber:"",
            userName:"",
            role:""
          }

      }
      catch(err:any){
        console.error(err)

   }
    
}
}
