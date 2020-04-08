import React from 'react';
import style from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import FriendsContainer from './Friends/FriendsContainer';

const Navbar = (props) => {
  return (
    <nav className={style.nav}>
      <div className={style.item}>
        <NavLink to="/profile" activeClassName={style.activeLink} >Profile</NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/dialogs" activeClassName={style.activeLink}>Messages</NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/users" activeClassName={style.activeLink}>Users</NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/settings" activeClassName={style.activeLink}>Settings</NavLink>
      </div>
      <div className={style.friendsBlock}>
        <FriendsContainer />
      </div>
    </nav>
  );
}
export default Navbar;