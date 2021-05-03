/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import classes from './Header.module.css';
const Header = () => {
    return (
        <header className={classes.header}>
            <img src='https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg '/>
        </header>
    );
}

export default Header;