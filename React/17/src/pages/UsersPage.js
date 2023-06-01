import { Route, Routes } from "react-router-dom";
import UserContainer from "../containers/UserContainer";
import UserPage from "./UserPage";

const UsersPage = () => {
  return (
    <>
      <UserContainer />
      <UserPage />
    </>
  );
};

export default UsersPage;
