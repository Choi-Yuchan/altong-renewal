import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useTranslation} from 'react-i18next';

function ViewAnswerBtn(props){

    const page = props.pageSeq;
    const seqId = props.seqId;
    const setGoQuestion = props.setGoQuestion;

    const URL_ANS_CHOICE = "/restApi/answers/"+page+"/"+seqId+"/answer-choice"
    
    if(props.seqComponent === 'A'){
        if (props.choice === true) {
            return <AnswerBtnAB show={props.goQuestion}
                onClick={(e)=>{
                    console.log(URL_ANS_CHOICE);
                    axios.put(URL_ANS_CHOICE)
                    .then((response) => response.data)
                    .then( (data) => {
                        setGoQuestion(false);
                        console.log(data);
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
                }}
            >{props.btnName[1]}</AnswerBtnAB>
        }
    }
    
    return <AnswerBtnA show={props.goAnswer} href={'/answer/answerWrite?QuestionSeq='+ page +'&CurPageName=&Section1=0&src_Sort=Seq&src_OrderBy=DESC'}
        >{props.btnName[2]}</AnswerBtnA>
}


function ReplyBox(props) {
    
    const [good,setGood] = useState(0);
    const [bad,setBad] = useState(0);
    const [goAnswer,setGoAnswer] = useState(false);
    const [goQuestion,setGoQuestion] = useState(false);

    const pageSeq = props.pageSeq;

    //URL_LIST
    const URL_QUE_VOTE = `/api/questions/${pageSeq}/vote`;
    const URL_ANS_VOTE = `/api/answers/${pageSeq}/vote`;
    const URL_ANS_CHECK = `/api/answers/${pageSeq}/answered-check`;
    const URL_CHO_CHECK = `/api/answers/${pageSeq}/choiced-check`;

    const SendGood = async (seqComponent, setGood, setBad) => {
        try{
            const response = await axios.patch(seqComponent ==='Q' ? URL_QUE_VOTE : URL_ANS_VOTE, {
                estiSeq:"G"
            })
            if(response.data.code === "success"){
                    setGood(response.data.good);
                    setBad(response.data.bad);
            }
        } catch (e) {
            console.log(e)
        }
    }

    const SendBad = async (seqComponent, setGood, setBad) => {
        try{
            const response = await axios.patch(seqComponent==='Q' ? URL_QUE_VOTE : URL_ANS_VOTE,{
                estiSeq:"B"
            })
            if(response.data.code === "success"){
                    setGood(response.data.good);
                    setBad(response.data.bad);
            }
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(()=>{
        if(props.pageSeq === undefined ){}
        else if(props.seqComponent==="Q"){
            axios.get(URL_ANS_CHECK)
            .then((response) => response.data)
            .then( (data) => {
                if(data.code === "error"){
                    setGoAnswer(false);
                }else if(data.check === true) setGoAnswer(data.check);
                else setGoAnswer(false);
            })
            .catch(function (error) {
                console.log(error);
            })
        }else if(props.seqComponent==="A"){
            axios.get(URL_CHO_CHECK)
            .then((response) => response.data)
            .then( (data) => {
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
        const getVoteData = async () => {
            if(props.pageSeq === undefined){}else
            try{
                const voteUrl= props.seqComponent==="Q"? URL_QUE_VOTE:URL_ANS_VOTE;
                const response = await axios.get(voteUrl);
                setGood(response.data.good);
                setBad(response.data.bad);
            } catch (e) {
                console.log(e);
            }
        }
        getVoteData();
    }
    , []);
    

    const {t} = useTranslation();
                        //번역하기, 채택하기, 답변하기, 답변완료 순
    const btnName = [t('ReplyBtn_Translate'), t('ReplyBtn_Select'), t('ReplyBtn_Post_answer'), t('ReplyBtn_Answer_posted')]

    return (
      <OlBox className="ReplyBox">
          <OlBoxLeft>
            <HrefA onClick={ () => props.setReplyToggle( !props.replyToggle )}>
                <HrefAIcon src="/Common/images/icon_reply.svg"></HrefAIcon>{props.replyCount}
            </HrefA>
            <EmotionList>
                <EmotionListIconDiv className="smileIcon" onClick={()=> {
                    SendGood(props.seqComponent, setGood, setBad);
                }}>
                    <EmotionImg src="/Common/images/smile.svg"></EmotionImg>
                    <EmotionB >{good}</EmotionB>
                </EmotionListIconDiv>
                <EmotionListIconDiv className="sadIcon" onClick={()=> {
                    SendBad(props.seqComponent, setGood, setBad);
                }}>
                    <EmotionImg src="/Common/images/sad.svg"></EmotionImg>
                    <EmotionB >{bad}</EmotionB>
                </EmotionListIconDiv>
            </EmotionList>
          </OlBoxLeft>
          <AnswerDoList>
            <LangBtnA>{btnName[0]}</LangBtnA>
            <ViewAnswerBtn
                seqComponent={props.seqComponent} pageSeq={props.pageSeq}
                seqId={props.seqId}
                goAnswer={goAnswer}
                goQuestion={goQuestion}
                setGoQuestion={setGoQuestion}
                choice={props.choice}
                btnName={btnName}
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
