import styled from 'styled-components';

const MainDiv = styled.div`
  margin-bottom: 10px;
  position: relative;
`;

const OriginDiv = styled.div`
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
`;

const LangDiv = styled.div`
  display: inline-block;
  width: 48px;
  height: 48px;
  line-height: 46px;
  float: left;
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

const LangViewDiv = styled.div`
  padding: 0 20px 0 0;
  height: 46px;
  float: left;
  position: relative;
`;

const LangViewUl = styled.ul`
  margin: 0;
  padding: 0;
  display: inline-block;
  margin-left: 5px;
  height: 100%;
  text-align: justify;
  width: auto;
  background: #fff;
  border-radius: 0;
  border: 0;
  margin-bottom: 0;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
`;

const LangViewList = styled.li`
  text-align: left;
  display: block;
  width: auto;
  margin: 0;
  color: #888;
  white-space: nowrap;
  list-style: none;
  padding: 0;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
`;

const LangViewImg = styled.img`
display: inline-block;
width: 10px;
color: #888;
white-space: nowrap;
text-align: left;
list-style: none;
font-size: 16px;
`;

const LangViewSpan = styled.span`
display: inline-block;
    font-size: 13px;
    text-align: left;
    color: #888;
    white-space: nowrap;
    list-style: none;
`;


function LangTransBox() {
    return (
      <MainDiv className="LangTransBox">
        <OriginDiv>원문</OriginDiv>
        <LangAIDiv>
            <LangDiv>AI</LangDiv>
            <LangViewDiv>
                <LangViewUl>
                    <LangViewList>
                        <LangViewImg src={process.env.PUBLIC_URL + '/test_source/icon_view.svg'}></LangViewImg>
                        <LangViewSpan>0</LangViewSpan>
                    </LangViewList>
                </LangViewUl>
                <dl></dl>
            </LangViewDiv>
        </LangAIDiv>
      </MainDiv>
    );
  }
  
  export default LangTransBox;
  