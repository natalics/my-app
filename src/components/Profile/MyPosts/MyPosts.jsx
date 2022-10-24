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
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default MyPosts;
