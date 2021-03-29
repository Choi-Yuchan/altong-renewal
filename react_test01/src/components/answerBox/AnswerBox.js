import styled from 'styled-components';
import React, { useState } from 'react';

import ABoxTop from '../aBoxTop/ABoxTop'
import Contents from '../contents/Contents'
import LangTransBox from '../langTransBox/LangTransBox'
import ReplyBox from '../replyBox/ReplyBox'
import ReplyList from '../replyList/ReplyList'
import AUnBoxBottom from '../AUnBoxBottom/AUnBoxBottom'

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

const replyCount = (replys) => {
  return replys.length
}


function OpenDiv(props){
  if(props.openAnswer === 'open'){
    return (
      <>
      <LangTransBox></LangTransBox>
      <ReplyBox replyToggle={props.replyToggle} replyCount={props.replyCount} setReplyToggle={props.setReplyToggle}></ReplyBox>
      <ReplyList USER={props.USER}  replyToggle={props.replyToggle} replys={props.replys}></ReplyList>
      </>
    );
  }
  return <AUnBoxBottom></AUnBoxBottom>
}

// jsonArr
function AnswerBox(props) {
  const [replyToggle, setReplyToggle] = useState(true);
  const [openAnswer, setOpenAnswer] = useState('close');
  const [message, setMessage] = useState(props.jsonArr.contents.substr(0,93)+'...');

  return (
    <MainDiv className="Box">
        {/* atm_top_wrap */}
        <ABoxTop head={props.jsonArr.head}></ABoxTop>
        <Contents contents={message} setOpenAnswer={setOpenAnswer} 
        openAnswer={openAnswer} seqComponent={props.jsonArr.seqComponent}
        setMessage={setMessage} allMessage={props.jsonArr.contents}></Contents>
        <OpenDiv className="OpenDiv" replyToggle={replyToggle} replyCount={replyCount(props.jsonArr.replys)}
          setReplyToggle={setReplyToggle} replyToggle={replyToggle} replys={props.jsonArr.replys} openAnswer={openAnswer}
          USER={props.USER} 
        ></OpenDiv>
        <div className="overlay">
        </div>
    </MainDiv>
  );
}

export default AnswerBox;
