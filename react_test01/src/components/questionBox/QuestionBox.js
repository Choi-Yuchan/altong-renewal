import styled from 'styled-components';
import Box from './../box/Box'

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

function QuestionBox() {
  return (
    <MainDiv>
      <Box>
      </Box>
    </MainDiv>
  );
}

export default QuestionBox;
