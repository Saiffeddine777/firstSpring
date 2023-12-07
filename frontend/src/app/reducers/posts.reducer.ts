import { createReducer ,on } from "@ngrx/store";
import { Posts } from "../state/posts.state";
import { fetchPostsAction, fetchPostsActionSuccess, fetchPostsActionfailure } from "../actions/posts.actions";

export const postsReducer = createReducer(
    Posts,
    on(fetchPostsAction,(state,action)=>{
        return state
    }),
    on(fetchPostsActionSuccess,(state,action)=>{
        return {...state, posts:action.posts}
    }),
    on(fetchPostsActionfailure,(state,action)=>{
        return {...state,posts:action.error}
    })
)
