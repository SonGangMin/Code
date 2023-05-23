import { useState } from "react";

const EventPracticeForm = () => {
  const [form, setForm] = useState({
    username: "",
    message: "",
  });
  const { username, message } = form;
  const onChange = (e) => {
    setTimeout(() => console.log(e), 10);
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };
  const onClick = () => {
    alert(username + ":" + message);
    setForm({
      username: "",
      message: "",
    });
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
        onChange={onChange}
      />
      <div>이름: {username}</div>
      <input
        type="text"
        name="message"
        placeholder="내용"
        value={message}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <div>내용: {message}</div>
      <button onClick={onClick}>확인</button>
    </div>
  );
};

export default EventPracticeForm;
