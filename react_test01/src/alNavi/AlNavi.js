import styled from 'styled-components';
import React, { useEffect, useRef } from 'react';
import NaviItem from './naviItem/NaviItem';

const MySpaceItems = { ko : [
    { id: 0, val: "정보", href: "/member/myInfo" },
    { id: 1, val: "알뱅크", href: "/member/bank/index" },
    { id: 2, val: "출금신청", href: "/alpay/user/sub/exchange" },
    { id: 3, val: "관심분야", href: "/member/interest/myInterest" },
    { id: 4, val: "찜", href: "/member/myZzim" },
    { id: 5, val: "멘토/멘티", href: "/member/myPartner?FlagPartner=M" },
    { id: 6, val: "친구/쪽지 차단", href: "/member/myFriend" },
    { id: 7, val: "쪽지", href: "/message/message" },
    ]
}

const NaviItems = { ko : [ 
        { id: 0, img:"/pub/css/mainico/alert.svg" , 
            href:"/member/alarm/alarm", val: "알림", count: 120, i:true },
        { id: 1, img:"/pub/css/mainico/mypage.svg" , 
            href:"", val: "나의 공간", click: "mySpace", mini: MySpaceItems },
        { id: 2, img:"/pub/css/mainico/nicksearch.svg" , 
            href:"", val: "닉네임 검색", click: "search", bar:true },
        { id: 3, img:"/pub/css/mainico/myRecommend.svg" , 
            href:"/member/myRecommend", val: "추천인/ANSWERer" },
        { id: 4, img:"/pub/css/mainico/rangking.svg" , 
            href:"/question/rankQuestion", val: "랭킹" },
        { id: 5, img:"/pub/css/mainico/event.svg" , 
            href:"/question/eventList", val: "이벤트" },
        { id: 6, img:"/pub/css/mainico/userGuide.svg" , 
            href:"/default/userGuide", val: "이용안내" },
        { id: 7, img:"/pub/css/mainico/headphones_33.svg" , 
            href:"/default/cs/customerService", val: "고객센터" },
        { id: 8, img:"/pub/css/mainico/keypress.svg" , 
            href:"", val: "Keysound Off", sound: "Keysound On", click:"press"}
    ]
}

const langAlNavi = { 
    ko : {
        signout : ["로그인이 필요합니다.", "로그인", "회원가입"],
        signin : ["계정 관리", "로그아웃", "회원탈퇴"],
        user : [
            { id : "USER_ID", tier:"열혈천사", q_rank: "질문순위 4,078위", a_rank: "답변순위 1,024위"  }
        ],
        alt : ["프로필","로그아웃 아이콘"],
        confirm_p:"회원탈퇴는 02)330-3000으로 전화를 통해 신청을 부탁드립니다.\n참고로 회원탈퇴는 매우 신중히 결정하시기를 권해드립니다.\n탈퇴 시 회원님의 보유 알은 소멸되고 향후 계속 수익이 발생할\n경우 이 수익 역시 (주)알통에 귀속됩니다.\n만약 이후 재가입을 원하실 경우 최소 6개월 경과 후에야 가능\n하므로 탈퇴 전에 신중을 거듭하여 신청해 주십시오.\n(재가입 관련 정책은 추후 변경될 수 있습니다.)", 
    }
}

const ItemLists = (lang) => {
    return NaviItems[lang].map((navi) => 
            <NaviItem
            key={navi.id} img={navi.img} href={navi.href} val={navi.val} 
            count={navi.count} i={navi.i} click={navi.click} mini={navi.mini}
            bar={navi.bar} sound={navi.sound}
            />
        ).sort(function(a, b){
            return a.key - b.key;
        });
}

const NotLoginItemLists = (lang) => {
    return NaviItems[lang].map((navi) => 
        <NaviItem
            key={navi.id} img={navi.img} href={navi.href} val={navi.val} 
            count={navi.count} i={navi.i} click={navi.click} mini={navi.mini}
            sound={navi.sound}
        />
    ).sort(function(a, b){
        return a.key - b.key;
    }).filter((val) => {
        return val.key > 3
    });
}

const useClick = (onClick) => {
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
    if (!typeof onClick !== "function") {
        return;
      }
    return element;
  };

