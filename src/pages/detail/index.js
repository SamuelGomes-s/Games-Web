import { useEffect, useState } from "react"
import Container from "../../components/Container"
import { useParams } from "react-router-dom"
import { rawgApi, tokenRawg } from "../../services/apis/RAWG"
import { DescriptionArea, Content, Description, Name, InfoArea, InfoContent, Text, AreaName, Image, PlatformContent } from "./styles"
import { FaComputer, FaPlaystation, FaStar, FaXbox } from "react-icons/fa6"
import { BsNintendoSwitch } from "react-icons/bs"
import { FaRegQuestionCircle } from "react-icons/fa"
import { Swiper, SwiperSlide } from "swiper/react"
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules"

export default function Detail() {

  const { id } = useParams()
  const [game, setGame] = useState([])
  const [listImages, setListImages] = useState([])

  function handlePlataformIcon(slug) {
    if (slug === 'pc') {
      return (
        <FaComputer key={slug} />
      );
    } else if (slug === 'xbox') {
      return (
        <FaXbox key={slug} />
      );
    } else if (slug === 'playstation') {
      return (
        <FaPlaystation key={slug} />
      );
    } else if (slug === 'nintendo') {
      return (
        <BsNintendoSwitch key={slug} />
      );
    } else {
      return (
        <FaRegQuestionCircle key={slug} />
      );
    };
  };

  useEffect(() => {
    loadGame()
  }, [id])

  async function loadGame() {
    try {
      const response = await rawgApi.get(`/games/${id}`, {
        params: {
          key: tokenRawg
        }
      })
      const screenshots = await rawgApi.get(`/games/${id}/screenshots`, {
        params: {
          key: tokenRawg
        }
      })
      setListImages(screenshots?.data?.results)
      console.log(screenshots?.data?.results)
      console.log(response?.data)
      setGame(response?.data)
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <Container>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        pagination={{ clickable: true }}
        slidesPerView={1}
        navigation
      >
        {listImages?.map((item) => (
          <SwiperSlide key={item?.id}>
            <Image
              src={item?.image}
              alt={`Imagem do jogo ${game?.name}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Content>
        <AreaName>
          <Name>
            {game?.name}
          </Name>
          <Text
            style={{
              border: '1px solid #FFBB00',
              borderRadius: '50%',
              width: '2em',
              justifyContent: 'center',
              alignItems: 'center',
              display: 'flex',
              color: '#FFBB00'
            }}
          >
            {game?.metacritic}
          </Text>
        </AreaName>
        <DescriptionArea>
          <Description>
            {game?.description_raw}
          </Description>
        </DescriptionArea>
        <InfoArea>
          <InfoContent>
            <Text>Plataformas disponiveis:</Text>
            <PlatformContent>
              {game?.parent_platforms?.map((item) => handlePlataformIcon(item?.platform?.slug))}
            </PlatformContent>
            <Text>Genero:  Gênero: {game?.genres?.map((item) => item.name).join(", ")}</Text>
          </InfoContent>
          <InfoContent style={{ gap: 10 }} >
            <Text>Data de lançamento: {game?.released}</Text>
            <Text>Avaliação: </Text>
            <Text> {game?.rating} <FaStar color="#FFBB00" /></Text>
          </InfoContent>
          <InfoContent>
            <Text>Site:</Text>
            <a href={game?.website} target="_blank" style={{ textDecoration: 'none', color: '#F7F' }}>{game?.website}</a>
          </InfoContent>
        </InfoArea>
      </Content>
    </Container>
  )

}
