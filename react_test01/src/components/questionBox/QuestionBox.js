import styled from 'styled-components';

import TopNavi from './../topNavi/TopNavi'

import BoxController from '../boxContainer/BoxContainer'

const MainDiv = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  padding-top: 60px;
  flex: 1;
  margin-bottom: 20px;
  padding: 0 5px;
  width: 800px;
  margin: 0 auto;
  
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const SiteDiv = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;

  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;

  width: 100%;
  font-size: 16px;
  font-family: "Noto Sans KR", "Noto Sans JP", "Noto Sans HK", "Noto Sans SC", "Noto Sans TC", sans-serif;
  color: #333;
  position: relative;
`;

const WrapperDiv = styled.div`
  padding-top: 60px;
  flex: 1;
  margin-bottom: 20px;
`;

// 로그인 유저에 대한 정보를 보낼지 말지 정함.

function QuestionBox(props) {

  return (
    <SiteDiv>
      <MainDiv>
        <TopNavi></TopNavi>
        <WrapperDiv>
          {/* <ForechRenderBox SSRJSON={props.SSRJSON}></ForechRenderBox> */}
          {/* 박스 컨트롤러 위치(박스마다 Q,A인지 확인하고 해당 박스를 넘겨줌) */}
          {/* <Box></Box>
          <FoldMessage></FoldMessage>
          <AnswerBox></AnswerBox>
          <AnswerBox></AnswerBox> */}
          <BoxController SSRJSON={props.SSRJSON}></BoxController>
        </WrapperDiv>
      </MainDiv>
    </SiteDiv>
  );
}

export default QuestionBox;
