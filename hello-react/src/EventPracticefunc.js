import { useState } from "react";

const EventPracticefunc = () => {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const onChangeUsername = (e) => setUsername(e.target.value);
  const onChangeMessage = (e) => setMessage(e.target.value);
  const onClick = () => {
    alert(username + ":" + message);
    setUsername("");
    setMessage("");
  };
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };
  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={username}
        onChange={onChangeUsername}
      />
      <div>이름: {username}</div>
      <input
        type="text"
        name="message"
        placeholder="내용"
        value={message}
        onChange={onChangeMessage}
        onKeyPress={onKeyPress}
      />
      <div>내용: {message}</div>
      <button onClick={onClick}>확인</button>
    </div>
  );
};

export default EventPracticefunc;
