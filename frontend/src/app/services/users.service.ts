import { Injectable } from "@angular/core"
import axios from "axios"
import {environment} from '../../environments/environment'
import { from } from "rxjs"


@Injectable({
    providedIn:"root"
})

export class UsersService {
    private url = `${environment.backendUrl}/api/users/all`

    constructor(){

    }

    getAllUsers(){
      return from(axios.get(this.url).then(res=>{
       return res.data
      }))
    }
}

