import { ThemeProvider } from "styled-components";
import GlobalStyle from "./theme/global";
import { theme } from "./theme/theme";
import Button from "./components/Button";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Button variant="ghost" color={theme.color.primary}>
        Button
      </Button>
    </ThemeProvider>
  );
}

export default App;
