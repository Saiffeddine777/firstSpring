import { from } from "rxjs";
import {environment} from "../../environments/environment"
import { Injectable } from "@angular/core";
import axios from "axios"

@Injectable({
    providedIn:"root"
})

export class OnePostService{
    private url = `${environment.backendUrl}/api/posts/one`

    getOnePost(id:number){
        return from(axios.get(`${this.url}/${id}`).then(res=>res.data))
    }
}