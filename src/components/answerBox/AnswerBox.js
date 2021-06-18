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
import LangTransCount from '../langTransBox/LangTransCount';
import PopShare from '../popup/popShare/PopShare'
import { Helmet } from 'react-helmet';
import {useTranslation} from 'react-i18next';

const replyCount = (replys) => {
  if(replys==null) return 0
  return replys.length
}

function OpenDiv(props){
  if(props.openAnswer === 'open'){
    return (
      <>
      { props.aiPlus === true && <LangTransCount />}
      <AltongEtimate
        etimate={props.etimate} pageSeq={props.pageSeq}
        myestiNo={props.myestiNo} setMyestiNo={props.setMyestiNo}
      ></AltongEtimate>
      <LangTransBox aiPlus={props.aiPlus} setAiPlus={props.setAiPlus} jsonArr={props.jsonArr}></LangTransBox>
      <ReplyBox
        pageSeq={props.pageSeq}
        replyToggle={props.replyToggle} replyCount={props.replyCount}
        setReplyToggle={props.setReplyToggle}
        good={props.good} bad={props.bad} seqComponent={props.seqComponent}
        seqId={props.seqId}
        choice={props.choice}
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

const ChoiceView = (props) => {
  if(props.choice) return <TopChoiceP><TopImg src={'/Common/images/choice_askerC.png'}></TopImg>{props.choiceText[0]}</TopChoiceP>
  return '';
}
const ChoiceNetizenView = (props) => {
  if(props.netizen) return <TopNetizenP><TopImg src={'/Common/images/choice_netizenC.png'}></TopImg>{props.choiceText[1]}</TopNetizenP>
  return '';
}

function AnswerBox(props) {
  const [replyToggle, setReplyToggle] = useState(true);
  const [openAnswer, setOpenAnswer] = useState('close');
  const [message, setMessage] = useState(props.jsonArr.contents.substr(0,45)+'...');
  const [extraAlmoney, setExtraAlmoney] = useState(0);
  const [myestiNo, setMyestiNo] = useState(0);
  const [replys, setReplys] = useState(props.jsonArr.replys);
  const [showExtraList, setShowExtraList] = useState(false);
  const [extras, setExtras] = useState([]);

  const [ borderColor, setBorderColor ] = useState(false);

  const answer = props.jsonArr.pageSeq;
  //url list
  const URL_EXTRA = `/api/answers/${answer}/almoney`;
  const URL_EVALUATE = `/api/answers/${answer}/estimate`;
  const URL_EXTRA_USERS = `/api/answers/${answer}/extra-lists`

  useEffect(()=>{
    
    const getAlmoney = async () => {
      if(props.jsonArr.pageSeq === undefined){
        return null;
      }else
      try{
        const response = await axios.get(URL_EXTRA);
        setExtraAlmoney(response.data.ExtraAlmoney)
      } catch (e) {
        console.log(e)
      }
    }

    // estimate 몇번째에 체크했는지
    const getEvaluation = async () => {
      try{
        const response = await axios.get(URL_EVALUATE)
        if(response.data.code === "success"){
          setMyestiNo(response.data.myEstimateNo);
        }
      } catch (e) {
        console.log(e)
      }
    }
    
    // 상단 좌측 훈훈알 리스트
    const getWarmingList = async () => {
      try{
        const response = await axios.get(URL_EXTRA_USERS);
        if(response.data.code === "success"){
          setExtras(response.data.ExtraAlmoneyList);
        }
      } catch (e) {
        console.log(e)
      }
    }
    
    getAlmoney();
    getEvaluation();
    getWarmingList();
  }, []);
  // hunAlram={props.hunAlram} setHunAlram={props.setHunAlram}
  useEffect(()=>{
    if(props.hunAlram === true){
        axios.get(URL_EXTRA)
        .then((response) => response.data)
        .then( (data) => {
          setExtraAlmoney(data.ExtraAlmoney);
        })
        .catch(function (error) {
          console.log(error)
        });

        axios.get(URL_EXTRA_USERS)
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

  useEffect(()=>{
    if( props.highlight === props.selected ){
      setBorderColor(true);
    }else{
      setBorderColor(false);
    }
  }, [props.highlight])

  //번역버튼 클릭에 대한 AI를 만들었다.
  const [aiPlus, setAiPlus] = useState({...props.jsonArr, AI:false});
  const [share, setShare] = useState(false);

  const choose = () => {
    if(props.jsonArr.choice === true) {
      props.setChoice(false);
    }
  };
  choose();
  const {t} = useTranslation();
  const choiceText = [t('Questioner_Choice'), t('Angel_Choice')];

  return (
    <>
    {share && <Helmet><script src="https://developers.kakao.com/sdk/js/kakao.min.js"></script></Helmet>}
    <MainDiv borderColor={borderColor} className="Box" onClick={
      () => {
        props.setHighlight(props.selected);
      }
    } >
        <TopH3 num={extraAlmoney}>
          <AlmoneyDiv num={extraAlmoney} onClick={(e) => {
            setShowExtraList(!showExtraList);
            props.setWhite(!props.white);
            e.stopPropagation();
          }}>
            <AnswerAlmoneyImgB src="/pub/answer/answerList/images/answer_almoney.svg"></AnswerAlmoneyImgB>
            <AlmoneySpan><Num3Comma num={extraAlmoney}></Num3Comma></AlmoneySpan>
            <PopExtraAl showExtraList={showExtraList} extraList={extras}></PopExtraAl>
          </AlmoneyDiv>
          <TopH3Div>
            <ChoiceView choice={props.jsonArr.choice} choiceText={choiceText}></ChoiceView>
            <ChoiceNetizenView netizen={props.jsonArr.netizen} choiceText={choiceText}></ChoiceNetizenView>
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
          setShare={setShare}
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
          replyToggle={replyToggle}
          replyCount={replyCount(replys)}
          setReplyToggle={setReplyToggle} replys={replys}
          openAnswer={openAnswer}  good={props.jsonArr.good} bad={props.jsonArr.bad}
          USER={props.USER} etimate={props.jsonArr.etimate}
          white={props.white} setWhite={props.setWhite} seqComponent={props.jsonArr.seqComponent}
          seqId={props.jsonArr.seqId}
          
          myestiNo={myestiNo}
          setMyestiNo={setMyestiNo}

          contentsCount={props.jsonArr.contents.length}

          jsonArr={ aiPlus }
          aiPlus={aiPlus.AI} setAiPlus={setAiPlus}
          choice={props.choice}
        ></OpenDiv>
        <PopupADdiv>
          <PopupADdivIn>
            <PopupADImg >
            </PopupADImg>
          </PopupADdivIn>
        </PopupADdiv>
        <PopShare
          clicked={props.clicked} setClicked={props.setClicked}
          share={share} setShare={setShare}
          jsonArr={props.jsonArr}
          pageNumber={props.pageNumber}
          USER={props.USER}
          ></PopShare>
        
    </MainDiv>
    </>
  );
}

export default AnswerBox;

const MainDiv = styled.div`
  border: 1px solid ${props => props.borderColor ? '#fd0031' : '#ddd'};
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
  color: #ff255f;
  font-size: 12px;
  font-weight: bold;
  vertical-align: middle;
  cursor: pointer;
`;
const TopH3 = styled.h3`
  position: relative;
  display:flex;
  flex-direction:${props => props.num === 0 ? 'row-reverse':'row'};
  justify-content: ${props => props.num === 0 ? 'flex-start':'space-between'};
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



