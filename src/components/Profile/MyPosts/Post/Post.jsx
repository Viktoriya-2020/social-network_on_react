import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
    return(
      
            
                      <div className={s.item}>
                          <img src='https://perfecto-web.pro/uploads/uifaces/ui-3.jpg' />
                              {props.messege}           
                              <p><b>LIKE</b> {props.likesCount}</p>
                      </div>
                      
    );
}

export default Post;