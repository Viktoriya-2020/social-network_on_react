const SET_USERS = "SET-USERS";
const  FOLLOW =  "FOLLOW"
const  UNFOLLOW =  "UNFOLLOW"


let initialState = {
   users: []
}



const usersReducer = (state = initialState,action) => {
     
    
    switch(action.type){
        case SET_USERS:
           return{
               ...state,
               users:[...state.users, ...action.users]
           } 
       
        
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( u=> {
                    if(u.id === action.userId){
                        return{...u, followed:true}
                    }
                    return u;
                })
            }
       
             
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( u=> {
                    if(u.id === action.userId){
                        return{...u, followed: false}
                    }
                    return u;
                })
            }
            
        default:
                return state;
      }  
}



export const setUsersAC = (users) => {
    return {type:SET_USERS, users }
 }  
 export const followAC = (userId) =>{
    return {type: FOLLOW, userId}
 }
 export const unfollowAC = (userId) =>{
    return {type: UNFOLLOW, userId}
 }
export default usersReducer;