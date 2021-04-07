import styled from 'styled-components';
import Popup from '../popup/Popup'
import React, { useState, useEffect } from 'react';

import axios from 'axios';

const MainUl = styled.ul`
    position: absolute;
    top: 50%;
    right: 100%;
    background: #fff;
    width: 110px;
    border: 1px solid #ccc;
    padding: 5px;
    padding-bottom: 0;
    border-radius: 10px 0 10px 10px;
    box-shadow: 2px 2px 2px #ddd;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    margin: 0;
    display: ${props => props.popToggle ? "block" : "none"};
`;

const MainLi = styled.li`
    height: 35px;
    width: 100%;
    font-weight: 300;
    font-size: 14px;
    padding-top: 5px;
    border-bottom: 1px solid #ddd;
    list-style: none;
    cursor: pointer;
`;

const MainLi2 = styled.li`
    font-size: 14px;
    font-weight: normal;
    height: 35px;
    width: 100%;
    padding-top: 5px;
    border-bottom: 1px solid #ddd;
    list-style: none;
    margin: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
`;
// 찜
function ZzimAxios(pageSeq){
    console.log("pageSeq : " + pageSeq);
    axios.post("/rest/questions/"+pageSeq+"/Zzim")
    .then((response) => response.data)
    .then( (data) => {
        alert(data.message);
    })
    .catch(function (error) {
        console.log("실패 : "+error);
    });
}

// 훈훈알
function AlmoneyAxios(pageSeq){
    console.log("pageSeq : " + pageSeq);
    axios.post("/rest/questions/"+pageSeq+"/almoney")
    .then((response) => response.data)
    .then( (data) => {
        alert(data.message);
    })
    .catch(function (error) {
        console.log("실패 : "+error);
    });
}
//popToggle
//props.seqComponent

function QuestionPopup(props) {
    const [showAlmoney, setShowAlmoney] = useState(false);
    
    useEffect(()=>{
        console.log("팝업 생성");
      }
      , []);

    return (
        <MainUl onClick={() => { console.log("팝업클릭"); }} popToggle={props.popToggle}>
            <MainLi onClick={(e) => {
                    ZzimAxios(props.pageSeq);
                    e.stopPropagation();
                }
            }>
                <Popup text="찜" imgurl="/pub/answer/answerList/images/atm_more_1.png" >
                </Popup>
            </MainLi>
            <MainLi2>
                <Popup text="공유" imgurl="/pub/answer/answerList/images/atm_more_2.png" >
                </Popup>
            </MainLi2>
            <MainLi>
                <Popup text="꼭대기" imgurl="/pub/answer/answerList/images/atm_more_4.png" >
                </Popup>
            </MainLi>
            <MainLi onClick={(e) => {
                    AlmoneyAxios(props.pageSeq);
                    props.setClicked(false);
                    e.stopPropagation();
                }
            }>
                <Popup text="훈훈알" imgurl="/Common/images/answer_almoney_gg.svg" >
                </Popup>
            </MainLi>
            <MainLi>
                <Popup text="신고" imgurl="/pub/answer/answerList/images/atm_more_3.png" >
                </Popup>
            </MainLi>
        </MainUl>
    );
}
  
export default QuestionPopup;
  