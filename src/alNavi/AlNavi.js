import styled from 'styled-components';
import React, { useEffect, useRef, useState } from 'react';
import NaviItem from './naviItem/NaviItem';
import axios from 'axios';

import {useTranslation} from 'react-i18next';
import i18n from '../config/lang/i18n';

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

function AlNavi({user, show, setShowNavi, clicked, setClicked, keyToggle, setKeyToggle}) {
    const {t} = useTranslation();
    const MySpaceItems = { ko : [
        { id: 0, val: t('AlNavi_Achievements'), href: "/member/myInfo" },
        { id: 1, val: t('AlNavi_Bank'), href: "/member/bank/index" },
        { id: 2, val: t('AlNavi_Cash'), href: "/alpay/user/sub/exchange" },
        { id: 3, val: t('AlNavi_Interests'), href: "/member/interest/myInterest" },
        { id: 4, val: t('AlNavi_Bookmark'), href: "/member/myZzim" },
        { id: 5, val: t('AlNavi_Mentors'), href: "/member/myPartner?FlagPartner=M" },
        { id: 6, val: t('AlNavi_Friends'), href: "/member/myFriend" },
        { id: 7, val: t('AlNavi_Messages'), href: "/message/message" },
        ]
    }
    
    const NaviItems = { ko : [ 
            { id: 0, img:"/pub/css/mainico/alert.svg" , 
                href:"/member/alarm/alarm", val: t('AlNavi_Noification'), i:true },
            { id: 1, img:"/pub/css/mainico/mypage.svg" , 
                href:"", val: t('AlNavi_MySapce'), click: "mySpace", mini: MySpaceItems },
            { id: 2, img:"/pub/css/mainico/nicksearch.svg" , 
                href:"", val: t('AlNavi_Search'), click: "search", bar:true },
            { id: 3, img:"/pub/css/mainico/myRecommend.svg" , 
                href:"/member/myRecommend", val: t('AlNavi_ANSWERer') },
            { id: 4, img:"/pub/css/mainico/rangking.svg" , 
                href:"/question/rankQuestion", val: t('AlNavi_Ranking') },
            { id: 5, img:"/pub/css/mainico/event.svg" , 
                href:"/question/eventList", val: t('AlNavi_Events') },
            { id: 6, img:"/pub/css/mainico/userGuide.svg" , 
                href:"/default/userGuide", val: t('AlNavi_Guide') },
            { id: 7, img:"/pub/css/mainico/headphones_33.svg" , 
                href:"/default/cs/customerService", val: t('AlNavi_Notice') },
            { id: 8, img:"/pub/css/mainico/keypress.svg" , 
                href:"", val: "Keysound Off", sound: "Keysound On", click:"press"}
        ]
    }
    
    const langAlNavi = { 
        ko : {
            signout : [t('AlNavi_Login_Required'), t('AlNavi_Login'), t('AlNavi_SignUp')],
            signin : [t('AlNavi_Manage'), t('AlNavi_Logout'), t('AlNavi_Withdrawal')],
            user : [
                { id : "USER_ID", tier:"열혈천사", q_rank: t('AlNavi_Question')+"4,078"+t('AlNavi_Degree'), a_rank: t('AlNavi_Answer')+"1,024위"+t('AlNavi_Degree'), img:"/pub/css/profile/img_thum_base0.jpg"  }
            ],
            alt : ["프로필","로그아웃 아이콘"],
            confirm_p: t('AlNavi_Confirm') 
        }
    }
    const signOutTxt = langAlNavi.ko.signout;
    const signInTxt = langAlNavi.ko.signin;
    const userInfo = langAlNavi.ko.user;
    const altText = langAlNavi.ko.alt;
    const widMessage = langAlNavi.ko.confirm_p;

    //it is valued axios and control data
    const URL_NAVI = ''; // 네비게이션 기본 정보
    const URL_NAVI_ITEM = ''; // 네비게이션 리스트 하위 컴포넌트로 전달해줄 data
    const URL_MY_SPACE = ''; // 나의 공간 리스트
    const URL_COUNT_ALARM = "/api/user/alarm/count"; // 

    const [listText, setListText] = useState(null);
    const [naviList,setNaviList] = useState(null);
    const [mySpace, setMySpace] = useState(null);
    const [countAlarm, setCountAlarm] = useState(0); // 해당 url에서 count 정보를 받아서 넘겨줄 예정
    const [error, setError] = useState(null);

    useEffect(()=>{
        const getList = async () => {
            try{
                setError(null);
                setListText(null);

                const navitext = await axios.get(URL_NAVI);
                setListText(navitext.data);
            } catch(err){
                setError(err.message);
            }    
        };
        
        const getNaviList = async () => {
            try{
                setError(null);
                setNaviList(null);

                const naviitem = await axios.get(URL_NAVI_ITEM);
                setNaviList(naviitem.data); 
            } catch(err){
                setError(err.message);
            }
        }

        const getMySpace = async () => {
            try{
                setError(null);
                setMySpace(null);

                const myspacelist = await axios.get(URL_MY_SPACE);
                setMySpace(myspacelist.data);
            } catch(err){
                setError(err.message);
            }
        }
        //알람 횟수 data fetching
        const getAlarmNum = async () => {
            try{
                setError(null);

                const alarmNumber = await axios.get(URL_COUNT_ALARM);
                setCountAlarm(alarmNumber.data.count);
            } catch(error){
                setError(error);
            }
        }
        
        getList();
        getNaviList();
        getMySpace();
        getAlarmNum();
    },[]);



    //click event handle
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

    const NotLoginItemLists = (lang) => {
        return NaviItems[lang].map((navi) => 
            <NaviItem
                key={navi.id} img={navi.img} href={navi.href} val={navi.val} 
                count={countAlarm} i={navi.i} click={navi.click} mini={navi.mini}
                sound={navi.sound} keyToggle={keyToggle} setKeyToggle={setKeyToggle}
            />
        ).sort(function(a, b){
            return a.key - b.key;
        }).filter((val) => {
            return val.key > 3
        });
    }

    const ItemLists = (lang) => {
        return NaviItems[lang].map((navi) => 
                <NaviItem
                key={navi.id} img={navi.img} href={navi.href} val={navi.val} 
                count={countAlarm} i={navi.i} click={navi.click} mini={navi.mini}
                bar={navi.bar} sound={navi.sound} keyToggle={keyToggle} setKeyToggle={setKeyToggle}
                />
            ).sort(function(a, b){
                return a.key - b.key;
            });
    }

    if( user.seq === 0 ){
        return <AlNaviNav         
        show={show} 
        ref={handleClick} 
        onClick={e => clickedNavi(e)}>
            <NavDiv>
                <NavTop>
                    <CloseBtn onClick={e => closedNavi(e)}>
                        <CloseLeft/>
                        <CloseRight/>
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
                                    <LoginFigureImg src={userInfo[0].img} alt={altText[0]}/>
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
                <LangMenu>
                    <LangMenuEl onClick={()=>{i18n.changeLanguage('ko')}}>한글</LangMenuEl>/
                    <LangMenuEl onClick={()=>{i18n.changeLanguage('en')}}>EN</LangMenuEl>/
                    <LangMenuEl onClick={()=>{i18n.changeLanguage('ja')}}>日本語 </LangMenuEl>/
                    <LangMenuEl onClick={()=>{i18n.changeLanguage('zh')}}>中文 </LangMenuEl>
                </LangMenu>
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
const InfoP = styled.div`
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
const LangMenu = styled.div`
    display:felx;
    justify-content:center;
    align-items:center;
    margin-top:10px;
`;
const LangMenuEl = styled.span`
    font-size:14px;
    font-weight:bold;
    margin:0 10px;
    padding:0 4px;
    cursor:pointer;
`;