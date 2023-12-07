import {FetchedUser} from "./user.state" 

export interface OnePostInterface{
   id: number;
   user_Id:FetchedUser,
   title:string;
   description:string;
   isPublished: boolean
}

export interface ManyPostsInterface{
    error: any,
    posts: OnePostInterface[]
}


export const Posts:ManyPostsInterface ={  
    error:null,
    posts:[]
} 