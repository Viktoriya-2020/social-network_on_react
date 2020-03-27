import React from 'react';
import Profile from './Profile';
import {setUserProfile} from '../../Redux/profile-reduser';
import { connect } from 'react-redux';
import *as axios from 'axios';
import { withRouter } from 'react-router-dom';
import { usersAPI } from '../../api/api';

class ProfileContainer extends React.Component {
  
  componentDidMount(){
    
  //console.log('test =>', this.props );
  let userId = this.props.match.params.userId;
  if(!userId) {
      userId = 6358;
  }   
  usersAPI.getUserData(userId).then(response =>{
      
      this.props.setUserProfile(response.data);
      
  });
  }
  render(){
    
    return(
    
      <div > 
         
            <Profile {...this.props} profile={this.props.profile}/>
          
      </div>
    );
  }
}
let mapStateToProps = (state) => {
  return{
  profile: state.profilePage.profile
  }
}
let withUrlDataContainerComponent = withRouter(ProfileContainer);
export default connect (mapStateToProps,{setUserProfile})(withUrlDataContainerComponent);