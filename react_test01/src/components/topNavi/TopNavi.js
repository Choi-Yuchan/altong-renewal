import styled from 'styled-components';

const TopHeader = styled.header`
    width: 100%;
    height: 60px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9;
    transition: all 0.5s;
    background: #fff;
`;

const CenterDiv = styled.div`
    height: 100%;
    position: relative;
    width: 800px;
    margin: 0 auto;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    font-size: 16px;
    font-family: "Noto Sans KR", "Noto Sans JP", "Noto Sans HK", "Noto Sans SC", "Noto Sans TC", sans-serif;
    color: #333;
`;

const MainHeaderAhref = styled.a`
    display: block;
    float: left;
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

const HamburgerDivILast = styled.i`
    display: block;
    width: 100%;
    height: 2px;
    background: #666;
    margin-top: 9px;
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




function TopNavi() {
    return (
      <TopHeader>
          <CenterDiv>
            <MainHeaderAhref>
                <HamburgerDiv>
                    <HamburgerDivIFirst></HamburgerDivIFirst>
                    <HamburgerDivISecond></HamburgerDivISecond>
                    <HamburgerDivILast></HamburgerDivILast>
                    <HamburgerSpan></HamburgerSpan>
                </HamburgerDiv>
            </MainHeaderAhref>

          </CenterDiv>
      </TopHeader>
    );
  }
  
  export default TopNavi;