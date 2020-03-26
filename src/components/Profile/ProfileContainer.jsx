import React from 'react';
import Profile from './Profile';
import {setUserProfile} from '../../Redux/profile-reduser';
import { connect } from 'react-redux';
import *as axios from 'axios';
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {
  
  componentDidMount(){
    
  //console.log('test =>', this.props );
  let userId = this.props.match.params.userId;
  if(!userId) {
      userId = 6358;
  }   
   axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+ userId).then(response =>{
      
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