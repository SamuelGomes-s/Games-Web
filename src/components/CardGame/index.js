import {
    AreaName,
    Container,
    ContentInfo,
    GameScore,
    InfoContainer,
    Logo,
    NameBtn,
    Plataform
} from "./styles";
import { FaStar } from "react-icons/fa6";
import { FaComputer, FaPlaystation, FaXbox } from "react-icons/fa6";
import { BsNintendoSwitch } from "react-icons/bs";
import { FaRegQuestionCircle } from "react-icons/fa";
import { useState } from "react";
import Loader from "../Loader";

export default function CardGame({ data }) {

    const [imageLoaded, setImageLoaded] = useState(false)

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

    return (
        <Container>
            <div>
                {!imageLoaded && (
                    <div style={{ display: 'flex', justifyContent: 'center', padding: '25px 0' }}>
                        <Loader />
                    </div>
                )}
                {<Logo
                    src={data?.short_screenshots.length === 0  ? require('../../assets/image-not-found-icon.png') : data?.short_screenshots[0]?.image }
                    onLoad={() => {
                        setImageLoaded(true)
                    }}
                    style={{ display: imageLoaded ? 'block' : 'none' }}
                />}
            </div>
            <InfoContainer>
                <ContentInfo>
                    <Plataform>
                        {data?.parent_platforms?.map((item) => handlePlataformIcon(item.platform.slug)) || []}
                    </Plataform>
                    <GameScore>
                        {data?.metacritic}
                    </GameScore>
                </ContentInfo>
                <AreaName>
                    <NameBtn to={`/detail/${data?.id}`}>
                        {data?.name}
                    </NameBtn>
                </AreaName>
                <ContentInfo>
                    <GameScore >
                        <FaStar />
                        {data?.rating}
                    </GameScore>
                </ContentInfo>
            </InfoContainer>
        </Container>
    )
}