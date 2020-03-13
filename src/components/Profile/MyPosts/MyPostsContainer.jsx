import React from 'react';
import { updateNewPostTextActionCreator, addPostActionCreator } from '../../../Redux/profile-reduser';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
  return {
   posts: state.profilePage.posts,
   newPostText: state.profilePage.newPostText
  }
}
let mapDispatchToProps =(dispatch) => {
  return {
    updateNewPost: (text) => {
      dispatch(updateNewPostTextActionCreator(text))
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    }
  }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer ;