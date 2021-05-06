import styled from 'styled-components';
import React from 'react';
import { useState } from 'react';
import { useSlideIn } from '../functions/useSlideIn/useSlideIn';
import { useSlideUp } from '../functions/useSlideUp/useSlideUp';

const langTopNavi = {
    ko : {
        alt : [
            "알통 로고",
            "검색 아이콘",
            "글쓰기 아이콘",
            "질문 보기 아이콘",
        ],
        placeholder : "검색어를 입력해 주세요",
    }
}

function TopNavi(props) {
    const altText = langTopNavi.ko.alt;
    const search = langTopNavi.ko.placeholder;

    //클릭했을 때 toggle 값 변경으로 조작
    const [toggle, setToggle] = useState(false);

    const slideInput = useSlideIn(0.5, toggle);
    const slideUp = useSlideUp(0.3, toggle);

    return (
    <TopHeader>
            <CenterDiv>
                <HamburgerBar onClick={(e) => {
                    props.setClicked(false);
                    props.setShowNavi(true);
                    e.stopPropagation();
                }}>
                    <HamburgerDiv>
                        <HamburgerDivIFirst></HamburgerDivIFirst>
                        <HamburgerDivISecond></HamburgerDivISecond>
                        <HamburgerDivILast></HamburgerDivILast>
                        <HamburgerSpan></HamburgerSpan>
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
                        <SearchForm>
                            {toggle ? <SearchBoxInput {...slideInput} placeholder={search} type="text"></SearchBoxInput> : null}
                            <SearchSpan type="submit" onClick={(e) => {
                                e.preventDefault();
                                setToggle(!toggle);
                                }}>
                                <SearchImg src="/Common/images/mainico/nicksearch.svg" alt={altText[1]}></SearchImg>
                            </SearchSpan>
                        </SearchForm>
                    </SearchBox>
                    <ColumnBoxPC>
                        <ColumnBoxAhref href="/">
                            <TopcolumnBoxImg src="/Common/images/que_icon.svg" alt={altText[2]}></TopcolumnBoxImg>
                        </ColumnBoxAhref>
                        <ColumnBoxAhref2 href="/">
                            <TopcolumnBoxImg2 src="/pub/default/main/images/list_icon.svg" alt={altText[3]}></TopcolumnBoxImg2>
                        </ColumnBoxAhref2>
                    </ColumnBoxPC>
                </ColumnDiv>
            </CenterDiv>
      </TopHeader>
    );
  }
  
  export default TopNavi;

const TopHeader = styled.header`
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    width: 100%;
    height: 60px;
    transition: all 0.5s;
    background: #fff;
`;

const CenterDiv = styled.div`
    height: 100%;
    max-width: 800px;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    font-size: 1rem;
    font-family: "Noto Sans KR", "Noto Sans JP", "Noto Sans HK", "Noto Sans SC", "Noto Sans TC", sans-serif;
    color: #333;
    display:flex;
    justify-content:space-between;
    align-items:center;
    @media (max-width: 768px) {
    width: 100%;
}
`;

const HamburgerBar = styled.a`
    display: block;
    width: 60px;
    height: 60px;
    position: relative;
    text-decoration: none;
    color: #333;
`;

const HamburgerDiv = styled.div`
    width: 30px;
    height: 24px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
`;

const HamburgerDivIFirst = styled.i`
    margin-top: 0;
    display: block;
    width: 100%;
    height: 2px;
    background: #666;
`;

const HamburgerDivISecond = styled.i`
    width: 70%;
    display: block;
    height: 2px;
    background: #666;
    margin-top: 9px;
`;

const HamburgerDivILast = styled(HamburgerDivISecond)`
    width: 100%;
`;

const HamburgerSpan = styled.span`
    display: block;
    width: 6px;
    height: 6px;
    background: #fd0031;
    border-radius: 50%;
    position: absolute;
    top: 9px;
    right: 0;
    cursor: pointer;
    color: #333;
    font-size: 16px;
    font-family: "Noto Sans KR", "Noto Sans JP", "Noto Sans HK", "Noto Sans SC", "Noto Sans TC", sans-serif;
`;

const Logo = styled.div`
    position: absolute;
    left: 50%;
    transform:translate(-50%, 0);
    cursor: pointer;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
`;

const LogoImg = styled.img`
    height: 52px;
    vertical-align:bottom;
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
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;

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
    width: 200px;
    border: none;
    outline: none;
    border-bottom: 1px solid #ddd;
    transform-origin:right center;
`;

const SearchSpan = styled.button`
    display: block;
    width: 30px;
    cursor: pointer;
    margin: 0;
    padding: 0;
    background:transparent;
    border:none;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
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
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
`;

const ColumnBoxAhref = styled.a`
    width:32px;
    text-decoration: none;
    color: #333;
    display: block;
`;

const TopcolumnBoxImg = styled.img`
    width: 100%;
    box-sizing: border-box;
    vertical-align: bottom;
    -webkit-tap-highlight-color: transparent;
`;

const ColumnBoxAhref2 = styled(ColumnBoxAhref)`
    width:30px;
`;

const TopcolumnBoxImg2 = styled(TopcolumnBoxImg)`
`;





