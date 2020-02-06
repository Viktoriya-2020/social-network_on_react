import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {
   

      

      let postsElements = props.posts.map(p => <Post messege={p.messeges}  likesCount={p.likesCount}/>)
      return(
            <div className={s.inform}>
              <h3>My posts</h3>
              <textarea cols="50" rows="7"></textarea>
              <button><b>Add</b></button>
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