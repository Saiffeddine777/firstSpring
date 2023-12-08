import {OnePostInterface} from "./posts.state"

export type PostInterface = OnePostInterface | null

export interface OnePostAPIInterface {
    error :any,
    post: PostInterface
}


export const OnePostInitialState:OnePostAPIInterface={
    error:null,
    post:null
}