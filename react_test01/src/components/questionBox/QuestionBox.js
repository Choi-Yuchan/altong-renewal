import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie'

import ViewJson from '../../json/view-test.json'

import TopNavi from './../topNavi/TopNavi'

import BoxController from '../boxContainer/BoxContainer'
import PopAlmoney from '../popup/popAlmoney/PopAlmoney';
import PopSilen from '../popup/popSilen/PopSilen';
import PopMessage from '../popup/popMessage/PopMessage';
import PopAD from '../popup/popAD/PopAD'


function ShowBlackDiv(props){
  if(props.clicked===false){
    return <BlackDiv></BlackDiv>
  }
  return  <></>;
}

function QuestionBox(props) {
  const [bodyClicked, setBodyClicked] = useState(true);
  const [whiteClick, setWhiteClick] = useState(true);
  const [jsonList, setJsonList] = useState("");
  const [user, setUser] = useState(null);
  const [cookies] = useCookies();
  const SSRJSON = jsonList
  const [showAlmoney, setShowAlmoney] = useState({show:false, page:0, seq:'Q'});
  const [showSiren, setShowSiren] = useState({show:false, page:0, seq:'Q', title:""});
  const [showMessage, setShowMessage] = useState({ show:false, user:0, nick:'' });

  const [hunAlram,setHunAlram] = useState(false);
  
  const [infoAD, setInfoAD] = useState({show:false, adUrl: "", adFile: ""});

  const [SESS] = useState(cookies.SESS);
  useEffect(()=>{
    axios.get("/rest/questions/"+props.match.params.questions)
    .then((response) => response.data)
    .then((data) => {
      if(data.code=="error"){
        console.log("error");
        console.log(data.error);
      }else{
        setJsonList(data);
      }
    })
    .catch(function (error) {
      console.log(error)
    })
  }
  , []);

  useEffect(()=>{
    axios.get("/rest/user")
    .then((response) => response.data)
    .then((data) => {
        setUser(data);
    })
    .catch(function (error) {
      console.log(error)
    })
  }
  , []);
  if(jsonList === ""){
    return <div></div>
  }
  return (
    
    <SiteDiv
      onClickCapture={ () => 
        {
          setBodyClicked(true);
          setWhiteClick(true);
        }
      }
    >
      {/* <GlobalFonts></GlobalFonts> */}
      <MainDiv>
        <TopNavi></TopNavi>
        <WrapperDiv>
          <BoxController
            white={whiteClick} setWhite={setWhiteClick}
            clicked={bodyClicked} setClicked={setBodyClicked}
            setShowAlmoney={setShowAlmoney}
            setShowSiren={setShowSiren}
            setShowMessage={setShowMessage}
            SSRJSON={SSRJSON} USER={user} SESS={SESS}
            infoAD={infoAD} setInfoAD={setInfoAD}
            hunAlram={hunAlram} setHunAlram={setHunAlram}
          ></BoxController>
        </WrapperDiv>
      </MainDiv>
      
      <PopAlmoney
        clicked={bodyClicked} setClicked={setBodyClicked}
        showAlmoney={showAlmoney.show} page={showAlmoney.page} seq={showAlmoney.seq}
        setShowAlmoney={setShowAlmoney}
        setHunAlram={setHunAlram}
      ></PopAlmoney>

      <PopSilen
        clicked={bodyClicked} setClicked={setBodyClicked}
        showSiren={showSiren.show} page={showSiren.page} seq={showSiren.seq} title={showSiren.title}
        setShowSiren={setShowSiren} USER={user}
      ></PopSilen>
        
      <PopMessage
        clicked={bodyClicked} setClicked={setBodyClicked}
        showMessage={showMessage.show} user={showMessage.user} nick={showMessage.nick}
        setShowMessage={setShowMessage} USER={user}
      ></PopMessage>

      <PopAD
        infoAD={infoAD} setInfoAD={setInfoAD} 
        clicked={bodyClicked} setClicked={setBodyClicked}
      ></PopAD>
      
      <ShowBlackDiv clicked={bodyClicked}></ShowBlackDiv>
    </SiteDiv>
  );
}

export default QuestionBox;


const MainDiv = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  padding-top: 60px;
  flex: 1;
  margin-bottom: 20px;
  padding: 0 5px;
  width: 800px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const SiteDiv = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;

  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;

  width: 100%;
  font-size: 16px;
  font-family: "Noto Sans KR", "Noto Sans JP", "Noto Sans HK", "Noto Sans SC", "Noto Sans TC", sans-serif;
  color: #333;
  position: relative;
`;
const WrapperDiv = styled.div`
  padding-top: 60px;
  flex: 1;
  margin-bottom: 20px;
`;
const BlackDiv = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
  background: rgba(0, 0, 0, 0.3);
`;
