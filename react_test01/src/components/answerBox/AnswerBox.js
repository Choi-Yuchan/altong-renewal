import styled from 'styled-components';
import React, { useState } from 'react';

import ABoxTop from '../aBoxTop/ABoxTop';
import Contents from '../contents/Contents';
import LangTransBox from '../langTransBox/LangTransBox';
import ReplyBox from '../replyBox/ReplyBox';
import ReplyList from '../replyList/test';
import AUnBoxBottom from '../AUnBoxBottom/AUnBoxBottom';
import AltongEtimate from '../altongEtimate/AltongEtimate';

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

const AlmoneyDiv = styled.div`
  display: inline-block;
  cursor: pointer;
  position: relative;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
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

const replyCount = (replys) => {
  return replys.length
}


function OpenDiv(props){
  if(props.openAnswer === 'open'){
    return (
      <>
      <AltongEtimate etimate={props.etimate}></AltongEtimate>
      <LangTransBox></LangTransBox>
      <ReplyBox replyToggle={props.replyToggle} replyCount={props.replyCount} setReplyToggle={props.setReplyToggle}
       good={props.good} bad={props.bad}
      ></ReplyBox>
      <ReplyList USER={props.USER}  replyToggle={props.replyToggle} 
        white={props.white} setWhite={props.setWhite}
        replys={props.replys}></ReplyList>
      </>
    );
  }
  return <AUnBoxBottom></AUnBoxBottom>
}

// white={props.white} setWhite={props.setWhite}

function AnswerBox(props) {
  const [replyToggle, setReplyToggle] = useState(true);
  const [openAnswer, setOpenAnswer] = useState('close');
  const [message, setMessage] = useState(props.jsonArr.contents.substr(0,93)+'...');

  return (
    <MainDiv className="Box">
        {/* atm_top_wrap */}
        <div>
          <AlmoneyDiv>
            <AnswerAlmoneyImgB src={process.env.PUBLIC_URL + '/test_source/answer_almoney.svg'}></AnswerAlmoneyImgB>
            <AlmoneySpan>{props.jsonArr.almoney}</AlmoneySpan>
          </AlmoneyDiv>
        </div>
        <ABoxTop head={props.jsonArr.head} mini={props.jsonArr.mini}
          clicked={props.clicked} setClicked={props.setClicked}
          white={props.white} setWhite={props.setWhite}
          ></ABoxTop>
        <Contents contents={message} setOpenAnswer={setOpenAnswer} 
          openAnswer={openAnswer} seqComponent={props.jsonArr.seqComponent}
          setMessage={setMessage} allMessage={props.jsonArr.contents}></Contents>
        <OpenDiv className="OpenDiv" replyToggle={replyToggle}
          replyCount={replyCount(props.jsonArr.replys)}
          setReplyToggle={setReplyToggle} replys={props.jsonArr.replys}
          openAnswer={openAnswer}  good={props.jsonArr.good} bad={props.jsonArr.bad}
          USER={props.USER} etimate={props.jsonArr.etimate}
          white={props.white} setWhite={props.setWhite}
        ></OpenDiv>
        <div className="overlay">
        </div>
    </MainDiv>
  );
}

export default AnswerBox;
