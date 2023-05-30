import { ThemeProvider } from "styled-components";
import GlobalStyle from "./theme/global";
import { theme } from "./theme/theme";
import Button from "./components/Button";
import Card from "./components/Card";
import api from "./services/api";
import { getRandomNumber } from "./snippets/randomNumber";

const randNum = getRandomNumber(1, 826);

api
  .get(`${randNum}`)
  .then((resp) => resp.data)
  .then((data) => console.log(data));

const handleClick = () => {
  console.log("hello");
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Card
        title="Rick S"
        imgUrl={`https://rickandmortyapi.com/api/character/avatar/${randNum}.jpeg`}
        status="Alive"
      >
        {}
      </Card>
      <Button
        variant="solid"
        color={theme.color.tertiary}
        onClick={handleClick}
      >
        Random
      </Button>
    </ThemeProvider>
  );
}

export default App;
