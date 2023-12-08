import {createAction, props} from "@ngrx/store"
import {PostInterface} from "../state/post.state"

export const fetchOnePost = createAction("[Posts API] fetch One Posts",props<{id:number}>())
export const fetchOnePostSuccess = createAction("[Posts API] fetch One Post Success",props<{post:PostInterface}>())
export const fetchOnePostFailure = createAction("[Posts API] fetch One Post failure",props<{error:any}>())