import styled from 'styled-components';

const Content = styled.div`
    background-color:#1F2430;
    margin-top: 2.0em;
    border-radius: 8px;
    padding: 1.5em;
`;

const Name = styled.h1`
    font-size: 30px;
    color: #FFFF;
    display: flex;
    gap: 3%;
    @media screen and (max-width:700px ){
        padding-bottom: 20px;
    }
`;

const AreaName = styled.div`
    margin-top: 2.5em;
    display: flex;
    gap: 3%;
    @media screen and (max-width:700px ){
        flex-direction: column;
    }
`;

const DescriptionArea = styled.div`
    margin: 1.5em 0;
`;

const Description = styled.p`
    color: #FFFFFF;
`;

const InfoArea = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const InfoContent = styled.div`
    gap: 25px;
    display: flex;
    align-items: center;
    @media screen and (max-width:700px ){
        flex-direction: column;
        align-items: start
    }
`;

const Text = styled.h2`
    font-size: 18px;
    padding: 10px 0; 
    color: #FFFFFF;
    display: flex;
    gap: 5px;
    align-items: center;
`;

const Image = styled.img`
    width: 100%;
    max-width: 800px;
    height: auto;
    max-height: 800px;
    object-fit: cover;
    display: block;
    margin: 0 auto;
`;

const PlatformContent = styled.div`
    display: flex;
    color: #FFFFFF;
    align-items: center;
    gap: 10px;
`;

//  color="#FFBB00"

export {
    Content,
    Name,
    DescriptionArea,
    Description,
    InfoArea,
    InfoContent,
    Text,
    AreaName,
    Image,
    PlatformContent
};
