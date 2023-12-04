import { createReducer,on } from "@ngrx/store"
import { initialOneUserAPIstate } from "../state/oneUser.state"
import { fetchOneUser,fetchOneUserFailure,fetchOneUserSuccess } from "../actions/oneUser.actions"


export const oneUserReducer = createReducer(
    initialOneUserAPIstate,
    on(fetchOneUser, (state)=>{      
       return state
    }),
    on(fetchOneUserSuccess,(state,action)=>{     
        return{...state,user:action.user}
    }),
    on(fetchOneUserFailure,(state,action)=>{
        return {...state,error:action.error}
    })
)