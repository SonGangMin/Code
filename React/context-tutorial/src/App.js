import ColorBox from "./components/ColorBox";
import SelectColors from "./components/SelectColors";
import SelectColorsClass from "./components/SelectColorsClass";
import ThemeContext from "./components/ThemeContext";
import { ColorProvider } from "./contexts/color";
import { useState } from "react";
import Box from "./components/Box";
const App = () => {
  const [theme, setTheme] = useState(ThemeContext);

  return (
    // <ColorProvider>
    //   <div>
    //     <SelectColors />
    //     <ColorBox />
    //     <hr />
    //     <br />
    //     클래스형
    //     <SelectColorsClass />
    //     <ColorBox />
    //   </div>
    // </ColorProvider>
    <div>
      <ThemeContext.Provider value={theme}>
        <Box />
      </ThemeContext.Provider>
    </div>
  );
};

export default App;
