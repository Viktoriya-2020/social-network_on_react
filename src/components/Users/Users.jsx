import React from 'react';
import style from './Users.module.css';
import *as axios from 'axios';
import userThoto from '../../assets/images/gambar-user-png-5.png';

class Users extends React.Component {
   
    componentDidMount(){
        axios.get('https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.count}').then(response =>{
                
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount)
        });
    }
    onPageChanged = (numberChange) =>  {
            this.props.setCurrentPage(numberChange);
            axios.get('https://social-network.samuraijs.com/api/1.0/users?page=${numberChange}&count=${this.props.count}').then(response =>{
                
            this.props.setUsers(response.data.items);
        });
    } 
    render(){
    let pagesCount = Math.ceil(this.props.totalUsersCount/ this.props.count);

    let pages = []
    
    for(let i=1;i<=pagesCount;i++){
        pages.push(i)
    }
   return(
       
    <div className = {style.users}>
        <div className = {style.numbersPages}>
            {pages.map(p =>{ 
                return <button className = {this.props.currentPage === p && style.selectPage} 
                onClick = {(e)=>{this.onPageChanged(p)}}>{p}</button>
                }) 
            }
        </div>

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