import React, { useEffect } from 'react';
import styled from 'styled-components';
import {useTranslation} from 'react-i18next';
import i18n from '../../../config/lang/i18n';

function PopShare(props) {
    const {t} = useTranslation();

    useEffect(()=>{
        if (props.clicked === true) {
            props.setShare(false);
        }
    },[props.clicked])


    return (
        <ShareDiv share={props.share} onClick={(e)=> {e.stopPropagation();}}>
            <ShareBox>
                <ShareImg src="https://developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png"></ShareImg>
                <ShareSpan>{t('Share_KakaoTalk')}</ShareSpan>
            </ShareBox>
            <ShareBox>
                <ShareImg src="/Common/images/share_kakaoS.png"></ShareImg>
                <ShareSpan>{t('Share_KakaoStory')}</ShareSpan>
            </ShareBox>
            <ShareBox>
                <ShareImg src="/Common/images/share_naver.png"></ShareImg>
                <ShareSpan>{t('Share_Naver')}</ShareSpan>
            </ShareBox>
            <ShareBox>
                <ShareImg src="/Common/images/share_FB.png"></ShareImg>
                <ShareSpan>{t('Share_Facebook')}</ShareSpan>
            </ShareBox>
            <ShareBox>
                <ShareImg src="/Common/images/share_twitter.png"></ShareImg>
                <ShareSpan>{t('Share_Twitter')}</ShareSpan>
            </ShareBox>
            <ShareBox>
                <ShareImg src="/Common/images/share_link.png"></ShareImg>
                <ShareSpan>{t('Copy_URL')}</ShareSpan>
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