const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_POST = "ADD-POST";

let initialState = {
    posts : [
        { id:1, messeges: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt lacus lacus, sed eleifend nibh dignissim sed. Duis ac lacinia elit. Nullam mattis, nunc quis dapibus porttitor, urna justo rutrum magna, ac lacinia nisl justo sed felis. Sed laoreet, turpis sit amet varius volutpat, est massa dapibus ante, eu iaculis tortor leo et ligula. Duis mollis ipsum lectus, ac vehicula risus luctus quis.",  likesCount:"15"},
        {id:2, messeges: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt lacus lacus, sed eleifend nibh dignissim sed. Duis ac lacinia elit. Nullam mattis, nunc quis dapibus porttitor, urna justo rutrum magna, ac lacinia nisl justo sed felis. Sed laoreet, turpis sit amet varius volutpat, est massa dapibus ante, eu iaculis tortor leo et ligula. Duis mollis ipsum lectus, ac vehicula risus luctus quis.",  likesCount:"8"},
        { id:3, messeges: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt lacus lacus, sed eleifend nibh dignissim sed.", likesCount:"22"},
        { id:4, messeges: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", likesCount:"12"},
        ],
        newPostText: "Post",
}

const profileReducer = (state = initialState,action) => {
    switch(action.type){
     case ADD_POST:
        let newPost = {
            id:5, 
            messeges: state.newPostText,
            likesCount:0,
        }
        state.posts.push(newPost);
        state.newPostText = '';
        return state;

     case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
     default:
             return state;
    }         
}
export const updateNewPostTextActionCreator = (text) =>{
    
    return { type: UPDATE_NEW_POST_TEXT, newText: text }
  }
export const addPostActionCreator = () =>{
    return { type: ADD_POST }
}
export default profileReducer;