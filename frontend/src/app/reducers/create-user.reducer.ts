import {createReducer ,on} from "@ngrx/store"
import {changeFirstname ,changeLastName,changeEmail,changePhoneNumber,changeRole,changeUserName} from "../actions/create-user.actions"
import { initialUserState } from "../state/create-user.state"

export const createUserReducer= createReducer(
    initialUserState,
    on(changeFirstname,(state,action)=>{
        return {
            ...state, firstName: action.firstName
        }
    }),
    on(changeLastName,(state,action)=>{
        return {
            ...state,lastName:action.lastName
        }
    }),
    on(changeEmail,(state,action)=>{
        return {
            ...state,email:action.email
        }
    }),
    on(changeUserName,(state,action)=>{
        return {
            ...state,userName:action.userName
        }
    }),
    on(changePhoneNumber,(state,action)=>{
         return{
            ...state, phoneNumber:action.phoneNumber
         }
    }),
    on(changeRole,(state,action)=>{
        return {...state,role:action.role}
    })
    )