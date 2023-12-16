import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { HomeComponent } from './home/home.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { PostsComponent } from './posts/posts.component';
import { UpdatePostComponent } from './update-post/update-post.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';




const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"users",component:UsersComponent},
  {path:"updateUser" , component:UpdateUserComponent},
  {path:"createUser",component:CreateUserComponent},
  {path:"createPost",component:CreatePostComponent},
  {path:"posts",component:PostsComponent},
  {path:"updatePost",component:UpdatePostComponent},
  {path:"signUp",component:SignUpComponent},
  {path:"signIn",component:SignInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
