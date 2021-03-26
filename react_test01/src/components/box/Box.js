import styled from 'styled-components';
import React, { useState } from 'react';

import QBoxTop from '../qBoxTop/QBoxTop'
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

const AnswerAlmoneyImg = styled.img`
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

const AlmoneyDiv = styled.div`
  display: inline-block;
  cursor: pointer;
  position: relative;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
`;

function RenderTop(props){
  const SSRJSON = props.SSRJSON
  const view = SSRJSON.map((val) => <QBoxTop ssrjson={val.seqComponent}></QBoxTop> )
  return view
}

//jsonArr

function Box(props) {
  const [replyToggle, setReplyToggle] = useState(true);
  const replyCount = 1;

  return (
    <MainDiv className="Box">
        {/* atm_top_wrap */}
        <div>
          <AlmoneyDiv>
            <AnswerAlmoneyImg src={process.env.PUBLIC_URL + '/test_source/answer_almoney.svg'}></AnswerAlmoneyImg>
            <AlmoneySpan>{props.jsonArr.almoney}</AlmoneySpan>
          </AlmoneyDiv>
        </div>
        <QBoxTop head={props.jsonArr.head} seqComponent={props.jsonArr.seqComponent} ></QBoxTop>
        <Contents contents={props.jsonArr.contents}></Contents>
        <LangTransBox></LangTransBox>
        <ReplyBox replyToggle={replyToggle} setReplyToggle={setReplyToggle} replyCount={replyCount}></ReplyBox>
        <ReplyList replyToggle={replyToggle}></ReplyList>

        <div className="overlay">
        </div>
    </MainDiv>
  );
}

export default Box;
