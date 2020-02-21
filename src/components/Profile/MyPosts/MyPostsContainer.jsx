import React from 'react';
import { updateNewPostTextActionCreator, addPostActionCreator } from '../../../Redax/profile-reduser';
import MyPosts from './MyPosts';




const MyPostsContainer = (props) => {
  
 let  state = props.store.getState();
  
    let addPost = () => {
      
      props.dispatch(addPostActionCreator());
     
    }  

    let newPostChange = (text) => {

        props.dispatch(updateNewPostTextActionCreator(text));
    }

     
      return(
            <MyPosts updateNewPost={newPostChange} addPost={addPost} 
            posts={state.profilePage.posts} newPostText={state.profilePage.newPostText} />
      );
}

export default MyPostsContainer ;