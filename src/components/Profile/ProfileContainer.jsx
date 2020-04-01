import React from 'react';
import Profile from './Profile';
import { getUserProfile} from '../../Redux/profile-reduser';
import { getUserStatus, updateUserStatus} from '../../Redux/users-reducer'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { WithAuthRedirect } from '../../hok/WithAuthReirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
 
  componentDidMount(){
   
    //console.log('test =>', this.props );
      let userId = this.props.match.params.userId;
    
          if(!userId) {
              userId = this.props.authorizedUserId;
          }   
      this.props.getUserProfile(userId)
      this.props.getUserStatus(userId)
  }
  render(){

    return(
      
      <div > 
         
            <Profile {...this.props} profile={this.props.profile} statusUser={this.props.status} />
          
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
 
  profile: state.profilePage.profile,
  status: state.usersPage.status,
  authorizedUserId:state.auth.id,
  isAuth: state.auth.isAuth
  
  });
export default compose(
  connect (mapStateToProps,{ getUserProfile, getUserStatus, updateUserStatus}),
  withRouter,
  WithAuthRedirect
)(ProfileContainer);
