import React from 'react';
import style from './Users.module.css';
import userThoto from '../../assets/images/gambar-user-png-5.png';
import {NavLink} from 'react-router-dom';
import *as axios from 'axios';
import { usersAPI } from '../../api/api';
const  Users =(props) =>{
   
    let pagesCount = Math.ceil(props.totalUsersCount/ props.count);

    let pages = []
    
    for(let i=1;i<=pagesCount;i++){
        pages.push(i)
    }
   return(
       
    <div className = {style.users}>
        
        { props.users.map( u => 
            <div key = {u.id} className = {style.user}>
                <div  className = {style.user_grid}>
                    <div>
                        <NavLink to = {'/profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userThoto} />
                        </NavLink>
                    </div>
                    <div> 
                        <p>{u.name}</p>
                        <p> {'u.user_location.country'} ({'u.user_location.city'})</p>
                    </div>
                    <div>{u.status}...</div>
                    <div>
                        { u.followed
                        ?<button disabled = {props.followingInProgress.some(id => id === u.id)} onClick = { () =>{ 
                            debugger; 
                            props.toggleIsFollowingProgress(true, u.id);
                           usersAPI.unfollowUser(u.id).then(response =>{
                                    if(response.data.resultCode === 0){
                                        props.unfollow(u.id)
                                       }
                                       props.toggleIsFollowingProgress(false, u.id);
                                      
                                    })
                                    }    
                        }>unfollow</button>
                        :<button  disabled = {props.followingInProgress.some(id => id === u.id)} onClick = { () =>{
                            props.toggleIsFollowingProgress(true, u.id);
                            usersAPI.followUser(u.id).then(response =>{
                                    if(response.data.resultCode === 0){
                                        props.follow(u.id)
                                       }
                                       props.toggleIsFollowingProgress(false, u.id);
                                    })
                               
                        }}>follow</button>
                        }
                    </div>
                </div>
            </div>)
    }
    <div className = {style.numbersPages}>
            {pages.map(p =>{ 
                return <button  key = {p.index} className = {props.currentPage === p && style.selectPage} 
                onClick = {(e)=>{props.onPageChanged(p)}}>{p}</button>
                }) 
            }
        </div>

    </div>
        
);   
}   

export default Users;