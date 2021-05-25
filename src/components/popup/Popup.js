import styled from 'styled-components';

const MainAhref = styled.a`
    text-decoration: none;
    color: #333;
    display:flex;
    align-items:center;
`;
const IconImg = styled.img`
    width: 20px;
    height: 20px;
    margin-right: 8px;
`;


function Popup({text, imgurl}) {
    return (
        <MainAhref >
            <IconImg src={imgurl} alt={text}></IconImg>
            {text}
        </MainAhref>
    );
}
  
  export default Popup;
  