import React from 'react';
import { connect } from 'react-redux';
import Friends from './Friends';
import {getPartOfUsers} from '../../../Redux/users-reducer';
class FriendsContainer extends React.Component{
  componentDidMount() {
this.props.getPartOfUsers();
  }
  render(){
    return(
      <>
      <Friends  friendsFromUsers={this.props.friendsFromUsers}/>
      </>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    friends: state.sideBar.friendsInfo,
    friendsFromUsers: state.usersPage.friendsFromUsers,

  }
}

export default connect(mapStateToProps, {getPartOfUsers})(FriendsContainer);