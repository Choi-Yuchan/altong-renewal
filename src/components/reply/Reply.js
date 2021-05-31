import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Num3Comma from '../functions/num3comma/Num3Comma';
import FormatDateAsText from '../functions/formatDateAsText/FormatDateAsText';

const handleImgError = (e) => {
    e.target.src = "/pub/css/profile/img_thum_base0.jpg";
  }

function ShowView({date, timeToggle}){

    if(timeToggle === false){
        return <FormatDateAsText date={Date.parse(date)}/>
    }
    return <><FormatDateAsText date={Date.parse(date)}/><ReplyLocaleSpan>{date} UTC+9</ReplyLocaleSpan></>
}
function AldolViewImg(props){
    return <ReplyImg src={"/UploadFile/Profile/"+props.img} onError={handleImgError}></ReplyImg>
}
function AldolViewContents(props){

    if(props.seqId === 10003513){
        if(props.content === "관리자님이 이 질문을 꼭대기로 올리셨어요."){
            return <AldolReplyContents>관리자님이 이 질문을 꼭대기로 올리셨어요.</AldolReplyContents>
        }
        return <AldolReplyContents>{props.to} 님이 감사의 마음으로 {props.from} 님에게 <Num3Comma num={props.al}></Num3Comma>알을 증정하셨어요.</AldolReplyContents>
    }
    return <ReplyContents>{props.content}</ReplyContents>
}

const DelReply = ( seqComponent, replySeq, setReplys) => {
    const URL_QUE_REPLY = "/restApi/answers/"+replySeq+"/Q/reply-del"
    const URL_ANS_REPLY = "/restApi/answers/"+replySeq+"/A/reply-del"

    console.log(seqComponent==='Q'? URL_QUE_REPLY : URL_ANS_REPLY);

    axios.delete(seqComponent==='Q'? URL_QUE_REPLY : URL_ANS_REPLY)
    .then((response) => response.data)
    .then((data) => {
        setReplys(replySeq);
        if(data.msg==="success"){

        }else{
            alert("댓글 삭제가 실패하였습니다.");
        }
    })
    .catch(function (error) {
        console.log("error : " + error);
        console.log(error);
    });
}

const DelViewer = (user, seqId, seqComponent, replySeq, setReplys) => {
    if(user === seqId){
        return <> · <DelI onClick={(e)=>{
            DelReply(e, seqComponent, replySeq, setReplys );
        }}>삭제</DelI></>
    } else if (user !== 10003513) {
        return <> · <ReportImg>신고</ReportImg></>
    }
    
}

function Reply(props) {
    
    const seqComponent = props.seqComponent;
    // 댓글 수정
    const setReplys= props.setReplys;


    const [timeToggle, setTimeToggle] = useState(false);
    const seq = props.seq;
    // 댓글 id 값
    const replySeq = props.reply.seq

    const [imgChange, setImgChange] = useState(true);
    const trans = () => {
      if (imgChange) {
        return '/Common/images/language.svg';
      } else {
        return '/Common/images/language_on.svg';
      }
    }  

    useEffect(() => {
        if(props.white === true){
            setTimeToggle(false);
        }
    }, [props.white]);

    return (
      <MainContents className="Reply">
          <Table>
              <tbody>
                  <tr>
                      <ReplyLocaleTh>
                            <ReplyAhrefA>
                                <AldolViewImg
                                    seqId={props.reply.profile.seqId}
                                    img={props.reply.profile.img}
                                    onError={handleImgError}
                                ></AldolViewImg>
                                <ReplyLocalDiv>{props.reply.profile.locale}</ReplyLocalDiv>
                            </ReplyAhrefA>
                      </ReplyLocaleTh>
                        <AldolViewContents
                            content={props.reply.content} from={props.reply.nick2}
                            seqId={props.reply.profile.seqId} to={props.reply.nick1} al={props.reply.almoney}>
                        </AldolViewContents>
                  </tr>
                  <tr>
                      <ReplyBottonDiv></ReplyBottonDiv>
                      <ReplyBotton>
                        <ReplyLocaleImg src={"/Common/images/nation/" + props.reply.profile.locale +'.svg'}></ReplyLocaleImg>
                        
                        <ReplyAhref>{props.reply.profile.nick}</ReplyAhref> · <Btag onClick={ (e) => { 
                                props.setWhite(false);
                                setTimeToggle(!timeToggle);
                                e.stopPropagation();
                            }
                            } ><ShowView date={props.reply.date} timeToggle={timeToggle}></ShowView></Btag>{
                                DelViewer( props.reply.profile.seqId, seq, seqComponent, replySeq, setReplys )
                            }
                        {/*댓글의 훈훈알, 좋아요, 싫어요 */}
                        {/*
                        <ReplyHunHun>
                            <ReplyHunImg src="/pub/answer/answerList/images/answer_almoney.svg"></ReplyHunImg>
                            <ReplyHunSpan>3,000</ReplyHunSpan>
                        </ReplyHunHun>
                        <ReplyGoodIcon>
                            <SmileIconImg src="/Common/images/smile.svg"></SmileIconImg>
                            5
                        </ReplyGoodIcon>
                        <ReplyBadIcon>
                            <BadIconImg src="/Common/images/sad.svg"></BadIconImg>
                            0
                        </ReplyBadIcon> */}
                        <ReplyLangBtnBallImg onClick={()=>{setImgChange(!imgChange)}} src={trans()}></ReplyLangBtnBallImg>
                      </ReplyBotton>
                  </tr>
              </tbody>
          </Table>
      </MainContents>
    );
}

