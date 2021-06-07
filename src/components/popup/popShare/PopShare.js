import React, { useEffect } from 'react';
import styled from 'styled-components';

function PopShare(props) {

    useEffect(()=>{
        if (props.clicked === true) {
            props.setShare(false);
        }
    },[props.clicked])


    return (
        <ShareDiv share={props.share} onClick={(e)=> {e.stopPropagation();}}>
            <ShareBox>
                <ShareImg src="https://developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png"></ShareImg>
                <ShareSpan>카카오톡</ShareSpan>
            </ShareBox>
            <ShareBox>
                <ShareImg src="/Common/images/share_kakaoS.png"></ShareImg>
                <ShareSpan>카카오스토리</ShareSpan>
            </ShareBox>
            <ShareBox>
                <ShareImg src="/Common/images/share_naver.png"></ShareImg>
                <ShareSpan>네이버</ShareSpan>
            </ShareBox>
            <ShareBox>
                <ShareImg src="/Common/images/share_FB.png"></ShareImg>
                <ShareSpan>페이스북</ShareSpan>
            </ShareBox>
            <ShareBox>
                <ShareImg src="/Common/images/share_twitter.png"></ShareImg>
                <ShareSpan>트위터</ShareSpan>
            </ShareBox>
            <ShareBox>
                <ShareImg src="/Common/images/share_link.png"></ShareImg>
                <ShareSpan>주소복사</ShareSpan>
            </ShareBox>
        </ShareDiv>
    );
}

export default PopShare;

const ShareDiv = styled.div`
    width:90%;
    max-width:300px;
    background-color:#fff;
    border-radius:20px;
    position:fixed;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    display:${props => props.share ? 'flex':'none'};
    flex-wrap: wrap;
    padding:10px 0;
    z-index:9999;
`;
const ShareBox = styled.a`
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    width:33.33333333%;
    margin:10px 0;
    cursor:pointer;
`;
const ShareImg = styled.img`
    width:40px;
`;
const ShareSpan = styled.span`
    font-size:12px;
    margin-top:5px;
`;