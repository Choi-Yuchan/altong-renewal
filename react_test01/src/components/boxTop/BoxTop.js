import styled from 'styled-components';

import MiniProfile from '../miniProfile/MiniProfile'

const MainDiv = styled.div`
  position: relative;
  padding-left: 130px;
  
`;

const HeadFigure = styled.figure`
  margin: 0;
  overflow: visible;
  display: inline-block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  z-index: 1;
  cursor: pointer;
`;

const HeadFigureImg = styled.img`
  border-radius: 50%;
  width: 100%;
`;

const HeadFigureFigcaption = styled.figcaption`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 14px;
  font-weight: 500;
  color: #666;
  letter-spacing: -0.5px;
  cursor: pointer;
`;

const HeadH2 = styled.h2`
  display: inline-block;
  text-align: center;
  font-size: 43px;
  color: #fd0031;
  position: absolute;
  top: 50%;
  left: 70px;
  transform: translateY(-50%);
`;

const HeadSpan = styled.span`
  background: #ffee75;
  color: #333;
  display: block;
  font-size: 11px;
  padding: 2px 8px;
  border-radius: 15px;
  margin-top: 3px;
`;

const WrapUl = styled.ul`
  display: inline-block;
  width: 80%;
`;

const Wrapli = styled.li`
  list-style: none;
`;

const WrapSpan = styled.span`
  display: inline-block;
  text-align: center;
  font-size: 10px;
  padding: 1px 5px;
  border: 1px solid #fd0031;
  color: #fd0031;
  border-radius: 10px;
  position: relative;
  top: -1px;
  list-style: none;
`;

const WrapStrong = styled.strong`
  color: #fc5a85;
  display: inline-block;
  margin-right: 2px;
  margin-left: -1px;
`;

const WrapTitleli = styled.li`
  font-size: 20px;
  font-weight: bold;
  list-style: none;
`;

const WrapThankli = styled.li`
  font-size: 12px;
  color: #666;
  list-style: none;
`;

const WrapB = styled.b`
  color: #fd8d0d;
`;

const DateDiv = styled.b`
  display: inline-block;
  position: relative;
  cursor: pointer;
`;

const Datespan = styled.span`
  width: 175px;
  position: absolute;
  top: 140%;
  left: 50%;
  transform: translateX(-50%);
  background: #666;
  color: #fff;
  text-align: center;
  border: 0;
  font-size: 12px;
  letter-spacing: 0;
  padding: 1px 5px;
  border-radius: 10px;
`;

const BtnBox = styled.div`
  width: 10px;
  padding-left: 2px;
  cursor: pointer;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  z-index: 5;
`;

const BtnBoxI = styled.i`
  display: block;
  width: 4px;
  height: 4px;
  background: #aaa;
  border-radius: 50%;
  margin-bottom: 3px;
`;

const HeadFigureLocaleImg = styled.img`
  border-radius: 0;
  width: 40%;
  position: absolute;
  bottom: 0;
  right: 0;
`;




// atm_top_wrap
function BoxTop() {
    return (
      <MainDiv className="BoxTop">
        <HeadFigure>
          <HeadFigureImg src={process.env.PUBLIC_URL + '/test_source/10010006.png'}></HeadFigureImg>
          <HeadFigureLocaleImg src={process.env.PUBLIC_URL + '/test_source/KOR.svg'}></HeadFigureLocaleImg>
          <HeadFigureFigcaption>KOR</HeadFigureFigcaption>
        </HeadFigure>
        <HeadH2>Q.<HeadSpan className="yellow" >100</HeadSpan></HeadH2>
        <WrapUl>
          <Wrapli>
            <WrapSpan>수호천사</WrapSpan>
            <WrapStrong className="prgNickname_Q">똑똑똑</WrapStrong>님의 질문입니다.</Wrapli>
          <WrapTitleli>지방간에 좋은 음식은 어떤 음식이 있을까요</WrapTitleli>
          <WrapThankli>감사알 지급률<WrapB>100%</WrapB> · <DateDiv>1시간 전<Datespan>2021-03-22 10:23:47 UTC+9</Datespan></DateDiv>
          <img></img>8</WrapThankli>
        </WrapUl>
        <BtnBox>
          <BtnBoxI></BtnBoxI>
          <BtnBoxI></BtnBoxI>
          <BtnBoxI></BtnBoxI>
        </BtnBox>
        <MiniProfile></MiniProfile>
      </MainDiv>
    );
  }
  
  export default BoxTop;
  