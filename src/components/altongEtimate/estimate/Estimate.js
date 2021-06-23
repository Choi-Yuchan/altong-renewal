import styled from 'styled-components';
import axios from 'axios';
import {useTranslation} from 'react-i18next';

function Estimate({setEtimates, setMyestiNo, num, img, pageSeq, check}) {

    const {t} = useTranslation();
    
    //url list
    const URL_EVALUATION = `/api/answers/${pageSeq}/estimates/${num}`
    const URL_ESTIMATE = `/api/answers/${pageSeq}/estimate`;

    const langEsti = (img) => {
        const arr = [t('AnswerEtimate_Altong'), t('AnswerEtimate_Good'), t('AnswerEtimate_Soso'), t('AnswerEtimate_Bad'), t('AnswerEtimate_Upset'), t('AnswerEtimate_Fun')];
        return arr[img]
    }

    //답변 평가 기능 - 추후 수정 필요
    const SendEvaluation = async (pageSeq, select, setEtimates, setMyestiNo, check) => {
        if(check > 0){
            alert(t('Already_Evaluated'));
            return;
        }
        try{
            const response = await axios.patch(URL_EVALUATION,{
                PointCount: select
            })
            if(response.data.returnCode === "0"){
                SetEstimate(pageSeq, select, setEtimates);
                setMyestiNo(select);
            }
        } catch(e) {
            console.log(e)
        }
    }

    const SetEstimate = async () => {
        try{
            const response = await axios.get(URL_ESTIMATE)
            setEtimates(response.data)
        } catch(e) {
            console.log(e)
        }
    }
      
    return (
        <MainLi check = {check === img} onClick={()=>{
            SendEvaluation(pageSeq, img, setEtimates, setMyestiNo, check);
        }}>
            <EtimateA>
                <EtimateImg src={"/Common/images/esti_"+img+'.png'}></EtimateImg>
                <EtimateSpan>{langEsti(img - 1)}<EtimateEm>{num}</EtimateEm></EtimateSpan>
            </EtimateA>
        </MainLi>
    );
}

export default Estimate;

const MainLi = styled.li`
&{
    display: inline-block;
    width:16.66666666%;
    max-width: 45px;
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
const EtimateA = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    width: 100%;
`;
const EtimateImg = styled.img`
    display: block;
    width: 100%;
    margin-bottom: 3px;
`;
const EtimateSpan = styled.span`
    font-size: 12px;
    color: #9d9d9d;
    letter-spacing: -1px;
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