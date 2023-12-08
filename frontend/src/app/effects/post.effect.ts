import {createEffect , Actions,ofType} from "@ngrx/effects"
import {of,catchError,mergeMap,map} from "rxjs"
import * as OnePostActions from "../actions/post.actions"
import {OnePostService} from  "../services/post.service"
import { Injectable } from "@angular/core"



@Injectable()
export class OnePostEffect{
     fetchOnePost$  = createEffect(()=>this.action.pipe(
        ofType(OnePostActions.fetchOnePost),
        mergeMap((action:ReturnType<typeof OnePostActions.fetchOnePost>)=>this.onePostService.getOnePost(action.id).pipe(
            map(post=>OnePostActions.fetchOnePostSuccess({post})),
            catchError(error=>of(OnePostActions.fetchOnePostFailure({error})))
        ))
     ))

    constructor(
        private onePostService :OnePostService ,
        private action :Actions
    ){

    }
}