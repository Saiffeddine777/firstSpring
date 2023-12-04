import { Component, OnInit, ɵɵtrustConstantResourceUrl } from '@angular/core';
import { Store } from '@ngrx/store';
import { OneUserAPIstate } from '../state/oneUser.state';
import { Observable } from 'rxjs';
import { FetchedUser } from '../state/user.state';
import { Router } from '@angular/router';
import { fetchOneUser } from '../actions/oneUser.actions';
import axios from 'axios';
import { environment } from 'src/environments/environment';

interface Updated{
  [key:string]:string;
  firstName:string;
  lastName:string;
  role:string
  userName:string;
  email:string;
  phoneNumber:string;
 }
@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  user$: Observable<FetchedUser | null>;
  error$: Observable<any>;
  user: FetchedUser | null;
  error: any;
  id: number;
  updatedUser :Updated;


  constructor(private store: Store<{ oneUser: OneUserAPIstate }>, private router: Router) {
    this.user$ = this.store.select(state => {
      return state.oneUser.user || null 
    });
    this.error$ = this.store.select(state => state.oneUser.error);
    this.user = null;
    this.error = null;
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as { id: number };
    this.id = state.id;
    this.updatedUser =
    {
      firstName:"",
      lastName:"",
      role:"",
      userName:"",
      email:"",
      phoneNumber:""
    }
  }

  ngOnInit(): void {
    this.store.dispatch(fetchOneUser({ id: this.id }));
    this.user$.subscribe(user => {
      this.user = user;
    });

    this.error$.subscribe(error => {
      this.error = error;
    });
  }

  async updateUser(){
   try{
      let obj :any = {} ;
      for (let key in this.updatedUser){
        if (this.updatedUser[key] !==""){
            obj[key] = this.updatedUser[key]
        }
      }
      const {data} = await axios.put(`${environment.backendUrl}/api/users/update/${this.id}`,obj)
      this.store.dispatch(fetchOneUser({ id: this.id }));
   }
   catch(err){
      throw err
   }
  }
}
