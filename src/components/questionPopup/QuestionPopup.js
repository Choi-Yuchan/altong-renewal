import styled from 'styled-components';
import Popup from '../popup/Popup'
import React, { useEffect } from 'react';
import axios from 'axios';
import {useTranslation} from 'react-i18next';

// 찜
function ZzimAxios(pageSeq){
    const URL_ZZIM = "/rest/questions/"+pageSeq+"/Zzim"

    axios.put(URL_ZZIM)
    .then((response) => response.data)
    .then( (data) => {
        alert(data.message);
    })
    .catch(function (error) {
        console.log("실패 : "+error);
    });
}
// 꼭대기
const moveTopAxios = async (pageSeq, Confirm) => {
    const URL_MOVE_TOP = `/api/questions/${pageSeq}/movetop`;
    if ( window.confirm(Confirm)){
        try {
            const response = await axios.put(URL_MOVE_TOP);
            alert(response.data.msg);
        } catch (e) {
            console.log(e);
        }
    }
}
// 신고하기
// curl -d '{"ACT":"CheckSiren", "H_Type":"Q", "H_Seq":"266096", "H_Reason":"4", "H_Reason_txt":"siren test"}' 
// -H "Content-Type: application/json"  -b cookie.txt -X PUT http://192.168.0.5/restApi/commons/siren

function QuestionPopup(props) {
    useEffect(()=>{  
      }
      , []);
    const {t} = useTranslation();
    const Confirm = t('Confirm_Top_List');

    return (
        <MainUl onClick={() => { console.log("팝업클릭"); }} popToggle={props.popToggle}>
            <MainLi show={props.seqComponent==="Q"} onClick={(e) => {
                    ZzimAxios(props.pageSeq);
                    e.stopPropagation();
                }
            }>
                <Popup text={t('QPopup_Bookmark')} imgurl="/pub/answer/answerList/images/atm_more_1.png" >
                </Popup>
            </MainLi>
            <MainLi2 onClick={() => { props.setShare(true); props.setClicked(false); } }>
                <Popup text={t('QPopup_Share')} imgurl="/pub/answer/answerList/images/atm_more_2.png" >
                </Popup>
            </MainLi2>
            <MainLi show={props.seqComponent==="Q"}  onClick={() => {    moveTopAxios(props.pageSeq, Confirm);    }}>
                <Popup  text={t('QPopup_To_top')} imgurl="/pub/answer/answerList/images/atm_more_4.png" >
                </Popup>
            </MainLi>
            <MainLi show={true} onClick={(e) => {
                    props.setClicked(false);
                    props.setShowAlmoney({show:true, page:props.pageSeq, seq:props.seqComponent});
                    e.stopPropagation();
                }
            }>
                <Popup text={t('QPopup_Warming_Al')} imgurl="/Common/images/answer_almoney_gg.svg" >
                </Popup>
            </MainLi>
            <MainLi show={true} onClick={(e) => {
                    props.setClicked(false);
                    props.setShowSiren({show:true, page:props.pageSeq, seq:'Q', title: props.title});
                    e.stopPropagation();
                }
            }>
                <Popup text={t('QPopup_Report')} imgurl="/pub/answer/answerList/images/atm_more_3.png" >
                </Popup>
            </MainLi>
        </MainUl>
    );
}
  
export default QuestionPopup;
  
const MainUl = styled.ul`
    position: absolute;
    top: 50%;
    right: 100%;
    background: #fff;
    width: 110px;
    border: 1px solid #ccc;
    padding: 5px 10px 0 10px;
    border-radius: 10px 0 10px 10px;
    box-shadow: 2px 2px 2px #ddd;
    display: ${props => props.popToggle ? "block" : "none"};
`;
const MainLi = styled.li`
    height: 35px;
    width: 100%;
    font-size: 14px;
    border-bottom: 1px solid #ddd;
    list-style: none;
    cursor: pointer;
    display: ${(props) => props.show? "flex" : "none" };
    align-items:center;
`;
const MainLi2 = styled.li`
    font-size: 14px;
    height: 35px;
    width: 100%;
    border-bottom: 1px solid #ddd;
    list-style: none;
    display:flex;
    align-items:center;
`;