function AlNavi({user, show, setShowNavi, clicked, setClicked}) {
    const signOutTxt = langAlNavi.ko.signout;
    const signInTxt = langAlNavi.ko.signin;
    const userInfo = langAlNavi.ko.user;
    const altText = langAlNavi.ko.alt;
    const widMessage = langAlNavi.ko.confirm_p;

    const clickedNavi = (e) => {
        setClicked(false);
        setShowNavi(true);
        e.stopPropagation();
    }

    const closedNavi = (e) => {
        setClicked(true);
        setShowNavi(false);
        e.stopPropagation();
    }

    //회원탈퇴 기능
    const withdraw = e => {
        e.preventDefault();
        e.stopPropagation();
        const leave = window.confirm(String(widMessage));
        if(leave === true){
            return window.location.assign('/default/cs/customerService');
        }
    }

    const handleClick = useClick(clickedNavi);

    useEffect(()=>{
        if(clicked === true){
            setShowNavi(false);
        }
    },[clicked]);

    if( user.seq === 0 ){
        return <AlNaviNav         
        show={show} 
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
                        <h3>{signOutTxt[0]}</h3>
                        <ul>
                            <NotLogLi>
                                <NotLogLiA1 href="/default/login">{signOutTxt[1]}</NotLogLiA1>
                            </NotLogLi>
                            <NotLogLi>
                                <NotLogLiA2 href="/default/joinRule">{signOutTxt[2]}</NotLogLiA2>
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
        show={show} 
        ref={handleClick} 
        onClick={e => clickedNavi(e)}
        >
            <NavDiv>
                <NavTop>
                    <CloseBtn onClick={e => closedNavi(e)}>
                        <CloseLeft/>
                        <CloseRight/>
                    </CloseBtn>
                </NavTop>
                <NavProfileDiv>
                    <NavProfileDivLogin>
                        <ManageAccount>
                            <ModifyDiv href="/member/myJoin">{signInTxt[0]}</ModifyDiv>
                        </ManageAccount>    
                        <UserInfo>
                            <LoginFigure>
                                <LoginFigureDiv>
                                    <LoginFigureImg src="/Uploadfile/Profile/image.png" alt={altText[0]}/>
                                </LoginFigureDiv>
                                <LoginFigcaption>{userInfo[0].tier}</LoginFigcaption>
                            </LoginFigure>
                            <InfoDiv>
                                <InfoDivLocate href="/member/myInfo">
                                    <InfoH2>{userInfo[0].id}</InfoH2>
                                    <InfoP>
                                        <InfoSpan>{userInfo[0].q_rank}</InfoSpan>
                                        <InfoSpan>{userInfo[0].a_rank}</InfoSpan>
                                    </InfoP>
                                </InfoDivLocate>
                            </InfoDiv>
                        </UserInfo>
                    </NavProfileDivLogin>
                </NavProfileDiv>
                <ul>
                    {ItemLists("ko")}
                </ul>
                <AlNaviBot>
                    <BottomBtn href="/default/logOut">
                        <LogoutIco src="/pub/css/mainico/logout.svg" alt={altText[1]}/>
                        {signInTxt[1]}
                    </BottomBtn>
                    <BottomBtn href="#none" onClick={withdraw}>{signInTxt[2]}</BottomBtn>
                </AlNaviBot>
            </NavDiv>
        </AlNaviNav>
    );
  }

export default AlNavi;

const AlNaviNav = styled.nav`
    width: 85%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    transform:${props => props.show ? 'translateX(0)' : 'translateX(-100%)'};
    transform-origin:left;
    transition : transform 0.5s ease-in-out; 
    overflow-y:scroll;
    /* Hide scrollbar for Chrome,Safari and Opera */
    ::-webkit-scrollbar{
        display:none;
    }
    -ms-overflow-style: none; // IE and Edge
    scrollbar-width: none; // Firefox

    @media (min-width:480px){
        width: 70%;
    }
    @media(min-width: 768px){
        width: 40%;
        max-width: 400px;
    }
`;
const NavDiv = styled.div`
    min-height: 100vh;
    width: 100%;
    background: #fff;
    box-shadow: 2px 2px 2px 2px rgb(0 0 0 / 10%);
    transition: all 0.5s;
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
  :last-child{
      margin-left: 10px;
  }
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
text-decoration:none;
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
    font-size: 16px;

    @media (min-width: 768px){
        font-size: 18px;
    }
`;
const InfoP = styled.p`
    font-size: 12px;
`;
const InfoSpan = styled.div`
    @media (min-width: 600px){
        display: inline-block;
        margin-right: 10px;
        :last-child{
            margin-right: 0;
        }
    }
`;
const LogoutIco = styled.img`
    margin-right: 5px;
`;

const BottomBtn = styled.a`
    color:#333;
    text-decoration:none;
    cursor:pointer;
    font-size: 13px;
    padding: 0 10px;
    :last-child{
        color:#aaa;
        border-left: 2px solid #eaeaea;
    }
`;
const AlNaviBot = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    padding:10px;    
`;