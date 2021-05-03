/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {
  return (
    <div className={classes.posts}>
      <Post />
    </div>
  );
}

export default MyPosts;