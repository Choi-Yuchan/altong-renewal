import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ViewAnswerBtn(props){

    const page = props.pageSeq;
    const seqId = props.seqId;

    if(props.seqComponent === 'A'){


        return <AnswerBtnAB show={props.goQuestion}
            onClick={(e)=>{
                console.log("/restApi/answers/"+page+"/"+seqId+"/answer-choice");
                axios.put("/restApi/answers/"+page+"/"+seqId+"/answer-choice")
                .then((response) => response.data)
                .then( (data) => {
                    console.log(data);
                })
                .catch(function (error) {
                    console.log(error);
                })
            }}
        >채택하기</AnswerBtnAB>
    }
    
    return <AnswerBtnA show={props.goAnswer} href={'/answer/answerWrite?QuestionSeq='+ page +'&CurPageName=&Section1=0&src_Sort=Seq&src_OrderBy=DESC'}
        >답변하기</AnswerBtnA>
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

    const [goAnswer,setGoAnswer] = useState(false);
    const [goQuestion,setGoQuestion] = useState(false);

    useEffect(()=>{
        if(props.pageSeq === undefined ){}
        else if(props.seqComponent==="Q"){
            axios.get("/restApi/answers/" + props.pageSeq + "/answered-check")
            .then((response) => response.data)
            .then( (data) => {
                console.log(data);
                if(data.code === "error"){
                    setGoAnswer(false);
                }else if(data.check === true) setGoAnswer(data.check);
                else setGoAnswer(false);
            })
            .catch(function (error) {
                console.log(error);
            })
        }else if(props.seqComponent==="A"){
            axios.get("/restApi/answers/" + props.pageSeq + "/choiced-check")
            .then((response) => response.data)
            .then( (data) => {
                console.log(data);
                if(data.code === "error"){
                    setGoQuestion(false);
                }else if(data.check === true) setGoQuestion(data.check);
                else setGoQuestion(false);
            })
            .catch(function (error) {
                console.log(error);
            })
        }
    }, []);
    

    useEffect(()=>{
        if(props.pageSeq === undefined){}else{
            const voteUrl= props.seqComponent==="Q"?"/rest/questions/"+props.pageSeq+"/vote":"/rest/answers/"+props.pageSeq+"/vote";
            axios.get(voteUrl)
            .then((response) => response.data)
            .then( (data) => {
                setGood(data.good);
                setBad(data.bad);
            })
            .catch(function (error) {
                console.log(error)
            })
        }
    }
    , []);
    
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
                  SendBad(props.seqComponent, props.pageSeq, setGood, setBad);
              }}>
                  <EmotionImg src="/Common/images/sad.svg"></EmotionImg>
                  <EmotionB >{bad}</EmotionB>
              </EmotionListIconDiv>
          </EmotionList>
          <AnswerDoList>
            <ViewAnswerBtn
                seqComponent={props.seqComponent} pageSeq={props.pageSeq}
                seqId={props.seqId}
                goAnswer={goAnswer}
                goQuestion={goQuestion}
            ></ViewAnswerBtn>
            <LangBtnA>번역하기</LangBtnA>
          </AnswerDoList>
      </OlBox>
    );
  }
  
export default ReplyBox;


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
    text-decoration: none;
    cursor: pointer;
    display: ${(props) => props.show? "inline-block" : "none" };
`;

const AnswerBtnAB = styled.a`
    display: ${(props) => props.show? "inline-block" : "none" };
    width: 40%;
    padding: 3px 0;
    text-align: center;
    border: 1px solid #fd8d0d !important;
    color: #fd8d0d !important;
    font-size: 14px;
    font-weight: bold;
    border-radius: 100px;
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
