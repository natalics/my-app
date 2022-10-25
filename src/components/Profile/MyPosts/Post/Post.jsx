import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div>
      <div className={s.item}>
        <img
          className={s.avatar}
          src="https://psv4.userapi.com/c236331/u295814816/docs/d38/945a75fe0a2a/avatar.png?extra=sjO3Eb09fbsgPl02w7lYD3a0ztKitTJxDwdsI2GMtsnQFiMKrJVEqwCqIsz1QuSvGBvaHQK5cN8SVwefLfrVKqXvI0A2vAO1RoWAZoXLXyb9ExU14g-9c9Rs6SdNefYNOn6_MphWxB0-q590UHdc3Q"
          alt="avatar"
        />
        {props.message}
        <div>
          <span>Нравится</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
