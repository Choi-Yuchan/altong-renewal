import styled from 'styled-components';

const MainDiv = styled.div`
  margin-bottom: 10px;
  position: relative;
`;

const OriginDiv = styled.div`
&{
  border: 2px solid #ff3300;
  color: #f30;
  display: inline-block;
  width: 50px;
  line-height: 46px;
  font-weight: 500;
  position: relative;
  margin-left: 0;
  cursor: pointer;
  height: 50px;
  border-radius: 30px;
  font-size: 16px;
  text-align: center;
  vertical-align: middle;
  transition: all 0.3s;
  white-space: nowrap;
  margin: 0;
  padding: 0;
}
&:after{
  content: "";
  display: block;
  width: 2px;
  height: 50%;
  background: #aaa;
  position: absolute;
  top: 50%;
  right: -18px;
  transform: translateY(-50%);
}
  
`;

const LangDiv = styled.div`
  float: left;
  display: inline-block;
  width: 48px;
  height: 48px;
  line-height: 46px;
  cursor: pointer;
`;

const LangAIDiv = styled.div`
  display: inline-block;
  height: 50px;
  border-radius: 30px;
  color: #999;
  font-size: 16px;
  text-align: center;
  vertical-align: middle;
  margin-left: 25px;
  transition: all 0.3s;
  white-space: nowrap;
  border: 2px solid #999;
`;


function LangTransBox() {
    return (
      <MainDiv className="LangTransBox">
        <OriginDiv>원문</OriginDiv>
        <LangAIDiv>
            <LangDiv>AI</LangDiv>
        </LangAIDiv>
      </MainDiv>
    );
  }
  
  export default LangTransBox;
  