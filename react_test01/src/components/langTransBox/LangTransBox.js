import React, { useState } from 'react';
import styled from 'styled-components';

const MainDiv = styled.div`
  margin-bottom: 10px;
  position: relative;
  display:flex;
  align-items:center;
`;

const OriginDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
border: 2px solid ${props=>props.check === '' ? '#f30': '#999'};
color: ${props=>props.check === '' ? '#f30': '#999'};
width: 50px;
height: 50px;
font-weight: 500;
cursor: pointer;
border-radius: 50%;
font-size: 1rem;
position:relative;

@media (max-width:480px) {
  width:40px;
  height:40px;
  border: 1px solid #f30;
  font-size: 0.8125rem;
}
`;

const Line = styled.div`
  width:2px;
  height:25px;
  border-radius:2px;
  background-color:#999;
  margin:0 12px;

  @media (max-width:480px) {
    width:1px;
    height:20px;
    margin:0 6px;
  }
`;

const LangAIDiv = styled.div`
  display: flex;
  justify-content : center;
  align-items: center;
  width:50px;
  height: 50px;
  border-radius: 50%;
  color: ${props=> props.check === 'check' ? '#f30': '#999'};
  font-size: 1rem;
  font-weight:500;
  border: 2px solid ${props=> props.check === 'check' ? '#f30': '#999'};
  cursor:pointer;

  @media (max-width:480px) {
    width:40px;
    height:40px;
    border:1px solid #999;
    font-size:0.8125rem;
  }
`;


function LangTransBox(props) {


    return (
      <MainDiv className="LangTransBox">
        <OriginDiv check={props.check} onClick={()=>{props.setCheck('')}}>원문</OriginDiv>
        <Line></Line>
        <LangAIDiv check={props.check} onClick={()=>{props.setCheck('check')}}>AI</LangAIDiv>
      </MainDiv>
    );
  }
  
  export default LangTransBox;
  