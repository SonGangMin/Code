import React from "react";
import { useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";

const About = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  //   searchParams.set("detail", "true");
  //   searchParams.set("mode", "22222");

  searchParams.set("mode2", "200");
  const detail = searchParams.get("detail");
  const mode = searchParams.get("mode");
  const mode2 = searchParams.get("mode2");

  //   const location = useLocation();
  //   console.log("ddddddddddddddddddddddd", location);
  const onToggleDetail = () => {
    setSearchParams({ mode, detail: detail === "true" ? false : true, mode2 });
  };
  const onIncreaseMode = () => {
    const nextMode = parseInt(mode) + 1;
    console.log(nextMode);
    setSearchParams({ mode: nextMode, detail, mode2 });
  };
  return (
    <div>
      <h1>소개</h1>
      <p>리액트 라우터를 사용해 보는 프로젝트입니다.</p>
      <p>detail: {detail}</p>
      <p>mode: {mode}</p>
      <p>mode2: {mode2}</p>
      <button onClick={onToggleDetail}>Toggle detail</button>
      <button onClick={onIncreaseMode}>mode +1</button>
    </div>
  );
};

export default About;
