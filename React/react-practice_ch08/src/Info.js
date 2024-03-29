import React, { useState, useEffect, useReducer } from "react";
import useInput from "./useInput";

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

const Info = () => {
  // const [name, setName] = useState("");
  // const [nickname, setNickname] = useState("");
  // useEffect(() => {
  //   console.log("effect");
  //   console.log(name);
  //   return () => {
  //     console.log("cleanup");
  //     console.log(name);
  //   };
  // }, [name]);
  // const onChangeName = (e) => {
  //   setName(e.target.value);
  // };
  // const onChangeNickname = (e) => {
  //   setNickname(e.target.value);
  // };

  const [state, onChange] = useInput({
    name: "",
    nickname: "",
  });
  const { name, nickname } = state;
  // const onChange = (e) => {
  //   dispatch(e.target);
  // };

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>이름: </b>
          {name}
          <b>닉네임: </b>
          {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
