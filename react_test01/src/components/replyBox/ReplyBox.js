import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


const EmotionImg = styled.img`
    display: block;
    width: 20px;
    margin: 0 auto;
`;

const OlBox = styled.ol`
    height: auto;
    padding: 0 10px;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    margin: 0;
`;

const ListReply = styled.li`
    display: inline-block;
    list-style: none;
    cursor: pointer;
`;

const HrefA = styled.a`
    padding: 5px 13px;
    border: 1px solid #d3d3d3;
    border-radius: 20px 20px 20px 0;
    font-size: 12px;
    position: relative;
    display: inline-block;
    text-decoration: none;
    color: #737373;
`;

const HrefAIcon = styled.img`
    margin-bottom: -3px;
    margin-right: 4px;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
`;

// const HrefASpan = styled.span`
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
//     -webkit-tap-highlight-color: transparent;
//     display: block;
//     font-size: 10px;
//     width: 15px;
//     height: 15px;
//     text-align: center;
//     line-height: 13px;
//     border: 1px solid #d3d3d3;
//     border-radius: 7px;
//     background: #fff;
//     position: absolute;
//     top: -5px;
//     right: -3px;
//     color: #333;
// `;

const EmotionList = styled.li`
    margin-left: 20px;
    display: inline-block;
    list-style: none;
`;

const EmotionListIconDiv = styled.div`
    display: inline-block;
    margin-right: 10px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
`;

const EmotionB = styled.b`
    display: block;
    color: #999;
    font-weight: normal;
    font-size: 10px;
`;

const AnswerDoList = styled.li`
    display: inline-block;
    width: 65%;
    text-align: right;
    float: right;
    list-style: none;
`;

const AnswerBtnA = styled.a`
    width: 40%;
    padding: 3px 0;
    text-align: center;
    color: #fd0031;
    font-size: 14px;
    font-weight: bold;
    border: 1px solid #fd0031;
    border-radius: 100px;
    display: inline-block;
    text-decoration: none;
    cursor: pointer;
`;

const AnswerBtnAB = styled.a`
    width: 40%;
    padding: 3px 0;
    text-align: center;
    border: 1px solid #fd8d0d !important;
    color: #fd8d0d !important;
    font-size: 14px;
    font-weight: bold;
    border-radius: 100px;
    display: inline-block;
    text-decoration: none;
    cursor: pointer;
`;

const LangBtnA = styled.a`
    color: #f30;
    border: 1px solid #f30;
    margin-left: 10px;
    width: 40%;
    padding: 3px 0;
    text-align: center;
    font-size: 14px;
    font-weight: bold;
    border-radius: 100px;
    display: inline-block;
    text-decoration: none;
    cursor: pointer;
`;

function ViewAnswerBtn(props){
    if(props.seqComponent === 'A'){
        return <AnswerBtnAB>채택하기</AnswerBtnAB>
    }
    return <AnswerBtnA>답변하기</AnswerBtnA>
}

const SendGood = (seqComponent, pageSeq, setGood, setBad) => {
    axios.put(seqComponent==='Q' ? "/rest/questions/" +
    pageSeq + "/vote" : "/rest/answers/" + pageSeq + "/vote",{
        estiSeq:"G"
    })
    .then((response) => response.data)
    .then((data) => {
        if(data.code == "success"){
            setGood(data.good);
            setBad(data.bad);
        }
    });
}
const SendBad = (seqComponent, pageSeq, setGood, setBad) => {
    axios.put(seqComponent==='Q' ? "/rest/questions/" +
    pageSeq + "/vote" : "/rest/answers/" + pageSeq + "/vote",{
        estiSeq:"B"
    })
    .then((response) => response.data)
    .then((data) => {
        if(data.code == "success"){
            setGood(data.good);
            setBad(data.bad);
        }
    });
}


function ReplyBox(props) {
    

    useEffect(()=>{
            if(props.pageSeq === undefined){}else{
                const voteUrl= props.seqComponent==="Q"?"/rest/questions/"+props.pageSeq+"/vote":"/rest/answers/"+props.pageSeq+"/vote";
                axios.get(voteUrl)
                .then((response) => response.data)
                .then( (data) => {
                    setVote(true);
                    setGood(data.good);
                    setBad(data.bad);
                })
                .catch(function (error) {
                    console.log(error)
                })
            }
        }
    , []);
    

    const [vote,setVote] = useState("false");
    const [good,setGood] = useState(0);
    const [bad,setBad] = useState(0);

    return (
      <OlBox className="ReplyBox">
          <ListReply onClick={ () => props.setReplyToggle( !props.replyToggle )}>
              <HrefA>
                  <HrefAIcon src="/Common/images/icon_reply.svg"></HrefAIcon>{props.replyCount}
              </HrefA>
          </ListReply>
          <EmotionList>
              <EmotionListIconDiv className="smileIcon" onClick={()=> {
                  SendGood(props.seqComponent, props.pageSeq, setGood, setBad);
              }}>
                  <EmotionImg src="/Common/images/smile.svg"></EmotionImg>
                  <EmotionB >{good}</EmotionB>
              </EmotionListIconDiv>
              <EmotionListIconDiv className="sadIcon" onClick={()=> {
                  SendBad(props.seqComponent, props.pageSeq);
              }}>
                  <EmotionImg src="/Common/images/sad.svg"></EmotionImg>
                  <EmotionB >{bad}</EmotionB>
              </EmotionListIconDiv>
          </EmotionList>
          <AnswerDoList>
            <ViewAnswerBtn seqComponent={props.seqComponent}></ViewAnswerBtn>
            <LangBtnA>번역하기</LangBtnA>
          </AnswerDoList>
      </OlBox>
    );
  }
  
  export default ReplyBox;
