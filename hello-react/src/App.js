import React from "react";

// function add(age) {
//   return age + 5;
// }
function App() {
  const name = "홍길동";
  // const age = add(10);
  const style = {
    backgroundColor: "black",
    color: "aqua",
    fontSize: "48px",
    fontWeight: "bold",
    padding: 16,
  };
  // const unde = undefined;
  return <div style={style}>{name}</div>;
}

export default App;
