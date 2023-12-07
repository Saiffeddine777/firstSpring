import { Component,OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ManyPostsInterface, OnePostInterface } from '../state/posts.state';
import { fetchPostsAction } from '../actions/posts.actions';
import axios from 'axios';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{
   posts$ :Observable<OnePostInterface[]>
   error$ :Observable<any>
   posts : OnePostInterface[]
   error :any
  constructor (private store :Store<{postsAPI:ManyPostsInterface}> ,private router:Router){
     this.posts$ = this.store.select(state=>state.postsAPI.posts)
     this.error$ = this.store.select(state=>state.postsAPI.error)
     this.posts = []
     this.error = null
  }

  ngOnInit(): void {
      this.store.dispatch(fetchPostsAction())
      this.error$.subscribe(error=>{
        this.error= error
      })
      this.posts$.subscribe(posts=>{
        this.posts = posts
      })
  }

  async handleDeletePost(id:number):Promise<void>{
    try{
      await axios.delete(`${environment.backendUrl}/api/posts/delete/${id}`)
      this.store.dispatch(fetchPostsAction())
    }
    catch(err){
      throw err
    }
  }
  
  handleNavigateToOnePost(id:number){
     this.router.navigate(["/updatePost"],{
      state:{
        postId:id
      }
     })
  }
  

}
