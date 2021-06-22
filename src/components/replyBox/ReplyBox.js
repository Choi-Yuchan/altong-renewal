import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useTranslation} from 'react-i18next';

function ViewAnswerBtn({seqComponent, pageSeq, memberSeq, btnName, USER, SSRJSON, choice}){
    const URL_ANS_CHECK = `/api/answers/${pageSeq}/answered-check`;
    const URL_CHO_CHECK = `/api/answers/${pageSeq}/choiced-check`;
    const URL_ANS_CHOICE = `/api/answers/${pageSeq}/${memberSeq}/choose`;
    const URL_ANSWER_WRITE = `/answer/answerWrite?QuestionSeq=${pageSeq}&CurPageName=/answer/questionList&Section1=0&src_Sort=Seq&src_OrderBy=DESC`;
    const [goAnswer,setGoAnswer] = useState(false); //답변하기 유무
    const [goQuestion,setGoQuestion] = useState(false); // 채택하기 유무
    const [login, setLogin] = useState(false); //로그인 유무
    const [needLogin, setNeedLogin] = useState(''); // 로그인 경고
    const questionSeqId = SSRJSON[0].seqId; // 질문 seqId

    useEffect(()=>{
        const boxCheckButton = async () => {          
            if (pageSeq === undefined) {}
            else if (seqComponent === 'Q') {
                try {
                    const response = await axios.get(URL_ANS_CHECK);
                    if (response.data.code === 'error') {
                        setNeedLogin(response.data.error);
                        setLogin(true);
                        setGoAnswer(true);
                    } else if (response.data.check === true) {
                        setNeedLogin('');
                        setLogin(false);
                        setGoAnswer(true);
                    } else {
                        setNeedLogin('');
                        setLogin(false);
                        setGoAnswer(false);
                    }
                } catch (e) {
                    console.log(e);
                }
            } else if (seqComponent === 'A') {
                try {
                    const response = await axios.get(URL_CHO_CHECK);
                    if (response.data.check === true) {
                        setGoQuestion(true);
                    } else {
                        setGoQuestion(false);
                    }
                } catch (e) {
                    console.log(e);
                }
            }
        }
        boxCheckButton();
    },[]);
    const choiceButton = async () => {
        if(window.confirm('이 답변을 채택하시겠습니까?')) {
            try {
                const response = await axios.patch(URL_ANS_CHOICE);
                setGoQuestion(false);
                console.log(response.data);
                window.location.reload();
            } catch (e) {
                console.log(e);
            }
        }
    }
    
    if(seqComponent === 'A'){ //채택하기
        if (choice === true) { // 채택한 답변이 없을 때
            if (goQuestion === true || questionSeqId === USER.seq) { //내가 질문한 글이고 채택한 답변 아닐 때
                return <AnswerBtnAB onClick={choiceButton} >{btnName[1]}</AnswerBtnAB>
            } else {
                return '';
            }
        } else { //채택한 답변이 있을 때
            return '';
        }
    } else { //답변하기
        if (memberSeq === USER.seq) {return '';}
        else {
            if (goAnswer === true) {
                return <AnswerBtnA show={goAnswer} href={URL_ANSWER_WRITE} onClick={(e)=>{
                    if (login === true) {
                        e.preventDefault();
                        alert(needLogin);
                    }
                }} >{btnName[2]}</AnswerBtnA> //답변하기
            } else if (goAnswer === false) {
                return <AnswerBtnA show={goAnswer} >{btnName[3]}</AnswerBtnA> //답변완료
            }
        }
    }
    return '';
    
}


function ReplyBox(props) {
    
    const [good,setGood] = useState(0);
    const [bad,setBad] = useState(0);
    const pageSeq = props.pageSeq;
    //URL_LIST
    const URL_QUE_VOTE = `/api/questions/${pageSeq}/vote`;
    const URL_ANS_VOTE = `/api/answers/${pageSeq}/vote`;

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
                seqComponent={props.seqComponent} pageSeq={pageSeq}
                memberSeq={props.seqId}
                choice={props.choice}
                btnName={btnName}
                USER={props.USER}
                SSRJSON={props.SSRJSON}
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
    color: ${props=> props.show ? '#fd0031' : '#333'};
    font-size: 14px;
    font-weight: bold;
    border: 1px solid ${props=> props.show ? '#fd0031' : '#fff'};
    background: ${props=> props.show ? '#fff' : '#e8e8e8'};
    border-radius: 100px;
    cursor: ${props=> props.show ? 'pointer' : 'default'};
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items:center;

    @media (max-width:480px) {
        font-size: 13px;
        height:25px;
    }
`;

const AnswerBtnAB = styled.a`
    display: flex;
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
