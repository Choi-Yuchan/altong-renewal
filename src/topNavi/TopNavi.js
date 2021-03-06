import styled from 'styled-components';
import React, { useState, useEffect, useCallback } from 'react';
import { useSlideIn } from '../components/functions/useSlideIn/useSlideIn';
import { useSlideUp } from '../components/functions/useSlideUp/useSlideUp';
import { useTranslation } from 'react-i18next';

function TopNavi({setShowNavi, setClicked, user}) {
    const { t } = useTranslation();
    const altText = t("TopNavi_alttext");
    const search = t("TopNavi_placeholder");

    const [login, setLogin] = useState(false);
    const [searchWord, SetSearchWord] = useState("");

    useEffect (() => {
        if (user.seq !== 0) { //로그인 유무
            setLogin(true);
        } else {
            setLogin(false);
        }
    },[user.seq]);

    //검색 내용 전송
    const handleSubmit = useCallback(e => {
            e.preventDefault();
            if(searchWord.length === 0){
                return null;
            } else {
                //알통과 머지 후 해당 검색어 페이지로 이동하는 기능 추가 필요.
                alert(`You've searched : ${searchWord}`);
            }
            SetSearchWord("")
    },[searchWord]);


    //검색창에 입력한 값 감지
    const handleChange = (e) => {
        SetSearchWord(e.target.value);
    } 


    //클릭했을 때 toggle 값 변경으로 조작
    const [toggle, setToggle] = useState(false);

    const slideInput = useSlideIn(0.5, toggle);
    const slideUp = useSlideUp(0.3, toggle);

    return (
    <TopHeader>
            <CenterDiv>
                <HamburgerBar onClick={(e) => {
                    setClicked(false);
                    setShowNavi(true);
                    e.stopPropagation();
                }}>
                    <HamburgerDiv>
                        <HamburgerDivIFirst/>
                        <HamburgerDivISecond show={login}></HamburgerDivISecond>
                        <HamburgerDivILast/>
                        <HamburgerSpan show={login}></HamburgerSpan>
                    </HamburgerDiv>
                </HamburgerBar>
                {toggle ?                 
                <Logo {...slideUp}>
                    <LogoAhrefA href="/">
                        <LogoImg src="/Common/images/logo3.png" alt={altText[0]}></LogoImg>
                    </LogoAhrefA>
                </Logo> : 
                <Logo>
                    <LogoAhrefA href="/">
                        <LogoImg src="/Common/images/logo3.png" alt={altText[0]}></LogoImg>
                    </LogoAhrefA>
                </Logo>}
                <ColumnDiv>
                    <SearchBox>
                        <SearchForm onSubmit={handleSubmit}>
                            {toggle ? <SearchBoxInput {...slideInput} placeholder={search} type="search" value={searchWord} onChange={handleChange}/> : null}
                            <SearchBtn type="submit" onClick={() => {
                                setToggle(!toggle);
                                }}>
                                <SearchImg src="/Common/images/mainico/nicksearch.svg" alt={altText[1]}/>
                            </SearchBtn>
                        </SearchForm>
                    </SearchBox>
                    <ColumnBoxPC>
                        <ColumnBoxAhref href="/">
                            <TopcolumnBoxImg src="/Common/images/que_icon.svg" alt={altText[2]}/>
                        </ColumnBoxAhref>
                        <ColumnBoxAhref2 href="/">
                            <TopcolumnBoxImg2 src="/pub/default/main/images/list_icon.svg" alt={altText[3]}/>
                        </ColumnBoxAhref2>
                    </ColumnBoxPC>
                </ColumnDiv>
            </CenterDiv>
      </TopHeader>
    );
  }
  
  export default TopNavi;

const TopHeader = styled.header`
    position: fixed;
    left:50%;
    transform:translateX(-50%);
    width:100%;
    height: 45px;
    transition: all 0.5s;
    background: #fff;
    z-index:9;

    @media (min-width: 480px) {
        height:60px;
    }
`;

const CenterDiv = styled.div`
    height: 100%;
    max-width: 800px;
    margin:0 auto;
    color: #333;
    display:flex;
    justify-content:space-between;
    align-items:center;
`;

const HamburgerBar = styled.div`
    width: 45px;
    height: 45px;
    position: relative;

    @media (min-width: 480px) {
        width:60px;
        height:60px;
    }
`;

const HamburgerDiv = styled.div`
    width: 25px;
    height: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;

    @media (min-width: 480px) {
        width: 30px;
        height: 24px;
    }
`;

const HamburgerDivIFirst = styled.i`
    margin-top: 0;
    display: block;
    width: 100%;
    height: 1px;
    background: #666;

    @media (min-width: 480px) {
        height:2px;
    }
`;

const HamburgerDivISecond = styled.i`
    width: ${props=>props.show ? '70%':'100%'};
    display: block;
    height: 1px;
    background: #666;
    margin-top: 9px;

    @media (min-width: 480px) {
        height:2px;
    }
`;

const HamburgerDivILast = styled(HamburgerDivISecond)`
    width: 100%;
`;

const HamburgerSpan = styled.span`
    display: ${props=>props.show ? 'block':'none'};
    width: 4px;
    height: 4px;
    background: #fd0031;
    border-radius: 50%;
    position: absolute;
    top: 8.5px;
    right: 0;

    @media (min-width: 480px) {
        width:6px;
        height:6px;
        top:9px;
    }
`;

const Logo = styled.div`
    position: absolute;
    left: 50%;
    transform:translate(-50%, 0);
    cursor: pointer;
`;

const LogoImg = styled.img`
    height: 37px;
    vertical-align:bottom;
    @media (min-width: 480px){
        height: 52px;
    }
`;

const LogoAhrefA = styled.a`
    text-decoration: none;
    color: #333;
    display: block;
`;

const ColumnDiv = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
`;

const SearchBox = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;

&:after{
    content: "";
    display: block;
    width: 1px;
    height: 24px;
    margin: 0 5px;
    background-color: #c4c4c4;
}
`;

const SearchForm = styled.form`
    display:flex;
    justify-content:center;
    align-items:center;
`;

const SearchBoxInput = styled.input`
    display: block;
    padding: 5px;
    font-size: 14px;
    width: 130px;
    border: none;
    outline: none;
    border-bottom: 1px solid #ddd;
    transform-origin:right center;
    ::placeholder{
        font-size: 11px;
    }
    ::-ms-clear,
    ::-ms-reveal{
        display:none;width:0;height:0;
    }
    ::-webkit-search-decoration,
    ::-webkit-search-cancel-button,
    ::-webkit-search-results-button,
    ::-webkit-search-results-decoration{
        display:none;
    }
    @media (min-width: 475px){
        width: 200px;
        &::placeholder{
            font-size: 14px;
        }
    }
`;

const SearchBtn = styled.button`
    display: block;
    width: 30px;
    cursor: pointer;
    background:transparent;
    border:none;
`;

const SearchImg = styled.img`
    display: block;
    width: 30px;
`;

const ColumnBoxPC = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    cursor: pointer;
    margin-right: 10px;
`;

const ColumnBoxAhref = styled.a`
    width:30px;
    text-decoration: none;
    color: #333;
    display: block;
    margin-right:4px;
`;

const TopcolumnBoxImg = styled.img`
    width: 100%;
    vertical-align: bottom;
`;

const ColumnBoxAhref2 = styled(ColumnBoxAhref)`
    width:27px;
    margin-right:0;
`;

const TopcolumnBoxImg2 = styled(TopcolumnBoxImg)`
`;
