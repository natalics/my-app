import React from "react";
import s from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img src="https://static.vecteezy.com/system/resources/previews/005/431/039/non_2x/paper-cut-background-abstract-realistic-papercut-decoration-textured-with-wavy-layers-3d-topography-relief-topographic-illustration-cover-layout-template-free-vector.jpg" />
      </div>
      <div>
        Avatar + description
        <img src="https://psv4.userapi.com/c236331/u295814816/docs/d38/57cd943125df/avatar.png?extra=GQ78mZPMYVPryCOAaVlCAX6iJvkaSg0_ZkMz6TdKCQ-eTLw6h-6vZGRP6bd6Ul7h3GT9tHkEAmSzYUfIhSnkwYB1Wv4WiIHDDLTETqDbls_QQr8ee5UkuQqiiae0y2Ps1XCJ5HatvP_vts7VcZZU2SM" />
      </div>
      <div>
        My posts
        <div>New post</div>
      </div>
      <div>
        <div>post 1</div>
        <div>post 2</div>
        <div>post 3</div>
      </div>
    </div>
  );
};

export default Profile;
