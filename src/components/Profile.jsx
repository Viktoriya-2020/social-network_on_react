import React from 'react';
import s from './Profile.module.css'

const Profile = () => {
    return(
      <div className={s.content}> 
          <div className={s.container}>
            <div className={s.content_wall}>
              <img src="https://www.whitemanpark.com.au/wp-content/uploads/2015/03/Childrens-Forest-INTERNAL-BANNER-1500x450-v2.jpg" alt = 'wall-picture'/>
            </div>
            <div className={s.ava}>
              <img src="https://cdn5.vectorstock.com/i/1000x1000/72/59/female-avatar-profile-icon-round-african-american-vector-18307259.jpg" />
            </div>
            <div className={s.dickrip}>
              <h4>Name Surname</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi facere saepe molestias natus pariatur sit soluta. Sint atque, nihil in, praesentium eius saepe magnam repellendus autem iste accusantium magni dignissimos.</p>
            </div>
            <div className={s.posts}>
              My posts
                <div className={s.postNew}>
                  New post
                </div>
                <div className={s.item}>
                  Post 1
                </div>
                <div className={s.item}>
                  Post 2
                </div>
                <div className={s.item}>
                  Post 3
                </div>
            </div>
          </div>
      </div>
    );
}

export default Profile;