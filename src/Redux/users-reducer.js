import  { usersAPI } from '../api/api';

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
 export const followSuccess = (userId) =>{
    return {type: FOLLOW, userId}
 }
 export const unfollowSuccess = (userId) =>{
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
export const gettingUsers = (count, currentPage) =>{
        return   (dispatch) => {
    dispatch(setCurrentPage(currentPage))
    dispatch(toggleIsFetching(true))
    usersAPI.getUsers(count, currentPage).then(data =>{
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount))
       });
}
}
export const follow = (userId) =>{
    return   (dispatch) => {
        dispatch(toggleIsFollowingProgress(true,userId));
        usersAPI.followUser(userId).then(response =>{
                if(response.data.resultCode === 0){
                    dispatch(followSuccess(userId))
                   }
                   dispatch(toggleIsFollowingProgress(false, userId));
                })
}
}
export const unfollow = (userId) =>{
    return   (dispatch) => {
        dispatch(toggleIsFollowingProgress(true,userId));
        usersAPI.followUser(userId).then(response =>{
                if(response.data.resultCode === 0){
                    dispatch(unfollowSuccess(userId))
                   }
                   dispatch(toggleIsFollowingProgress(false, userId));
                })
}
}

export default usersReducer;