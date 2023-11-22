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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateUserComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({usersAPI:usersFetchingReducer}),
    FormsModule,
    EffectsModule.forRoot([UserEffects]) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
