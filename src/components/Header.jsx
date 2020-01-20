import React from 'react';
import s from './Header.module.css'

const Header = () => {
    return(
        <header className={s.header}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOfRw1Ssdxo5o7Sh9Vu0CYCYgfugBteu32ikMvmNIjUIl6hKiW&s" alt = "up-age"/>
        </header>
    );
}

export default Header;