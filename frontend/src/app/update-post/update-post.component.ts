import { Component ,OnInit} from '@angular/core';
import { Router } from "@angular/router"
import { Store } from '@ngrx/store';
import { OnePostAPIInterface,PostInterface } from "../state/post.state"
import { Observable } from 'rxjs';
import { fetchOnePost } from '../actions/post.actions';
import axios from 'axios';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit{
   state : {postId :number}
   onePost$ :Observable<PostInterface>
   error$: Observable<any>
   onePost : PostInterface
   error : any
   title:string
   description:string
   isPublished:string | null

   constructor (private router :Router ,private store: Store<{onePostAPI:OnePostAPIInterface}>){
     this.state = this.router.getCurrentNavigation()?.extras.state as {postId : number}
     this.onePost$ = this.store.select(state=>state.onePostAPI.post)
     this.error$= this.store.select(state=> state.onePostAPI.error)
     this.onePost = null
     this.error = null
     this.title = ""
     this.description=""
     this.isPublished = null
     
   } 
  
   ngOnInit():void {
      this.store.dispatch(fetchOnePost({id:this.state.postId}))
      this.error$.subscribe(error=>{
        this.error = error
      })
      this.onePost$.subscribe(onePost=>{
        this.onePost = onePost
        console.log(this.onePost)
      })
   }

  async handleUpdatePost():Promise<void>{
    // console.log(`${environment.backendUrl}/api/posts/update/${this.state.postId}`);
    
     try{
       await axios.put(`${environment.backendUrl}/api/posts/update/${this.state.postId}`,{
           title :this.title,
           description:this.description,
           isPublished:this.isPublished
       })
       this.store.dispatch(fetchOnePost({id:this.state.postId}))
     }
     catch(err){
       throw err
     }
   }
   
}
