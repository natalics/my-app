import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img
          className={s.banner}
          src="https://static.vecteezy.com/system/resources/previews/005/431/039/non_2x/paper-cut-background-abstract-realistic-papercut-decoration-textured-with-wavy-layers-3d-topography-relief-topographic-illustration-cover-layout-template-free-vector.jpg"
          alt="banner"
        />
      </div>
      <div>
        <img
          className={s.avatar}
          src="https://psv4.userapi.com/c236331/u295814816/docs/d38/945a75fe0a2a/avatar.png?extra=sjO3Eb09fbsgPl02w7lYD3a0ztKitTJxDwdsI2GMtsnQFiMKrJVEqwCqIsz1QuSvGBvaHQK5cN8SVwefLfrVKqXvI0A2vAO1RoWAZoXLXyb9ExU14g-9c9Rs6SdNefYNOn6_MphWxB0-q590UHdc3Q"
          alt="avatar"
        />
      </div>
      <MyPosts />
    </div>
  );
};

export default Profile;
