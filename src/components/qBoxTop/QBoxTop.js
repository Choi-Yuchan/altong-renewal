import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import FormatDateAsText from '../functions/formatDateAsText/FormatDateAsText'


import MiniProfile from '../miniProfile/MiniProfile'
import QuestionPopup from '../questionPopup/QuestionPopup'
import Num3Comma from '../functions/num3comma/Num3Comma'

import {useTranslation} from 'react-i18next';

function TimeToggler(props) {
  if(props.timeToggle !== true ){
    const upDate = new Date(props.date);
    const year = upDate.getFullYear();
    const month = upDate.getMonth() + 1;
    const date = upDate.getDate();
    const hours = upDate.getHours();
    const minutes = upDate.getMinutes();
    const seconds = upDate.getSeconds();

    const monthText = () => {
      if (month < 10) {
        return '0' + month;
      } else {
        return month;
      }
    }
    const dateText = () => {
      if (date < 10) {
        return '0' + date;
      } else {
        return date;
      }
    }
    const hoursText = () => {
      if (hours < 10) {
        return '0' + hours;
      } else {
        return hours;
      }
    }
    const minutesText = () => {
      if (minutes < 10) {
        return '0' + minutes;
      } else {
        return minutes;
      }
    }
    const secondsText = () => {
      if (seconds < 10) {
        return '0' + seconds;
      } else {
        return seconds;
      }
    }
    return <> <FormatDateAsText date={props.date}></FormatDateAsText> · <Datespan>{year}-{monthText()}-{dateText()} {hoursText()}:{minutesText()}:{secondsText()} UTC+9</Datespan> </>
  }
  return <>  <FormatDateAsText date={props.date}></FormatDateAsText> · </>
}

const UlvText = (props) => {
  const {t} = useTranslation();
  const LV=[t('Lv_Hidden'),t('Lv_Al'),t('Lv_Butterfly'),t('Lv_Smiling'),t('Lv_Fiery'),t('Lv_Golden'),t('Lv_Guardian'),t('Lv_Light'),t('Lv_Chief'),t('Lv_Archangel'),t('Lv_Chief_Archangel'),t('Lv_Altong_Addict')];
  return LV[props];
}

const handleImgError = (e) => {
  e.target.src = "/pub/css/profile/img_thum_base0.jpg";
}

//clicked
// white={props.white} setWhite={props.setWhite}
function QBoxTop(props) {
  const [timeToggle, setTimeToggle] = useState(true);
  const [popToggle, setPopToggle] = useState(false);
  const [showMini, setShowMini] = useState(false);
  const {t} = useTranslation();

  
  useEffect(() => {
    if(props.clicked === true){
      setShowMini(false);
      setPopToggle(false);
    }
  }, [props.clicked]);

  useEffect(() => {
    if(props.white === true){
      setShowMini(false);
      setPopToggle(false);
      setTimeToggle(true);
    }
  }, [props.white]);

  // console.log({...props.head, title:"rollette test question222"});
  return (
    <MainDiv className="QBoxTop">
      <HeadFigure onClick={(e) => {
        setShowMini(true);
        props.setClicked(false);
        e.stopPropagation();
      }}>
        <HeadFigureImg src={"/UploadFile/Profile/" + props.head.profile} onError={handleImgError}/>
        
        <HeadFigureFigcaption>{props.head.locale}</HeadFigureFigcaption>
      </HeadFigure>
      <HeadH2>{props.seqComponent}.<HeadSpan className="yellow" ><Num3Comma num={props.head.thankAlmoney}/></HeadSpan></HeadH2>
      <WrapUl>
        <Wrapli>
          <HeadFigureLocaleImg src={"/Common/images/nation/"+ props.head.locale +'.svg'}/>
          <WrapSpan show={props.head.uLv !== "99"}>{UlvText(props.head.uLv)}</WrapSpan>
          <WrapStrong className="prgNickname_Q">{props.head.nick}</WrapStrong>{t('QBoxTop_question')}
        </Wrapli>
        <WrapTitleli>{props.head.title}</WrapTitleli>
        <WrapThankli>
          {t('QBoxTop_gratitudeAl_rate')}<WrapB>{props.head.persent}%</WrapB> · 
          <DateDiv onBlur={()=>{ setTimeToggle(true); }}
          onClick={(e) => {setTimeToggle(!timeToggle); props.setWhite(false); e.stopPropagation();}}>
            <TimeToggler date={props.head.date} timeToggle={timeToggle}/>
          </DateDiv>
          <ViewCountImg src="/Common/images/icon_view.svg"/><Num3Comma num={props.head.readCount}/>
        </WrapThankli>
      </WrapUl>
      <BtnBox onClick={(e) => {
        setPopToggle(!popToggle);
        props.setWhite(false);
        e.stopPropagation();
        }}>
        <BtnBoxI/>
        <BtnBoxI/>
        <BtnBoxI/>
        <QuestionPopup
          setShowAlmoney={props.setShowAlmoney}
          setShowSiren={props.setShowSiren}
          setClicked={props.setClicked}
          pageSeq={props.pageSeq}
          seqComponent={props.seqComponent} popToggle={popToggle}
          title={props.head.title}
          setShare={props.setShare}
        />
      </BtnBox>
      <MiniProfile setClicked={props.setClicked} showMini={showMini}
        mini={props.mini} clicked={props.clicked} 
        id={props.seqId}
        setShowMini={setShowMini}
        USER={props.USER}
        setShowMessage={props.setShowMessage}
      />
    </MainDiv>
  );
}
  
