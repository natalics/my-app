import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      <div className={s.post}>
        Мои посты
        <div>
          <textarea placeholder="Добавить пост" cols={80}></textarea>
          <button>Добавить</button>
        </div>
      </div>
      <Post message="Hello, world!" />
      <Post message="this is my first post" />
      <Post message="this is my secong post" />
    </div>
  );
};

export default MyPosts;
