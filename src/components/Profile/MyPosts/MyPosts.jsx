/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {
  return (
    <div>
      My Posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
        <button>Remove</button>
      </div>
      <div className={classes.posts}>
        <Post message='A B O B A' likescount='15' />
        <Post message="It's my first post." likescount='23' />
      </div>
    </div>
  );
}

export default MyPosts;