import styled from 'styled-components';
import axios from 'axios';

const MainLi = styled.li`
&{
    display: inline-block;
    width: 45px;
    margin: 0 20px;
    position: relative;
    list-style: none;
}
    
&:after {
    content: "";
    display: block;
    width: ${ (props) => props.check? "20px" : "0px" };
    height: 20px;
    background: url("/Common/images/esti_mark.png") center no-repeat;
    background-size: contain;
    position: absolute;
    top: -12px;
    left: 50%;
    transform: translateX(-50%);
}
`;
const EtimateA = styled.a`
    cursor: pointer;
    display: block;
    width: 100%;
    text-decoration: none;
    color: #333;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
`;
const EtimateImg = styled.img`
    display: block;
    width: 100%;
    margin-bottom: 3px;
`;
const EtimateSpan = styled.span`
    display: block;
    width: 100%;
    font-size: 12px;
    color: #9d9d9d;
    letter-spacing: -1px;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
`;

const EtimateEm = styled.em`
    font-style: normal;
    color: #fd0031;
    font-weight: bold;
    margin-left: 3px;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
`;

const langEsti = (img) => {
    const arr = ['알통', '감사', '수고', '불만', '분노', '재미'];
    return arr[img]
}

const GetEstimate = (pageSeq, select, setEtimates, setMyestiNo, check) => {
    if(check>0){
        alert("이미 평가를 완료하였습니다.");
        return;
    }
    axios.put("/rest/answers/"+pageSeq+"/estimate",{
        esti: select
    })
    .then((response) => response.data)
    .then( (data) => {
        console.log(data);
        if(data.returnCode === "0"){
            SetEstimate(pageSeq, select, setEtimates);
            setMyestiNo(select);
        }else{
            console.log(data);
        }
    })
    .catch(function (error) {
        console.log(error);
    });

    
  }
  //select parameter는 향후 필요한 것인지 확인
  const SetEstimate = (pageSeq, select, setEtimates) => {
    axios.get("/rest/answers/"+pageSeq+"/estimate")
    .then((response) => response.data)
    .then( (data) => {
        setEtimates(data);
    })
    .catch(function (error) {
        console.log(error)
    });
  }



function Etimate(props) {
    const setEtimates = props.setEtimates;
    const check = props.check;

    return (
        <MainLi check={check===props.img} onClick={()=>{
            GetEstimate(props.pageSeq, props.img, setEtimates, props.setMyestiNo, check);
        }}>
            <EtimateA>
                <EtimateImg  src={"/Common/images/esti_"+props.img+'.png'}></EtimateImg>
                <EtimateSpan>{langEsti(props.img-1)}<EtimateEm>{props.num}</EtimateEm></EtimateSpan>
            </EtimateA>
        </MainLi>
    );
}

export default Etimate;
