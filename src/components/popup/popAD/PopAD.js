import styled from 'styled-components';

import React, { useEffect } from 'react';
import {useTranslation} from 'react-i18next';

function PopAD(props) {
    useEffect(()=>{
        if(props.clicked === true){
            props.setInfoAD({show:false, adUrl: props.infoAD.adUrl, adFile: ""});
        }
      }
    , [props.clicked]);
    const {t} = useTranslation();
    
    return (
        <PopDiv show={props.infoAD.show}>
            <PopDivImg src={"http://www.altong.com/UploadFile/AD/"+props.infoAD.adFile}></PopDivImg>
            <PopDivP show={ "" !== props.infoAD.adUrl }>
                <PopDivPA target="_blank" href={props.infoAD.adUrl} onClick={(e) => {
                    e.stopPropagation();
                }}>
                    <PopDivPASapn>{t('AD_More')}</PopDivPASapn>
                </PopDivPA>
            </PopDivP>
        </PopDiv>
      );
  }

const PopDiv = styled.div`
    z-index: ${props => props.show ? "999":"-1"};
    width: 85%;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: ${(props) => props.show?"1":"0"};
    transition:all 0.5s;
`;
const PopDivImg = styled.img`
    display: block;
    text-align: center;
    width: 100%;
    max-width: 505px;
    margin: auto;
`;
const PopDivP = styled.p`
    opacity: ${(props) => props.show?"1":"0"};
    overflow: hidden;
    padding: 0 10px;
    margin: 10px 0 20px;
    word-break: break-all;
    font-size: 15px;
    cursor: pointer !important;
    transition:all 0.5s;
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
