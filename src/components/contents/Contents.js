import styled from 'styled-components';
import React, { useState } from 'react';
import axios from 'axios';

// http://125.7.228.198/answer/answerList?Seq=266098&CurPageName=bestList&Section1=0&src_Sort=Seq&src_OrderBy=DESC&SP=&ticketQueChk=

function QorA(props){
  const isShow = props.seqComponent;
  if(isShow === 'A'){
    return (
      <>
      <ContentsP2 isShow={isShow} onClick={props.onClick2}>
        <div dangerouslySetInnerHTML={{__html: props.contents}} ></div>
        <DelSpan setMessage={props.setMessage}
          setOpen={props.setOpen} allMessage={props.allMessage} open={props.open}></DelSpan>
      </ContentsP2>
      <CustomView isView={props.openAnswer}></CustomView>
      </>
    );
  }
  return (
    <>
      {/* <ContentsP>
        {props.contents}
      </ContentsP> */}
      <ContentsP dangerouslySetInnerHTML={{__html: props.contents}}>
      </ContentsP>
    </>
  );
}

function Contents(props) {
  const [open, setOpen] = useState('열고~ㅇ');
  const [ads, setAds] = useState(0);

  return (
      <MainDiv className="Contents">
        <QorA onClick2={(e) => { 
            props.setOpenAnswer('open');
            props.setMessage(props.allMessage);
            // 광고 받아옴
            if(open === '열고~ㅇ'){
              axios.get("/restApi/ads")
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
              axios.put("/restApi/answers/"+props.pageSeq+"/"+ads+"/ads-view")
              .then((response) => response.data)
              .then( (data) => {
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
          > </QorA>

      </MainDiv>
  );
}

export default Contents;


const MainDiv = styled.div`
  padding: 0 10px;
  margin: 20px 0 30px;
  word-break: break-all;
  font-size: 15px;
  cursor: pointer;
  transition:all 0.3s;
`;

const ContentsP = styled.p`
  word-break: break-all;
  font-size: 15px;
`;
const ContentsP2 = styled.p`
  word-break: break-all;
  font-size: 15px;
  transtion:all 0.3s;
  
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

const NomalP = styled.p`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
`;


function CustomView(props){
  const isView = props.isView;
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

function DelSpan(props){
  const isOpen = props.open;
  if(isOpen === '열고~ㅇ'){
    return <ContentsSpan>{props.open}</ContentsSpan>;
  }
  return <span></span>;
}
