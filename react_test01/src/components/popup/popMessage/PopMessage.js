import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PopMessage(props) {
    
    return (
        <MainMessage>
            <MsgH5>
                <MsgH5Span>(닉네임)</MsgH5Span>님께 쪽지 보내기</MsgH5>
                <MsgDiv>
                    <MsgTextarea></MsgTextarea>
                </MsgDiv>
                <MsgP>
                    <MsgPSpanCancel>취소</MsgPSpanCancel>
                    <MsgPSpanSend>보내기</MsgPSpanSend>
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
    display: block;
    opacity: 1;
    background: #fff;
    width: 90%;
    max-width: 400px;
    position: absolute;
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