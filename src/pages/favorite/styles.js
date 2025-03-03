import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 50px;
    flex-direction: column;
`;

const Card = styled.div`
    background-color:#0E5C88;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #FF455F;
    padding: 1.5em;
    width: 100%;
    margin-bottom: 15px;
    border-radius: 8px;
    box-shadow: 4px 4px 10px 4px rgba(0, 0, 0, 0.57);
`;

const LinkStyled = styled(Link)`
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

const ButtonStyled = styled.button`
    cursor: pointer;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    color: #FF455F;
    transition: ease-in-out 0.6s;
    &:hover{
        box-shadow: 4px 4px 10px 4px rgba(0, 0, 0, 0.57);
        color:rgb(255, 255, 255);
    }
    &:active{
        transform: scale(1.1)
    }
`;

export {
    Content,
    Card,
    LinkStyled,
    ButtonStyled
};
