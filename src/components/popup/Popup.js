import styled from 'styled-components';

const MainAhref = styled.a`
    text-decoration: none;
    color: #333;
    display:flex;
    align-items:center;
    white-space: nowrap;
`;
const IconImg = styled.span`
    background-image: url(${props=>props.imgurl});
    background-size:contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 20px;
    height: 20px;
    margin-right: 8px;
`;


function Popup({text, imgurl}) {
    return (
        <MainAhref >
            <IconImg imgurl={imgurl} alt={text}></IconImg>
            {text}
        </MainAhref>
    );
}
  
  export default Popup;
  