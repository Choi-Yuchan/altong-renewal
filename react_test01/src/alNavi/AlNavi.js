import styled from 'styled-components';
import React, { useState } from 'react';
import axios from 'axios';

const AlNaviNav = styled.nav`
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
`;
const NavDiv = styled.div`
    height: 100%;
    width: 370px;
    overflow-y: scroll;
    background: #fff;
    box-shadow: 2px 2px 2px 2px rgb(0 0 0 / 10%);
    position: fixed;
    top: 0;
    z-index: 999;
    transition: all 0.5s;
`;
const Navh1 = styled.h1`
    width: 100%;
    height: 35px;
    background: linear-gradient( 
    90deg
    , rgba(255, 255, 255, 0) -58.89%, rgb(253, 0, 49) 101.94% );
    position: relative;
`;
const Navh1Div = styled.div`
    width: 20px;
    height: 20px;
    position: absolute;
    top: 50%;
    right: 5px;
    transform: translateY(-50%);
    cursor: pointer;
`;
const Navh1Divi1 = styled.i`
    display: block;
    width: 2px;
    height: 22px;
    background: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
`;
const Navh1Divi2 = styled.i`
    display: block;
    width: 2px;
    height: 22px;
    background: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-45deg);
`;
const NavProfileDiv = styled.div`
    width: 100%;
    height: 150px;
    padding: 25px 0 5px;
    position: relative;
`;
const NavProfileDivLogin = styled.div`
    display: block;
    width: 100%;
    height: 100%;
`;
const LoginFigure = styled.figure`
    width: 30%;
    height: 100px;
    float: left;
    position: relative;
`;
const LoginFigureDiv = styled.div`
    width: 30%;
    height: 100px;
    float: left;
    position: relative;
`;
const LoginFigureDivImg = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 50%;
    transform: translate(-50%, -50%);
`;
const LoginFigcaption = styled.figcaption`
    min-width: 45px;
    padding: 0 5px 2px 5px;
    font-size: 10px;
    text-align: center;
    border-radius: 15px;
    border: 1px solid #fd0031;
    color: #fd0031;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    letter-spacing: -1px;
    cursor: pointer;
`;
const InfoDiv = styled.div`
    width: 70%;
    float: right;
    height: 100px;
    padding: 0 10px 10px 10px;
    position: relative;
`;
const InfoDivLocate = styled.div`
    width: 90%;
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
`;
const InfoH2 = styled.h2`
    width: 90%;
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
`;
const InfoP = styled.p`
    font-size: 12px;
`;
const InfoSpan = styled.span`
    margin-right: 10px;
`;
const ModifyDiv = styled.div`
    display: inline-block;
    font-size: 10px;
    padding: 0 5px 1px 17px;
    border: 1px solid rgb(51, 51, 51);
    border-radius: 20px;
    background: url(/pub/css/mainico/modify.svg) 7px 4px no-repeat;
    position: absolute;
    top: 7px;
    right: 10px;
    cursor: pointer;
`;
const SlideUl = styled.ul`
    margin-right: 10px;
`;

function Contents(props) {
  const [open, setOpen] = useState(0);

  return (
      <AlNaviNav>
          <NavDiv>
              <Navh1>
                  <Navh1Div>
                      <Navh1Divi1></Navh1Divi1>
                      <Navh1Divi2></Navh1Divi2>
                  </Navh1Div>
              </Navh1>
              <NavProfileDiv>
                  <NavProfileDivLogin>
                      <LoginFigure>
                          <LoginFigureDiv>
                              <LoginFigureDivImg></LoginFigureDivImg>
                          </LoginFigureDiv>
                          <LoginFigcaption>나비천사</LoginFigcaption>
                      </LoginFigure>
                      <InfoDiv>
                          <InfoDivLocate>
                              <InfoH2>커피낙타</InfoH2>
                              <InfoP>
                                <InfoSpan>질문순위 5,018위</InfoSpan>
                                <InfoSpan>답변순위 1,025위</InfoSpan>
                              </InfoP>
                          </InfoDivLocate>
                      </InfoDiv>
                      <ModifyDiv>정보 수정</ModifyDiv>
                  </NavProfileDivLogin>
              </NavProfileDiv>
              <SlideUl>

              </SlideUl>
              
          </NavDiv>
      </AlNaviNav>
  );
}

export default Contents;





