/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import classes from './Post.module.css';

const Post = () => {
  return (
    <div>
      My Posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
        <button>Remove</button>
      </div>
    <div className={classes.item}>
      <img src = 'https://avatars.githubusercontent.com/u/32821146?v=4'></img>
      post 1
    </div>
    </div>
  );
}

export default Post;