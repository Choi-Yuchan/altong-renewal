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



function Contents(props) {
  return (
    <MainDiv className="Contents">
        <ContentsP>{props.contents}</ContentsP>
    </MainDiv>
  );
}

export default Contents;
