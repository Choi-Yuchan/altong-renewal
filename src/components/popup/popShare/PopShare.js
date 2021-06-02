import { findByAltText } from '@testing-library/dom';
import React, { useEffect } from 'react';
import styled from 'styled-components';

function PopShare(props) {

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
    //클리보드 복사
    const copyclipboard = (e) => {
        // const this_text2 = e.data('source');
        //url 주소 바꾸기
        const this_text2 = 'https://192.168.0.220/answer/answerList?Seq=' + props.pageNumber + '&recomd=' + Num4Comma(props.USER);
        const tempElem = document.createElement('textarea');
        tempElem.value = this_text2;
        document.body.appendChild(tempElem);

        tempElem.select();
        document.execCommand('copy');
        document.body.removeChild(tempElem);

        alert('주소 복사가 완료되었습니다. \n[ctrl + v] 키 또는 붙여넣기하여 공유하시기 바랍니다!');
    }
    const seq = props.jsonArr.pageSeq;
    const type = props.jsonArr.seqComponent;
    const recomd = Num4Comma(props.USER);
    // url 주소 바꾸기
    const url = "http://192.168.0.220/answer/answerList?" + (type != 'Q' ? type : '') + "Seq=" + seq;
    const Htags = "알통,지식공유";
    const setUrl = encodeURIComponent(url);
    const title = () => {
        if (type === 'A') {
            return props.jsonArr.head.nick += '님의 답변';
        } else {
            return props.jsonArr.head.title;
        }
    }

    const twitter = () => {
        window.open('https://twitter.com/intent/tweet?text=' + '&url=' + setUrl + '&hashtags=' + Htags,'newWindow','width=500,height=600');
    }
    const naver = () => {
        window.open('https://share.naver.com/web/shareView.nhm?url=' + setUrl + '&title=' + title(),'newWindow','width=500,height=600');
    }
    const facebook = () => {
        window.open('https://www.facebook.com/sharer/sharer.php?u=' + setUrl,'newWindow','width=500,height=600');
    }
    const kakao = () => {
        // javascript 키가 잘 작동되는지 확인 필요
        window.Kakao.init('efd4e6490f58a10c9322bada90293823');

        window.Kakao.Link.sendDefault({
            objectType: 'feed',
            content: {
                title: title(),
                description: '알통은 인터넷 상의 모든 지식·정보에 가치를 부여, 그 가치를 기여자들과 공유하는 수익형 지식공유 플랫폼입니다.',
                imageUrl: 'http://www.altong.com/Common/images/share_sns/k_feedimg.jpg',
                link: {
                    movileWebUrl: 'http://www.altong.com/default/main',
                    webUrl: 'http://www.altong.com/default/main'
                },
                social: {
                    viewCount: props.jsonArr.head.readCount,
                    commentCount: '' //답변 개수 $('.answer_box').length
                },
                buttons: [
                    {
                        title:'알통 보러가기',
                        link: {
                            movileWebUrl: url,
                            webUrl: url
                        }
                    }
                ]
            }
        });
    }
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
    

    return (
        <>
        <ShareDiv share={props.share} onClick={(e)=> {e.stopPropagation();}}>
            <ShareBox onClick={kakao}>
                <ShareImg src="https://developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png"></ShareImg>
                <ShareSpan>카카오톡</ShareSpan>
            </ShareBox>
            <ShareBox onClick={kakaoStory}>
                <ShareImg src="/Common/images/share_kakaoS.png"></ShareImg>
                <ShareSpan>카카오스토리</ShareSpan>
            </ShareBox>
            <ShareBox onClick={naver}>
                <ShareImg src="/Common/images/share_naver.png"></ShareImg>
                <ShareSpan>네이버</ShareSpan>
            </ShareBox>
            <ShareBox onClick={facebook}>
                <ShareImg src="/Common/images/share_FB.png"></ShareImg>
                <ShareSpan>페이스북</ShareSpan>
            </ShareBox>
            <ShareBox onClick={twitter}>
                <ShareImg src="/Common/images/share_twitter.png"></ShareImg>
                <ShareSpan>트위터</ShareSpan>
            </ShareBox>
            <ShareBox onClick={copyclipboard}>
                <ShareImg src="/Common/images/share_link.png"></ShareImg>
                <ShareSpan>주소복사</ShareSpan>
            </ShareBox>
        </ShareDiv>
        </>
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