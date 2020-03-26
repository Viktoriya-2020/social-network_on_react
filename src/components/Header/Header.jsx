import React from 'react';
import style from './Header.module.css'
import logo from '../../assets/images/logo.png';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  
    return(
        <header className={style.header}>
          <div className={style.headerGrid}>
          <img src={logo} alt = "up-age"/>
          <div></div><div></div><div></div>
          <div className={style.loginBlock}>
            {props.isAuth ? props.login :
            <NavLink className={style.loginLink} to = "/login">
              Login
            </NavLink>}
          </div>
          </div>
        </header>
    );
}

export default Header;