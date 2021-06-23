import styled from 'styled-components';
import axios from 'axios';
import {useTranslation} from 'react-i18next';

function Estimate({setEtimates, setMyestiNo, num, img, pageSeq, check}) {

    const {t} = useTranslation();
    
    //url list
    const URL_ESTIMATE = "/rest/answers/"+pageSeq+"/estimate";

    const langEsti = (img) => {
        const arr = [t('AnswerEtimate_Altong'), t('AnswerEtimate_Good'), t('AnswerEtimate_Soso'), t('AnswerEtimate_Bad'), t('AnswerEtimate_Upset'), t('AnswerEtimate_Fun')];
        return arr[img]
    }
    
    const GetEstimate = (pageSeq, select, setEtimates, setMyestiNo, check) => {
        if(check>0){
            alert(t('Already_Evaluated'));
            return;
        }
        axios.put(URL_ESTIMATE,{
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

    const SetEstimate = () => {
        axios.get(URL_ESTIMATE)
        .then((response) => response.data)
        .then( (data) => {
            setEtimates(data);
        })
        .catch(function (error) {
            console.log(error)
        });
    }
      
    return (
        <MainLi check={check === img} onClick={()=>{
            GetEstimate(pageSeq, img, setEtimates, setMyestiNo, check);
        }}>
            <EtimateA>
                <EtimateImg  src={"/Common/images/esti_"+img+'.png'}></EtimateImg>
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