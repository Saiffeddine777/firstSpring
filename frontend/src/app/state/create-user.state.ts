export interface User {
    firstName:string;
    lastName :string;
    userName:string;
    phoneNumber :string;
    email:string;
    role:string;
    adress:string;
}

export const initialUserState : User ={
    firstName:"",
    lastName:"",
    userName:"",
    phoneNumber:"",
    email:"",
    role:"",
    adress:""
}