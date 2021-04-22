import styled from 'styled-components';
import React, { useState, useEffect } from 'react';

import axios from 'axios';

import QBoxTop from '../qBoxTop/QBoxTop'
import Contents from '../contents/Contents'
import LangTransBox from '../langTransBox/LangTransBox'
import ReplyBox from '../replyBox/ReplyBox'
import ReplyList from '../replyList/ReplyList'
import Num3Comma from '../functions/num3comma/Num3Comma'

//jsonArr
const replyCount = (replys) => {
  return replys.length
}

// white={props.white} setWhite={props.setWhite}
function Box(props) {
  const [replyToggle, setReplyToggle] = useState(true);
  const [extraAlmoney, setExtraAlmoney] = useState(0);
  const [replys, setReplys] = useState(props.jsonArr.replys);

  const resetReplys = (seq) => {
    setReplys(replys.filter( x =>{
      return x.seq !== seq
    }));
  }

  useEffect(()=>{
    if(props.jsonArr.pageSeq===undefined){}else{
      axios.get("/rest/questions/"+props.jsonArr.pageSeq+"/almoney")
      .then((response) => response.data)
      .then( (data) => {
        setExtraAlmoney(data.ExtraAlmoney);
      })
      .catch(function (error) {
        console.log(error)
      })
    }
  }
  , []);

  return (
    <MainDiv className="Box">
        {/* atm_top_wrap */}
        <div>
          <AlmoneyDiv num={extraAlmoney}>
            <AnswerAlmoneyImg src="/pub/answer/answerList/images/answer_almoney.svg">
            </AnswerAlmoneyImg>
            <AlmoneySpan><Num3Comma num={extraAlmoney}></Num3Comma></AlmoneySpan>
          </AlmoneyDiv>
        </div>
        <QBoxTop
          clicked={props.clicked} setClicked={props.setClicked}
          white={props.white} setWhite={props.setWhite}
          head={props.jsonArr.head} seqComponent={props.jsonArr.seqComponent}
          pageSeq={props.jsonArr.pageSeq}
          setShowAlmoney={props.setShowAlmoney}
          setShowSiren={props.setShowSiren}
          setShowMessage={props.setShowMessage}
          mini={props.jsonArr.mini}
          seqId={props.jsonArr.seqId}
          USER={props.USER}
          ></QBoxTop>

        <Contents seqComponent={props.jsonArr.seqComponent}
          contents={props.jsonArr.contents}></Contents>
        <LangTransBox></LangTransBox>
        <ReplyBox
          seqComponent={props.jsonArr.seqComponent} pageSeq={props.jsonArr.pageSeq}
          replyToggle={replyToggle} setReplyToggle={setReplyToggle}
          replyCount={replyCount(replys)} good={props.jsonArr.good}
          bad={props.jsonArr.bad} ></ReplyBox>
        <ReplyList USER={props.USER} replyToggle={replyToggle}
          white={props.white} setWhite={props.setWhite}
          pageSeq={props.jsonArr.pageSeq} seqComponent={props.jsonArr.seqComponent}
          setReplys={setReplys}
          replys={replys}
          resetReplys={resetReplys}
          ></ReplyList>
        
    </MainDiv>
  );
}

const MainDiv = styled.div`
  border: 1px solid #ddd;
  padding: 15px 20px;
  transition: all 0.3s;
  margin-bottom: 5px;
  border-radius: 20px;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;

  font-size: 16px;
  font-family: "Noto Sans KR", "Noto Sans JP", "Noto Sans HK", "Noto Sans SC", "Noto Sans TC", sans-serif;
  color: #333;
  
`;
const AnswerAlmoneyImg = styled.img`
  width: 20px;
  display: inline-block;
  vertical-align: middle;
  margin-right: 5px;
  cursor: pointer;
`;
const AlmoneySpan = styled.span`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  color: #ff255f;
  font-size: 12px;
  font-weight: bold;
  vertical-align: middle;
  cursor: pointer;
  font-family: "Noto Sans KR", "Noto Sans JP", "Noto Sans HK", "Noto Sans SC", "Noto Sans TC", sans-serif;
`;
const AlmoneyDiv = styled.div`
  display: ${ props => props.num === 0 ? "none" : "inline-block"};
  cursor: pointer;
  position: relative;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
`;

export default Box;
