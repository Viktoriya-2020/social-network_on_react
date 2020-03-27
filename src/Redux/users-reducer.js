const SET_USERS = "SET-USERS";
const  FOLLOW =  "FOLLOW"
const  UNFOLLOW =  "UNFOLLOW"
const  SET_CURRENT_PAGE = "SET-CURRENT-PAGE"
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING"
const TOGGLE_IS_FOLLOING_PROGRESS = "TOGGLE_IS_FOLLOING_PROGRESS"

let initialState = {
   users: [],
   count:5,
   totalUsersCount:0,
   currentPage:1,
   isFetching: false,
   followingInProgress:[],
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
            case TOGGLE_IS_FETCHING:
                return{
                    ...state, isFetching: action.isFetching
                } 
            case TOGGLE_IS_FOLLOING_PROGRESS:
                return{
                    ...state,
                    followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id!= action.userid),
                }
                
        default:
                return state;
      }  
}



export const setUsers = (users) => {
    return {type: SET_USERS, users }
 }  
 export const follow = (userId) =>{
    return {type: FOLLOW, userId}
 }
 export const unfollow = (userId) =>{
    return {type: UNFOLLOW, userId}
 }
 export const setCurrentPage  = (currentPage) =>{
    return {type: SET_CURRENT_PAGE, currentPage:currentPage}
 }
 export const setTotalUsersCount  = (totalUsersCount) =>{
    return {type: SET_TOTAL_USERS_COUNT, totalUsersCount}
 }
 export const toggleIsFetching  = (isFetching) =>{
    return {type: TOGGLE_IS_FETCHING, isFetching}
 }
 export const toggleIsFollowingProgress  = (isFetching, userId) =>{
    return {type: TOGGLE_IS_FOLLOING_PROGRESS, isFetching, userId}
 }
export default usersReducer;