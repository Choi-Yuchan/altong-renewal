import styled from 'styled-components';
import React, { useState } from 'react';
import axios from 'axios';

// http://125.7.228.198/answer/answerList?Seq=266098&CurPageName=bestList&Section1=0&src_Sort=Seq&src_OrderBy=DESC&SP=&ticketQueChk=

function QorA(props){
  const isShow = props.seqComponent;
  if(isShow === 'A'){
    return (
      <>
        <Preview isShow={isShow} onClick={props.onClick2}>
          <Paragraph dangerouslySetInnerHTML={{__html: props.contents}} ></Paragraph>
          <DelSpan open={props.open}/>
        </Preview>
        <CustomView isView={props.openAnswer}></CustomView>
      </>
    );
  }
  return (
    <>
      <Paragraph dangerouslySetInnerHTML={{__html: props.contents}}/>
    </>
  );
}

function Contents(props) {
  const [open, setOpen] = useState('열고~ㅇ');
  const [ads, setAds] = useState(0);
  
  const answer = props.pageSeq;

  //url list
  const URL_AD = "/api/answers/ads";
  const URL_SHOWN_AD = `/api/answers/${answer}/ads/${ads}`;

  return (
      <MainDiv className="Contents">
        <QorA onClick2={(e) => { 
          props.setOpenAnswer('open');
          props.setMessage(props.allMessage);
          // 광고 받아옴
          if(open === '열고~ㅇ'){
            axios.get(URL_AD)
            .then((response) => response.data)
            .then( (data) => {
              setAds(data.adSeq);
              props.setClicked(false);
              props.setInfoAD({show:true,
                adUrl: data.adUrl, adFile: data.adFile});
              e.stopPropagation();
            })
            .catch(function (error) {
              console.log(error)
            });
            
            // 광고 봄 처리
            axios.patch(URL_SHOWN_AD)
            .then((response) => response.data)
            .then( (data) => { console.log(data)
            })
            .catch(function (error) {
              console.log(error);
            });
          }
          setOpen('');

          // 광고 봄
          }}
          setOpen={setOpen} contents={props.contents}
          allMessage={props.allMessage} open={open}
          openAnswer={props.openAnswer} seqComponent={props.seqComponent}
        />
      </MainDiv>
  );
}

export default Contents;

function CustomView({isView}){
  const [imgChange, setImgChange] = useState(true);
  const trans = () => {
    if (imgChange) {
      return '/Common/images/language.svg';
    } else {
      return '/Common/images/language_on.svg';
    }
  }
  
  if (isView === "open"){
    return <LangImgNone src={process.env.PUBLIC_URL + 
      '/test_source/language.svg'}></LangImgNone>
  }
  return <LangImg onClick={()=>{setImgChange(!imgChange)}} src={trans()}></LangImg>
}

function DelSpan({open}){
  if(open === '열고~ㅇ'){
    return <ContentsSpan>{open}</ContentsSpan>;
  }
  return <span></span>;
}

const MainDiv = styled.div`
  padding: 0 10px;
  margin: 20px 0 30px;
  word-break: break-all;
  font-size: 15px;
  cursor: pointer;
  transition:all 0.3s;
`;

const Paragraph = styled.div`
  word-break: break-all;
  font-size: 15px;
`;
const Preview = styled(Paragraph)`
  transition: all 0.3s;
`;

const ContentsSpan = styled.span`
  display: inline-block;
  border: 1px solid #c3c2c2;
  border-radius: 5px;
  color: #656565;
  padding: 0 4px;
  letter-spacing: -0.5px;
  font-size: 12px;
  line-height: 20px;
  cursor: pointer;
`;

const LangImg = styled.img`
  display: block;
  width: 30px;
  float: right;
`;

const LangImgNone = styled(LangImg)`
  display: none;
`;