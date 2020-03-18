import React from 'react';
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC } from '../../Redux/users-reducer';
import Users from './Users';
import { connect } from 'react-redux';
import * as axios from 'axios';

class UsersContainer extends React.Component {
   
    componentDidMount(){
         axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.count}&page=${this.props.currentPage}`).then(response =>{
               
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount)
            });
        }
        onPageChanged = (pageNumber) =>  {
            
                this.props.setCurrentPage(pageNumber);
               
                axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.count}`).then(response =>{
                    
                this.props.setUsers(response.data.items);
               
            });
        } 
        render(){
        
       return  <Users totalUsersCount = {this.props.totalUsersCount} 
                     count = {this.props.count}
                     users = {this.props.users}
                     unfollow = {this.props.unfollow}
                     follow = {this.props.follow}
                     currentPage = {this.props.currentPage}
                     onPageChanged = {this.onPageChanged} />
        
        }   
    }
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
export default connect(mapStateToProps, mapDispatchToProps)( UsersContainer);