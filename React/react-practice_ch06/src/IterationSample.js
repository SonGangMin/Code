import React, { useState } from "react";

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: "눈사람" },
    { id: 2, text: "얼음" },
    { id: 3, text: "왕자" },
    { id: 4, text: "ㅋㅋ" },
  ]);
  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5);
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  const onClick = (e) => {
    const nextNames = names.concat({
      id: nextId,
      text: inputText,
    });
    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText("");
  };
  const onEditClick = (e) => {
    const nextNames = names.map((name) =>
      name.id === editId ? { ...name, text: editText } : name
    );
    setNames(nextNames);
    setEditId(null);
    setEditText("");
  };

  const onRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  };

  const onEditpage = (id) => {
    const nameToEdit = names.find((name) => name.id === id);
    setEditText(nameToEdit.text);
    setEditId(id);
  };

  const nameList = names.map((name) => (
    <li key={name.id}>
      {name.id === editId ? (
        <>
          <input
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button onClick={onEditClick}>수정확인</button>
          <button onClick={() => setEditId(null)}>취소하기</button>
        </>
      ) : (
        <>
          {name.text}
          <button onClick={() => onEditpage(name.id)}>수정</button>
          <button onClick={() => onRemove(name.id)}>삭제</button>
        </>
      )}
    </li>
  ));

  return (
    <div>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{nameList}</ul>
    </div>
  );
};

export default IterationSample;
