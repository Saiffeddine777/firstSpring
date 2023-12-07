import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router';
import axios from 'axios';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
   title:string;
   description: string;
   isPublished:boolean |null;
   user_Id :number |undefined;
   state:{user_Id:number}
   constructor (private router :Router){
      this.title= "";
      this.description= "";
      this.isPublished=null;
      const state = this.router.getCurrentNavigation()?.extras?.state as {user_Id:number}
      this.state = state
   }

   ngOnInit(){
      this.user_Id = this.state.user_Id
      console.log(this.user_Id)
   }

   async handlePostCreation ():Promise<void>{
      try{
        await axios.post(`${environment.backendUrl}/api/posts/create`,{
        title: this.title,
        description: this.description,
        isPublished:this.isPublished,
        user_Id:this.user_Id
        })
      }
      catch(err){
        throw err
      }
   }
}
