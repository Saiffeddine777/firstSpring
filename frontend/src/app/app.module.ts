import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { HomeComponent } from './home/home.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UsersComponent } from './users/users.component';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { usersFetchingReducer } from './reducers/users.reducers';
import { UserEffects } from './effects/users.effect';
import { UpdateUserComponent } from './update-user/update-user.component';
import { RouterModule } from '@angular/router';
import { oneUserReducer } from './reducers/oneUser.reducers';
import { UserEffect } from './effects/oneUser.effects';
import { PostsComponent } from './posts/posts.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { postsReducer } from "./reducers/posts.reducer"
import { PostsEffect } from "./effects/posts.effect";
import { UpdatePostComponent } from './update-post/update-post.component'
import { onePostReducer } from "./reducers/post.reducer"
import { OnePostEffect } from "./effects/post.effect"

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateUserComponent,
    UsersComponent,
    UpdateUserComponent,
    PostsComponent,
    CreatePostComponent,
    UpdatePostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      usersAPI:usersFetchingReducer,
      oneUser:oneUserReducer,
      postsAPI: postsReducer,
      onePostAPI:onePostReducer
    }),
    FormsModule,
    EffectsModule.forRoot([
      UserEffects,
      UserEffect,
      PostsEffect,
      OnePostEffect
    ]),
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
