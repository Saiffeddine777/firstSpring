import { Injectable } from "@angular/core";
import { from } from "rxjs";
import axios from "axios"
import {environment} from '../../environments/environment'

@Injectable({
    providedIn:"root"
})

export class PostsService {
    private url = `${environment.backendUrl}/api/posts/all`
    constructor (){

    }

    getAllPosts(){
        return from (axios.get(`${this.url}`).then(res=>res.data))
    }
}