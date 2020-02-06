import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {
  console.log('test =>',  props.upDatePostText )
    return(
      <div > 
         
            <ProfileInfo />
            <MyPosts posts={props.posts.posts} newPostText={props.posts.newPostText} addPost={props.addPost}
            upDatePostText={props.upDatePostText} />
          
      </div>
    );
}

export default Profile;