import React from 'react';
import Profile from './Profile';
import { getUserProfile} from '../../Redux/profile-reduser';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { WithAuthRedirect } from '../../hok/WithAuthReirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
  
  componentDidMount(){
    
  //console.log('test =>', this.props );
  let userId = this.props.match.params.userId;
  if(!userId) {
      userId = 6358;
  }   
        this.props.getUserProfile(userId)
  }
  render(){
   
    return(
      
      <div > 
         
            <Profile {...this.props} profile={this.props.profile}/>
          
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
 
  profile: state.profilePage.profile,
  
  });
export default compose(
  connect (mapStateToProps,{ getUserProfile}),
  withRouter,
  WithAuthRedirect
)(ProfileContainer);
