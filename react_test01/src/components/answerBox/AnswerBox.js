import styled from 'styled-components';
import React, { useState } from 'react';

import ABoxTop from '../aBoxTop/ABoxTop'
import Contents from '../contents/Contents'
import LangTransBox from '../langTransBox/LangTransBox'
import ReplyBox from '../replyBox/ReplyBox'
import ReplyList from '../replyList/ReplyList'

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

// jsonArr
function AnswerBox(props) {
  const [replyToggle, setReplyToggle] = useState(true);
  

  return (
    <MainDiv className="Box">
        {/* atm_top_wrap */}
        <ABoxTop head={props.jsonArr.head}></ABoxTop>
        <Contents></Contents>
        <LangTransBox></LangTransBox>
        <ReplyBox replyToggle={replyToggle} replyCount={replyCount(props.jsonArr.replys)} setReplyToggle={setReplyToggle}></ReplyBox>
        <ReplyList replyToggle={replyToggle} replys={props.jsonArr.replys}></ReplyList>

        <div className="overlay">
        </div>
    </MainDiv>
  );
}

export default AnswerBox;
