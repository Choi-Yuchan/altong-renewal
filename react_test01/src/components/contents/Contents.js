import styled from 'styled-components';
import React, { useState } from 'react';

const MainDiv = styled.div`
  padding: 0 10px;
  margin: 20px 0 30px;
  word-break: break-all;
  font-size: 15px;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
`;

const ContentsP = styled.p`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  word-break: break-all;
  font-size: 15px;
`;

const ContentsSpan = styled.span`
  display: inline-block;
  border: 1px solid #c3c2c2;
  border-radius: 5px;
  color: #656565;
  padding: 0 4px;
  letter-spacing: -0.5px;
  font-size: 12px;
  line-height: 20px;
  margin-left: 2px;
  cursor: pointer;
  margin-left: 10px;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  word-break: break-all;
`;


const LangImg = styled.img`
  display: block;
  width: 30px;
  margin-left: 15px;
  float: right;
  margin-top: 15px;
`;

const LangImgNone = styled(LangImg)`
  display: none;
`;

function CustomView(props){
  const isView = props.isView;
  if (isView === "open"){
    return <LangImgNone src={process.env.PUBLIC_URL + 
      '/test_source/language.svg'}></LangImgNone>
  }
  return <LangImg src={process.env.PUBLIC_URL + '/test_source/language.svg'}></LangImg>
}

function DelSpan(props){
  const isOpen = props.open;
  if(isOpen === '열고~ㅇ'){
    return <ContentsSpan>{props.open}</ContentsSpan>;
  }
  return <span>{props.open}</span>;
}

function QorA(props){
  const isShow = props.seqComponent;
  if(isShow === 'A'){
    return (
      <ContentsP onClick={props.onClick2}>
        {props.contents}
        <DelSpan setOpenAnswer={props.setOpenAnswer} setMessage={props.setMessage}
          setOpen={props.setOpen} allMessage={props.allMessage} open={props.open}></DelSpan>
        <CustomView isView={props.openAnswer}></CustomView>
      </ContentsP>
    );
  }
  return (
    <ContentsP> 
        {props.contents}
    </ContentsP>
  );
}


function Contents(props) {
  const [open, setOpen] = useState('열고~ㅇ');

  return (
      <MainDiv className="Contents">
        {/* <ContentsP onClick={() => { props.setOpenAnswer('open'); 
          props.setMessage(props.allMessage); setOpen(''); }}>
          {props.contents}
          <DelSpan setOpenAnswer={props.setOpenAnswer} setMessage={props.setMessage}
            setOpen={setOpen} allMessage={props.allMessage} open={open}></DelSpan>
          <CustomView isView={props.openAnswer}></CustomView>
        </ContentsP> */}
        <QorA onClick2={() => { props.setOpenAnswer('open'); props.setMessage(props.allMessage); setOpen(''); } }
        setOpen={setOpen} contents={props.contents} allMessage={props.allMessage} open={open}
        openAnswer={props.openAnswer}
        
        ></QorA>

      </MainDiv>
  );
}

export default Contents;
