import React from "react";
import { useParams } from "react-router-dom";

const data = {
  skm0628: {
    name: "손강민",
    description: "하하하",
  },
  byeongje: {
    name: "김병제",
    description: "ㅇㅇㅇㅇ",
  },
};

const Profile = () => {
  const params = useParams();
  const profile = data[params.username];

  return (
    <div>
      <h1>사용자 프로필</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <h2>{profile.description}</h2>
        </div>
      ) : (
        <h2>존재하지 않는 프로필입니다.</h2>
      )}
    </div>
  );
};

export default Profile;
