import styled from 'styled-components';
import Num3Comma from '../functions/num3comma/Num3Comma'

function AUnBoxBottom(props) {
    const etimate = props.etimate;
    const estimateCount = (etimate.v1 * 7) + (etimate.v2 * 3) + (etimate.v3 * 1)+ (etimate.v4 * -1)+ (etimate.v5 * -3);

    const estiList = Object.keys(etimate).map((key) => {
        return { key : key , value : etimate[key] }
    } ).sort( (a,b) => {
        return b.value - a.value;
    } ).filter( (x,i) => {
        return x.value != 0 && i < 3 ;
    } ).map((v,i)=>{
        return <Img1 take={i} src={"/Common/images/esti_"+v.key.slice(1)+".png"}></Img1>
    });

    return (
        <MainOl className="AUnBoxBottom">
            <AlScoreLi>
                <AlScoreDiv>
                    {estiList}
                  <AlScoreSpan><Num3Comma num={estimateCount}></Num3Comma>점</AlScoreSpan>
                </AlScoreDiv>
            </AlScoreLi>
            <AlScoreLastLi>본문<AlScoreStrong><Num3Comma num={props.count}></Num3Comma></AlScoreStrong>자</AlScoreLastLi>
        </MainOl>
    );
  }
  
export default AUnBoxBottom;

const Img1 = styled.img`
    margin-left: ${props => props.take > 0? "-5px" : "0px" };
    width: 35px;
    margin-top:-5px;
`;
//Img2와 3의 존재 이유 확인 필요
const Img2 = styled.img`
    width: 35px;
    margin-left: -5px;
`;
const Img3 = styled.img`
    width: 35px;
    margin-left: -5px;
`;

const MainOl = styled.ol`
    position: relative;
`;

const AlScoreDiv = styled.div`
&{
    position: relative;
    display:flex;
    align-items:center;
}
&:before{
    content: "";
    display: block;
    width: 110%;
    height: 6px;
    background: #ddd;
    border-radius: 5px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
}
`;

const AlScoreLi = styled.li`
    display: inline-block;
    cursor: pointer;
    list-style: none;
`;



const AlScoreSpan = styled.span`
    display: inline-block;
    font-size: 14px;
    font-weight: bold;
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
`;
