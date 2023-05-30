import { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./theme/global";
import { theme } from "./theme/theme";
import Button from "./components/Button";
import Card from "./components/Card";
import api from "./services/api";
import { getRandomNumber } from "./snippets/randomNumber";

function App() {
  function getCharacterInfo(id: number) {
    api
      .get(`${id.toString()}`)
      .then((resp) => resp.data)
      .then((data) => {
        console.log(data.name);
        setCharacterImg(data.image);
        setCharacterName(data.name);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  const [characterImg, setCharacterImg] = useState(1);
  const [characterName, setCharacterName] = useState("Rick");

  const handleClick = () => {
    const randNum = getRandomNumber(1, 826);
    console.log(randNum);
    setCharacterImg(randNum);
    getCharacterInfo(randNum);
    console.log(getCharacterInfo(randNum));
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Card
        name={characterName}
        imgUrl={characterImg.toString()}
        status="Alive"
      >
        {
          <Button
            variant="ghost"
            color={theme.color.secondary}
            onClick={handleClick}
          >
            Random
          </Button>
        }
      </Card>
    </ThemeProvider>
  );
}

export default App;
