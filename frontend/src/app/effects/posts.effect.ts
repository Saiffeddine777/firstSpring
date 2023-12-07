import {createEffect,Actions,ofType} from "@ngrx/effects"
import { map,catchError,mergeMap } from "rxjs"
import { PostsService } from "../services/posts.service"
import * as PostsActions  from "../actions/posts.actions"
import { of } from "rxjs"
import { Injectable } from "@angular/core"


@Injectable()
export class PostsEffect{
    $fetchPost = createEffect(()=>this.action.pipe(
        ofType(PostsActions.fetchPostsAction),
        mergeMap(()=>this.postService.getAllPosts().pipe(
            map(posts=>PostsActions.fetchPostsActionSuccess({posts})),
            catchError(error=>of(PostsActions.fetchPostsActionfailure({error})))
        ))
    ))



    constructor (
      private action :Actions,
      private postService :PostsService

    ){

    }
} 

