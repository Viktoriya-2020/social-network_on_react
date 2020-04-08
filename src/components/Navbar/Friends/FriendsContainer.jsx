import { connect } from 'react-redux';
import Friends from './Friends';

const mapStateToProps = (state) => {
  return {
    friends: state.sideBar.friendsInfo
  }
}
const mapDispatchToProps = (dispatch) => {
  return {

  }
}
const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);

export default FriendsContainer;