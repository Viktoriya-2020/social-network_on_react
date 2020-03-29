import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';


const Profile = (props) => {
  //console.log('test =>',  props.upDatePostText )
  
    return(
      <div > 
         
            <ProfileInfo profile = {props.profile} statusUser = {props.statusUser}  updateUserStatus = {props.updateUserStatus} />
            <MyPostsContainer />
          
      </div>
    );
}

export default Profile;