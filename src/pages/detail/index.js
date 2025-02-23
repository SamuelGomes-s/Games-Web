import { useEffect, useState } from "react"
import Container from "../../components/Container"
import { useNavigate, useParams } from "react-router-dom"
import { rawgApi, tokenRawg } from "../../services/apis/RAWG"
import {
  DescriptionArea,
  Content,
  Description,
  Name,
  InfoArea,
  InfoContent,
  Text,
  AreaName,
  Image,
  PlatformContent
} from "./styles"
import { FaComputer, FaPlaystation, FaStar, FaXbox } from "react-icons/fa6"
import { BsNintendoSwitch } from "react-icons/bs"
import { FaRegQuestionCircle } from "react-icons/fa"
import { Swiper, SwiperSlide } from "swiper/react"
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules"
import Loader from "../../components/Loader"

export default function Detail() {

  const { id } = useParams()
  const [game, setGame] = useState(null)
  const navigation = useNavigate()
  const [listImages, setListImages] = useState([])
  const [loading, setLoading] = useState(true)
  const [imagesLoaded, setImagesLoaded] = useState(false);

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
    const controller = new AbortController()
    loadGame(controller.signal)
    return () => controller.abort()
  }, [id])

  async function loadGame(signal) {
    try {
      const response = await rawgApi.get(`/games/${id}`, {
        params: {
          key: tokenRawg
        },
        signal
      })
      try {
        const screenshots = await rawgApi.get(`/games/${id}/screenshots`, {
          params: {
            key: tokenRawg
          },
          signal
        })
        setListImages(screenshots?.data?.results || [])
        console.log(screenshots?.data?.results)
      } catch (error) {
        console.log(error.message)
      }
      console.log(response?.data)
      setGame(response?.data || null)
    } catch (error) {
      if (error.name !== "AbortError") {
        console.log(error.message);
      }
      console.log(error.message)
      if (error.message === 'Request failed with status code 404') {
        return navigation('/')
      }
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <Container>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 50
          }}>
          <Loader />
        </div>
      </Container>
    )
  }

  if (!loading && !game) {
    return <Text> Não foi encontrado algum jogo com o id {id}.</Text>
  }

  return (
    <Container>
      {!loading && game !== null && (<>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          pagination={{ clickable: true }}
          slidesPerView={1}
          navigation
        >
          {!imagesLoaded && listImages.length > 0 && (
            <SwiperSlide>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 500, }}>
                <Loader />
              </div>
            </SwiperSlide>
          )}
          {listImages.length === 0 ? (
            <SwiperSlide>
              <Text> Sem imagens disponiveis</Text>
            </SwiperSlide>) : (
            listImages?.map((item, index) => (
              <SwiperSlide key={item?.id}>
                <Image
                  src={item?.image}
                  alt={`Imagem do jogo ${game?.name}`}
                  onLoad={() => {
                    if (index === listImages.length - 1) {
                      setImagesLoaded(true)
                    }
                  }}
                  style={{ display: imagesLoaded ? 'block' : 'none' }}
                />
              </SwiperSlide>
            )))}
        </Swiper>
        <Content>
          <AreaName>
            <Name>
              {game?.name}
            </Name>
            {game?.metacritic !== null && (<Text
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
            </Text>)}
          </AreaName>
          <DescriptionArea>
            <Description>
              {game?.description_raw ? game?.description_raw : `Esse jogo não possui descrição. This game has no description.`}
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
              <Text>Data de lançamento: {game?.released ? game?.released : 'Data de lançamento desconhecida.'}</Text>
              <Text>Avaliação: </Text>
              <Text> {game?.rating} <FaStar color="#FFBB00" /></Text>
            </InfoContent>
            {game?.website && (
              <InfoContent>
                <Text>Site:</Text>
                <a href={game?.website} target="_blank" style={{ textDecoration: 'none', color: '#F7F' }}>{game?.website}</a>
              </InfoContent>
            )}
          </InfoArea>
        </Content>
      </>)}
    </Container>
  )

}
