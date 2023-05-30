import React from "react";
import ThemeContext from "./ThemeContext";

const Box = () => {
  return (
    <ThemeContext.Consumer>
      {(value) => (
        <div
          style={{
            color: value.foreground,t
            background: value.background,
            width: "100%",
            height: "100%",
          }}
        >
          ㅋㅋㅋ
        </div>
      )}
    </ThemeContext.Consumer>
  );
};

export default Box;
