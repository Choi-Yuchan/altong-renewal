import styled from 'styled-components';
import React, { useState } from 'react';

const MainAhref = styled.a`
    text-decoration: none;
    color: #333;
`;
const MainSpan = styled.span`
    background-image: url(${ props => props.imgurl});

    display: inline-block;
    width: 20px;
    height: 20px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    margin-right: 8px;
    margin-bottom: -4px;
    color: #fd0031;
    border-radius: 0;
    text-align: center;
    font-size: 10px;
    position: relative;
    top: -1px;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    
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
  