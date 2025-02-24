import { useEffect, useState } from "react";
import Container from "../../components/Container";
import GameInput from "./components/GameInput/input";
import { rawgApi, tokenRawg } from "../../services/apis/RAWG";
import { AreaList } from "./styles";
import CardGame from "../../components/CardGame";

export default function Home() {

  const [inputValue, setInputValue] = useState('');
  const [listGames, setListGames] = useState([])

  useEffect(() => {
    loadGames()
  }, [])

  async function loadGames() {
    try {
      const response = await rawgApi.get('/games', {
        params: {
          page: 1,
          page_size: 10,
          ordering: "rating_top",
          key: tokenRawg
        }
      })
      setListGames(response.data.results)
      console.log(response.data.results)
    } catch (error) {
      console.log(error.message)
    }
  }

  async function handleSearch() {
    if (!inputValue) {
      return
    }
    try {
      const response = await rawgApi.get('/games', {
        params: {
          page: 1,
          search: inputValue,
          page_size: 10,
          ordering: "rating_top",
          key: tokenRawg
        }
      })
      setListGames(response.data.results)
      console.log(response.data.results)
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <Container>
      <GameInput
        placeholder="Procurando por algum jogo?"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        $onClickBtn={handleSearch}
      />
      <AreaList>
        {listGames.map((item) => <CardGame key={item.id} data={item} />)}
      </AreaList>
    </Container>
  );
}
