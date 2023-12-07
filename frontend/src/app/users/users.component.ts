import { Component,OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UsersAPIState } from '../state/user.state';
import { Observable } from 'rxjs';
import { Users } from '../state/user.state';
import { fetchUsers } from '../actions/users.actions';
import axios from 'axios';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
   users$:Observable<Users>;
   error$ :Observable<any>;
   users:Users;
   error:any;
   constructor (private store :Store<{usersAPI:UsersAPIState}>,private router:Router){
     this.users$ = this.store.select(state=>state.usersAPI.users)
     this.error$ = this.store.select(state=>state.usersAPI.error)
     this.users =[]
   }

   ngOnInit(){
      this.store.dispatch(fetchUsers())
      this.users$.subscribe(users=>{
        this.users = users
      })
      
      this.error$.subscribe(error=>{
        this.error= error
      })    
   }

   async handleDelete(id:number):Promise<void>{
     try{
       const {data} = await axios.delete(`${environment.backendUrl}/api/users/delete/${id}`)
       console.log("Successfully deleted")
       this.store.dispatch(fetchUsers())
     }
     catch(error){
        console.error(error)
     }
   }
   handleNavigation(id:number):void{
      this.router.navigate(['/updateUser'],{ 
        state:{
           id:id
      }})
   }
   handleCreatePostNavigation(id:number):void{
    this.router.navigate(["/createPost"],{
      state:{
        user_Id:id
      }})
   }
  
}
