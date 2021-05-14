import styled from 'styled-components';

const MainAhref = styled.a`
    text-decoration: none;
    color: #333;
    display:flex;
    align-items:center;
`;
const MainSpan = styled.span`
    background-image: url(${ props => props.imgurl});
    width: 20px;
    height: 20px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    margin-right: 8px;
`;



// atm_top_wrap
function Popup(props) {
    return (
        <MainAhref >
            <MainSpan imgurl={props.imgurl}></MainSpan>
            {props.text}
        </MainAhref>
    );
}
  
  export default Popup;
  