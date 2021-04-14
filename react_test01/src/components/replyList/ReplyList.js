import styled from 'styled-components';
import ReplyContainer from '../replyContainer/ReplyContainer'
import React, { useState } from 'react';
import axios from 'axios';


const AutoRenewDiv = styled.div`
    display: inline-block;
    width: 50%;
    font-size: 16px;
    font-family: "Noto Sans KR", "Noto Sans JP", "Noto Sans HK", "Noto Sans SC", "Noto Sans TC", sans-serif;
    color: #333;
`;
const TextArea = styled.textarea`
    flex-grow: 1;
    padding: 9px 20px;
    margin: 0;
    width: auto;
    transition: all 0.3s;
    resize: none;
    font-size: 14px;
    border: 1px solid #ccc;
    color: #666;
    border-radius: 5px;
    outline: none;
    font-family: "Noto Sans KR", "Noto Sans JP", "Noto Sans HK", "Noto Sans SC", "Noto Sans TC", sans-serif;
`;
const ReplySubmit = styled.div`
    text-align: right;
    margin-left: -5px;
    display: inline-block;
    width: 50%;
    font-size: 16px;
    font-family: "Noto Sans KR", "Noto Sans JP", "Noto Sans HK", "Noto Sans SC", "Noto Sans TC", sans-serif;
    color: #333;
`;
const ReplySubmitP = styled.p`
    display: inline-block;
    font-size: 12px;
    font-weight: 500;
    color: #ccc;
    margin-bottom: 0;
`;
const ReplyButton = styled.button`
    flex-grow: 0;
    height: 40px;
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
`;
const ShowView = styled.div`
    transition-property: 'max-height';
    transition-duration: ${props => props.row ? '0.1s': '0.3s'};
    height:auto;
    max-height: ${props => props.row ? 0: '10000px'};
    overflow:hidden;

`;
const TextAreaDiv = styled.div`
    transition:height 1s;
    height: auto;
    overflow:visible;
    height: 40px;
    margin-top: 10px;
    display: flex;
    width: 100%;
    padding: 0;
    box-sizing: border-box;
`;

const SendReply = (pageSeq, QorA, text, setText, setReplys) => {
    console.log(QorA==='Q'?"/rest/questions/"+pageSeq+"/reply":"/rest/answers/"+pageSeq+"/reply");
    
    const textV = text;
    setText("");
    axios.put(QorA==='Q'?"/rest/questions/"+pageSeq+"/reply":
        "/rest/answers/"+pageSeq+"/reply",{
            "text":textV
        })
    .then((response) => response.data)
    .then((data) => {
        console.log("data : ..");
        console.log(data);

        if(data.code == "success"){
            setReplys(data.replys);
        }else if(data.code == ""){

        }
    })
    .catch(function (error) {
        console.log("error : " + error);
        console.log(error);
    });
}
// {props.pageSeq} seqComponent={props.seqComponent}
function ShowList(props){
    const [length, setlength] = useState(0);
    const [text, setText] = useState("");
    const USER= props.USER;

    const replys = props.replys;
    
    const nick = USER !== undefined ? ( USER !== null ? ( USER.nick !== null ? USER.nick : "" ) : "" ) : "";
    
    return (
    <ShowView row={props.replyToggle}>
        <div>
            <TextAreaDiv>
            <TextArea placeholder=
            { nick===""? "로그인 후 이용하시기 바랍니다.": nick+" 님의 의견을 댓글로 입력해주세요."}
            maxLength="400" onChange={(e) => {
                setlength(e.target.value.length);
                setText(e.target.value);
            } } value={text} ></TextArea>
            <ReplyButton onClick={() => {
                SendReply(props.pageSeq, props.seqComponent, text, setText, props.setReplys);
            } }>등록</ReplyButton>
            </TextAreaDiv>
            <AutoRenewDiv>
            </AutoRenewDiv>
            <ReplySubmit>
                <ReplySubmitP>
                    <span>{length}</span>/400</ReplySubmitP>
                
            </ReplySubmit>
        </div>
        <ReplyContainer white={props.white} setWhite={props.setWhite} replys={replys}></ReplyContainer>
    </ShowView>
    );
}

function ReplyList(props) {
    return (
      <ShowList USER={props.USER} replyToggle={props.replyToggle}
        pageSeq={props.pageSeq} seqComponent={props.seqComponent}
        white={props.white} setWhite={props.setWhite}
        className="ReplyList" replys={props.replys}
        setReplys={props.setReplys}
        >
      </ShowList>
    );
  }
  
  export default ReplyList;
