import { useEffect, useState } from "react";
import Container from "../../components/Container";
import GameInput from "./components/GameInput/input";
import { rawgApi, tokenRawg } from "../../services/apis/RAWG";
import { AreaList, Button } from "./styles";
import CardGame from "../../components/CardGame";
import Loader from "../../components/Loader";

export default function Home() {

  const [inputValue, setInputValue] = useState('');
  const [listGames, setListGames] = useState([])
  const [isEmpyt, setIsEmpyt] = useState(false)
  const [loadingMoreGames, setLoadinMoreGames] = useState(false)
  const [loadingGames, setLoadingGames] = useState(true)
  const [loadingSearch, setLoadingSearch] = useState(false)
  const [page, setPage] = useState(1)

  useEffect(() => {
    loadGames()
  }, [])

  async function loadGames(nextPage = 1) {
    try {
      const response = await rawgApi.get('/games', {
        params: {
          page: nextPage,
          page_size: 10,
          search: inputValue || '',
          ordering: "rating_top",
          key: tokenRawg
        }
      })
      if (!response.data) {
        setIsEmpyt(true)
      }
      const data = response.data.results
      const newGames = data.filter(game =>
        !listGames.some(existingGame => existingGame.id === game.id)
      );
      setPage(nextPage)
      setListGames(prevGames => nextPage === 1 ? data : [...prevGames, ...data])
    } catch (error) {
      console.log(error.message)
    } finally {
      setLoadingGames(false)
    }
  }

  async function handleSearch() {
    setPage(1)
    if (!inputValue) {
      loadGames()
      return
    }
    setLoadingSearch(true)
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
    } catch (error) {
      console.log(error.message)
    }finally{
      setLoadingSearch(false)
    }
  }

  async function handleMoreGames(nextPage = 1) {
    if (listGames.length === 0) return
    try {
      setLoadinMoreGames(true)
      await loadGames(page + 1)
    } catch (error) {
      console.log(error.message)
    } finally {
      setLoadinMoreGames(false)
    }
  }

  return (
    <Container>
      {loadingGames ? (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: 50 }}>
          <Loader />
        </div>
      ) : (
        <>
          <GameInput
            placeholder="Procurando por algum jogo?"
            type="text"
            value={inputValue}
            disabled={loadingMoreGames}
            onChange={(e) => setInputValue(e.target.value)}
            $loader={loadingSearch}
            $onClickBtn={handleSearch}
          />
          <AreaList>
            {listGames.length === 0 && !loadingMoreGames && !loadingGames && (
              <h2 style={{
                display: 'flex',
                color: '#FFFFFF',
                justifyContent: 'center'
              }}>
                Não foram encontrados registros de jogos com esse nome...
              </h2>
            )}
            {listGames.map((item) => <CardGame key={item.id} data={item} />)}
          </AreaList>
          {listGames.length > 0 && !isEmpyt && (<div style={{ width: '100%', marginTop: 50, marginBottom: 50, justifyContent: 'center', display: 'flex' }}>
            <Button onClick={handleMoreGames} disabled={loadingMoreGames} style={{ width: '100%', }}>
              {loadingMoreGames ? <div style={{ width: '100%', display: 'flex', justifyContent: "center", alignItems: "center" }}><Loader /></div> : 'Buscar mais jogos'}
            </Button>
          </div>)}
        </>
      )}
    </Container>
  );
}
