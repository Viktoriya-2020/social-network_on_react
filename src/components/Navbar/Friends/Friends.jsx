import React from 'react';
import s from './Friends.module.css';


const Friends = (props) => {
  

  let friendsElements = props.friends.map(f => 
      <div key={f.id} className={s.friendItem}> 
        <img  src="https://cdn1.iconfinder.com/data/icons/children-avatar-flat/128/children_avatar-01-512.png" alt = 'icon' />
        <div className={s.nameItem}>
            {f.name}
        </div>
      </div>)
    
    return(
      <div> 
        <h3> My friends</h3>
        {friendsElements}
      </div>
    );
}

export default Friends;