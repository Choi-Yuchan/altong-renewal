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

function Box({jsonArr, USER, white, setWhite, clicked, setClicked, setShowAlmoney, setShowSiren, setShowMessage, hunAlram, setHunAlram, selected, highlight, setHighlight, SSRJSON}) {
  const [replyToggle, setReplyToggle] = useState(true);
  const [extraAlmoney, setExtraAlmoney] = useState(0);
  const [replys, setReplys] = useState(jsonArr.replys);
  const [showExtraList, setShowExtraList] = useState(false);
  const [extras, setExtras] = useState([]);


  const resetReplys = (seq) => {
    setReplys(replys.filter( x =>{
      return x.seq !== seq
    }));
  };

  useEffect(()=>{
    if(white === true){
        setShowExtraList(false);
    }
  }
  , [white]);

  const pageSeq = jsonArr.pageSeq;
  
  //url list
  const URL_ALMONEY = `/api/questions/${pageSeq}/almoney`;
  const URL_EXTRA_USERS = `/api/questions/${pageSeq}/extra-lists`;

  useEffect(()=>{
    const getHunAl = async () => {
      if(jsonArr.pageSeq === undefined){}else
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
  }, [jsonArr.pageSeq, URL_ALMONEY, URL_EXTRA_USERS]);


  useEffect(()=>{
    const getHunAldata = async () => {
      if(hunAlram === true)
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
      setHunAlram(false);
    }

      getHunAldata();
      getHunUserData();
    }, [hunAlram, setHunAlram, URL_ALMONEY, URL_EXTRA_USERS]);

  //번역버튼 클릭에 대한 AI를 만들었다.
  const [aiPlus, setAiPlus] = useState({...jsonArr, AI:false});
  const [share, setShare] = useState(false);
  

  return (
    <>
    <MainDiv>
        <div>
          <AlmoneyDiv num={extraAlmoney} onClick={(e) => {
            setShowExtraList(!showExtraList);
            setWhite(!white);
            e.stopPropagation();
          }}>
            <AnswerAlmoneyImg src="/pub/answer/answerList/images/answer_almoney.svg"/>
            <AlmoneySpan><Num3Comma num={extraAlmoney}/></AlmoneySpan>
            {USER.seq === 0 ? null : (
            <PopExtraAl showExtraList={showExtraList} extraList={extras}/>
            )}
          </AlmoneyDiv>
        </div>
        <QBoxTop
          clicked={clicked} setClicked={setClicked}
          white={white} setWhite={setWhite}
          head={jsonArr.head} seqComponent={jsonArr.seqComponent}
          pageSeq={jsonArr.pageSeq}
          setShowAlmoney={setShowAlmoney}
          setShowSiren={setShowSiren}
          setShowMessage={setShowMessage}
          mini={jsonArr.mini}
          seqId={jsonArr.seqId}
          USER={USER}
          setShare={setShare}
        />
        <Contents 
          seqComponent={jsonArr.seqComponent}
          contents={jsonArr.contents}
        />
        { aiPlus.AI === true && <LangTransCount seqComponent={jsonArr.seqComponent} pageSeq={jsonArr.pageSeq}/>}
        <LangTransBox aiPlus={aiPlus.AI} setAiPlus={setAiPlus} jsonArr={jsonArr} />
        <ReplyBox
          seqComponent={jsonArr.seqComponent} pageSeq={jsonArr.pageSeq}
          replyToggle={replyToggle} setReplyToggle={setReplyToggle}
          replyCount={replyCount(replys)} 
          good={jsonArr.good} bad={jsonArr.bad} 
          USER={USER} choice={jsonArr.choice}
          seqId={jsonArr.seqId} SSRJSON={SSRJSON}
        />
        <ReplyList 
          USER={USER} replyToggle={replyToggle}
          white={white} setWhite={setWhite}
          pageSeq={jsonArr.pageSeq} seqComponent={jsonArr.seqComponent}
          setReplys={setReplys} replys={replys}
          resetReplys={resetReplys} 
        />
    </MainDiv>
    <PopShare
      clicked={clicked}
      share={share} setShare={setShare}
      jsonArr={jsonArr}
      SSRJSON={SSRJSON}
      USER={USER}
      />
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
