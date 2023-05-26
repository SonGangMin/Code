import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const goArticles = () => {
    navigate("/articles", { replace: true });
  };
  return (
    <div>
      <header
        style={{
          background: "yellow",
          padding: 16,
          fontSize: 24,
          color: "gray",
        }}
      >
        <button onClick={goBack}>뒤로가기</button>
        <button onClick={goArticles}>게시글목록</button>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
