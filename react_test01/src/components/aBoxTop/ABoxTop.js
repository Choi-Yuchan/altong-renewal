import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import MiniProfile from '../miniProfile/MiniProfile'
import QuestionPopup from '../questionPopup/QuestionPopup'
import Num3Comma from '../functions/num3comma/Num3Comma'

const MainDiv = styled.div`
  position: relative;
  padding-left: 75px;
  margin-bottom: 40px;
  margin-top: 10px;
`;
const HeadFigure = styled.figure`
  margin: 0;
  overflow: visible;
  display: inline-block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  z-index: 1;
  cursor: pointer;
`;
const HeadFigureImg = styled.img`
  border-radius: 50%;
  width: 100%;
`;
const HeadFigureFigcaption = styled.figcaption`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 14px;
  font-weight: 500;
  color: #666;
  letter-spacing: -0.5px;
  cursor: pointer;
`;
const WrapUl = styled.ul`
  margin: 0;
  padding: 0;
  display: inline-block;
  width: 80%;
`;
const Wrapli = styled.li`
  list-style: none;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  font-size: 16px;
  font-family: "Noto Sans KR", "Noto Sans JP", "Noto Sans HK", "Noto Sans SC", "Noto Sans TC", sans-serif;
  color: #333;
`;
const WrapSpan = styled.span`
  display: inline-block;
  text-align: center;
  font-size: 10px;
  padding: 1px 5px;
  border: 1px solid #fd0031;
  color: #fd0031;
  border-radius: 10px;
  position: relative;
  top: -1px;
  list-style: none;
`;
const WrapStrong = styled.strong`
  margin-left: 10px;
  padding: 0;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  font-size: 18px;
`;
const WrapThankli = styled.li`
  margin-top: 7px;
  font-size: 12px;
  color: #666;
  list-style: none;
`;
const WrapB = styled.b`
  color: #fd8d0d;
`;
const DateDiv = styled.b`
  display: inline-block;
  position: relative;
  cursor: pointer;
  margin-right: 4px;
`;
const Datespan = styled.span`
&{
  width: 175px;
  position: absolute;
  top: 140%;
  left: 50%;
  transform: translateX(-50%);
  background: #666;
  color: #fff;
  text-align: center;
  border: 0;
  font-size: 12px;
  letter-spacing: 0;
  padding: 1px 5px;
  border-radius: 10px;
}
&:after{
  content: "";
  display: block;
  width: 10px;
  height: 10px;
  background: #666;
  position: absolute;
  top: -5px;
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  z-index: -1;
}
`;
const BtnBox = styled.div`
  width: 10px;
  padding-left: 2px;
  cursor: pointer;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  z-index: 5;
`;
const BtnBoxI = styled.i`
  display: block;
  width: 4px;
  height: 4px;
  background: #aaa;
  border-radius: 50%;
  margin-bottom: 3px;
`;
const HeadFigureLocaleImg = styled.img`
  border-radius: 0;
  width: 22px;
  display:inline-block;
  vertical-align:middle;
  margin-right:3px;
  margin-top:-2px;
`;
const ViewCountImg = styled.img`
  margin-bottom: -2px;
  margin-right: 2px;
`;
const ViewCountReplyImg = styled.img`
  margin-bottom: -4px;
  margin-left: 2px;
  margin-right: 2px;
`;

function TimeToggler(props) {
  if(props.timeToggle !== true ){
    return <> 1시간 전 · <Datespan>2021-03-22 10:23:47 UTC+9</Datespan> </>
  }
  return <>  1시간 전 · </>
}

const UlvText = (props) => {
  const LV=['알천사','나비천사','미소천사','열혈천사','황금천사','수호천사','빛의천사','천사장','대천사','대천사장','알통폐인'];
  return LV[props];
}
function OpenAnswerView(props){
  if(props.openAnswer === 'close'){
    return <>
      <ViewCountReplyImg src={process.env.PUBLIC_URL + '/test_source/icon_reply.svg'}></ViewCountReplyImg>{props.replyCount}
    </>
  }
  return '';
}

// atm_top_wrap
function ABoxTop(props) {
  const [timeToggle, setTimeToggle] = useState(true);
  const [popToggle, setPopToggle] = useState(false);
  const [showMini, setShowMini] = useState(false);

  useEffect(() => {
    if(props.clicked === true){
      setShowMini(false);
    }
  }, [props.clicked]);

  useEffect(() => {
    if(props.white === true){
      setShowMini(false);
      setPopToggle(false);
    }
  }, [props.white]);

  return (
    <MainDiv className="ABoxTop">
      <HeadFigure onClick={(e) => {
        props.setClicked(false);
        setShowMini(true);
        e.stopPropagation();
      }}>
        <HeadFigureImg src={process.env.PUBLIC_URL + props.head.profile}></HeadFigureImg>
        <HeadFigureFigcaption>{props.head.locale}</HeadFigureFigcaption>
      </HeadFigure>
      <WrapUl>
        <Wrapli>
        <HeadFigureLocaleImg src={process.env.PUBLIC_URL + '/test_source/'
          +props.head.locale+'.svg'}>
            </HeadFigureLocaleImg><WrapSpan>{UlvText(props.head.uLv)}</WrapSpan>
          <WrapStrong className="prgNickname_Q">{props.head.nick}님의 답변입니다.</WrapStrong></Wrapli>
        <WrapThankli>답변 채택률<WrapB>{props.head.persent}%</WrapB> · <DateDiv onBlur={()=>{ setTimeToggle(true) }}
          onClick={() => {
            setTimeToggle(!timeToggle);
            }}><TimeToggler timeToggle={timeToggle}></TimeToggler></DateDiv>
        <ViewCountImg src={process.env.PUBLIC_URL + '/test_source/icon_view.svg'}></ViewCountImg><Num3Comma num={props.head.readCount}></Num3Comma>
        <OpenAnswerView replyCount={props.replyCount} openAnswer={props.openAnswer} ></OpenAnswerView>
        </WrapThankli>
      </WrapUl>
      <BtnBox onClick={(e) => {
        setPopToggle(!popToggle);
        props.setWhite(false);
        e.stopPropagation();
        }}>
        <BtnBoxI></BtnBoxI>
        <BtnBoxI></BtnBoxI>
        <BtnBoxI></BtnBoxI>
        <QuestionPopup popToggle={popToggle}></QuestionPopup>
      </BtnBox>
      <MiniProfile mini={props.mini} showMini={showMini} clicked={props.clicked} setShowMini={setShowMini}></MiniProfile>
    </MainDiv>
  );
  }
  
  export default ABoxTop;
  