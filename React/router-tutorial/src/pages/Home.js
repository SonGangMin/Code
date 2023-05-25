import React from "react";
import { Link, Outlet } from "react-router-dom";

const Home = (props) => {
  const { data } = props;
  console.log("===", data);
  return (
    <div>
      <h1>홈</h1>
      <p>가장 먼저 보여지는 페이지다.</p>
      <ul>
        <li>
          <Link to="/about">소개</Link>
        </li>

        <li>
          <Link to="/profiles/skm0628">손강민</Link>
        </li>
        <li>
          <Link to="/profiles/byeongje">김병제</Link>
        </li>
        <li>
          <Link to="/profiles/void">존재X</Link>
        </li>
        <li>
          <Link to="/articles">게시글목록</Link>
          <Outlet />
        </li>
      </ul>
    </div>
  );
};

export default Home;
