import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QBoxTop from '../qBoxTop/QBoxTop'
import Contents from '../contents/Contents'
import LangTransBox from '../langTransBox/LangTransBox'
import ReplyBox from '../replyBox/ReplyBox'
import ReplyList from '../replyList/ReplyList'
import PopExtraAl from '../popup/popExtraAl/PopExtraAl'
import Num3Comma from '../functions/num3comma/Num3Comma'
import LangTransCount from '../langTransBox/LangTransCount'
import PopShare from '../popup/popShare/PopShare'

//jsonArr
const replyCount = (replys) => {
  return replys.length
}

function Box(props) {
  const [replyToggle, setReplyToggle] = useState(true);
  const [extraAlmoney, setExtraAlmoney] = useState(0);
  const [replys, setReplys] = useState(props.jsonArr.replys);
  const [showExtraList, setShowExtraList] = useState(false);
  const [extras, setExtras] = useState([]);


  const resetReplys = (seq) => {
    setReplys(replys.filter( x =>{
      return x.seq !== seq
    }));
  };

  useEffect(()=>{
    if(props.white === true){
        setShowExtraList(false);
    }
  }
  , [props.white]);

  const pageSeq = props.jsonArr.pageSeq;
  
  //url list
  const URL_ALMONEY = `/api/questions/${pageSeq}/almoney`;
  const URL_EXTRA_USERS = `/api/questions/${pageSeq}/extra-lists`;

  useEffect(()=>{
    const getHunAl = async () => {
      if(props.jsonArr.pageSeq === undefined){}else
      try{
        const response = await axios.get(URL_ALMONEY);
        setExtraAlmoney(response.data.ExtraAlmoney);
      } catch (e){
        console.log(e)
      }  
    }
    
    const getHunUsers = async () => {
      try{
        const response = await axios.get(URL_EXTRA_USERS);
        if(response.data.code === "success"){
          setExtras(response.data.ExtraAlmoneyList);
        }
      } catch(e) {
        console.log(e);
      }
    }
    getHunAl();
    getHunUsers();
  }, []);


  useEffect(()=>{
    const getHunAldata = async () => {
      if(props.hunAlram === true)
      try{
        const response = await axios.get(URL_ALMONEY);
        setExtraAlmoney(response.data.ExtraAlmoney)
      } catch(e){
        console.log(e)
      }
    }
    
    const getHunUserData = async () => {
      try{
        const response = await axios.get(URL_EXTRA_USERS);
        if(response.data.code === "success"){
          setExtras(response.data.ExtraAlmoneyList);
        }
      } catch (e) {
        console.log(e)
      }
      props.setHunAlram(false);
    }

      getHunAldata();
      getHunUserData();
    }, [props.hunAlram]);

  //번역버튼 클릭에 대한 AI를 만들었다.
  const [aiPlus, setAiPlus] = useState({...props.jsonArr, AI:false});
  const [share, setShare] = useState(false);
  

  return (
    <>
    <MainDiv>
        <div>
          <AlmoneyDiv num={extraAlmoney} onClick={(e) => {
            setShowExtraList(!showExtraList);
            props.setWhite(!props.white);
            e.stopPropagation();
          }}>
            <AnswerAlmoneyImg src="/pub/answer/answerList/images/answer_almoney.svg"/>
            <AlmoneySpan><Num3Comma num={extraAlmoney}/></AlmoneySpan>
            <PopExtraAl showExtraList={showExtraList} extraList={extras}/>
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
          setShare={setShare}
        />
        <Contents 
          seqComponent={props.jsonArr.seqComponent}
          contents={props.jsonArr.contents}
        />
        { aiPlus.AI === true && <LangTransCount />}
        <LangTransBox aiPlus={aiPlus.AI} setAiPlus={setAiPlus} jsonArr={props.jsonArr} />
        <ReplyBox
          seqComponent={props.jsonArr.seqComponent} pageSeq={props.jsonArr.pageSeq}
          replyToggle={replyToggle} setReplyToggle={setReplyToggle}
          replyCount={replyCount(replys)} 
          good={props.jsonArr.good} bad={props.jsonArr.bad} 
          USER={props.USER}
          seqId={props.jsonArr.seqId}
          SSRJSON={props.SSRJSON}
        />
        <ReplyList 
          USER={props.USER} replyToggle={replyToggle}
          white={props.white} setWhite={props.setWhite}
          pageSeq={props.jsonArr.pageSeq} seqComponent={props.jsonArr.seqComponent}
          setReplys={setReplys} replys={replys}
          resetReplys={resetReplys}
        />
    </MainDiv>
    <PopShare
      clicked={props.clicked} setClicked={props.setClicked}
      share={share} setShare={setShare}
      jsonArr={props.jsonArr}
      SSRJSON={props.SSRJSON}
      USER={props.USER}
      ></PopShare>
    </>
  
  );

}


const MainDiv = styled.div`
  border: 1px solid #ddd;
  padding: 0.9375rem 1.25rem;
  margin-bottom: 0.3125rem;
  border-radius:  1.25rem;
  font-size: 1rem;
  color: #333;
  transition: all 0.3s;

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
const AnswerAlmoneyImg = styled.img`
  margin:0 0.3125rem 0 0;
  width: 1.25rem;
  cursor: pointer;
`;
const AlmoneySpan = styled.span`
  color: #ff255f;
  font-size: 0.75rem;
  font-weight: bold;
  cursor: pointer;
`;

export default Box;
