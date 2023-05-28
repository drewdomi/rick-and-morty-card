import { ThemeProvider } from "styled-components";
import GlobalStyle from "./theme/global";
import { theme } from "./theme/theme";
import Button from "./components/Button";
import Card from "./components/Card";
import api from "./services/api";

api
  .get("/1")
  .then((resp) => resp.data)
  .then((data) => console.log(data.name));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Button variant="solid" color={theme.color.tertiary}>
        Button
      </Button>
      <Card
        title="Rick S"
        imgUrl="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
        status="Alive"
      />
    </ThemeProvider>
  );
}

export default App;
