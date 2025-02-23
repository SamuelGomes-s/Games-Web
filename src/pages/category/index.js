import { useEffect, useState } from "react";
import Container from "../../components/Container";
import { rawgApi, tokenRawg } from "../../services/apis/RAWG";
import { AreaButton, AreaList, Button } from "./styles";
import CardGame from "../../components/CardGame";
import Loader from "../../components/Loader";

export default function Category() {
  const [genres, setGenres] = useState(null)
  const [genreSelected, setGenreSelected] = useState(null)
  const [listGames, setListGames] = useState([])
  const [loadingGenres, setLoadingGenres] = useState(true)
  const [loadingGames, setLoadingGames] = useState(false)
  const [page, setPage] = useState(1)

  useEffect(() => {
    loadGenres()
  }, [])

  async function handleSearchCategory(id) {
    try {
      setListGames([])
      setGenreSelected(id)
      setPage(1)
      loadGames(id)
    } catch (error) {
      console.log(error.message)
    }
  }

  async function loadGenres() {
    try {
      const response = await rawgApi.get('/genres', {
        params: {
          key: tokenRawg,
          page: 1,
          page_size: 50,
          ordering: "name",
        }
      })
      const firstGenre = response.data.results[0]?.id
      if (firstGenre) {
        setGenres(response.data.results)
        setGenreSelected(firstGenre)
        loadGames(firstGenre)
      }
    } catch (error) {
      console.log(error.message)
    } finally {
      setLoadingGenres(false)
    }
  }

  async function loadGames(genre, nextPage = 1) {
    try {
      if (loadingGames) return
      setLoadingGames(true)
      const response = await rawgApi.get('/games', {
        params: {
          genres: genre,
          page: nextPage,
          page_size: 15,
          ordering: "rating_top",
          key: tokenRawg
        }
      })
      setPage(nextPage)
      const data = response.data.results
      setListGames(prevGames => nextPage === 1 ? data : [...prevGames, ...data])
    } catch (error) {
      console.log(error.message)
    } finally {
      setLoadingGames(false)
    }
  }
  async function handleMoreGames() {
    try {
      await loadGames(genreSelected, page + 1)
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <Container>
      <AreaButton>
        {loadingGenres ? (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Loader />
          </div>
        ) : (
          genres?.map((item) =>
            <Button
              key={item?.id}
              disabled={genreSelected === item?.id}
              onClick={() => handleSearchCategory(item?.id)}>
              {item?.name}
            </Button>)
        )}
      </AreaButton>
      <AreaList>
        {(listGames?.map((item) => <CardGame key={item.id} data={item} />))}
      </AreaList>
      <div style={{ width: '100%', marginTop: 50, marginBottom: 50, justifyContent: 'center', display: 'flex' }}>
        <Button onClick={handleMoreGames} disabled={loadingGames} style={{ width: '100%', }}>
          {loadingGames ? <div style={{ width: '100%', display: 'flex', justifyContent: "center", alignItems: "center" }}><Loader /></div> : 'Buscar mais jogos'}
        </Button>
      </div>
    </Container>
  )
}
