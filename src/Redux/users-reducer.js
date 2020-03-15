const SET_USERS = "SET-USERS";
const  FOLLOW =  "FOLLOW"
const  UNFOLLOW =  "UNFOLLOW"
const  SET_CURRENT_PAGE = "SET-CURRENT-PAGE"
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"

let initialState = {
   users: [],
   count:5,
   totalUsersCount:0,
   currentPage:1

}



const usersReducer = (state = initialState,action) => {
     
    
    switch(action.type){
        case SET_USERS:
           return{
               ...state,
               users:[ ...action.users]
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
            
            case SET_CURRENT_PAGE:
                return{
                    ...state, currentPage: action.currentPage
                } 
            case SET_TOTAL_USERS_COUNT:
                return{
                    ...state, totalUsersCount: action.totalUsersCount
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
 export const setCurrentPageAC  = (currentPage) =>{
    return {type:  SET_CURRENT_PAGE, currentPage:currentPage}
 }
 export const setTotalUsersCountAC  = (totalUsersCount) =>{
    return {type:  SET_TOTAL_USERS_COUNT, totalUsersCount}
 }
export default usersReducer;