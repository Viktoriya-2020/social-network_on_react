import React from 'react';
import style from './Friends.module.css';


const Friends = (props) => {

  let friendsElements = props.friends.map(f =>
    <div key={f.id} className={style.friendItem}>
      <img src="https://cdn1.iconfinder.com/data/icons/children-avatar-flat/128/children_avatar-01-512.png" alt='icon' />
      <div className={style.nameItem}>
        {f.name}
      </div>
    </div>)

  return (
    <div>
      <h3> My friends</h3>
      {friendsElements}
    </div>
  );
}

export default Friends;