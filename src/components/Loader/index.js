import styled from "styled-components";


export default function Loader() {
    return (
        <Spinner />
    )
}

const Spinner = styled.div`
    width: 50px;
    height: 50px;
    border: 5px solid rgba(0, 0, 0, 0.1);
    border-left-color: #FF455F;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;
