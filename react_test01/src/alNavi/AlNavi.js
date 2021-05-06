import styled from 'styled-components';
import React, { useEffect, useRef } from 'react';
import NaviItem from './naviItem/NaviItem';

const MySpaceItems = { ko : [
    { key: 0, val: "정보", href: "/member/myInfo" },
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
            href:"", val: "닉네임 검색", click: "search", bar:true },
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
            bar={navi.bar}
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

const useClick = (onClick) => {
    if (!typeof onClick !== "function") {
      return;
    }
    const element = useRef();
    useEffect(() => {
      if (element.current) {
        element.current.addEventListener("click", onClick);
      }
      return () => {
        if (element.current) {
          element.current.removeEventlistener("click", onClick);
        }
      };
    }, []);
    return element;
  };

function AlNavi(props) {
    //내부 텍스트 부분들 전부 data 받아서 이용하는 형식으로 수정 필요

    const clickedNavi = (e) => {
        props.setClicked(false);
        props.setShowNavi(true);
        e.stopPropagation();
    }

    const closedNavi = (e) => {
        props.setClicked(true);
        props.setShowNavi(false);
        e.stopPropagation();
    }

    const handleClick = useClick(clickedNavi);

    useEffect(()=>{
        if(props.clicked === true){
            props.setShowNavi(false);
        }
    },[props.clicked]);

    if( props.user.seq === 0 ){
        return <AlNaviNav         
        show={props.show} 
        ref={handleClick} 
        onClick={e => clickedNavi(e)}>
            <NavDiv>
                <NavTop>
                    <CloseBtn onClick={e => closedNavi(e)}>
                        <CloseLeft></CloseLeft>
                        <CloseRight></CloseRight>
                    </CloseBtn>
                </NavTop>
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
        <AlNaviNav 
        show={props.show} 
        ref={handleClick} 
        onClick={e => clickedNavi(e)}
        >
            <NavDiv>
                <NavTop>
                    <CloseBtn onClick={e => closedNavi(e)}>
                        <CloseLeft></CloseLeft>
                        <CloseRight></CloseRight>
                    </CloseBtn>
                </NavTop>
                <NavProfileDiv>
                    <NavProfileDivLogin>
                        <ManageAccount>
                            <ModifyDiv href="/member/myJoin">계정 관리</ModifyDiv>
                        </ManageAccount>    
                        <UserInfo>
                            <LoginFigure>
                                <LoginFigureDiv>
                                    <LoginFigureImg src="/Uploadfile/Profile/image.png"></LoginFigureImg>
                                </LoginFigureDiv>
                                <LoginFigcaption>나비천사</LoginFigcaption>
                            </LoginFigure>
                            <InfoDiv>
                                <InfoDivLocate href="/member/myInfo">
                                    <InfoH2>알통1234</InfoH2>
                                    <InfoP>
                                        <InfoSpan>질문순위 5,018위</InfoSpan>
                                        <InfoSpan>답변순위 1,025위</InfoSpan>
                                    </InfoP>
                                </InfoDivLocate>
                            </InfoDiv>
                        </UserInfo>
                    </NavProfileDivLogin>
                </NavProfileDiv>
                <SlideUl>
                    {ItemLists("ko")}
                </SlideUl>
            </NavDiv>
        </AlNaviNav>
    );
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

const UserInfo = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
  `;
const AlNaviNav = styled.nav`
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    transform:${props => props.show ? 'translateX(0)' : 'translateX(-100%)'};
    transform-origin:left;
    transition : transform 0.5s ease-in-out; 
`;
const NavDiv = styled.div`
&{
    height: 100%;
    width: 370px;
    background: #fff;
    box-shadow: 2px 2px 2px 2px rgb(0 0 0 / 10%);
    transition: all 0.5s;

    @media only screen and (max-width: 768px){
        width: 320px;
    }
}
`;
const NavTop = styled.div`
    width: 100%;
    height: 35px;
    background: linear-gradient( 
    90deg
    , rgba(255, 255, 255, 0) -58.89%, rgb(253, 0, 49) 101.94% );
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 5px;
`;
const CloseBtn = styled.div`
    width: 20px;
    height: 20px;
    position: relative;
    cursor: pointer;
`;
const CloseLeft = styled.i`
    display: block;
    width: 2px;
    height: 22px;
    background: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
`;
const CloseRight = styled(CloseLeft)`
    transform: translate(-50%, -50%) rotate(-45deg);
`;
const NavProfileDiv = styled.div`
    width: 100%;
    height: 150px;
    padding: 5px;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
`;
const NavProfileDivLogin = styled.div`
    width: 100%;
    height: 100%;
`;
const ManageAccount = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;
const ModifyDiv = styled.a`
    display: inline-block;
    text-decoration:none;
    color:#333;
    font-size: 10px;
    padding: 1px 5px 2px 16px;
    border: 1px solid rgb(51, 51, 51);
    border-radius: 20px;
    background: url(/pub/css/mainico/modify.svg) 7px 4px no-repeat;
    cursor: pointer;
`;

const LoginFigure = styled.figure`
    width: 30%;
    height: 100px;
    display:flex;
    flex-flow:column wrap;
    justify-content:center;
    align-items:center;
`;
const LoginFigureDiv = styled.div`
    width: 60px;
    height: 60px;
`;
const LoginFigureImg = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
`;
const LoginFigcaption = styled.figcaption`
    width:50%;
    min-width: 45px;
    padding: 2px;
    margin:5px auto 0;
    font-size: 10px;
    text-align: center;
    border-radius: 15px;
    border: 1px solid #fd0031;
    color: #fd0031;
    cursor: pointer;
`;
const InfoDiv = styled.div`
    width: 70%;
    height: 100px;
    padding: 10px;
    display:flex;
    justify-content:center;
    align-items:center;
`;
const InfoDivLocate = styled.a`
    display:block;
    width: 90%;
    cursor: pointer;
    text-decoration:none;
    color:#333;
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
    :last-child{
        margin-right:0;
    }
`;

const SlideUl = styled.ul`
    margin-right: 10px;
`;

export default AlNavi;