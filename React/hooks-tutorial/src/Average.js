import { useState, useMemo, useCallback, useRef } from "react";

const getAverage = (numbers) => {
  console.log("평균값 계산중..");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");
  const inputEl = useRef(null);
  const buttonRef = useRef(null);
  const listRef = useRef(null);
  const id = useRef(5);
  const setId = (n) => {
    id.current = n;
  };

  const onChange = useCallback((e) => {
    setNumber(e.target.value);
    setId(e.target.value);
    console.log("id==============", id);
  }, []);
  const onInsert = useCallback(() => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
    inputEl.current.focus();
    buttonRef.current.innerText = "Clicked";
    const newListitem = document.createElement("li");
    newListitem.innerText = "새로운아이템";
    listRef.current.appendChild(newListitem);
  }, [number, list]);

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input value={number} onChange={onChange} ref={inputEl} />
      <button onClick={onInsert} ref={buttonRef}>
        등록
      </button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <hr />
      <ul ref={listRef}></ul>
      <div>
        <b>평균값: </b>
        {/* {getAverage(list)} */}
        {avg}
      </div>
    </div>
  );
};

export default Average;
