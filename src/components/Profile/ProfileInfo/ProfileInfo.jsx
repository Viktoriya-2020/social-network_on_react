import React from 'react';
import style from './ProfileInfo.module.css'
import wallThoto from '../../../assets/images/wall.jpg';
import avatar from '../../../assets/images/avatar.jpg';
import Preloader from '../../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHook';

const ProfileInfo = ({ profile, statusUser, updateUserStatus, ...props }) => {

  if (!profile) {
    return <Preloader />
  }
  return (
    <div >
      <div className={style.container}>
        <div className={style.content_wall}>
          <img src={wallThoto} alt='wall' />
        </div>
        <div className={style.ava}>
          <img src={!profile.photos.large ? avatar : profile.photos.large} />
        </div>
        <div className={style.dickrip}>
          <h2>{profile.fullName}</h2>
          <ProfileStatusWithHooks statusUser={statusUser} updateUserStatus={updateUserStatus} />
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;