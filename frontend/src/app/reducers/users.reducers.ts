import { createReducer ,on } from "@ngrx/store";
import { initialFetechedUsers } from "../state/user.state";
import { fetchUserSuccess, fetchUsers, fetchUsersFailure } from "../actions/users.actions";

export const usersFetchingReducer = createReducer(
    initialFetechedUsers,
    on(fetchUsers,state=>state),
    on(fetchUserSuccess,(state,action)=>{
        return {...state,users:action.users}
    }),
    on(fetchUsersFailure,(state,action)=>{
        return {...state,error:action.error}
    }
    )
)



