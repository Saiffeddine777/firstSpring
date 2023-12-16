
export interface FetchedUser{
    id:number;
    firstName:string;
    lastName:string;
    userName:string;
    email:string;
    phoneNumber:string;
    role:string;
    adress:string;
}

export type Users = FetchedUser[] 

export interface UsersAPIState {
   error :any,
   users: Users
}

export const initialFetechedUsers:UsersAPIState = {
    error:null,
    users: []
}


