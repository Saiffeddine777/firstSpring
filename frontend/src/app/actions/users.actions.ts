import {createAction ,props} from "@ngrx/store"
import { Users } from "../state/user.state";

export const fetchUsers = createAction("[Users API] FetchUsers")
export const fetchUserSuccess = createAction(
    "[User API] Fetch Users Success", props<{users: Users}>()
)

export const fetchUsersFailure = createAction(
    "[User API] Fetch Users Failure",props<{error :any}>()
)