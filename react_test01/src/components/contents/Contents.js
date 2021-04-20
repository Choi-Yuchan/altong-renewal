import styled from 'styled-components';
import React, { useState } from 'react';
import Nbsp from '../functions/nbsp/Nbsp';
import ReactDOMServer from 'react-dom/server';

// http://125.7.228.198/answer/answerList?Seq=266098&CurPageName=bestList&Section1=0&src_Sort=Seq&src_OrderBy=DESC&SP=&ticketQueChk=

function QorA(props){
  const isShow = props.seqComponent;
  if(isShow === 'A'){
    return (
      <ContentsP2 isShow={isShow} onClick={props.onClick2}>
        <div dangerouslySetInnerHTML={{__html: props.contents}}></div>
        <DelSpan setMessage={props.setMessage}
          setOpen={props.setOpen} allMessage={props.allMessage} open={props.open}></DelSpan>
        <CustomView isView={props.openAnswer}></CustomView>
      </ContentsP2>
    );
  }
  return (
    <>
      {/* <ContentsP>
        {props.contents}
      </ContentsP> */}
      <ContentsP dangerouslySetInnerHTML={{__html: props.contents}}>
      </ContentsP>
    </>
  );
}

function Contents(props) {
  const [open, setOpen] = useState('열고~ㅇ');

  return (
      <MainDiv className="Contents">
        <QorA onClick2={() => { props.setOpenAnswer('open'); props.setMessage(props.allMessage);
        setOpen(''); } }
          setOpen={setOpen} contents={props.contents} allMessage={props.allMessage} open={open}
          openAnswer={props.openAnswer} seqComponent={props.seqComponent} > </QorA>

      </MainDiv>
  );
}

export default Contents;


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
  height:auto;
  
  /* transition-property: height;
  transition-duration: 1s; */
`;
const ContentsP2 = styled.p`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  word-break: break-all;
  font-size: 15px;
  height:auto;
  
  max-height: ${props => props.row ? 0: '10000px'};
  transition-duration: 1s;
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

const NomalP = styled.p`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
`

function CustomView(props){
  const isView = props.isView;
  if (isView === "open"){
    return <LangImgNone src={process.env.PUBLIC_URL + 
      '/test_source/language.svg'}></LangImgNone>
  }
  return <LangImg src="/Common/images/language.svg"></LangImg>
}

function DelSpan(props){
  const isOpen = props.open;
  if(isOpen === '열고~ㅇ'){
    return <ContentsSpan>{props.open}</ContentsSpan>;
  }
  return <span></span>;
}
