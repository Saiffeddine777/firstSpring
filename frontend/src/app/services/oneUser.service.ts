import { Injectable } from "@angular/core";
import axios from "axios"
import {environment} from '../../environments/environment'
import { from } from "rxjs";

@Injectable({
    providedIn:"root"
})

export class OneUserService {
   
    private url = `${environment.backendUrl}/api/users/one/`
    constructor(){

    }

    getOneUser(id:number){
        return from(axios.get(`${this.url}${id}`)
        .then(res=>{
            return res.data
        }))
    }
      
}