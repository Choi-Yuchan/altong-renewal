import styled from 'styled-components';
import React, { useState } from 'react';
import Nbsp from '../functions/nbsp/Nbsp';
import ReactDOMServer from 'react-dom/server';

const tagStackQ = ( index, indexStack, array, value, text) => {
  // 재귀문으로 선언함.

  // 태그를 분석해서 반환해줌
  // #1 알고리즘
  // / 문자가 앞에 붙은 태그를 발견시, 처리 => 마지막 태그 배열을 가져옴(팝) => 태그 인스턴스로 만듬
  // => 

  // 스택 담기 => 스택 닫기 알고리즘

  // #2 param
  // 스택()
  
  // #3 반환 결과
  //  배열(태그 위치), 배열(값)
  if(index >= array.length ){
    return value;
  }
  console.log(indexStack.length);
  console.log(array[index]);
  console.log(ReactDOMServer.renderToStaticMarkup(value));

  switch(array[index]){
    case "p" :
      return tagStackQ( index + 1, indexStack.concat(index), array, value, text);
    case "br" :
      return tagStackQ( index + 1, indexStack.concat(index), array, value, text);
    case "span" : 
      return tagStackQ( index + 1, indexStack.concat(index), array, value, text);
    case "div" :
      return tagStackQ( index + 1, indexStack.concat(index), array, value, text);
    case "/p" :
      if (indexStack.length < 1){
        return tagStackQ( index + 1, indexStack.slice(0, -1), array, tagOutInstance("p", value, text.split("&nbsp;").map(
          (ls,index, arr)=>{
            if(index-1 === arr.length) return {ls};
            return <>{ls}<Nbsp></Nbsp></>
          }
        )), "");
      }
      return tagStackQ( index + 1, indexStack.slice(0, -1), array, tagInstance("p", value, text.split("&nbsp;").map(
        (ls,index, arr)=>{
          if(index-1 === arr.length) return {ls};
          return <>{ls}<Nbsp></Nbsp></>
        }
      )), "");
    case "/br" :
      if (indexStack.length < 1){
        return tagStackQ( index + 1, indexStack.slice(0, -1), array, tagOutInstance("br", value, text.split("&nbsp;").map(
          (ls,index, arr)=>{
            if(index-1 === arr.length) return {ls};
            return <>{ls}<Nbsp></Nbsp></>
          }
        )), "");
      }
      return tagStackQ( index + 1, indexStack.slice(0, -1), array, tagInstance("br", value, text.split("&nbsp;").map(
        (ls,index, arr)=>{
          if(index-1 === arr.length) return {ls};
          return <>{ls}<Nbsp></Nbsp></>
        }
      )), "");
    case "/span" :
      if (indexStack.length < 1){
        return tagStackQ( index + 1, indexStack.slice(0, -1), array, tagOutInstance("span", value, text.split("&nbsp;").map(
          (ls,index, arr)=>{
            if(index-1 === arr.length) return {ls};
            return <>{ls}<Nbsp></Nbsp></>
          }
        )), "");
      }
      return tagStackQ( index + 1, indexStack.slice(0, -1), array, tagInstance("span", value, text.split("&nbsp;").map(
        (ls,index, arr)=>{
          if(index-1 === arr.length) return {ls};
          return <>{ls}<Nbsp></Nbsp></>
        }
      )), "");
    case "/div" :
      if (indexStack.length < 1){
        return tagStackQ( index + 1, indexStack.slice(0, -1), array, tagOutInstance("div", value, text.split("&nbsp;").map(
          (ls,index, arr)=>{
            if(index-1 === arr.length) return {ls};
            return <>{ls}<Nbsp></Nbsp></>
          }
        )), "");
      }
      return tagStackQ( index + 1, indexStack.slice(0, -1), array, tagInstance("div", value, text.split("&nbsp;").map(
        (ls,index, arr)=>{
          if(index-1 === arr.length) return {ls};
          return <>{ls}<Nbsp></Nbsp></>
        }
      )), "");
    default :
      return tagStackQ( index + 1, indexStack, array, value, text + array[index]);
  }
}
const tagOutInstance = (seq, tag, val) => {
  switch(seq){
    case "p" :
      return OutP(tag, val);
    case "br" :
      return OutBr(tag, val);
    case "span" : 
      return OutSpan(tag, val);
    case "div" :
      return OutDiv(tag, val);
  }
}

const tagInstance = (seq, tag, val) => {
  switch(seq){
    case "p" :
      return InP(tag, val);
    case "br" :
      return InBr(tag, val);
    case "span" : 
      return InSpan(tag, val);
    case "div" :
      return InDiv(tag, val);
  }
}

const InP = (tag, val) => {
  return <NomalP>{tag}{val}</NomalP>
}
const InBr = (tag, val) => {
  return <>{tag}<br></br>{val}</>
}
const InSpan = (tag, val) => {
  return <span>{tag}{val}</span>
}
const InDiv = (tag, val) => {
  return <div>{tag}{val}</div>
}

