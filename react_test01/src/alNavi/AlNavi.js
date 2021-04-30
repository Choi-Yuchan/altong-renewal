import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NaviItem from './naviItem/NaviItem';

const MySpaceItems = { ko : [
    { key: 0, val: "활동", href: "/member/myInfo" },
    { key: 1, val: "알뱅크", href: "/member/bank/index" },
    { key: 2, val: "출금신청", href: "/alpay/user/sub/exchange" },
    { key: 3, val: "관심분야", href: "/member/interest/myInterest" },
    { key: 4, val: "찜", href: "/member/myZzim" },
    { key: 5, val: "멘토/멘티", href: "/member/myPartner?FlagPartner=M" },
    { key: 6, val: "친구/쪽지 차단", href: "/member/myFriend" },
    { key: 7, val: "쪽지", href: "/message/message" },
]
}

const NaviItems = { ko : [ 
        { key: 0, img:"/pub/css/mainico/alert.svg" , 
            href:"/member/alarm/alarm", val: "알림", count: 120, i:true },
        { key: 1, img:"/pub/css/mainico/mypage.svg" , 
            href:"", val: "나의 공간", click: "mySpace", mini: MySpaceItems },
        { key: 2, img:"/pub/css/mainico/nicksearch.svg" , 
            href:"", val: "닉네임 검색", click: "search" },
        { key: 3, img:"/pub/css/mainico/myRecommend.svg" , 
            href:"/member/myRecommend", val: "추천인/ANSWERer" },
        { key: 4, img:"/pub/css/mainico/rangking.svg" , 
            href:"/question/rankQuestion", val: "랭킹" },
        { key: 5, img:"/pub/css/mainico/event.svg" , 
            href:"/question/eventList", val: "이벤트" },
        { key: 6, img:"/pub/css/mainico/userGuide.svg" , 
            href:"/default/userGuide", val: "이용안내" },
        { key: 7, img:"/pub/css/mainico/headphones_33.svg" , 
            href:"/default/cs/customerService", val: "고객센터" },
        { key: 8, img:"/pub/css/mainico/keypress.svg" , 
            href:"", val: "Keysound off", click:"press" }
    ]
}


const ItemLists = (lang) => {
    return NaviItems[lang].map( (navi) => {
        return <NaviItem
            key={navi.key} img={navi.img} href={navi.href} val={navi.val} 
            count={navi.count} i={navi.i} click={navi.click} mini={navi.mini}
        ></NaviItem>
    } ).sort(function(a, b){
        return a.key - b.key;
    } );
}
const NotLoginItemLists = (lang) => {
    return NaviItems[lang].map( (navi) => {
        return <NaviItem
            key={navi.key} img={navi.img} href={navi.href} val={navi.val} 
            count={navi.count} i={navi.i} click={navi.click} mini={navi.mini}
        ></NaviItem>
    } ).sort(function(a, b){
        return a.key - b.key;
    } ).filter((val) => {
        return val.key > 3
    });
}

const NotLogInfo = styled.div`
    width: 100%;
    height: 150px;
    padding: 25px 0 5px;
    position: relative;
`;
const NotLogDiv = styled.div`
    text-align: center;
    padding: 10px;
    display: block;
`;
const NotLogLi = styled.li`
    display: inline-block;
    list-style: none;
`;
const NotLogLiA1 = styled.a`
    display: block;
    padding: 5px 18px;
    border: 1px solid #fd0031;
    border-radius: 36px;
    color: #fd0031;
    font-weight: bold;
    font-size: 13px;
    margin-top: 20px;
    text-decoration: none;
`;
const NotLogLiA2 = styled.a`
    border: 1px solid #333;
    color: #333;
    display: block;
    padding: 5px 18px;
    border-radius: 36px;
    font-weight: bold;
    font-size: 13px;
    margin-top: 20px;
`;

function AlNavi(props) {
    const [open, setOpen] = useState(0);
    useEffect(()=>{
        if(props.white === true){
            props.setShowNavi(false);
        }
    },[props.white]);

    if( props.user.seq === 0 ){
        return <AlNaviNav show={props.show} onClick={(e) => {
            props.setWhite(false);
            props.setShowNavi(true);
            e.stopPropagation();
        }}>
            <NavDiv>
                <Navh1>
                    <Navh1Div>
                        <Navh1Divi1></Navh1Divi1>
                        <Navh1Divi2></Navh1Divi2>
                    </Navh1Div>
                    
                </Navh1>
                <NotLogInfo>
                    <NotLogDiv>
                        <h3>로그인이 필요합니다.</h3>
                        <ul>
                            <NotLogLi>
                                <NotLogLiA1 href="/default/login">로그인</NotLogLiA1>
                            </NotLogLi>
                            <NotLogLi>
                                <NotLogLiA2 href="/default/joinRule">회원가입</NotLogLiA2>
                            </NotLogLi>
                        </ul>
                    </NotLogDiv>
                </NotLogInfo>
                <ul>
                    {NotLoginItemLists("ko")}
                </ul>
            </NavDiv>

        </AlNaviNav>
    }
  
    return (
        <AlNaviNav show={props.show} onClick={(e) => {
            props.setWhite(false);
            props.setShowNavi(true);
            e.stopPropagation();
        }}>
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
                                <InfoH2>알통</InfoH2>
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
                    {ItemLists("ko")}
                </SlideUl>
  
            </NavDiv>
        </AlNaviNav>
    );
  }
  
  export default AlNavi;

const AlNaviNav = styled.nav`
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    display: ${props => props.show ? "block" : "none"};
`;
const NavDiv = styled.div`
&{
    height: 100%;
    width: 370px;
    background: #fff;
    box-shadow: 2px 2px 2px 2px rgb(0 0 0 / 10%);
    position: fixed;
    top: 0;
    z-index: 999;
    transition: all 0.5s;

    @media only screen and (max-width: 768px){
        width: 320px;
    }
}
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
    margin-bottom: 8px;
    width: 100%;
    font-size: 18px;

    @media only screen and (max-width: 768px){
        font-size: 16px;
    }
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






