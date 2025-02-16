import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    width: 80%;
    position: relative;
    margin: 0 auto;
    z-index: 999;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    gap: 5%;
    border-radius: 15px;
    background-color: #64748B;

    @media screen and (max-width: 750px) {
        gap: 2%;
    }

    @media screen and (max-width: 500px) {
        height: auto;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); 
        padding: 15px;
        gap: 10px;
    }

`;

const LinkStyled = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: #1F2430;
    transition: all 0.5s;
    &:hover{
        color: #FFFFFF;
        text-decoration: underline;
    }
    @media screen and (max-width: 750px){
        background-color: #e7e7e7;
        border-radius: 8px;
        padding: 5px;
        & > svg{
            display: none;
        }
        &:hover{
        color: #050B18;
        text-decoration: underline;
    }
    }
`;

export {
    Container,
    LinkStyled
}