export default QBoxTop;

const MainDiv = styled.div`
  position: relative;
  display:flex;
  flex-direction: row;
  align-items: center;
`;

const HeadFigure = styled.figure`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50px;
  cursor: pointer;
  margin: 0 0.625rem;

  @media (max-width:480px) {
    margin:0 0.3125rem;
  }
`;

const HeadFigureImg = styled.img`
  border-radius: 50%;
  width: 100%;
`;

const HeadFigureFigcaption = styled.figcaption`
  display:inline-block;
  font-size: 0.6875rem;
  font-weight: 500;
  color: #666;
  letter-spacing: -0.5px;
`;

const HeadH2 = styled.h2`
  display: inline-flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  font-size: 43px;
  color: #fd0031;
  margin-top: -0.625rem;
  margin-right: 0.625rem;

  @media (max-width:480px) {
    font-size:30px;
    margin-right: 0.3125rem;
  }
`;

const HeadSpan = styled.span`
  display:inline-block;
  background: #ffee75;
  color: #333;
  font-size: 11px;
  padding: 2px 8px;
  border-radius: 15px;
  margin-top: 3px;

  @media (max-width:480px) {
    font-size:10px;
    padding:0.5px 4px;
  }
`;

const WrapUl = styled.ul`
  width: 80%;
`;

const Wrapli = styled.li`
  display:flex;
  flex-direction:row;
  align-items: center;
  list-style: none;
  flex-wrap: wrap;
  font-size: 0.75rem;
  color: #333;

  @media (min-width:480px) {
    font-size:1rem;
  }
`;

const WrapSpan = styled.span`
  font-size: 10px;
  padding: 0.5px 3px;
  border: 1px solid #fd0031;
  color: #fd0031;
  border-radius: 10px;
  display: ${(props) => props.show ? "inline-block" : "none" };
  margin-bottom:-1px;

  @media (min-width:480px) {
    padding:1px 5px;
  }
`;

const WrapStrong = styled.strong`
  color: #fc5a85;
  margin-right: 2px;
  margin-left: 4px;
  font-weight: bold;
  font-size: 0.75rem;

  @media (min-width:480px) {
    font-size:1rem;
  }
`;

const WrapTitleli = styled.li`
  font-size: 17px;
  font-weight: bold;
  list-style: none;

  @media (min-width:480px) {
    font-size:20px;
  }
`;

const WrapThankli = styled.li`
  display:flex;
  align-items: center;
  flex-wrap: wrap;
  font-size: 0.6875rem;
  color: #666;
  list-style: none;

  @media (min-width:480px) {
    font-size:0.75rem;
  }
`;

const WrapB = styled.b`
  color: #fd8d0d;
`;

const DateDiv = styled.b`
  display: inline-block;
  position: relative;
  cursor: pointer;
  margin-right: 4px;
  font-weight:normal;
`;

const Datespan = styled.span`
&{
  width: 175px;
  position: absolute;
  top: 140%;
  left: 50%;
  transform: translateX(-50%);
  background: #666;
  color: #fff;
  border: 0;
  font-size: 12px;
  padding: 1px 5px;
  border-radius: 10px;
  display:flex;
  justify-content:center;
  align-items: flex-start;
}
&:after{
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

const BtnBox = styled.div`
  width: 10px;
  padding-left: 2px;
  cursor: pointer;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  z-index: 5;

  @media (max-width:330px) {
    left:100%;
  }
`;

const BtnBoxI = styled.i`
  display: block;
  width: 4px;
  height: 4px;
  background: #aaa;
  border-radius: 50%;
  margin-bottom: 3px;
`;

const HeadFigureLocaleImg = styled.img`
  width: 1.125rem;
  margin-right:3px;

  @media (min-width:480px) {
    width: 1.375rem;
  }
`;

const ViewCountImg = styled.img`
  margin-bottom: -2px;
  margin-right: 2px;
`;

  