export default Reply;

// const ReplyHunHun = styled.div`
//     display:inline-flex;
//     align-items:center;
//     margin-left:10px;
//     cursor:pointer;
// `;
// const ReplyHunImg = styled.img`
//     width:13px;
// `;
// const ReplyHunSpan = styled.span`
//     font-weight:normal;
//     margin-left:2px;
//     color:#fd0031;
// `;
// const ReplyGoodIcon = styled.div`
//     display:inline-flex;
//     font-weight:normal;
//     margin-left:10px;
// `;
// const SmileIconImg = styled.img`
//     width:13px;
//     margin-right:2px;
// `;
// const ReplyBadIcon = styled.div`
//     display:inline-flex;
//     font-weight:normal;
//     margin-left:10px;
// `;
// const BadIconImg = styled.img`
//     width:13px;
//     margin-right:2px;
// `;

const DelI = styled.i`
    font-style: normal;
    font-weight: 300;
    cursor: pointer;
`;
const MainContents = styled.div`
    padding-top: 10px;
    margin: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
`;

const ReplyContents = styled.th`
    color: #333;
    font-size: 14px;
    font-weight: normal;
    background: #f1f1f1;
    padding: 10px;
    border-radius: 15px 15px 15px 0;
    word-break: break-all;
    width:100%;
`;
const AldolReplyContents = styled.th`
    width:100%;
    font-style: italic;
    background: #fff;
    color: #666;
    border: 1px dashed #999;
    font-size: 14px;
    font-weight: 300;
    padding: 10px;
    border-radius: 15px 15px 15px 0;
    word-break: break-all;
`;
const ReplyBottonDiv = styled.td`
`;
const ReplyBotton = styled.td`
    font-size: 12px;
    font-weight: bold;
    color: #999;
    display:flex;
    align-items:center;
    flex-wrap: wrap;
    position:relative;
`;

const ReplyAhref = styled.a`
    color: #999;
    cursor:pointer;
`;

const Btag = styled.span`
    position: relative;
    cursor: pointer;
    font-size: 12px;
    color: #999;
    font-weight:normal;
`;

const Table = styled.table`
    width: 100%;
    text-align: justify;
    margin-bottom: 10px;
`;

const ReplyImg = styled.img`
    display: block;
    border-radius: 50%;
    width: 36px;
    height:36px;
`;

const ReplyAhrefA = styled.a`
    position: relative;
    display: block;
    width: 36px;
    height: 36px;
    text-decoration: none;
    cursor:pointer;
`;

const ReplyLocaleImg = styled.img`
    width: 20px;
    border-radius: 0;
    display: inline-block;
    margin-right:2px;
    margin-bottom:-2px;
`;

const ReplyLocaleTh = styled.th`
    text-align: center;
    font-size: 16px;
    color: #333;
    position: relative;
    padding-right:10px;
`;

const ReplyLocaleSpan = styled.span`
& {
    display: flex;
    justify-content: center;
    align-items:center;
    width: 185px;
    position: absolute;
    top: 140%;
    left: 50%;
    transform: translateX(-50%);
    background: #666;
    color: #fff;
    text-align: center;
    border-radius: 10px;
}
&:after {
    content: "";
    display: block;
    width: 10px;
    height: 10px;
    background: #666;
    position: absolute;
    top: -5px;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
    z-index: -1;
}
`;

const ReplyLangBtnBallImg = styled.img`
    cursor:pointer;
    width: 18px;
    display: block;
    margin-left:15px;
`;
const ReplyLocalDiv = styled.div`
    text-align: center;
    font-size: 10px;
    color: #666;
`;

const ReportImg = styled.span`
    font-weight:normal;
`;
