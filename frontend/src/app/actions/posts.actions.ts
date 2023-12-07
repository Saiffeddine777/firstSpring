import {createAction ,props} from "@ngrx/store"
import {OnePostInterface } from "../state/posts.state";

export const fetchPostsAction = createAction("[Posts API] fetch Posts");
export const fetchPostsActionSuccess = createAction("[Posts API] fetch Posts Success", props<{posts:OnePostInterface[]}>())
export const fetchPostsActionfailure = createAction("[Posts API] fetch Posts failure",props<{error :any}>())