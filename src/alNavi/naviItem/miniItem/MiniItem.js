import styled from 'styled-components';


const MiniItemLi = styled.li`
    height: 41px;
    line-height: 41px;
    font-size: 15px;
    font-weight: 500;
    position: relative;
    transition: all 0.3s;
`;
const MiniItemA = styled.a`
    height: 42px;
    padding-left: 60px;
    font-size: 14px;
    color: #444;
    border: 0;
    background: #efefef;
    transition: all 0.3s;
    display: block;
    position: relative;
    text-decoration: none;
`;

function NaviItem(props) {
    return (
        <MiniItemLi>
            <MiniItemA href={props.href}>{props.val}</MiniItemA>
        </MiniItemLi>
    );
  }
  
  export default NaviItem;
