import { Container, LinkStyled } from "./styles";
import { MdGames, MdHome } from "react-icons/md";
import { IoMdHeart } from "react-icons/io";
import { TbCategoryFilled } from "react-icons/tb";

export default function Menu() {

    return (
        <Container>
            <button onClick={() => window.location.href = '/'}>
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
                    Games<MdGames size={35} color="#FF758C" />Web
                </span>
            </button>
            <LinkStyled onClick={() => window.location.href = '/'}>
                <MdHome size={35} />
                Home
            </LinkStyled>
            <LinkStyled onClick={() => window.location.href = '/favorites'}  >
                <IoMdHeart size={35} />
                Favoritos
            </LinkStyled>
            <LinkStyled onClick={() => window.location.href = '/category'} >
                <TbCategoryFilled size={35} />
                Categorias
            </LinkStyled>
        </Container >
    )
}