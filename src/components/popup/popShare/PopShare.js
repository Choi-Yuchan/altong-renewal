import React, { useEffect } from 'react';
import styled from 'styled-components';
import {useTranslation} from 'react-i18next';

function PopShare(props) {
    const {t} = useTranslation();

    useEffect(()=>{
        if (props.clicked === true) {
            props.setShare(false);
        }
    },[props.clicked])

    //숫자 네자리 씩 '-' 로 나누기
    function Num4Comma(props){
        if(isNaN(parseInt(String(props.seq),10)) === true) return props.seq;
        const number = String(props.seq);
    
        return number.replace(/\B(?=(\d{4})+(?!\d))/g, "-");
    }
    const recomd = Num4Comma(props.USER); //유저 코드
    const seq = props.jsonArr.pageSeq; //content번호 
    const type = props.jsonArr.seqComponent; //질문(Q), 답변(A) 구별
    const desc = props.jsonArr.contents; // content 글
    const setDesc = desc.replace(/(<([^>]+)>)/ig,""); // content 글에서 태그 없애기
    const viewCount = props.jsonArr.head.readCount; // 글을 본 인원 수
    const commentCount = props.jsonArr.replys.length; // 댓글 개수
    const url = "http://www.altong.com/answer/answerList?" + (type != 'Q' ? type : '') + "Seq=" + seq; // url 주소 바꾸기
    const Htags = "알통,지식공유";
    const setUrl = encodeURIComponent(url); //인코딩한 url 값
    const title = () => {
        if (type === 'A') {
            return props.jsonArr.head.nick += '님의 답변';
        } else {
            return props.jsonArr.head.title;
        }
    }

    //카카오 스크립트, 키 불러오기
    useEffect(()=>{
        const script = document.createElement('script');
        script.src = 'https://developers.kakao.com/sdk/js/kakao.js'
        script.async = true;

        try {
            if (window.Kakao) {
                window.Kakao.init('864b3dbdc90531c3065c83e6a783b6a9');  //원본 키 -> efd4e6490f58a10c9322bada90293823
            }                                                           //테스트 키 -> 864b3dbdc90531c3065c83e6a783b6a9
        } catch (e) {}

        document.body.appendChild(script);
        document.body.removeChild(script);
    }, [window.Kakao])

    // 카카오톡 공유하기
    const kakao = () => {
        window.Kakao.Link.sendDefault({
            objectType: 'feed',
            content: {
                title: title(),
                description: setDesc,
                imageUrl: 'http://www.altong.com/Common/images/share_sns/k_feedimg.jpg',
                link: {
                  mobileWebUrl: url,
                  webUrl: url
                }
              },
              social: {
                viewCount: viewCount,
                commentCount: commentCount
              },
              buttons: [
                {
                  title: '웹으로 보기',
                  link: {
                    mobileWebUrl: url,
                    webUrl: url
                  }
                },
              ]
        });
    }

    //카카오 스토리 공유
    const kakaoStory = () => {
        const filter = 'win16|win32|win64|mac|macintel';
        if (navigator.platform) {
            if (filter.indexOf(navigator.platform.toLowerCase()) < 0) {
                window.Kakao.Story.open({
                    url: url,
                    text: title()
                });
            } else {
                window.Kakao.Story.share({
                    url: url,
                    text: title()
                });
            }
        }
        
    }

    //네이버 공유
    const naver = () => {
        window.open('http://share.naver.com/web/shareView.nhm?url=' + setUrl + '&title=' + encodeURI(title()),'newWindow','width=500,height=600');
    }

    //페이스북 공유
    const facebook = () => {
        window.open('http://www.facebook.com/sharer/sharer.php?u=' + setUrl,'newWindow','width=500,height=600');
    }

    //트위터 공유
    const twitter = () => {
        window.open('http://twitter.com/intent/tweet?text=' + '&url=' + setUrl + '&hashtags=' + Htags,'newWindow','width=500,height=600');
    }

    //클리보드 복사
    const copyclipboard = (e) => {
        //url 주소 바꾸기
        const this_text2 = 'http://www.altong.com/answer/answerList?Seq=' + props.SSRJSON[0].pageSeq + '&recomd=' + recomd;
        const tempElem = document.createElement('textarea');
        tempElem.value = this_text2;
        document.body.appendChild(tempElem);

        tempElem.select();
        document.execCommand('copy');
        document.body.removeChild(tempElem);

        alert('주소 복사가 완료되었습니다. \n[ctrl + v] 키 또는 붙여넣기하여 공유하시기 바랍니다!');
    }    

    return (
        props.share &&
        <ShareDiv onClick={(e)=> {e.stopPropagation();}}>
            <ShareBox onClick={kakao}  >
                <ShareImg id="kakao-link-btn" src="https://developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png"></ShareImg>
                <ShareSpan>{t('Share_KakaoTalk')}</ShareSpan>
            </ShareBox>
            <ShareBox onClick={kakaoStory}>
                <ShareImg src="/Common/images/share_kakaoS.png"></ShareImg>
                <ShareSpan>{t('Share_KakaoStory')}</ShareSpan>
            </ShareBox>
            <ShareBox onClick={naver}>
                <ShareImg src="/Common/images/share_naver.png"></ShareImg>
                <ShareSpan>{t('Share_Naver')}</ShareSpan>
            </ShareBox>
            <ShareBox onClick={facebook}>
                <ShareImg src="/Common/images/share_FB.png"></ShareImg>
                <ShareSpan>{t('Share_Facebook')}</ShareSpan>
            </ShareBox>
            <ShareBox onClick={twitter}>
                <ShareImg src="/Common/images/share_twitter.png"></ShareImg>
                <ShareSpan>{t('Share_Twitter')}</ShareSpan>
            </ShareBox>
            <ShareBox onClick={copyclipboard}>
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
    display:flex;
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