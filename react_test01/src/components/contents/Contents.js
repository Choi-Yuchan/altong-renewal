import styled from 'styled-components';

const MainDiv = styled.div`
  padding: 0 10px;
  margin: 20px 0 30px;
  word-break: break-all;
  font-size: 15px;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
`;

const ContentsP = styled.p`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  word-break: break-all;
  font-size: 15px;
`;



function Contents() {
  return (
    <MainDiv className="Contents">
        <ContentsP>지방간에 좋은 음식은 어떤 음식이 있을까요</ContentsP>
    </MainDiv>
  );
}

export default Contents;
