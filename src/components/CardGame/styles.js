import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`  
    background-color: #64748B;
    max-width: 300px;
    border-radius: 8px;
    box-shadow: 4px 4px 10px 4px rgba(0, 0, 0, 0.57);
`;

const Logo = styled.img`
    width: 100%;
    height: 200px;
    border-radius: 8px 8px 0 0 ;
`;

const NameBtn = styled(Link)`
    text-decoration: none;
    cursor: pointer;
    font-size: 22px;
    color: #FFFFFF;
    transition: all  1s;
    &:hover{
        color:rgb(0, 0, 0);
        text-decoration: underline;
        text-decoration-color: #FFFFFF;
        text-underline-offset: 5px;
    }   
`;

const ContentInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5em 0;
`;

const Plataform = styled.div`
    color: #FFF;
    width: 100%;
    display: flex;
    gap: 10px;
`;

const GameScore = styled.span`
    color:#ffbb00;
    font-weight: bold;
    display: flex;
    align-items: center;
    gap: 10px;
`;

const InfoContainer = styled.div`
    padding: 0.5em;
    height: 175px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-bottom-left-radius:8px;
    border-bottom-right-radius:8px;
`;

const AreaName = styled.div`
`;

export {
    Container,
    Logo,
    NameBtn,
    ContentInfo,
    Plataform,
    GameScore,
    InfoContainer,
    AreaName
}