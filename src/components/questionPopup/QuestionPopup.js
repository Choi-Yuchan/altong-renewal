import styled from 'styled-components';
import Popup from '../popup/Popup'
import React from 'react';
import axios from 'axios';
import {useTranslation} from 'react-i18next';

// 찜
const ZzimAxios = async (pageSeq) => {
    const URL_ZZIM = `/api/questions/${pageSeq}/zzim`;
    try {
        const response = await axios.put(URL_ZZIM);
        alert(response.data.message);
    } catch (e) {
        console.log(e);
    }
}
// 꼭대기
const moveTopAxios = async (pageSeq, Confirm) => {
    const URL_MOVE_TOP = `/api/questions/${pageSeq}/top`;
    if ( window.confirm(Confirm)){
        try {
            const response = await axios.patch(URL_MOVE_TOP);
            alert(response.data.msg);
        } catch (e) {
            console.log(e);
        }
    }
}
// 신고하기 확인
const checkSiren = async (e, pageSeq) => {
    const URL_CHECK_REPORT = `/api/sirens/${pageSeq}/check` // 백엔드 data 확인해야함. 400 오류 출력
    try{
        const response = await axios.get(URL_CHECK_REPORT)
        if(response.data.msg){
            alert("신고가 접수되어 처리중입니다.");
            e.nativeEvent.stopImmediatePropagation();
        }
        if(response.data.code){
            //로그인 안되어 있을 경우
            alert("로그인 후 이용해주세요.");
            e.nativeEvent.stopImmediatePropagation();
        }
    } catch(error) {
        console.log(error)
    }
}

function QuestionPopup({setShowAlmoney, setShowSiren, setClicked, pageSeq, seqComponent, popToggle, title, setShare}) {

    const {t} = useTranslation();
    const Confirm = t('Confirm_Top_List');

    return (
        <MainUl onClick={() => { console.log("팝업클릭"); }} popToggle={popToggle}>
            <MainLi show={seqComponent==="Q"} onClick={(e) => {
                    ZzimAxios(pageSeq);
                    e.stopPropagation();
                }
            }>
                <Popup text={t('QPopup_Bookmark')} imgurl="/pub/answer/answerList/images/atm_more_1.png" />
            </MainLi>
            <MainLi2 onClick={() => { setShare(true); setClicked(false); } }>
                <Popup text={t('QPopup_Share')} imgurl="/pub/answer/answerList/images/atm_more_2.png" />
            </MainLi2>
            <MainLi show={seqComponent==="Q"}  onClick={() => { moveTopAxios(pageSeq, Confirm); }}>
                <Popup  text={t('QPopup_To_top')} imgurl="/pub/answer/answerList/images/atm_more_4.png" />
            </MainLi>
            <MainLi show={true} onClick={(e) => {
                    setClicked(false);
                    setShowAlmoney({show: true, page: pageSeq, seq: seqComponent});
                    e.stopPropagation();
                }
            }>
                <Popup text={t('QPopup_Warming_Al')} imgurl="/Common/images/answer_almoney_gg.svg" />
            </MainLi>
            <MainLi show={true} onClick={(e) => {
                    setClicked(false);
                    checkSiren(e, pageSeq);
                    setShowSiren({show:true, page: pageSeq, seq:'Q', title});
                    e.stopPropagation();
                }
            }>
                <Popup text={t('QPopup_Report')} imgurl="/pub/answer/answerList/images/atm_more_3.png" />
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
const MainLi2 = styled(MainLi)`
    display:flex;
`;
