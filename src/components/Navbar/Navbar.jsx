/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import classes from './Navbar.module.css';

const Navbar = () => {
  return <nav className={classes.nav}>
    <div className ={`${classes.item} ${classes.active}`}>
      <a>Profile</a>
    </div>
    <div className ={`${classes.item} ${classes.active}`}>
      <a>Massages</a>
    </div>
    <div className ={`${classes.item} ${classes.active}`}>
      <a>News</a>
    </div>
    <div className ={`${classes.item} ${classes.active}`}>
      <a>Music</a>
    </div>
    <div className ={`${classes.item} ${classes.active}`}>
      <a>Settings</a>
    </div>
  </nav>;
}

export default Navbar;