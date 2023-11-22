import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { UsersService } from '../services/users.service';
import * as UserActions from '../actions/users.actions';

@Injectable()
export class UserEffects {

  fetchUsers$ = createEffect(() => this.actions$.pipe(
    ofType(UserActions.fetchUsers),
    mergeMap(() => this.usersService.getAllUsers().pipe(
      map(users => UserActions.fetchUserSuccess({ users })),
      catchError(error => of(UserActions.fetchUsersFailure({ error })))
    ))
  ));

  constructor(
    private actions$: Actions,
    private usersService: UsersService
  ) {
    
  }
}
