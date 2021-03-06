import styled from 'styled-components';
import ReplyContainer from '../replyContainer/ReplyContainer'
import React, { useState } from 'react';
import axios from 'axios';
import '../../App.css';
import {useTranslation} from 'react-i18next';


const SendReply = (pageSeq, QorA, text, setText, setReplys, langTrans) => {
 
    //URL LIST
    const URL_QUE_REPLY = `/api/questions/${pageSeq}/reply`;
    const URL_ANS_REPLY = `/api/answers/${pageSeq}/reply`;
    
    const textV = text;
    setText("");
    axios.post(QorA ==='Q'? URL_QUE_REPLY : URL_ANS_REPLY,{
            "text":textV
        })
    .then((response) => response.data)
    .then((data) => {
        if(data.code === "success"){
            setReplys(data.replys);
        }else if(data.code === "daydup"){
            if(data.num > 0){
                alert(langTrans[3] + data.num + langTrans[4]);
            }else{
                alert(langTrans[5]);
            }
        }else if(data.code === "continuetime"){
            alert(langTrans[6] + data.num + langTrans[7]);
        }else if(data.code === "notlogin"){
            alert(langTrans[1]);
        }else if(data.code === "nulldata"){
            alert(langTrans[8]);
        }

    })
    .catch(function (error) {
        console.log("error : " + error);
    });
}

function ShowList({USER, replyToggle, pageSeq, seqComponent, white, setWhite, replys, setReplys, resetReplys, langTrans}){
    const [text, setText] = useState("");
    
    const nick = USER !== undefined ? ( USER !== null ? ( USER.nick !== null ? USER.nick : "" ) : "" ) : "";
    const seq = USER !== undefined ? ( USER !== null ? ( USER.seq !== null ? USER.seq : "" ) : "" ) : "";
    const [replyClick, setReplyClick] = useState(0);
    

    return (
    <ShowView row={replyToggle}>
        <TextAreaDiv>
            <TextArea placeholder=
            { nick===""? langTrans[1]: nick+langTrans[0]}
            maxLength="400" onChange={(e) => {
                setText(e.target.value);
            } } value={text} onClick={()=>{setReplyClick(true)}}></TextArea>
                <ReplyButton width={replyClick} onClick={() => {
                    SendReply(pageSeq, seqComponent, text, setText, setReplys, langTrans);
                    } }>{langTrans[2]}</ReplyButton>
        </TextAreaDiv>
        <ReplySubmit>
            <ReplySubmitP><span>{text.length}</span>/400</ReplySubmitP>
        </ReplySubmit>
        <ReplyContainer
        white={white} setWhite={setWhite} replys={replys} 
        pageSeq={pageSeq} seq={seq}
        setReplys={resetReplys} seqComponent={seqComponent} 
        ></ReplyContainer>
    </ShowView>
    );
}

function ReplyList({USER, replyToggle, pageSeq, seqComponent, white, setWhite, replys, setReplys, resetReplys}) {
    const {t} = useTranslation();
    const langTrans = [
        t('Reply_Comment'),
        t('Login_Required'),
        t('Reply_Post'),
        t('System_Same_Content1'),
        t('System_Same_Content2'),
        t('System_Same_Comment'),
        t('System_Limit_Comment1'),
        t('System_Limit_Comment2'),
        t('System_Enter_Contents'),
    ]
    
    return (
      <ShowList USER={USER} replyToggle={replyToggle}
        pageSeq={pageSeq} seqComponent={seqComponent}
        white={white} setWhite={setWhite}
        className="ReplyList" replys={replys}
        setReplys={setReplys}
        resetReplys={resetReplys}
        langTrans={langTrans}
        >
      </ShowList>
    );
}
  
export default ReplyList;

const TextArea = styled.textarea`
    flex-grow: 1;
    padding: 9px 20px;
    transition: all 0.3s;
    resize: none;
    font-size: 14px;
    border: 1px solid #ccc;
    color: #666;
    border-radius: 5px;
    outline: none;
    height:100%;
    font-family: "Noto Sans SC", "Noto Sans JP", "Noto Sans KR" ;

    @media (max-width:480px) {
        font-size:12px;
        padding:5px 7px;
    }
`;
const ReplySubmit = styled.div`
    margin: 5px 0 10px -5px;
    text-align: right;
    width: 100%;
    font-size: 16px;
    color: #333;
`;
const ReplySubmitP = styled.p`
    font-size: 12px;
    font-weight: 500;
    color: #ccc;
    margin-bottom: 0;
`;
const ReplyButton = styled.button`
    max-width:${props => props.width ? '200px':0};
    opacity:${props => props.width ? 1:0};
    margin-right:${props=> props.width ? 0:'-20px'};
    height: 100%;
    background: #fff;
    border: 1px solid #ccc;
    border-radius: 5px;
    cursor: pointer;
    text-align: center;
    padding: 5px 10px;
    white-space: nowrap;
    margin-left: 3px;
    color: #737373;
    font-size: 12px;
    overflow:hidden;
    font-family:"Noto Sans SC", "Noto Sans JP", "Noto Sans KR" ;
    transition:all 0.5s linear;
`;

const ShowView = styled.div`
    overflow:hidden;
    max-height: ${props => props.row ? 0 : '5000px'};
    transform-origin: center top;
    transition:all ${props => props.row ? '0s':'3s'} linear;
    height:auto;
`;
const TextAreaDiv = styled.div`
    height: 40px;
    margin-top: 15px;
    display: flex;
    width: 100%;

    @media (max-width:480px) {
        height:30px;
    }
`;
