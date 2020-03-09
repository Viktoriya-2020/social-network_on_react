import React from 'react';
import style from './Users.module.css';



const Users = (props) => {
   if (props.users.length === 0) {
       props.setUsers(
        [
            {id:1,
            user_fullName: 'Gevorg',
            user_url: 'https://cdn1.iconfinder.com/data/icons/children-avatar-flat/128/children_avatar-01-512.png',
            user_location:{user_country:'Russia', user_city: 'Moscow' },
            followed:true,
            status:'I am boss'
            },
            {id:2,
            user_fullName: 'Hovsep',
            user_url: 'https://cdn1.iconfinder.com/data/icons/children-avatar-flat/128/children_avatar-01-512.png',
            user_location:{user_country: 'Armenia', user_city: 'Erevan' },
            followed:false,
            status:'I am teacher'
            },
            {id:3,
            user_fullName: 'Mery',
            user_url: 'https://cdn1.iconfinder.com/data/icons/children-avatar-flat/128/children_avatar-01-512.png',
            user_location:{user_country: 'USA', user_city: 'Vashington' },
            followed:false,
            status:'I am student'
            },
            {id:4,
            user_fullName: 'Isahak',
            user_url: 'https://cdn1.iconfinder.com/data/icons/children-avatar-flat/128/children_avatar-01-512.png',
            user_location:{user_country: 'China', user_city: 'Pecin' },
            followed:true,
            status:'I am happy'
            },
        ]
       )
   }
  let UserElement = props.users.map( u => 
        <div key = {u.id} className = {style.user}>
            <div  className = {style.user_grid}>
                <div><img src={u. user_url} /></div>
                <div> 
                    <p>{u.user_fullName}</p>
                    <p> {u.user_location.user_country} ({u.user_location.user_city})</p>
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