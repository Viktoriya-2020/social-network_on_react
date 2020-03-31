import { profileAPI } from '../api/api';

const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";
let initialState = {
    posts : [
        { id:1, messeges: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt lacus lacus, sed eleifend nibh dignissim sed. Duis ac lacinia elit. Nullam mattis, nunc quis dapibus porttitor, urna justo rutrum magna, ac lacinia nisl justo sed felis. Sed laoreet, turpis sit amet varius volutpat, est massa dapibus ante, eu iaculis tortor leo et ligula. Duis mollis ipsum lectus, ac vehicula risus luctus quis.",  likesCount:"15"},
        {id:2, messeges: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt lacus lacus, sed eleifend nibh dignissim sed. Duis ac lacinia elit. Nullam mattis, nunc quis dapibus porttitor, urna justo rutrum magna, ac lacinia nisl justo sed felis. Sed laoreet, turpis sit amet varius volutpat, est massa dapibus ante, eu iaculis tortor leo et ligula. Duis mollis ipsum lectus, ac vehicula risus luctus quis.",  likesCount:"8"},
        { id:3, messeges: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt lacus lacus, sed eleifend nibh dignissim sed.", likesCount:"22"},
        { id:4, messeges: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", likesCount:"12"},
        ],
        profile: null,
        
}

const profileReducer = (state = initialState,action) => {
    switch(action.type){
        case ADD_POST:{
            let newPostBody = {
                id:5, 
                messeges: action.newPost,
                likesCount:0,
            }
            return {
                ...state,
                posts: [...state.posts, newPostBody],
                
            };
        }
       
        case SET_USER_PROFILE:{
            return {...state, profile: action.profile}
        }
        default:
                return state;
    }         
}

export const addPostActionCreator = (newPost) =>{
    return { type: ADD_POST, newPost }
}
export const setUserProfile = (profile) =>{
    return{ type: SET_USER_PROFILE, profile }
}

export const getUserProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getUserData(userId).then(response =>{
      
            dispatch(setUserProfile(response.data));
            
        });
    }
}

export default profileReducer;