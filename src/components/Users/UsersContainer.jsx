import React from 'react';
import { follow, unfollow, toggleIsFollowingProgress, gettingUsers} from '../../Redux/users-reducer';
import Users from './Users';
import { connect } from 'react-redux';
import Preloader from '../../common/Preloader/Preloader';



class UsersContainer extends React.Component {
   
    componentDidMount(){
        this.props.gettingUsers(this.props.count, this.props.currentPage);
        
        }
        onPageChanged = (pageNumber) =>  {
            this.props.gettingUsers(this.props.count, pageNumber); 
              
        } 
        render(){
        
       return  <>
                    {this.props.isFetching ? <Preloader /> : null}
                    <Users totalUsersCount = {this.props.totalUsersCount} 
                     count = {this.props.count}
                     users = {this.props.users}
                     unfollow = {this.props.unfollow}
                     follow = {this.props.follow}
                     currentPage = {this.props.currentPage}
                     onPageChanged = {this.onPageChanged}
                     isFetching = {this.props.isFetching}
                     followingInProgress = {this.props.followingInProgress}
                     toggleIsFollowingProgress = {this.props.toggleIsFollowingProgress} />
                </>     
        }   
    }
let mapStateToProps = (state) => {
    return{
        users: state.usersPage.users,
        count: state.usersPage.count,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage:state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}

{/*let mapDispatchToProps = (dispatch) =>{
    return{
            follow: (userId) => {
                dispatch (followAC (userId))
            },
            unfollow: (userId) => {
                dispatch (unfollowAC (userId))
            },
            setUsers: (users) => {
                dispatch (setUsersAC(users) )
            },
            setCurrentPage: (numberPage) => {
                dispatch (setCurrentPageAC (numberPage))
            }, 
            setTotalUsersCount: (totalCount) => {
                dispatch (setTotalUsersCountAC (totalCount))
            }, 
            toggleIsFetching: (isFetching) => {
                dispatch (toggleIsFetchingAC (isFetching))
            }, 
        }
    } */}  
export default connect(mapStateToProps,
    {follow, unfollow, toggleIsFollowingProgress, gettingUsers})
    ( UsersContainer);