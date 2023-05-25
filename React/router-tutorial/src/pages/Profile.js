import React from "react";
import { useParams } from "react-router-dom";

// const data = {
//   skm0628: {
//     name: "손강민",
//     description: "리액트를 좋아하는 개발자",
//   },
//   byeongje: {
//     name: "김병제",
//     description: "리액트를 싫어하는 개발자",
//   },
// };

const Profile = (props) => {
  const { data } = props;
  const params = useParams();
  const profile = data[params.username];
  return (
    <div>
      <h1>사용자 프로필</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </div>
      ) : (
        <p>존재하지 않는 프로필입니다.</p>
      )}
    </div>
  );
};

export default Profile;
