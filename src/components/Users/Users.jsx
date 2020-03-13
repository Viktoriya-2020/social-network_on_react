import React from 'react';
import style from './Users.module.css';
import *as axios from 'axios';
import userThoto from '../../assets/images/gambar-user-png-5.png';

class Users extends React.Component {
   
    componentDidMount(){
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response =>{
                
            this.props.setUsers(response.data.items);
        });
    }
  render(){

   return(
       
    <div className = {style.users}>
      
        { this.props.users.map( u => 
            <div key = {u.id} className = {style.user}>
                <div  className = {style.user_grid}>
                    <div><img src={u.photos.small != null ? u.photos.small : userThoto} /></div>
                    <div> 
                        <p>{u.name}</p>
                        <p> {'u.user_location.country'} ({'u.user_location.city'})</p>
                    </div>
                    <div>{u.status}...</div>
                    <div>
                        { u.followed
                        ?<button onClick = { () =>{ this.props.unfollow(u.id) }}>Unfollow</button>
                        :<button onClick = { () =>{ this.props.follow(u.id) }}>Follow</button>
                        }
                    </div>
                </div>
            </div>)
    }
    </div>
        
);   
}   
}
export default Users;