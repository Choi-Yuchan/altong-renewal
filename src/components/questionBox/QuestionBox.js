import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie'

import TopNavi from '../../topNavi/TopNavi'
import AlNavi from '../../alNavi/AlNavi'
import BoxController from '../boxContainer/BoxContainer'
import PopAlmoney from '../popup/popAlmoney/PopAlmoney';
import PopSiren from '../popup/popSiren/PopSiren';
import PopMessage from '../popup/popMessage/PopMessage';
import PopAD from '../popup/popAD/PopAD';
import useSound from '../functions/useSound/useSound';
import SEO from '../../SEO'
import {useTranslation} from 'react-i18next';

function ShowBlackDiv(props){
  if(props.clicked === false){
    return <BlackDiv></BlackDiv>
  }
  return  <></>;
}
  
function QuestionBox(props) {

  const question = props.match.params.question;

  //URL LIST
  const URL_QUESTION = `/api/questions/${question}`;
  const URL_USER = "/api/user/info";
  const URL_SOUND = "/Common/ks/audio5.mp3";

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
  const [showNavi, setShowNavi] = useState(false);
  const [SESS] = useState(cookies.SESS);
  const [keyToggle, setKeyToggle] = useState(false);
  
  //keysound control
  const handleSound = useSound(URL_SOUND, keyToggle);

  useEffect(() => {
    
    const getData = async () => {
      try{
        const response = await axios.get(URL_QUESTION);
        setJsonList(response.data);
      } catch (e) {
        console.log(e)
      }
    }

    const getUserData = async () => {
      try{
        const response = await axios.get(URL_USER);
        setUser(response.data);
      } catch (e) {
        console.log(e)
      }
    }

    getData();
    getUserData();
  }, []);

  const {t} = useTranslation();

  const seo = {
    title: t('Meta_Title'),
    theme: '#fff',
    description: t('Meta_Description'),
    keywords: t('Meta_Keywords'),

    ogUrl: 'http://www.altong.com/default/main',
    ogImgWidth: '200',
    ogImgHeight: '500',
    ogAppId: '2128664037179612',
    ogImg: '/Common/images/share_sns/k_feedimg.jpg',
    ogImgSecureUrl: '/Common/images/share_sns/k_feedimg.jpg',

    twitterCard: 'summary',
    twitterDescrip: t('Meta_Twitter')
  }

  const pageNumber = SSRJSON.pageSeq;

  return (
    <>
    <SEO seo={seo} />
    <SiteDiv
      onClick={ () => 
        {
          setBodyClicked(true);
          setWhiteClick(true);
        }
      }
    >
      {jsonList && 
      <MainDiv
      {...handleSound}>
        <TopNavi
          user={user}
          setShowNavi={setShowNavi}
          setClicked={setBodyClicked}
          ></TopNavi>
        <AlNavi
          user={user} 
          show={showNavi} setShowNavi={setShowNavi}
          clicked={bodyClicked} setClicked={setBodyClicked}
          keyToggle={keyToggle} setKeyToggle={setKeyToggle}
        ></AlNavi>

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
            pageNumber={pageNumber}
            ></BoxController>
        </WrapperDiv>
      </MainDiv>
      }
      
      <PopAlmoney
      clicked={bodyClicked} setClicked={setBodyClicked}
      showAlmoney={showAlmoney.show} page={showAlmoney.page} 
      setShowAlmoney={setShowAlmoney} seq={showAlmoney.seq}
      setHunAlram={setHunAlram}
      />

      <PopSiren
      clicked={bodyClicked} setClicked={setBodyClicked}
      showSiren={showSiren.show} page={showSiren.page} seq={showSiren.seq} title={showSiren.title}
      setShowSiren={setShowSiren} USER={user}
      />
        
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
    </>
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
  margin: 0 auto;
  max-width: 800px;
  font-size: 16px;
  color: #333;
  position: relative;
`;

const WrapperDiv = styled.div`
  padding-top: 60px;
  flex: 1;
  margin-bottom: 20px;
  transition: all 0.3s;
`;
const BlackDiv = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
  background: rgba(0, 0, 0, 0.7);
`;
