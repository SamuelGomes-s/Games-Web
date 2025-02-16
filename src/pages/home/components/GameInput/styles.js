import styled from 'styled-components';

const ContentInput = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Input = styled.input`
    background-color: #1F2430;
    color: #FFFF;
    width: 100%;
    height: 45px;
    border-radius: 8px;
    border: 0;
    padding: 0 2%;
    &::placeholder{
        color: #FFFFFF;
    }
`;

const SearchButton = styled.button`
    width:50px;
    margin-left: 10px;
    height: 45px;
    color:#FF455F;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: 1px solid #FF455F;
    border-radius: 8px;
    transition: all ease-in-out 0.5s;
    &:hover{
        border: 1px solid #64748B;
        color: #64748B;
    }
    &:active{
        transform: scale(1.05);
        color: #fff;
    }
`;

export {
    Input,
    ContentInput,
    SearchButton
};
