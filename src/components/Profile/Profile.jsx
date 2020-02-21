import React from 'react';
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';


const Profile = (props) => {
  console.log('test =>',  props.upDatePostText )
    return(
      <div > 
         
            <ProfileInfo />
            <MyPostsContainer store={props.store} 
            dispatch={props.dispatch}
            />
          
      </div>
    );
}

export default Profile;