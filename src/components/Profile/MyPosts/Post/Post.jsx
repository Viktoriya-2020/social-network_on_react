import React from 'react';
import style from './Post.module.css'

const Post = (props) => {
    return(
      
            
                      <div className={style.item}>
                          <img src='https://perfecto-web.pro/uploads/uifaces/ui-3.jpg' />
                              <span>{props.messege}</span>        
                              <p><b>LIKE</b> {props.likesCount}</p>
                      </div>
                      
    );
}

export default Post;