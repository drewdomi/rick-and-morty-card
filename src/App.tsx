import { ThemeProvider } from "styled-components";
import GlobalStyle from "./theme/global";
import { theme } from "./theme/theme";
import Button from "./components/Button";

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme} />
      <Button>Button</Button>
    </>
  );
}

export default App;
