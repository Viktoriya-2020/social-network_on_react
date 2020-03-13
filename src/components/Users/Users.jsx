import React from 'react';
import style from './Users.module.css';
import *as axios from 'axios';
import userThoto from '../../assets/images/gambar-user-png-5.png';

const Users = (props) => {
   if (props.users.length === 0) {
      
      axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response =>{
            
            props.setUsers(response.data.items);
      });
   }

  let UserElement = props.users.map( u => 
        <div key = {u.id} className = {style.user}>
            <div  className = {style.user_grid}>
                <div><img src={u.photos.small != null ? u.photos.small : userThoto} /></div>
                <div> 
                    <p>{u.name}</p>
                    <p> {'u.user_location.user_country'} ({'u.user_location.user_city'})</p>
                </div>
                <div>{u.status}...</div>
                <div>
                    { u.followed
                    ?<button onClick = { () =>{ props.unfollow(u.id) }}>Unfollow</button>
                    :<button onClick = { () =>{ props.follow(u.id) }}>Follow</button>
                    }
                </div>
            </div>
        </div>)

   return(
    <div className = {style.users}>
        {UserElement}
    </div>
        
);   
    
}
export default Users;