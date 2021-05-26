import React from 'react';
import styled from 'styled-components';


function LangTransCount() {
    return (
      <TransCountDiv>
        <TransCountP>이 번역에 대한 당신의 평가는?</TransCountP>
        <TransCountIconBox>
          <TransCountIcon src="/Common/images/smile.svg"></TransCountIcon>
          <TransCountNumber>0</TransCountNumber>
        </TransCountIconBox>
        <TransCountIconBox>
          <TransCountIcon src="/Common/images/sad.svg"></TransCountIcon>
          <TransCountNumber>0</TransCountNumber>
        </TransCountIconBox>
      </TransCountDiv>
    );
  }
  
  const TransCountDiv = styled.div`
    display:flex;
    align-items:center;
    margin-bottom:10px;
  `;
  const TransCountP = styled.em`
    color:#f30;
    margin-right:15px;
  `;
  const TransCountIconBox = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin-right:5px;
    cursor:pointer;
  `;
  const TransCountIcon = styled.img`
    width:20px;
  `;
  const TransCountNumber = styled.span`
    font-size:10px;
    color:#999;
  `;

  export default LangTransCount;
  