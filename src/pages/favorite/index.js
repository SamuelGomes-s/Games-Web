import { useEffect, useState } from "react";
import Container from "../../components/Container";
import { ButtonStyled, Card, Content, LinkStyled } from "./styles";
import { rawgApi, tokenRawg } from "../../services/apis/RAWG";
import { FaRegTrashCan } from "react-icons/fa6";
import { toast } from "react-toastify";

export default function Favorite() {
  const [games, setGames] = useState([])

  useEffect(() => {
    loadLocal()
  }, [])

  async function loadLocal() {
    const storedIds = JSON.parse(localStorage.getItem('@game_id')) || []
    if (storedIds.length > 0) {
      try {
        const gamesData = await Promise.all(
          storedIds.map(async (id) => {
            const response = await rawgApi.get(`/games/${id}`, {
              params: { key: tokenRawg },
            });
            return response.data
          })
        )
        setGames(gamesData)
      } catch (error) {
        console.log("Erro ao carregar jogos favoritos:", error.message)
      }
    }
  }

  function handleDelete(id) {
    const updatedGames = games.filter(game => id !== game.id)
    const updatedIds = updatedGames.map((game) => game.id);
    localStorage.setItem('@game_id', JSON.stringify(updatedIds))
    if (updatedGames.length === 0) {
      localStorage.removeItem("@game_id");
    }
    setGames(updatedGames)
    toast.success('Jogo excluido dos favoritos.')
  }

  return (
    <Container>
      <Content>
        {games.length === 0 ? (<h3 style={{ color: '#FFFFFF' }}>Não possuem jogos salvos</h3>) : (<h1 style={{ color: '#FFFFFF', marginBottom: 25 }}>Lista de favoritos</h1>)}
        {games.map((game) => (
          <Card key={game?.id}>
            <LinkStyled to={`/detail/${game?.id}`}>
              {game.name}
            </LinkStyled>
            <ButtonStyled onClick={() => handleDelete(game?.id)}>
              <FaRegTrashCan size={30} />
            </ButtonStyled>
          </Card>
        ))}
      </Content>
    </Container>
  );
}