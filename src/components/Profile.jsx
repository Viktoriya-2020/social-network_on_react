import React from 'react';
import './Profile.css'

const Profile = () => {
    return(
      <div className='content'> 
          <div className='container'>
            <div className='content_wall'>
              <img src="https://www.whitemanpark.com.au/wp-content/uploads/2015/03/Childrens-Forest-INTERNAL-BANNER-1500x450-v2.jpg" alt = 'wall-picture'/>
            </div>
            <div className='ava'>
              <img src="https://cdn5.vectorstock.com/i/1000x1000/72/59/female-avatar-profile-icon-round-african-american-vector-18307259.jpg" />
            </div>
            <div className='dickrip'>
              <h4>Name Surname</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi facere saepe molestias natus pariatur sit soluta. Sint atque, nihil in, praesentium eius saepe magnam repellendus autem iste accusantium magni dignissimos.</p>
            </div>
            <div className='posts'>
              My posts
                <div className='postNew'>
                  New post
                </div>
                <div className='item'>
                  Post 1
                </div>
                <div className='item'>
                  Post 2
                </div>
                <div className='item'>
                  Post 3
                </div>
            </div>
          </div>
      </div>
    );
}

export default Profile;