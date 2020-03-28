import React from 'react';
import s from './ProfileInfo.module.css'
import wallThoto from '../../../assets/images/wall.jpg';
import avatar from '../../../assets/images/avatar.jpg';
import Preloader from '../../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';


const ProfileInfo = (props) => {
  if(!props.profile){
    return<Preloader />
  }
    return(
      <div > 
        <div className={s.container}>
            <div className={s.content_wall}>
              <img src={wallThoto} alt = 'wall-picture'/>
            </div>
            <div className={s.ava}>
              <img src={!props.profile.photos.large ? avatar : props.profile.photos.large} />
            </div>
            <div className={s.dickrip}>
              <h2>{props.profile.fullName}</h2>
              <ProfileStatus status="Status"/>
            </div>
         </div> 
      </div>
    );
}

export default ProfileInfo;