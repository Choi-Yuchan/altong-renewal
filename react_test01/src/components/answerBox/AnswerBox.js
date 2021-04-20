import styled from 'styled-components';
import React, { useState,useEffect } from 'react';
import axios from 'axios';

import ABoxTop from '../aBoxTop/ABoxTop';
import Contents from '../contents/Contents';
import LangTransBox from '../langTransBox/LangTransBox';
import ReplyBox from '../replyBox/ReplyBox';
import ReplyList from '../replyList/ReplyList';
import AUnBoxBottom from '../AUnBoxBottom/AUnBoxBottom';
import AltongEtimate from '../altongEtimate/AltongEtimate';
import Num3Comma from '../functions/num3comma/Num3Comma'

const replyCount = (replys) => {
  if(replys==null) return 0
  return replys.length
}

function OpenDiv(props){
  if(props.openAnswer === 'open'){
    return (
      <>
      <AltongEtimate etimate={props.etimate} pageSeq={props.pageSeq}></AltongEtimate>
      <LangTransBox></LangTransBox>
      <ReplyBox
        pageSeq={props.pageSeq}
        replyToggle={props.replyToggle} replyCount={props.replyCount}
        setReplyToggle={props.setReplyToggle}
        good={props.good} bad={props.bad} seqComponent={props.seqComponent}
      ></ReplyBox>
      <ReplyList
        setReplys={props.setReplys}
        USER={props.USER}  replyToggle={props.replyToggle} 
        white={props.white} setWhite={props.setWhite}
        replys={props.replys}
        pageSeq={props.pageSeq} seqComponent={props.seqComponent}
        ></ReplyList>
      </>
    );
  }
  return <AUnBoxBottom></AUnBoxBottom>
}

// choice:true,
// netizen:true,

const ChoiceView = (props) => {
  if(props.choice) return <TopChoiceP><TopImg src={'/Common/images/choice_askerC.png'}></TopImg>질문자선택</TopChoiceP>
  return '';
}
const ChoiceNetizenView = (props) => {
  if(props.netizen) return <TopNetizenP><TopImg src={'/Common/images/choice_netizenC.png'}></TopImg>천사들의 선택</TopNetizenP>
  return '';
}
// white={props.white} setWhite={props.setWhite}

function AnswerBox(props) {
  const [replyToggle, setReplyToggle] = useState(true);
  const [openAnswer, setOpenAnswer] = useState('close');
  const [message, setMessage] = useState(props.jsonArr.contents.substr(0,93)+'...');
  const [extraAlmoney, setExtraAlmoney] = useState(0);
  const [replys, setReplys] = useState(props.jsonArr.replys);

  useEffect(()=>{
    if(props.jsonArr.pageSeq===undefined){}else{
      axios.get("/rest/answers/"+props.jsonArr.pageSeq+"/almoney")
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
        <TopH3>
          <AlmoneyDiv num={extraAlmoney}>
            <AnswerAlmoneyImgB src="/pub/answer/answerList/images/answer_almoney.svg"></AnswerAlmoneyImgB>
            <AlmoneySpan><Num3Comma num={extraAlmoney}></Num3Comma></AlmoneySpan>
          </AlmoneyDiv>
          <TopH3Div>
            <ChoiceView choice={props.jsonArr.choice}></ChoiceView>
            <ChoiceNetizenView netizen={props.jsonArr.netizen}></ChoiceNetizenView>
          </TopH3Div>
        </TopH3>
        <ABoxTop head={props.jsonArr.head} mini={props.jsonArr.mini} 
          clicked={props.clicked} setClicked={props.setClicked}
          replyCount={replyCount(replys)}
          white={props.white} setWhite={props.setWhite}
          pageSeq={props.jsonArr.pageSeq}
          setShowAlmoney={props.setShowAlmoney}
          setShowSiren={props.setShowSiren}
          openAnswer={openAnswer}
          ></ABoxTop>
        <Contents contents={message} setOpenAnswer={setOpenAnswer} 
          openAnswer={openAnswer} seqComponent={props.jsonArr.seqComponent}
          setMessage={setMessage} allMessage={props.jsonArr.contents}></Contents>
        <OpenDiv
          pageSeq={props.jsonArr.pageSeq}
          setReplys={setReplys}
          className="OpenDiv" replyToggle={replyToggle}
          replyCount={replyCount(replys)}
          setReplyToggle={setReplyToggle} replys={replys}
          openAnswer={openAnswer}  good={props.jsonArr.good} bad={props.jsonArr.bad}
          USER={props.USER} etimate={props.jsonArr.etimate}
          white={props.white} setWhite={props.setWhite} seqComponent={props.jsonArr.seqComponent}
        ></OpenDiv>
        <PopupADdiv>
          <PopupADdivIn>
            <PopupADImg >
            </PopupADImg>
          </PopupADdivIn>
        </PopupADdiv>
        
    </MainDiv>
  );
}

export default AnswerBox;

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
  display: ${ props => props.num === 0 ? "none" : "inline-block"};
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
const PopupADdiv = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  display: none;
`;
const PopupADdivIn = styled.div`
  width: 85%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const PopupADImg = styled.img`
  max-width: 505px;
  margin: auto;
  display: block;
  text-align: center;
  width: 100%;
`;



