import React, { useState } from 'react';
import styled from 'styled-components';

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
  if (isView == "open"){
    return <LangImgNone src={process.env.PUBLIC_URL + '/test_source/language.svg'}></LangImgNone>
  }
  return <LangImg src={process.env.PUBLIC_URL + '/test_source/language.svg'}></LangImg>
}

function Contents(props) {
  const [openAnswer, setOpenAnswer] = useState('close');

  return (
    <MainDiv className="Contents">
        <ContentsP>{props.message}
        <ContentsSpan onClick={() => setOpenAnswer('open')}>열고~ㅇ{openAnswer}</ContentsSpan>
        <CustomView isView={openAnswer}></CustomView>
        </ContentsP>
        
    </MainDiv>
  );
}

export default Contents;