const OutP = (tag, val) => {
  return <>{tag}<NomalP>{val}</NomalP></>
}
const OutBr = (tag, val) => {
  return <>{tag}<br></br>{val}</>
}
const OutSpan = (tag, val) => {
  return <>{tag}<span>{val}</span></>
}
const OutDiv = (tag, val) => {
  return <>{tag}<div>{val}</div></>
}

const resultConvert = (contents) => {
  
  const contentArray = contents.replace("<br>","<br></br>");
  const arr1 = contentArray.split(/(\<[^\>]+\>)/).filter((element) => element !== "");
  
  const arrConvert = arr1.map((val)=>{
    if(/\<[^\>]+\>/.test(val)){
      return val.replace(/[ ][^\>]+\>/, "").replace("<", "").replace(">", "");
    }else{
      //console.log( val );
      return val;
    }
  });

  return tagStackQ(0,[],arrConvert,'',"");
}

// http://125.7.228.198/answer/answerList?Seq=266098&CurPageName=bestList&Section1=0&src_Sort=Seq&src_OrderBy=DESC&SP=&ticketQueChk=
const contentConvert = (contents) => {
  const contentArray = contents.replace("<br>","<br></br>");
  const listResult = contentArray.split(/\<[^\>]+\>/).filter((element) => element !== "");
  const arr1 = contentArray.split(/(\<[^\>]+\>)/).filter((element) => element !== "");

  //console.log(contentArray);
  //console.log(arr1);
  //console.log(<div></div>);

  // 정규표현식으로 맵에서 시작 태그를 찾음 (html 태그값만 가져옴) -> jsx 요소로 return 함
  // 일반 값인 경우 


  const arrConvert = arr1.map((val)=>{
    // stack 을 내부에 전달하면서 for 처리해줌..
    if(/\<[^\>]+\>/.test(val)){
      //console.log( val.replace(/[ ][^\>]+\>/, "").replace("<", "").replace(">", "") );
      return val.replace(/[ ][^\>]+\>/, "").replace("<", "").replace(">", "");
    }else{
      //console.log( val );
      return val;
    }
  });
  tagStackQ(0,[],arrConvert,'',"");
  
  // 불가능이라고 판단 후, 설계 다시함.
  // 각 jsx 는 무조건 한쌍을 가지고 있어야함. 따라서 <jsx> {in} </jsx> 형태로 모든 태그를 만들어주고 배열에서 처리하도록 함.
  
  //(\<[^\>]+\>)
  const result = listResult.map( (list) => {
      return <NomalP>{
        list.split("&nbsp;").map((ls)=>{
          return <>{ls}<Nbsp></Nbsp></>
        })
      }</NomalP>
    } );
  return result;
}

function QorA(props){
  const isShow = props.seqComponent;
  if(isShow === 'A'){
    return (
      <ContentsP2 isShow={isShow} onClick={props.onClick2}>
        {contentConvert(props.contents)}
        <DelSpan setMessage={props.setMessage}
          setOpen={props.setOpen} allMessage={props.allMessage} open={props.open}></DelSpan>
        <CustomView isView={props.openAnswer}></CustomView>
      </ContentsP2>
    );
  }
  return (
    <>
      <ContentsP>
        {props.contents}
      </ContentsP>
      <br></br>
      {/* <ContentsP> 
        {contentConvert(props.contents)}
      </ContentsP> */}
      <contentsP>
        {resultConvert(props.contents)}
      </contentsP>
    </>
  );
}

function Contents(props) {
  const [open, setOpen] = useState('열고~ㅇ');

  return (
      <MainDiv className="Contents">
        <QorA onClick2={() => { props.setOpenAnswer('open'); props.setMessage(props.allMessage);
        setOpen(''); } }
          setOpen={setOpen} contents={props.contents} allMessage={props.allMessage} open={open}
          openAnswer={props.openAnswer} seqComponent={props.seqComponent} > </QorA>

      </MainDiv>
  );
}

export default Contents;


const MainDiv = styled.div`
  padding: 0 10px;
  margin: 20px 0 30px;
  word-break: break-all;
  font-size: 15px;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
`;

const ContentsP = styled.p`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  word-break: break-all;
  font-size: 15px;
  height:auto;
  
  /* transition-property: height;
  transition-duration: 1s; */
`;
const ContentsP2 = styled.p`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  word-break: break-all;
  font-size: 15px;
  height:auto;
  
  max-height: ${props => props.row ? 0: '10000px'};
  transition-duration: 1s;
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
  margin-left: 2px;
  cursor: pointer;
  margin-left: 10px;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  word-break: break-all;
`;


const LangImg = styled.img`
  display: block;
  width: 30px;
  margin-left: 15px;
  float: right;
  margin-top: 15px;
`;

const LangImgNone = styled(LangImg)`
  display: none;
`;

const NomalP = styled.p`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
`

function CustomView(props){
  const isView = props.isView;
  if (isView === "open"){
    return <LangImgNone src={process.env.PUBLIC_URL + 
      '/test_source/language.svg'}></LangImgNone>
  }
  return <LangImg src="/Common/images/language.svg"></LangImg>
}

function DelSpan(props){
  const isOpen = props.open;
  if(isOpen === '열고~ㅇ'){
    return <ContentsSpan>{props.open}</ContentsSpan>;
  }
  return <span></span>;
}
