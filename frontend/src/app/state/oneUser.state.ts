import {FetchedUser} from "./user.state"

export interface OneUserAPIstate {
    error :any 
    user: FetchedUser | null
}

export const initialOneUserAPIstate : OneUserAPIstate ={
    error:null,
    user:null
}

