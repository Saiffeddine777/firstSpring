  import {createEffect,Actions,ofType,} from "@ngrx/effects"
  import * as OneUserActions from "../actions/oneUser.actions"
  import { of } from "rxjs"
  import { Injectable } from "@angular/core"
  import { map,catchError,mergeMap } from "rxjs"
  import { OneUserService } from "../services/oneUser.service"


  @Injectable()
  export class UserEffect{
    fetchOneuser$ = createEffect(()=>this.actions$.pipe(
      ofType(OneUserActions.fetchOneUser),
      mergeMap((action: ReturnType<typeof OneUserActions.fetchOneUser>)=>this.oneUserService.getOneUser(action.id).pipe(
          map(user=> {
            return OneUserActions.fetchOneUserSuccess({user})}),
          catchError(error=>{
            return of(OneUserActions.fetchOneUserFailure({error}))})
      ))  
      ))

    constructor(
      private actions$ : Actions,
      private oneUserService :OneUserService
    ){

    }
  }