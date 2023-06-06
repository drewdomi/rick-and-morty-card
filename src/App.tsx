import { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./theme/global";
import { theme } from "./theme/theme";
import Button from "./components/Button";
import Card from "./components/Card";
import api from "./services/api";
import { getRandomNumber } from "./snippets/randomNumber";

function App() {
  async function getCharacterInfo(id: number) {
    return api
      .get(`${id.toString()}`)
      .then((resp) => resp.data)
      .then((data) => {
        setCharacterImg(data.image);
        setCharacterName(data.name);
        setCharacterStatus(data.status);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  const [characterImg, setCharacterImg] = useState(
    "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
  );
  const [characterName, setCharacterName] = useState("Rick Sanchez");
  const [characterStatus, setCharacterStatus] = useState("Alive");

  const setCharacterInCard = () => {
    const randNum = getRandomNumber(1, 826);
    getCharacterInfo(randNum);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Card name={characterName} imgUrl={characterImg} status={characterStatus}>
        {
          <Button
            variant="solid"
            color={theme.color.secondary}
            onClick={setCharacterInCard}
          >
            Random
          </Button>
        }
      </Card>
    </ThemeProvider>
  );
}

export default App;
