import styled from 'styled-components';
import React, { useState } from 'react';

import TopNavi from './../topNavi/TopNavi'

import BoxController from '../boxContainer/BoxContainer'

const MainDiv = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  padding-top: 60px;
  flex: 1;
  margin-bottom: 20px;
  padding: 0 5px;
  width: 800px;
  margin: 0 auto;
  
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const SiteDiv = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;

  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;

  width: 100%;
  font-size: 16px;
  font-family: "Noto Sans KR", "Noto Sans JP", "Noto Sans HK", "Noto Sans SC", "Noto Sans TC", sans-serif;
  color: #333;
  position: relative;
`;

const WrapperDiv = styled.div`
  padding-top: 60px;
  flex: 1;
  margin-bottom: 20px;
`;
const BlackDiv = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
  background: rgba(0, 0, 0, 0.3);
`;

function ShowBlackDiv(props){
  if(props.clicked===false){
    return <BlackDiv></BlackDiv>
  }
  return  <></>;
}

// 로그인 유저에 대한 정보를 보낼지 말지 정함.
function WhatU(props){
  const findhead = props.find((j) => (j.seqComponent === "U") );
  
  return findhead;
};

function QuestionBox(props) {
  const [bodyClicked, setBodyClicked] = useState(true);

  return (
    <SiteDiv onClick={() => setBodyClicked(true)}>
      <MainDiv>
        <TopNavi></TopNavi>
        <WrapperDiv>
          <BoxController clicked={bodyClicked} setClicked={setBodyClicked} SSRJSON={props.SSRJSON} USER={WhatU(props.SSRJSON)}></BoxController>
        </WrapperDiv>
      </MainDiv>
      <ShowBlackDiv clicked={bodyClicked}></ShowBlackDiv>
    </SiteDiv>
  );
}

export default QuestionBox;
