import { Component,OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UsersAPIState } from '../state/user.state';
import { Observable } from 'rxjs';
import { Users } from '../state/user.state';
import { fetchUsers } from '../actions/users.actions';


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
   constructor (private store :Store<{usersAPI:UsersAPIState}>){
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
}
