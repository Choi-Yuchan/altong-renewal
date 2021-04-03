import styled from 'styled-components';
import React, { useState } from 'react';

import QBoxTop from '../qBoxTop/QBoxTop'
import Contents from '../contents/Contents'
import LangTransBox from '../langTransBox/LangTransBox'
import ReplyBox from '../replyBox/ReplyBox'
import ReplyList from '../replyList/test'
import Num3Comma from '../functions/num3comma/Num3Comma'
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
  display: inline-block;
  cursor: pointer;
  position: relative;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
`;

//jsonArr
const replyCount = (replys) => {
  return replys.length
}

// white={props.white} setWhite={props.setWhite}

function Box(props) {
  const [replyToggle, setReplyToggle] = useState(true);

  return (
    <MainDiv className="Box">
        {/* atm_top_wrap */}
        <div>
          <AlmoneyDiv>
            <AnswerAlmoneyImg src="/pub/answer/answerList/images/answer_almoney.svg">
            </AnswerAlmoneyImg>
            <AlmoneySpan><Num3Comma num={props.jsonArr.almoney}></Num3Comma></AlmoneySpan>
          </AlmoneyDiv>
        </div>
        <QBoxTop clicked={props.clicked} setClicked={props.setClicked}
          white={props.white} setWhite={props.setWhite}
          head={props.jsonArr.head} seqComponent={props.jsonArr.seqComponent}
          mini={props.jsonArr.mini} ></QBoxTop>
        <Contents seqComponent={props.jsonArr.seqComponent}
          contents={props.jsonArr.contents}></Contents>
        <LangTransBox></LangTransBox>
        <ReplyBox replyToggle={replyToggle} setReplyToggle={setReplyToggle}
          replyCount={replyCount(props.jsonArr.replys)} good={props.jsonArr.good}
          bad={props.jsonArr.bad}></ReplyBox>
        <ReplyList USER={props.USER} replyToggle={replyToggle}
          white={props.white} setWhite={props.setWhite}
          replys={props.jsonArr.replys} ></ReplyList>
        <div className="overlay">
        </div>
    </MainDiv>
  );
}

export default Box;
