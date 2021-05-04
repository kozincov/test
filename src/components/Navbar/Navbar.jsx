/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={`${classes.item} ${classes.active}`}>
                <NavLink to='/profile' activeClassName={classes.activeLink}>Profile</NavLink>
            </div>
            <div className={`${classes.item} ${classes.active}`}>
                <NavLink to='/dialogs' activeClassName={classes.activeLink}>Massages</NavLink>
            </div>
            <div className={`${classes.item} ${classes.active}`}>
                <NavLink to='/news' activeClassName={classes.activeLink}>News</NavLink>
            </div>
            <div className={`${classes.item} ${classes.active}`}>
                <NavLink to='/music' activeClassName={classes.activeLink}>Music</NavLink>
            </div>
            <div className={`${classes.item} ${classes.active}`}>
                <NavLink to='/settings' activeClassName={classes.activeLink}>Settings</NavLink>
            </div>
        </nav>
)
}

export default Navbar;