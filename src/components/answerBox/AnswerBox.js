import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ABoxTop from '../aBoxTop/ABoxTop';
import Contents from '../contents/Contents';
import LangTransBox from '../langTransBox/LangTransBox';
import ReplyBox from '../replyBox/ReplyBox';
import ReplyList from '../replyList/ReplyList';
import AUnBoxBottom from '../AUnBoxBottom/AUnBoxBottom';
import AltongEstimate from '../altongEtimate/AltongEstimate';
import PopExtraAl from '../popup/popExtraAl/PopExtraAl'

import Num3Comma from '../functions/num3comma/Num3Comma'
import LangTransCount from '../langTransBox/LangTransCount';
import PopShare from '../popup/popShare/PopShare'
import {useTranslation} from 'react-i18next';

const replyCount = (replys) => {
  if(replys === null) return 0
  return replys.length
}

function OpenDiv(props){
  if(props.openAnswer === 'open'){
    return (
      <>
      { props.aiPlus === true && <LangTransCount />}
      <AltongEstimate
        etimate={props.etimate} pageSeq={props.pageSeq}
        myestiNo={props.myestiNo} setMyestiNo={props.setMyestiNo}
      ></AltongEstimate>
      <LangTransBox aiPlus={props.aiPlus} setAiPlus={props.setAiPlus} jsonArr={props.jsonArr}></LangTransBox>
      <ReplyBox
        pageSeq={props.pageSeq}
        replyToggle={props.replyToggle} replyCount={props.replyCount}
        setReplyToggle={props.setReplyToggle}
        good={props.good} bad={props.bad} seqComponent={props.seqComponent}
        seqId={props.seqId}
        choice={props.choice}
        SSRJSON={props.SSRJSON}
        USER={props.USER}
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

function AnswerBox({jsonArr, white, setWhite, USER, clicked, setClicked, setShowAlmoney, setShowSiren, setShowMessage, InfoAD, setInfoAD,
   hunAlram, setHunAlram, selected, highlight, setHighlight, SSRJSON, choice, setChoice}) {

  const [replyToggle, setReplyToggle] = useState(true);
  const [openAnswer, setOpenAnswer] = useState('close');
  const [message, setMessage] = useState(jsonArr.contents.substr(0,45)+'...');
  const [extraAlmoney, setExtraAlmoney] = useState(0);
  const [myestiNo, setMyestiNo] = useState(0);
  const [replys, setReplys] = useState(jsonArr.replys);
  const [showExtraList, setShowExtraList] = useState(false);
  const [extras, setExtras] = useState([]);
  const [ borderColor, setBorderColor ] = useState(false);

  const pageSeq = jsonArr.pageSeq;

  //url list
  const URL_EXTRA = `/api/answers/${pageSeq}/almoney`;
  const URL_EVALUATE = `/api/answers/${pageSeq}/get/estimate`;
  const URL_EXTRA_USERS = `/api/answers/${pageSeq}/extra-lists`

  useEffect(()=>{
    
    const getAlmoney = async () => {
      if(pageSeq === undefined){
        return null;
      }else
      try{
        const response = await axios.get(URL_EXTRA);
        setExtraAlmoney(response.data.ExtraAlmoney)
      } catch (e) {
        console.log(e)
      }
    }

    // estimate 몇번째에 체크했는지 - 현재 해당 URL의 method가 제대로 되어 있지 않음.
    // RESTful API 수정 후 작동하는 지 확인 필요.
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
  }, [URL_EXTRA, URL_EVALUATE, URL_EXTRA_USERS, pageSeq]);
  // hunAlram={props.hunAlram} setHunAlram={props.setHunAlram}
  useEffect(()=>{
    if(hunAlram === true){
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
        setHunAlram(false);
    }
  }
  , [hunAlram, setHunAlram, URL_EXTRA, URL_EXTRA_USERS]);

  useEffect(()=>{
    if(white === true){
        setShowExtraList(false);
    }
  }
  , [white]);

  useEffect(()=>{
    if( highlight === selected ){
      setBorderColor(true);
    }else{
      setBorderColor(false);
    }
  }, [highlight, selected])

  //번역버튼 클릭에 대한 AI를 만들었다.
  const [aiPlus, setAiPlus] = useState({...jsonArr, AI:false});
  const [share, setShare] = useState(false);

  const choose = () => {
    if(jsonArr.choice === true) {
      setChoice(false);
    }
  };
  choose();
  const {t} = useTranslation();
  const choiceText = [t('Questioner_Choice'), t('Angel_Choice')];

  return (
    <>
    <MainDiv borderColor={borderColor} className="Box" onClick={
      () => {
        setHighlight(selected);
      }
    } >
        <TopH3 num={extraAlmoney}>
          <AlmoneyDiv num={extraAlmoney} onClick={(e) => {
            setShowExtraList(!showExtraList);
            setWhite(!white);
            e.stopPropagation();
          }}>
            <AnswerAlmoneyImgB src="/pub/answer/answerList/images/answer_almoney.svg"></AnswerAlmoneyImgB>
            <AlmoneySpan><Num3Comma num={extraAlmoney}></Num3Comma></AlmoneySpan>
            {USER.seq === 0 ? null : (
            <PopExtraAl showExtraList={showExtraList} extraList={extras}/>
            )}
          </AlmoneyDiv>
          <TopH3Div>
            <ChoiceView choice={jsonArr.choice} choiceText={choiceText}></ChoiceView>
            <ChoiceNetizenView netizen={jsonArr.netizen} choiceText={choiceText}></ChoiceNetizenView>
          </TopH3Div>
        </TopH3>
        <ABoxTop
          head={jsonArr.head} mini={jsonArr.mini} 
          clicked={clicked} setClicked={setClicked}
          replyCount={replyCount(replys)}
          white={white} setWhite={setWhite}
          pageSeq={pageSeq}
          setShowAlmoney={setShowAlmoney}
          setShowSiren={setShowSiren}
          setShowMessage={setShowMessage}
          openAnswer={openAnswer}
          seqId={jsonArr.seqId}
          USER={USER}
          setShare={setShare}
          ></ABoxTop>
        <Contents
          setInfoAD={setInfoAD}
          InfoAD={InfoAD}
          contents={message} setOpenAnswer={setOpenAnswer} 
          openAnswer={openAnswer} seqComponent={jsonArr.seqComponent}
          setMessage={setMessage} allMessage={jsonArr.contents}
          setClicked={setClicked}
          pageSeq={pageSeq}
        ></Contents>

        <OpenDiv
          pageSeq={pageSeq}
          setReplys={setReplys}
          replyToggle={replyToggle}
          replyCount={replyCount(replys)}
          setReplyToggle={setReplyToggle} replys={replys}
          openAnswer={openAnswer}  good={jsonArr.good} bad={jsonArr.bad}
          USER={USER} etimate={jsonArr.etimate}
          white={white} setWhite={setWhite} seqComponent={jsonArr.seqComponent}
          seqId={jsonArr.seqId}
          SSRJSON={SSRJSON}
          myestiNo={myestiNo}
          setMyestiNo={setMyestiNo}
          contentsCount={jsonArr.contents.length}
          jsonArr={ aiPlus }
          aiPlus={aiPlus.AI} setAiPlus={setAiPlus}
          choice={choice}
        ></OpenDiv>
        <PopupADdiv>
          <PopupADdivIn>
            <PopupADImg >
            </PopupADImg>
          </PopupADdivIn>
        </PopupADdiv>
        <PopShare
        clicked={clicked} 
        share={share} setShare={setShare}
        jsonArr={jsonArr}
        SSRJSON={SSRJSON}
        USER={USER}
        />
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



