import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

function PopMessage({clicked, setClicked, showMessage, setShowMessage, user, nick}) {
    const {t} = useTranslation();
    const [ message , setMessage ] = useState("");
    const [ messageState, setMessageState] = useState(t('Message_Send'));

    //URL LIST
    const URL_MESSAGE = `/api/users/${user}/message`;

    const handleChange = (e) => {
        setMessage(e.target.value);
    }

    const sendMessage = async (e) => {
        setMessageState(t('Message_Send'));
        try{
            const response = await axios.post(URL_MESSAGE,{
                "Contents": message
            })
            if(response.data.msg === true){
                window.alert(t('Message_Sent')); 
                setMessage("");
                setMessageState(t('Message_Send'));
                setClicked(true);
                e.stopPropagation();
            } else {
                window.alert(response.data.code);
                setMessage("");
                setMessageState(t('Message_Send'));
                setClicked(true);
                e.stopPropagation();
            }
        } catch(error){
            console.log(error)
            setMessageState(t('Message_Send'));
            setClicked(true);
            e.stopPropagation();
        }
    }
        
    useEffect(() => {
        if(clicked === true){
            setShowMessage({show:false, user, nick});
        }
      }, [clicked, setShowMessage, nick, user]);

    return (
        <MainMessage show={showMessage} onClick={(e) => {
            setClicked(false);
            setShowMessage({show:true, user, nick});
            e.stopPropagation();
        }}>
            <MsgH5>
                <MsgH5Span>{nick}</MsgH5Span> {t('Message_Recipient')}</MsgH5>
                <MsgDiv>
                    <MsgTextarea value={message} onChange={(e) => {handleChange(e)}}></MsgTextarea>
                </MsgDiv>
                <MsgP>
                    <MsgPSpanCancel onClick={(e)=>{
                        setClicked(true);
                        setShowMessage({show:false, user:0, nick:''});
                        setMessage("");
                        e.stopPropagation();
                    }}>{t('Cancel')}</MsgPSpanCancel>
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