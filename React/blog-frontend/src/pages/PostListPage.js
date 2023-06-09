import React from "react";
import Button2 from "../components/common/Button";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Header from "../components/common/Header";
import HeaderContainer from "../containers/common/HeaderContainer";
import PostList from "../components/posts/PostList";
import PostListContainer from "../containers/posts/PostListContainer";
import PaginationContainer from "../containers/posts/PaginationContainer";

const PostListPage = () => {
  return (
    <div>
      {/* <Link to="/login">
        <Button2>로그인</Button2>
      </Link>
      <Link to="/register">
        <Button>회원가입</Button>
      </Link> */}
      <HeaderContainer />
      <PostListContainer />
      <PaginationContainer />
    </div>
  );
};

export default PostListPage;
