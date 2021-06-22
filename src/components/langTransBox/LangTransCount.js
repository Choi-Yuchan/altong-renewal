import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {useTranslation} from 'react-i18next';

function LangTransCount({seqComponent, pageSeq}) {
  const [goodCount, setGoodCount] = useState(0);
  const [badCount, setBadCount] = useState(0);

  // URL-list : RESTful API 수정 필요함 - 현재 해당 url에 data가 없음. 
  const URL_QUE_GOOD = `api/questions/${pageSeq}/vote/G`
  const URL_ANS_GOOD = `api/answers/${pageSeq}/vote/G`
  const URL_QUE_BAD = `api/questions/${pageSeq}/vote/B`
  const URL_ANS_BAD = `api/answers/${pageSeq}/vote/B`
  
  // const URL_QUE_EVA = `api/questions/${pageSeq}/transfer/vote`
  // const URL_ANS_EVA = `api/answers/${pageSeq}/transfer/vote`
  
  const SendGood = async (seqComponent, goodCount) => {
    setGoodCount(state => state + 1)
    try{
        const response = await axios.patch(seqComponent ==='Q' ? URL_QUE_GOOD : URL_ANS_GOOD, { 
          qtGood : goodCount 
        })
        if(response.data.code === "success"){
          setGoodCount(response.data.qtGood);
        }
    } catch (e) {
        console.log(e)
    }
}

const SendBad = async (seqComponent, badCount) => {
    setBadCount(state => state + 1)
    try{
        const response = await axios.patch(seqComponent==='Q' ? URL_QUE_BAD : URL_ANS_BAD,{
          qtBad : badCount
        })
        if(response.data.code === "success"){
          setBadCount(response.data.qtBad);
        }
    } catch (e) {
        console.log(e)
    }
}
// RESTful API 수정 필요함 - 현재 해당 url에 data가 없음. 투표한 평가 수 받아오는 함수.
// useEffect(()=>{
//   const getVoteData = async () => {
//       try{
//           const voteUrl = seqComponent === "Q" ? URL_QUE_EVA:URL_ANS_EVA;
//           const response = await axios.get(voteUrl);
//           console.log(response.data);
//           setGoodCount(response.data.qtGood);
//           setBadCount(response.data.qtBad);
//       } catch (e) {
//           console.log(e);
//       }
//   }
//   getVoteData();
// }
// , []);

  const {t} = useTranslation();

    return (
      <TransCountDiv>
        <TransCountP>{t('LangTrans_evaluation')}</TransCountP>
        <TransCountIconBox onClick={() => { SendGood(seqComponent, goodCount)}}>
          <TransCountIcon src="/Common/images/smile.svg"/>
          <TransCountNumber>{goodCount}</TransCountNumber>
        </TransCountIconBox>
        <TransCountIconBox onClick={() => { SendBad(seqComponent, badCount)}}>
          <TransCountIcon src="/Common/images/sad.svg"/>
          <TransCountNumber>{badCount}</TransCountNumber>
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
  