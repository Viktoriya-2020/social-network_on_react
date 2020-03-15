import React from 'react';
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC } from '../../Redux/users-reducer';
import Users from './Users';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return{
        users: state.usersPage.users,
        count: state.usersPage.count,
        totalUsersCount:state.usersPage.totalUsersCount,
        currentPage:state.usersPage.currentPage
    }
}

let mapDispatchToProps = (dispatch) =>{
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
        }
     }




export default connect(mapStateToProps, mapDispatchToProps)(Users);