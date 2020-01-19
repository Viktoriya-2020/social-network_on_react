import React from 'react';

const Profile = () => {
    return(
      <div className='content'> 
        <div className='content_wall'>
          <img src="https://www.whitemanpark.com.au/wp-content/uploads/2015/03/Childrens-Forest-INTERNAL-BANNER-1500x450-v2.jpg" alt = 'wall-picture'/>
        </div>
        <div>
          ava + discription
        </div>
        <div>
          My posts
            <div>
              New post
            </div>
            <div>
              Post 1
            </div>
            <div>
              Post 2
            </div>
            <div>
              Post 3
            </div>
        </div>
      </div>
    
    );
}

export default Profile;