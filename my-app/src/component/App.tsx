import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Routers from "../Context/Confiq/Index";


const theme = createTheme();
const themeContext = React.createContext(theme);
const App: React.FC = () => {
  return (
    <React.Fragment>
      <themeContext.Provider value={theme}>
        <ThemeProvider theme={theme}>
          <Routers />
        </ThemeProvider>
      </themeContext.Provider>
    </React.Fragment>
  );
};
export default App;
