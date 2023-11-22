import {createAction, props} from "@ngrx/store"

export const changeFirstname = createAction('[Create-User Component] Change firstName',props<{firstName:string}>());
export const changeLastName = createAction('[Create-User Component] Change lastName',props<{lastName:string}>());
export const changeUserName =createAction('[Create-User Component] Change userName',props<{userName:string}>());
export const changeEmail = createAction('[Create-User Component] Change email',props<{email:string}>());
export const changePhoneNumber = createAction('[Create-User Component] Change phoneNumber',props<{phoneNumber:string}>())
export const changeRole = createAction('[Create-User Component] Change role',props<{role:string}>()) 