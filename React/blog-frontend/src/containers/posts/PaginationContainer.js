import React from "react";
import { useSearchParams } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Pagination from "../../components/posts/Pagination";

const PaginationContainer = () => {
  const [searchParams] = useSearchParams();
  const { username } = useParams();

  const tag = searchParams.get("tag");
  const page = parseInt(searchParams.get("page"), 10) || 1;

  const { lastPage, posts, loading } = useSelector(({ posts, loading }) => ({
    lastPage: posts.lastPage,
    posts: posts.posts,
    loading: loading["posts/LIST_POSTS"],
  }));

  if (!posts || loading) return null;
  return (
    <div>
      <Pagination
        tag={tag}
        username={username}
        page={parseInt(page, 10)}
        lastPage={lastPage}
      />
    </div>
  );
};

export default PaginationContainer;
