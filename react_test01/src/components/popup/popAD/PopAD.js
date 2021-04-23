import styled from 'styled-components';

import React, { useState, useEffect } from 'react';

function PopAD(props) {
    useEffect(()=>{
        if(props.clicked === true){
            props.setInfoAD({show:false, adUrl: props.infoAD.adUrl, adFile: ""});
        }
      }
    , [props.clicked]);
    
    return (
        <PopDiv show={props.infoAD.show}>
            <PopDivImg src={"http://www.altong.com/UploadFile/AD/"+props.infoAD.adFile}></PopDivImg>
            <PopDivP show={ "" !== props.infoAD.adUrl }>
                <PopDivPA target="_blank" href={props.infoAD.adUrl} onClick={(e) => {
                    e.stopPropagation();
                }}>
                    <PopDivPASapn>더 자세히 볼래요</PopDivPASapn>
                </PopDivPA>
            </PopDivP>
        </PopDiv>
      );
  }

const PopDiv = styled.div`
    z-index: 999;
    width: 85%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: ${(props) => props.show?"display":"none"};
`;
const PopDivImg = styled.img`
    display: block;
    text-align: center;
    width: 100%;
    max-width: 505px;
    margin: auto;
`;
const PopDivP = styled.p`
    display: ${(props) => props.show?"display":"none"};
    overflow: hidden;
    padding: 0 10px;
    margin: 10px 0 20px;
    word-break: break-all;
    font-size: 15px;
    cursor: pointer !important;
`;
const PopDivPA = styled.a`
    display: block;
    color: #fff;
    text-align: center;
    margin-top: 10px;
    text-decoration: none;
`;
const PopDivPASapn = styled.span`
    display: inline-block;
    padding: 4px 20px;
    background: #000;
    border-radius: 20px;
`;
export default PopAD;
