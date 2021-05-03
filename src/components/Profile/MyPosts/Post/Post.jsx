/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
  return (

    <div className={classes.item}>
      <img src='https://avatars.githubusercontent.com/u/32821146?v=4'></img>
      {props.message}
      <div>
        <span>{props.count}</span>
      </div>
    </div>
  );
}

export default Post;