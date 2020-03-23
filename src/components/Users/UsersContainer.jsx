import React from 'react';
import { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching } from '../../Redux/users-reducer';
import Users from './Users';
import { connect } from 'react-redux';
import * as axios from 'axios';
import Preloader from '../../common/Preloader/Preloader';


class UsersContainer extends React.Component {
   
    componentDidMount(){
        this.props.toggleIsFetching(true)
         axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.count}&page=${this.props.currentPage}`).then(response =>{
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount)
            });
        }
        onPageChanged = (pageNumber) =>  {
            
                this.props.setCurrentPage(pageNumber);
                this.props.toggleIsFetching(true)
                axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.count}`).then(response =>{
                    this.props.toggleIsFetching(false)    
                this.props.setUsers(response.data.items);
               
            });
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
                     isFetching = {this.props.isFetching} />
                </>     
        }   
    }
let mapStateToProps = (state) => {
    return{
        users: state.usersPage.users,
        count: state.usersPage.count,
        totalUsersCount:state.usersPage.totalUsersCount,
        currentPage:state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
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
    {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching})( UsersContainer);