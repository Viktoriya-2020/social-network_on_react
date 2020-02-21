import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';
import { updateNewPostTextActionCreator, addPostActionCreator } from '../../../Redax/profile-reduser';




const MyPosts = (props) => {
  
   let newPostElement = React.createRef();
  
    let addPost = () => {
      
      props.addPost();
     
    }  

    let newPostChange = () => {
    
        let text = newPostElement.current.value;
        props.updateNewPost(text);
    }
      let postsElements = props.posts.map(p => <Post messege={p.messeges}  likesCount={p.likesCount}/>)
      return(
            <div className={s.inform}>
              <h3>My posts</h3>
              <textarea  ref = {newPostElement} cols="50" rows="7" value={props.newPostText} onChange={newPostChange} />
              <button onClick = {addPost}><b>Add</b></button>
                <div className={s.postNew}>
                  New post
                </div>
                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>
      
      );
}

export default MyPosts;