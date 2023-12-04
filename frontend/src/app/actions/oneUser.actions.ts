import {createAction ,props} from "@ngrx/store"
import { FetchedUser } from "../state/user.state"

export const fetchOneUser = createAction('[OneUser API] fetchOneUser',props<{id:number}>())
export const fetchOneUserSuccess = createAction('[OneUser API Success]' , props<{user:FetchedUser}>())
export const fetchOneUserFailure = createAction('[OneUser API Failure]' , props<{error :any}>())