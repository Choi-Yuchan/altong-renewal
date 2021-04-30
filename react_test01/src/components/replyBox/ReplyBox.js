import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ViewAnswerBtn(props){

    const page = props.pageSeq;
    const seqId = props.seqId;
    const setGoQuestion = props.setGoQuestion;

    if(props.seqComponent === 'A'){


        return <AnswerBtnAB show={props.goQuestion}
            onClick={(e)=>{
                console.log("/restApi/answers/"+page+"/"+seqId+"/answer-choice");
                axios.put("/restApi/answers/"+page+"/"+seqId+"/answer-choice")
                .then((response) => response.data)
                .then( (data) => {
                    setGoQuestion(false);
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
          <OlBoxLeft>
            <HrefA onClick={ () => props.setReplyToggle( !props.replyToggle )}>
                <HrefAIcon src="/Common/images/icon_reply.svg"></HrefAIcon>{props.replyCount}
            </HrefA>
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
          </OlBoxLeft>
          <AnswerDoList>
            <LangBtnA>번역하기</LangBtnA>
            <ViewAnswerBtn
                seqComponent={props.seqComponent} pageSeq={props.pageSeq}
                seqId={props.seqId}
                goAnswer={goAnswer}
                goQuestion={goQuestion}
                setGoQuestion={setGoQuestion}
            ></ViewAnswerBtn>
          </AnswerDoList>
      </OlBox>
    );
  }
  
export default ReplyBox;


const EmotionImg = styled.img`
    display: block;
    width: 20px;
    margin: 0 auto;

    @media (max-width:480px) {
        width: 18px;
    }
`;

const OlBox = styled.div`
  display:flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const OlBoxLeft = styled.div`
  display:flex;
  align-items: center;
`;

const HrefA = styled.a`
    padding: 5px 13px;
    border: 1px solid #d3d3d3;
    border-radius: 20px 20px 20px 0;
    font-size: 12px;
    position: relative;
    color: #737373;
    display:flex;
    justify-content: center;
    align-items: center;
    cursor:pointer;

    @media (max-width:480px) {
        padding:3px 8px;
        font-size:11px;
    }
`;

const HrefAIcon = styled.img`
    margin-bottom: -2px;
    margin-right: 4px;
`;

const EmotionList = styled.div`
    margin-left: 10px;
    display:flex;
`;

const EmotionListIconDiv = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-left:7px;
`;

const EmotionB = styled.b`
    display: block;
    color: #999;
    font-weight: normal;
    font-size: 10px;
`;

const AnswerDoList = styled.div`
    width:55%;
    display:flex;
    flex-direction: row-reverse;
`;

const AnswerBtnA = styled.a`
    width: 50%;
    height: 27px;
    color: #fd0031;
    font-size: 14px;
    font-weight: bold;
    border: 1px solid #fd0031;
    border-radius: 100px;
    cursor: pointer;
    text-decoration: none;
    display: ${(props) => props.show? "flex" : "none" };
    justify-content: center;
    align-items:center;

    @media (max-width:480px) {
        font-size: 13px;
        height:25px;
    }
`;

const AnswerBtnAB = styled.a`
    display: ${(props) => props.show? "flex" : "none" };
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 27px;
    border: 1px solid #fd8d0d;
    color: #fd8d0d;
    font-size: 14px;
    font-weight: bold;
    border-radius: 100px;
    text-decoration: none;
    cursor: pointer;

    @media (max-width:480px) {
        font-size:13px;
        height:25px;
    }
`;

const LangBtnA = styled.a`
    color: #f30;
    border: 1px solid #f30;
    margin-left: 10px;
    width: 50%;
    height: 27px;
    text-align: center;
    font-size: 14px;
    font-weight: bold;
    border-radius: 100px;
    text-decoration: none;
    cursor: pointer;
    display:flex;
    justify-content: center;
    align-items: center;

    @media (max-width:480px) {
        font-size:13px;
        height:25px;
    }
`;
