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

//jsonArr
const replyCount = (replys) => {
  return replys.length
}

// white={props.white} setWhite={props.setWhite}
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

  useEffect(()=>{
    if(props.jsonArr.pageSeq===undefined){}else{
      axios.get("/rest/questions/"+props.jsonArr.pageSeq+"/almoney")
      .then((response) => response.data)
      .then( (data) => {
        setExtraAlmoney(data.ExtraAlmoney);
      })
      .catch(function (error) {
        console.log(error)
      });

      axios.get("/restApi/answers/"+props.jsonArr.pageSeq+"/Q/extra-users")
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
  useEffect(()=>{
    if(props.hunAlram === true){
        axios.get("/rest/questions/"+props.jsonArr.pageSeq+"/almoney")
        .then((response) => response.data)
        .then( (data) => {
          setExtraAlmoney(data.ExtraAlmoney);
        })
        .catch(function (error) {
          console.log(error)
        });
        
        axios.get("/restApi/answers/"+props.jsonArr.pageSeq+"/Q/extra-users")
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
  
  //hunAlram={props.hunAlram} setHunAlram={props.setHunAlram}

  return (
    <MainDiv className="Box" >
        {/* atm_top_wrap */}
        <div>
          <AlmoneyDiv num={extraAlmoney} onClick={(e) => {
            setShowExtraList(!showExtraList);
            props.setWhite(!props.white);
            e.stopPropagation();
          }}>
            <AnswerAlmoneyImg src="/pub/answer/answerList/images/answer_almoney.svg">
            </AnswerAlmoneyImg>
            <AlmoneySpan><Num3Comma num={extraAlmoney}></Num3Comma></AlmoneySpan>
            <PopExtraAl showExtraList={showExtraList} extraList={extras} ></PopExtraAl>
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
          setShare={props.setShare}
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
