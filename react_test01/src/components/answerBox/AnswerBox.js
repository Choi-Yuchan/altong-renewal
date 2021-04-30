import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ABoxTop from '../aBoxTop/ABoxTop';
import Contents from '../contents/Contents';
import LangTransBox from '../langTransBox/LangTransBox';
import ReplyBox from '../replyBox/ReplyBox';
import ReplyList from '../replyList/ReplyList';
import AUnBoxBottom from '../AUnBoxBottom/AUnBoxBottom';
import AltongEtimate from '../altongEtimate/AltongEtimate';
import PopExtraAl from '../popup/popExtraAl/PopExtraAl'

import Num3Comma from '../functions/num3comma/Num3Comma'

const replyCount = (replys) => {
  if(replys==null) return 0
  return replys.length
}

function OpenDiv(props){
  if(props.openAnswer === 'open'){
    return (
      <>
      <AltongEtimate
        etimate={props.etimate} pageSeq={props.pageSeq}
        myestiNo={props.myestiNo} setMyestiNo={props.setMyestiNo}
      ></AltongEtimate>
      <LangTransBox></LangTransBox>
      <ReplyBox
        pageSeq={props.pageSeq}
        replyToggle={props.replyToggle} replyCount={props.replyCount}
        setReplyToggle={props.setReplyToggle}
        good={props.good} bad={props.bad} seqComponent={props.seqComponent}
        seqId={props.seqId}
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
  return <AUnBoxBottom etimate={props.etimate} count={props.contentsCount}></AUnBoxBottom>
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
  const [myestiNo, setMyestiNo] = useState(0);
  const [replys, setReplys] = useState(props.jsonArr.replys);
  const [showExtraList, setShowExtraList] = useState(false);
  const [extras, setExtras] = useState([]);

  useEffect(()=>{
    
    if(props.jsonArr.pageSeq===undefined){}else{
      axios.get("/rest/answers/"+props.jsonArr.pageSeq+"/almoney")
      .then((response) => response.data)
      .then( (data) => {
        setExtraAlmoney(data.ExtraAlmoney);
      })
      .catch(function (error) {
        console.log(error)
      });

      // estimate 몇번째에 체크했는지
      axios.get("/restApi/answers/"+props.jsonArr.pageSeq+"/estimate")
      .then((response) => response.data)
      .then( (data) => {
        if( data.code === "success" ) {
          setMyestiNo(data.myEstimateNo);
        }
      })
      .catch(function (error) {
        console.log(error)
      });
      
      // 상단 좌측 훈훈알 리스트
      axios.get("/restApi/answers/"+props.jsonArr.pageSeq+"/A/extra-users")
      .then((response) => response.data)
      .then( (data) => {
        if("success" === data.code) setExtras(data.ExtraAlmoneyList);
      })
      .catch(function (error) {
        console.log(error)
      });
    }
  }
  , []);
  // hunAlram={props.hunAlram} setHunAlram={props.setHunAlram}
  useEffect(()=>{
    if(props.hunAlram === true){
        axios.get("/rest/answers/"+props.jsonArr.pageSeq+"/almoney")
        .then((response) => response.data)
        .then( (data) => {
          setExtraAlmoney(data.ExtraAlmoney);
        })
        .catch(function (error) {
          console.log(error)
        });

        axios.get("/restApi/answers/"+props.jsonArr.pageSeq+"/A/extra-users")
        .then((response) => response.data)
        .then( (data) => {
          if("success" === data.code) setExtras(data.ExtraAlmoneyList);
        })
        .catch(function (error) {
          console.log(error)
        });
        props.setHunAlram(false);
    }
  }
  , [props.hunAlram]);

  useEffect(()=>{
    if(props.white === true){
        setShowExtraList(false);
    }
  }
  , [props.white]);

  return (
    <MainDiv className="Box">
        {/* atm_top_wrap */}
        <TopH3>
          <AlmoneyDiv num={extraAlmoney}onClick={(e) => {
            setShowExtraList(true);
            props.setWhite(false);
            e.stopPropagation();
          }}>
            <AnswerAlmoneyImgB src="/pub/answer/answerList/images/answer_almoney.svg"></AnswerAlmoneyImgB>
            <AlmoneySpan><Num3Comma num={extraAlmoney}></Num3Comma></AlmoneySpan>
            <PopExtraAl showExtraList={showExtraList} extraList={extras}></PopExtraAl>
          </AlmoneyDiv>
          <TopH3Div>
            <ChoiceView choice={props.jsonArr.choice}></ChoiceView>
            <ChoiceNetizenView netizen={props.jsonArr.netizen}></ChoiceNetizenView>
          </TopH3Div>
        </TopH3>
        <ABoxTop
          head={props.jsonArr.head} mini={props.jsonArr.mini} 
          clicked={props.clicked} setClicked={props.setClicked}
          replyCount={replyCount(replys)}
          white={props.white} setWhite={props.setWhite}
          pageSeq={props.jsonArr.pageSeq}
          setShowAlmoney={props.setShowAlmoney}
          setShowSiren={props.setShowSiren}
          setShowMessage={props.setShowMessage}
          openAnswer={openAnswer}
          seqId={props.jsonArr.seqId}
          USER={props.USER}
          ></ABoxTop>
        <Contents
          setInfoAD={props.setInfoAD}
          InfoAD={props.InfoAD}
          contents={message} setOpenAnswer={setOpenAnswer} 
          openAnswer={openAnswer} seqComponent={props.jsonArr.seqComponent}
          setMessage={setMessage} allMessage={props.jsonArr.contents}
          setClicked={props.setClicked}
          pageSeq={props.jsonArr.pageSeq}
        ></Contents>

        <OpenDiv
          pageSeq={props.jsonArr.pageSeq}
          setReplys={setReplys}
          className="OpenDiv" /* 클래스네임 어디에 사용되는 지 확인 필요*/ replyToggle={replyToggle}
          replyCount={replyCount(replys)}
          setReplyToggle={setReplyToggle} replys={replys}
          openAnswer={openAnswer}  good={props.jsonArr.good} bad={props.jsonArr.bad}
          USER={props.USER} etimate={props.jsonArr.etimate}
          white={props.white} setWhite={props.setWhite} seqComponent={props.jsonArr.seqComponent}
          seqId={props.jsonArr.seqId}
          
          myestiNo={myestiNo}
          setMyestiNo={setMyestiNo}

          contentsCount={props.jsonArr.contents.length}
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
  padding: 0.9375rem 1.25rem;
  transition: all 0.3s;
  margin-bottom: 0.3125rem;
  border-radius:  1.25rem;
  font-size: 1rem;
  color: #333;

  @media (max-width:480px) {
    padding: 0.9375rem 0.625rem;
}
`;
const AlmoneyDiv = styled.div`
  display: ${ props => props.num === 0 ? "none" : "inline-flex"};
  align-items: center;
  cursor: pointer;
  position: relative;
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
  display:flex;
  justify-content: space-between;
  align-items: center;
`;
const TopH3Div = styled.div`
  display: inline-flex;
  align-items: center;
`;
const TopChoiceP = styled.p`
  display: inline-flex;
  font-size: 16px;
  color: #fd8d0d;
  align-items:center;

  @media (max-width:480px) {
    font-size:14px;
  }
`;
const TopNetizenP = styled.p`
  color: #a5a5a5;
  display: inline-flex;
  font-size: 16px;
  align-items: center;

  @media (max-width:480px) {
    font-size:14px;
  }
`;
const TopImg = styled.img`
  width: 25px;
  margin-bottom:-2px;

  @media (max-width:480px) {
    width:20px;
  }
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



