import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const handleImgError = (e) => {
    e.target.src = "/pub/css/profile/img_thum_base0.jpg";
  }

function ShowView(props){
    if(props.timeToggle === false){
        return <>3초 전</>
    }
    return <>3초 전<ReplyLocaleSpan>{props.timedate}</ReplyLocaleSpan></>
}
function AldolViewImg(props){
    return <ReplyImg src={"/UploadFile/Profile/"+props.img} onError={handleImgError}></ReplyImg>
}
function AldolViewContents(props){

    if(props.seqId === 10003513){
        if(props.content === "관리자님이 이 질문을 꼭대기로 올리셨어요."){
            return <AldolReplyContents>관리자님이 이 질문을 꼭대기로 올리셨어요.</AldolReplyContents>
        }
        return <AldolReplyContents>{props.to} 님이 감사의 마음으로 {props.from} 님에게 {props.al}알을 증정하셨어요.</AldolReplyContents>
    }
    return <ReplyContents>{props.content}</ReplyContents>
}

const DelReply = (e, seqComponent, replySeq, setReplys) => {
    console.log(seqComponent==='Q'?"/restApi/answers/"+replySeq+"/Q/reply-del":
    "/restApi/answers/"+replySeq+"/A/reply-del")
    axios.delete(seqComponent==='Q'?"/restApi/answers/"+replySeq+"/Q/reply-del":
    "/restApi/answers/"+replySeq+"/A/reply-del")
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
    }
    return <></>
}

function Reply(props) {
    
    const seqComponent = props.seqComponent;
    // 댓글 수정
    const setReplys= props.setReplys;


    const [timeToggle, setTimeToggle] = useState(false);
    const seq = props.seq;
    // 댓글 id 값
    const replySeq = props.reply.seq

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
                      <ReplyBotton></ReplyBotton>
                      <ReplyBotton>
                      <ReplyLocaleImg src={"/Common/images/nation/" + props.reply.profile.locale +'.svg'}></ReplyLocaleImg>
                      
                      <ReplyAhref>{props.reply.profile.nick}</ReplyAhref> · <Btag onClick={ (e) => { 
                            props.setWhite(false);
                            setTimeToggle(!timeToggle);
                            e.stopPropagation();
                        }
                        } ><ShowView timedate={props.reply.date} timeToggle={timeToggle}></ShowView></Btag>{
                            DelViewer( props.reply.profile.seqId, seq, seqComponent, replySeq, setReplys )
                        }
                        <ReplyLangBtnBallDiv>
                            <ReplyLangBtnBallImg src="/Common/images/language.svg"></ReplyLangBtnBallImg>
                        </ReplyLangBtnBallDiv>
                      </ReplyBotton>
                  </tr>
              </tbody>
          </Table>
      </MainContents>
    );
}

export default Reply;

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
    font-family: "Noto Sans KR", "Noto Sans JP", "Noto Sans HK", "Noto Sans SC", "Noto Sans TC", sans-serif;
    color: #333;
    font-size: 14px;
    font-weight: 300;
    background: #f1f1f1;
    padding: 10px;
    border-radius: 15px 15px 15px 0;
    word-break: break-all;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    margin: 0;
`;
const AldolReplyContents = styled.th`
    font-style: italic;
    background: #fff;
    color: #666;
    border: 1px dashed #999;
    font-size: 14px;
    font-weight: 300;
    padding: 10px;
    border-radius: 15px 15px 15px 0;
    word-break: break-all;
    margin: 0;
`;

const ReplyBotton = styled.td`
    font-size: 12px;
    padding-left: 10px;
    font-weight: bold;
    color: #999;
`;

const ReplyAhref = styled.a`
    color: #999;
`;

const Btag = styled.b`
    display: inline-block;
    font-weight: 300;
    position: relative;
    cursor: pointer;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    text-align: justify;
    font-size: 12px;
    color: #999;
`;

const Table = styled.table`
    width: 100%;
    text-align: justify;
    margin-bottom: 10px;
`;

const ReplyImg = styled.img`
    display: block;
    border-radius: 50%;
    width: 100%;
`;

const ReplyAhrefA = styled.a`
    overflow: visible;
    border-radius: 0;
    position: relative;
    display: block;
    width: 36px;
    height: 36px;
    text-decoration: none;
    color: #333;
    
`;

const ReplyLocaleImg = styled.img`
    width: 20px;
    border-radius: 0;
    display: inline-block;
    margin-right:2px;
    margin-bottom:-2px;
`;

const ReplyLocaleTh = styled.th`
    width: 60px;
    text-align: center;
    padding-left: 12px;
    font-size: 16px;
    font-family: "Noto Sans KR", "Noto Sans JP", "Noto Sans HK", "Noto Sans SC", "Noto Sans TC", sans-serif;
    color: #333;
    position: relative;
`;

const ReplyLocaleSpan = styled.span`
& {
    display: block;
    width: 175px;
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

const ReplyLangBtnBallDiv = styled.div`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    display: inline-block;
    margin-left: 20px;
    cursor: pointer;
    position: relative;
`;

const ReplyLangBtnBallImg = styled.img`
    margin-left: 15px;
    float: right;
    margin-top: 5px;
    margin-bottom: -2px;
    margin-right: 2px;
    width: 18px;
    display: inline-block;
    vertical-align: top;
`;
const ReplyLocalDiv = styled.div`
    text-align: center;
    font-size: 10px;
    color: #666;
`;
