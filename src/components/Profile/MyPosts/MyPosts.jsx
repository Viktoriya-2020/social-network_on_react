import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {
    return(
      
            <div className={s.inform}>
              <h3>My posts</h3>
                <div className={s.postNew}>
                  New post
                </div>
                <div className={s.posts}>
                   <Post />
                   <Post />
                   <Post />
                   <Post />
                </div>
            </div>
      
    );
}

export default MyPosts;