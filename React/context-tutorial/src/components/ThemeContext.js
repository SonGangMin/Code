import React from "react";
import { createContext } from "react";

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};

const ThemeContext = createContext(themes.light);

// const ThemeContext = () => {

//     return (
//         <div>

//         </div>
//     );
// };

export default ThemeContext;
