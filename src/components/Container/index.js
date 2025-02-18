import styled from "styled-components"

export default function Container({ children }) {
    return (
        <Content>
            {children}
        </Content>
    )
}

const Content = styled.div`
    width: 80%;
    position: relative;
    z-index: 999;
    margin: 0 auto;
    margin-top: 15px;
    padding-bottom: 300px;
`;