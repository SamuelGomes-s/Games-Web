import styled from 'styled-components';

const Button = styled.button`
    background-color: #0E5C88;
    color: #FFFFFF;
    margin:  5px 5px;
    cursor: pointer;
    padding: 0.5em;
    border-radius: 8px;
    transition: all 0.5s;
    font-weight: bold;
    &:hover{
        color:rgb(0, 0, 0);
        text-decoration: underline;
        text-decoration-color: #FFFFFF;
        text-underline-offset: 5px;
        transform: scale(1.05)
    }
    &:disabled{
        background-color:rgba(255, 255, 255, 0.81);
        color: #000;
        cursor: not-allowed;
        &:hover{
            text-decoration: none;
        }
    }
`;

const AreaButton = styled.div`
`;

const AreaList = styled.div`
    margin-top: 50px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 15px;
`;

export {
    Button,
    AreaButton,
    AreaList
};
