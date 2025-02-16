import { Container, LinkStyled } from "./styles";
import { MdGames, MdHome } from "react-icons/md";
import { IoMdHeart } from "react-icons/io";
import { TbCategoryFilled } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

export default function Menu() {

    const navigation = useNavigate();

    return (
        <Container>
            <button onClick={() => navigation('/')}>
                <span
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        display: 'flex',
                        fontSize: 22,
                        fontStyle: 'italic',
                        fontWeight: "bold",
                        background: "linear-gradient(to right, #F00, #FF758C, #F00)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent"
                    }}>
                    Games<MdGames size={35} color="#FF758C"/>Web
                </span>
            </button>
            <LinkStyled to={'/'}>
                <MdHome size={35} />
                Home
            </LinkStyled>
            <LinkStyled to={'/favorites'}>
                <IoMdHeart size={35} />
                Favoritos
            </LinkStyled>
            <LinkStyled to={'/category'}>
                <TbCategoryFilled size={35} />
                Categorias
            </LinkStyled>
        </Container >
    )
}