import styled from 'styled-components';


const MainOl = styled.ol`
    position: relative;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
`;

const AlScoreDiv = styled.div`
&{
    margin: 0;
    padding: 0;
    display: inline-block;
    position: relative;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
}
&:before{
    content: "";
    display: block;
    width: 145%;
    height: 5px;
    background: #ccc;
    border-radius: 5px;
    position: absolute;
    top: 50%;
    left: 65%;
    transform: translate(-50%, -50%);
    z-index: -1;
}
`;

const AlScoreLi = styled.li`
    display: inline-block;
    cursor: pointer;
    list-style: none;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
`;

const Img1 = styled.img`
    margin-left: 0;
    width: 35px;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
`;

const Img2 = styled.img`
    width: 35px;
    margin-left: -10px;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
`;

const Img3 = styled.img`
    width: 35px;
    margin-left: -10px;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
`;

const AlScoreSpan = styled.span`
    display: inline-block;
    font-size: 14px;
    font-weight: bold;
    width: 50px;
    position: absolute;
    top: 50%;
    left: 100%;
    transform: translateY(-50%);
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
`;

const AlScoreLastLi = styled.li`
&{
    position: absolute;
    top: 25%;
    right: 10px;
    font-size: 14px;
    display: inline-block;
    cursor: pointer;
    list-style: none;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
}
&:after{
    content: "";
    display: block;
    width: 5px;
    height: 5px;
    border-top: 1px solid #333;
    border-left: 1px solid #333;
    position: absolute;
    top: 50%;
    left: 110%;
    transform: translateY(-50%) rotate(-135deg);
}
`;

const AlScoreStrong = styled.strong`
    margin: 0 3px;
    font-size: 15px;
    color: #fd0031;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
`;

function AUnBoxBottom(props) {
  return (
      <MainOl className="AUnBoxBottom">
          <AlScoreLi>
              <AlScoreDiv>
                <Img1 src={process.env.PUBLIC_URL + '/test_source/esti_1_b.png'}></Img1>
                <Img2 src={process.env.PUBLIC_URL + '/test_source/esti_3_b.png'}></Img2>
                <Img3 src={process.env.PUBLIC_URL + '/test_source/esti_2_b.png'}></Img3>
                <AlScoreSpan>21점</AlScoreSpan>
              </AlScoreDiv>
          </AlScoreLi>
          <AlScoreLastLi>본문<AlScoreStrong>193</AlScoreStrong>자</AlScoreLastLi>
      </MainOl>
  );
}

export default AUnBoxBottom;
