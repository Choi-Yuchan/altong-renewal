import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PopMessage(props) {
    const [ message , setMessage ] = useState("");
    const [ messageState, setMessageState] = useState("보내기");


    const handleChange = (e) => {
        setMessage(e.target.value);
    }

    const sendMessage = (e) => {
        setMessageState("보내는 중~");
        axios.put("/restApi/messages/" + props.user + "/send",{
            "Contents":message
        })
        .then( (response) => response.data )
        .then( (data) => {
                if(data.msg){
                    alert("메시지를 보냈습니다.");
                    setMessage("");
                    setMessageState("보내기");
                    props.setClicked(true);
                    e.stopPropagation();
                }else{
                    alert(data.msg);
                    setMessage("");
                    setMessageState("보내기");
                    props.setClicked(true);
                    e.stopPropagation();
                }
            }
        )
        .catch(function (error) {
                console.log(error)
                setMessageState("보내기");
                props.setClicked(true);
                e.stopPropagation();
            }
        );
    }
        
    useEffect(() => {
        if(props.clicked === true){
            props.setShowMessage({show:false, user:props.user, nick:props.nick});
        }
      }, [props.clicked]);

    return (
        <MainMessage show={props.showMessage} onClick={(e) => {
            props.setClicked(false);
            props.setShowMessage({show:true, user:props.user, nick:props.nick});
            e.stopPropagation();
        }}>
            <MsgH5>
                <MsgH5Span>{props.nick}</MsgH5Span> 님께 쪽지 보내기</MsgH5>
                <MsgDiv>
                    <MsgTextarea value={message} onChange={(e) => {handleChange(e)}}></MsgTextarea>
                </MsgDiv>
                <MsgP>
                    <MsgPSpanCancel onClick={(e)=>{
                        props.setClicked(true);
                        props.setShowMessage({show:false, user:0, nick:''});
                        setMessage("");
                        e.stopPropagation();
                    }}>취소</MsgPSpanCancel>
                    <MsgPSpanSend onClick={(e)=>{
                        sendMessage(e);
                    }}>{messageState}</MsgPSpanSend>
                </MsgP>
        </MainMessage>
    );
}
  
export default PopMessage;

const MsgP = styled.p`
    text-align: center;
    margin-top: 12px;
`
const MsgPSpanCancel = styled.span`
    border: 1px solid #8e8e8e;
    color: #8e8e8e;
    margin-right: 15px;
    padding: 3px 0px;
    width: 40%;
    font-weight: 400;
    letter-spacing: 1.5px;
    border-radius: 25px;
    display: inline-block;
    font-size: 14px;
    position: relative;
    cursor: pointer;
`
const MsgPSpanSend = styled.span`
    padding: 3px 0px;
    width: 40%;
    border: 1px solid #fd0031;
    color: #fd0031;
    font-weight: 400;
    letter-spacing: 1.5px;
    border-radius: 25px;
    display: inline-block;
    font-size: 14px;
    position: relative;
    cursor: pointer;
`

const MainMessage = styled.div`
    display: ${(props) => props.show?"block":"none"};
    opacity: 1;
    background: #fff;
    width: 90%;
    max-width: 400px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 20px;
    padding: 15px;
    z-index: 99;
`
const MsgH5 = styled.h5`
    font-size: 16px;
    text-align: center;
`
const MsgTextarea = styled.textarea`
    border: 1px solid #d2d2d2;
    width: 100%;
    font-weight: 500;
    padding: 5px;
    border-radius: 3px;
    resize: none;
    height: 180px;
    outline: none;
`
const MsgH5Span = styled.span`
    max-width: 100px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: inline-block;
    vertical-align: middle;
    margin-bottom: 4px;
    color: #eb639d;
`
const MsgDiv = styled.div`
    font-size: 16px;
    text-align: center;
`