import styled from 'styled-components';
import ReplyContainer from '../replyContainer/ReplyContainer'
import React, { useState } from 'react';
import axios from 'axios';
import '../../App.css';


const SendReply = (pageSeq, QorA, text, setText, setReplys) => {
    //URL LIST
    const URL_QUE_REPLY = "/rest/questions/"+pageSeq+"/reply";
    const URL_ANS_REPLY = "/rest/answers/"+pageSeq+"/reply";

    console.log(QorA==='Q'? URL_QUE_REPLY: URL_ANS_REPLY);
    
    const textV = text;
    setText("");
    axios.put(QorA==='Q'? URL_QUE_REPLY : URL_ANS_REPLY,{
            "text":textV
        })
    .then((response) => response.data)
    .then((data) => {
        console.log("data : ..");
        console.log(data);

        if(data.code == "success"){
            setReplys(data.replys);
        }else if(data.code == "daydup"){
            if(data.num > 0){
                alert("1일 기준, 동일 제목 또는 내용의 답변글은 중복 " + 
                data.num + "건 까지만 허용 등록될 수 있습니다. \n다른 제목 또는 내용으로 글을 다시 등록하여 주십시오!");
            }else{
                alert("1일 기준, 동일 내용의 댓글이 이미 등록되어 있습니다. \n다른 내용으로 댓글을 다시 등록하여 주십시오!");
            }
        }else if(data.code == "continuetime"){
            alert("연속으로 댓글을 등록하실 수는 없습니다. \n이전 댓글 등록 후부터 "+
            data.num + "초 경과 후에 다시 댓글을 등록하여 주십시오!");
        }else if(data.code == "notlogin"){
            alert("로그인후 이용 가능합니다.");
        }else if(data.code == "nulldata"){
            alert("댓글 내용을 입력하세요!");
        }

    })
    .catch(function (error) {
        console.log("error : " + error);
        console.log(error);
    });
}

function ShowList(props){
    const [text, setText] = useState("");
    const USER= props.USER;

    const replys = props.replys;
    
    const nick = USER !== undefined ? ( USER !== null ? ( USER.nick !== null ? USER.nick : "" ) : "" ) : "";
    const seq = USER !== undefined ? ( USER !== null ? ( USER.seq !== null ? USER.seq : "" ) : "" ) : "";
    const [replyClick, setReplyClick] = useState(false);
    

    return (
    <ShowView row={props.replyToggle}>
        <div>
            <TextAreaDiv>
            <TextArea placeholder=
            { nick===""? "로그인 후 이용하시기 바랍니다.": nick+" 님의 의견을 댓글로 입력해주세요."}
            maxLength="400" onChange={(e) => {
                setText(e.target.value);
            } } value={text} onClick={()=>{setReplyClick(true)}}></TextArea>
                <ReplyButton width={replyClick} onClick={() => {
                    SendReply(props.pageSeq, props.seqComponent, text, setText, props.setReplys);
                    } }>등록</ReplyButton>
                
            
            </TextAreaDiv>
            <AutoRenewDiv>
            </AutoRenewDiv>
            <ReplySubmit>
                <ReplySubmitP>
                    <span>{text.length}</span>/400</ReplySubmitP>
            </ReplySubmit>
        </div>
        <ReplyContainer
            white={props.white} setWhite={props.setWhite} replys={replys} seq={seq}
            seqComponent={props.seqComponent} pageSeq={props.pageSeq}
            setReplys={props.resetReplys}
        ></ReplyContainer>
    </ShowView>
    );
}

function ReplyList(props) {
    const resetReplys = props.resetReplys;
    
    return (
      <ShowList USER={props.USER} replyToggle={props.replyToggle}
        pageSeq={props.pageSeq} seqComponent={props.seqComponent}
        white={props.white} setWhite={props.setWhite}
        className="ReplyList" replys={props.replys}
        setReplys={props.setReplys}
        resetReplys={resetReplys}
        >
      </ShowList>
    );
}
  
export default ReplyList;

const AutoRenewDiv = styled.div`
    display: inline-block;
    width: 50%;
    font-size: 16px;
    color: #333;
`;
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
    text-align: right;
    margin-left: -5px;
    display: inline-block;
    width: 50%;
    font-size: 16px;
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
    margin-top: 10px;
    display: flex;
    width: 100%;

    @media (max-width:480px) {
        height:30px;
    }
`;
