import styled from 'styled-components';
import React, { useState } from 'react';

import ABoxTop from '../aBoxTop/ABoxTop'
import Contents from '../contents/test'
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
// .substr(0,93)+"..."

function FoldAnswerBox(props) {
  const [openAnswer, setOpenAnswer] = useState('close');

  return (
    <MainDiv className="Box">
        {/* atm_top_wrap */}
        <ABoxTop></ABoxTop>
        <Contents message={props.message} setOpenAnswer={setOpenAnswer} openAnswer={openAnswer}></Contents>
        {/* <LangTransBox></LangTransBox> */}
        {/* <ReplyBox></ReplyBox> */}
        {/* <ReplyList></ReplyList> */}
        <AUnBoxBottom></AUnBoxBottom>

        <div className="overlay">
        </div>
    </MainDiv>
  );
}

export default FoldAnswerBox;
