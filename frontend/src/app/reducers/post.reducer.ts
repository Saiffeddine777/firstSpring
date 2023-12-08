import { createReducer ,on } from "@ngrx/store";
import {OnePostInitialState} from "../state/post.state"
import { fetchOnePost, fetchOnePostFailure, fetchOnePostSuccess } from "../actions/post.actions";

export const onePostReducer = createReducer(
    OnePostInitialState,
    on(fetchOnePost,(state,action)=>{
        return state
    }),
    on(fetchOnePostSuccess,(state,action)=>{
        return {...state,post:action.post}
    }),
    on(fetchOnePostFailure,(state,action)=>{
        return {...state,error:action.error}
    })
)