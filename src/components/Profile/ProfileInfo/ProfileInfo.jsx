import React from 'react';
import s from './ProfileInfo.module.css'
import wallThoto from '../../../assets/images/wall.jpg';
import avatar from '../../../assets/images/avatar.jpg';


const ProfileInfo = () => {
    return(
      <div > 
        <div className={s.container}>
            <div className={s.content_wall}>
              <img src={wallThoto} alt = 'wall-picture'/>
            </div>
            <div className={s.ava}>
              <img src={avatar} />
            </div>
            <div className={s.dickrip}>
              <h4>Name Surname</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi facere saepe molestias natus pariatur sit soluta. Sint atque, nihil in, praesentium eius saepe magnam repellendus autem iste accusantium magni dignissimos.</p>
            </div>
         </div> 
      </div>
    );
}

export default ProfileInfo;