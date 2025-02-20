import { AreaName, Container, ContentInfo, GameScore, InfoContainer, Logo, NameBtn, Plataform } from "./styles";
import { FaStar } from "react-icons/fa6";
import { FaComputer, FaPlaystation, FaXbox } from "react-icons/fa6";
import { BsNintendoSwitch } from "react-icons/bs";
import { FaRegQuestionCircle } from "react-icons/fa";

export default function CardGame({ data }) {

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
                <Logo
                    src={data?.short_screenshots[0]?.image}
                />
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
                    <NameBtn to={`/detail/${data?.id}/${data?.name}`}>
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