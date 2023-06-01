import React from "react";
import CounterContainer from "./containers/CounterContainer";
import SampleContainer from "./containers/SampleContainer";
import TodosContainer from "./containers/TodosContainer";
import UserContainer from "./containers/UserContainer";
import UsersPage from "./pages/UsersPage";
import { Route, Routes } from "react-router-dom";
import { useParams } from "react-router-dom";

const App = () => {
  // const { id } = useParams();
  return (
    <div>
      <CounterContainer />
      <hr />
      <SampleContainer />
      <hr />
      dddddddddddd
      <UserContainer id={1} email={1} />
    </div>
  );
};

export default App;
