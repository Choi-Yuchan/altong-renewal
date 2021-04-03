import styled from 'styled-components';
import React, { useState } from 'react';

import ABoxTop from '../aBoxTop/ABoxTop';
import Contents from '../contents/Contents';
import LangTransBox from '../langTransBox/LangTransBox';
import ReplyBox from '../replyBox/ReplyBox';
import ReplyList from '../replyList/test';
import AUnBoxBottom from '../AUnBoxBottom/AUnBoxBottom';
import AltongEtimate from '../altongEtimate/AltongEtimate';
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
const AlmoneyDiv = styled.div`
  display: inline-block;
  cursor: pointer;
  position: relative;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
`;
const AnswerAlmoneyImgB = styled.img`
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
const TopH3 = styled.h3`
  position: relative;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
`;
const TopH3Div = styled.div`
  display: block;
  float: right;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
`;
const TopChoiceP = styled.p`
  display: inline-block;
  font-size: 16px;
  padding: 0;
  margin: 0;
  color: #fd8d0d;
  overflow: hidden;
  word-break: break-all;
  cursor: pointer;
`;
const TopNetizenP = styled.p`
  color: #a5a5a5;
  display: inline-block;
  font-size: 16px;
  padding: 0;
  margin: 0;
  overflow: hidden;
  word-break: break-all;
  cursor: pointer;
`;
const TopImg = styled.img`
  width: 25px;
  margin-bottom: -7px;
  padding: 0;
`;

const replyCount = (replys) => {
  if(replys==null) return 0
  return replys.length
}

function OpenDiv(props){
  if(props.openAnswer === 'open'){
    return (
      <>
      <AltongEtimate etimate={props.etimate}></AltongEtimate>
      <LangTransBox></LangTransBox>
      <ReplyBox replyToggle={props.replyToggle} replyCount={props.replyCount}
      setReplyToggle={props.setReplyToggle}
       good={props.good} bad={props.bad} seqComponent={props.seqComponent}
      ></ReplyBox>
      <ReplyList USER={props.USER}  replyToggle={props.replyToggle} 
        white={props.white} setWhite={props.setWhite}
        replys={props.replys}></ReplyList>
      </>
    );
  }
  return <AUnBoxBottom></AUnBoxBottom>
}

// choice:true,
// netizen:true,

const ChoiceView = (props) => {
  if(props.choice) return <TopChoiceP><TopImg src={process.env.PUBLIC_URL + '/test_source/choice_askerC.png'}></TopImg>질문자선택</TopChoiceP>
  return '';
}
const ChoiceNetizenView = (props) => {
  if(props.netizen) return <TopNetizenP><TopImg src={process.env.PUBLIC_URL + '/test_source/choice_netizenC.png'}></TopImg>천사들의 선택</TopNetizenP>
  return '';
}


// white={props.white} setWhite={props.setWhite}

function AnswerBox(props) {
  const [replyToggle, setReplyToggle] = useState(true);
  const [openAnswer, setOpenAnswer] = useState('close');
  const [message, setMessage] = useState(props.jsonArr.contents.substr(0,93)+'...');

  return (
    <MainDiv className="Box">
        {/* atm_top_wrap */}
        <TopH3>
          <AlmoneyDiv>
            <AnswerAlmoneyImgB src="/pub/answer/answerList/images/answer_almoney.svg"></AnswerAlmoneyImgB>
            <AlmoneySpan><Num3Comma num={props.jsonArr.almoney}></Num3Comma></AlmoneySpan>
          </AlmoneyDiv>
          <TopH3Div>
            <ChoiceView choice={props.jsonArr.choice}></ChoiceView>
            <ChoiceNetizenView netizen={props.jsonArr.netizen}></ChoiceNetizenView>
          </TopH3Div>
        </TopH3>
        <ABoxTop head={props.jsonArr.head} mini={props.jsonArr.mini} 
          clicked={props.clicked} setClicked={props.setClicked}
          replyCount={replyCount(props.jsonArr.replys)}
          white={props.white} setWhite={props.setWhite}
          openAnswer={openAnswer}
          ></ABoxTop>
        <Contents contents={message} setOpenAnswer={setOpenAnswer} 
          openAnswer={openAnswer} seqComponent={props.jsonArr.seqComponent}
          setMessage={setMessage} allMessage={props.jsonArr.contents}></Contents>
        <OpenDiv className="OpenDiv" replyToggle={replyToggle}
          replyCount={replyCount(props.jsonArr.replys)}
          setReplyToggle={setReplyToggle} replys={props.jsonArr.replys}
          openAnswer={openAnswer}  good={props.jsonArr.good} bad={props.jsonArr.bad}
          USER={props.USER} etimate={props.jsonArr.etimate}
          white={props.white} setWhite={props.setWhite} seqComponent={props.jsonArr.seqComponent}
        ></OpenDiv>
        <div className="overlay">
        </div>
    </MainDiv>
  );
}

export default AnswerBox;
