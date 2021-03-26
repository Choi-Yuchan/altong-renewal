import styled from 'styled-components';

import Box from './../box/Box'
import TopNavi from './../topNavi/TopNavi'
import AnswerBox from './../answerBox/AnswerBox'
import FoldAnswerBox from './../foldAnswerBox/test'

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

function FoldMessage() {
  const message = "It's a good diet for fatty liver fresh vegetables, seaweed, and grains, and adequate portions of fruits. and I would recommend eating high-protein foods such as fish, tofu, skinless chicken.";
  return <FoldAnswerBox message={message}></FoldAnswerBox>;
}

function ForechRenderBox(props){
  const SSRJSON = props.SSRJSON
  const view = SSRJSON.map((val) => <Box ssrjson={SSRJSON}></Box> )
  return view
}

function QuestionBox(props) {


  return (
    <SiteDiv>
      <MainDiv>
        <TopNavi></TopNavi>
        <WrapperDiv>
          <ForechRenderBox SSRJSON={props.SSRJSON}></ForechRenderBox>
          <Box ></Box>
          <FoldMessage></FoldMessage>
          <AnswerBox></AnswerBox>
          <AnswerBox></AnswerBox>
        </WrapperDiv>
      </MainDiv>
    </SiteDiv>
  );
}

export default QuestionBox;
