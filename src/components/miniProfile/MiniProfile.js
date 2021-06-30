import styled from 'styled-components';
import React from 'react';
import axios from 'axios';
import Num3Comma from '../functions/num3comma/Num3Comma';
import { useTranslation } from 'react-i18next';

const UlvText = (props, lv) => {
    const LV=[lv[0],lv[1],lv[2],lv[3],lv[4],lv[5],lv[6],lv[7],lv[8],lv[9],lv[10],lv[11]];
    return LV[props];
  }

function MiniProfile({setClicked, showMini, mini, setShowMini ,userSeq, setShowMessage}) {
    //url list
    const URL_ADD_FRI = `/api/users/${userSeq}/friend`;
    const URL_ADD_MEN = `/api/users/${userSeq}/mento`;

    // 친구 추가
    const AddFriend = async (e) => {
        try{
            const response = await axios.patch(URL_ADD_FRI);
            alert(response.data.msg);
            setClicked(true);
            e.stopPropagation();
        } catch (e) {
            console.log(e);
            alert(t('System_Warning'));
            setClicked(true);
            e.stopPropagation();
        }
    }
    // 멘토 추가
    const AddMento = async (e) => {
        try{
            const response = await axios.patch(URL_ADD_MEN);
            alert(response.data.msg);
            setClicked(true);
            e.stopPropagation();
        } catch(e) {
            console.log(e);
            alert(t('System_Warning'));
            setClicked(true);
            e.stopPropagation();
        }
    }

    const {t} = useTranslation();
    const altText = t("MiniProfle_alttext");
    const lvText = [t('Lv_Hidden'), t('Lv_Al'), t('Lv_Butterfly'), t('Lv_Smiling'), t('Lv_Fiery'), t('Lv_Golden'), t('Lv_Guardian'), t('Lv_Light'), t('Lv_Chief'), t('Lv_Archangel'), t('Lv_Chief_Archangel'), t('Lv_Altong_Addict')]

    //MainTableImg component에 대체 텍스트가 없음. 추가 작업 필요.
    return (
        <MiniContainer showMini={showMini}
        onClick={(e)=>{
            setClicked(false);
            setShowMini(true);
            e.stopPropagation();
        }}>
            <UpperArticle>
                <UserBox>
                    <UserInfo>
                        <UserGrade>{UlvText(mini.uLv, lvText)}</UserGrade>{mini.nick}
                    </UserInfo>
                    <UserStackedAl>{t('MiniProfile_Cumulative')} : <Num3Comma num={mini.alBenefit}/>{t('PopExtraAl_Al')}</UserStackedAl>
                </UserBox>
                <IconContainer>
                    <IconBox onClick={(e) => {
                        AddFriend(e);
                    }}>
                        <MainTableImg src="/pub/css/profile/addFriends.svg" alt={altText[0]}/>
                    </IconBox>
                    <IconBox onClick={(e) => {
                        AddMento(e);
                    }}>
                        <MainTableImg src="/pub/css/profile/addMento.svg" alt={altText[1]}/>
                    </IconBox>
                    <IconBox onClick={(e) => {
                        setClicked(false);
                        setShowMessage({show:true, user:userSeq, nick:mini.nick});
                        e.stopPropagation();
                    }}>
                        <MainTableImg src="/pub/css/profile/message.svg" alt={altText[2]}/>
                    </IconBox>
                </IconContainer>
            </UpperArticle>
            <MiniContentP>{mini.descript}</MiniContentP>
            <MiniIconLine/>
            <LowerArticle>
                <InfoColumn>
                    <InfoSubtitle>{t('MiniProfile_Question')}</InfoSubtitle>
                    <InfoContent><Num3Comma num={mini.qBenefit}/> {t('PopExtraAl_Al')}</InfoContent>
                </InfoColumn>
                <InfoColumn>
                    <InfoSubtitle>{t('MiniProfile_Answer')}</InfoSubtitle>
                    <InfoContent><Num3Comma num={mini.ABenefit}/> {t('PopExtraAl_Al')}</InfoContent>
                </InfoColumn>
                <InfoColumn>
                    <InfoSubtitle>{t('MiniProfile_Gratitude')}</InfoSubtitle>
                    <InfoContent><Num3Comma num={mini.giveThankNum}/></InfoContent>
                </InfoColumn>
                <InfoColumn>
                    <InfoSubtitle>{t('MiniProfile_Gratitude_rate')}</InfoSubtitle>
                    <InfoContent>{mini.giveThankRate}%</InfoContent>
                </InfoColumn>
            </LowerArticle>
            <MiniProfileGo>{t('MiniProfile_GoToSee')}</MiniProfileGo>
        </MiniContainer>
    );
  }
  
export default MiniProfile;

const MiniContainer = styled.section`
&{
    width:100%;
    max-width: 400px;
    background: #fff;
    position: absolute;
    top: 110%;
    left: 5px;
    z-index: 99;
    border-radius: 20px;
    padding: 15px;
    transition: all 0.3s;
    display: ${(props) => props.showMini? "block":"none" }
}
&:after{
    content: "";
    display: block;
    width: 10px;
    height: 10px;
    background: #fff;
    position: absolute;
    top: -5px;
    left: 20px;
    transform: rotate(45deg);
}
`;

const UpperArticle = styled.article`
    width: 100%;
    display: flex;
    align-items: center;
`;
const UserBox = styled.div`
    width:40%;
`;
const UserInfo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.825rem;
    font-weight: bold;
    padding: 3px 0;
    @media (min-width: 480px){
        font-size: 1rem;
    }
`;
const UserStackedAl = styled.div`
    font-size: 0.625rem;
    color: #888;
    font-weight: 500;
    text-align: center;
    @media(min-width: 480px){
        font-size: 12px;
    }
`;
const UserGrade = styled.span`
    display: inline-block;
    font-size: 10px;
    padding: 0px 5px;
    border: 1px solid #fd0031;
    color: #fd0031;
    border-radius: 10px;
    margin-top: 2px;
    margin-right: 2px;
`;
const IconContainer = styled.div`
    display: flex;
    width: 60%;
    justify-content: space-evenly;
    align-items: center;
`;
const IconBox = styled.div`
`;
const MainTableImg = styled.img`
    width: 30px;
    display: block;
    margin: auto;
    cursor: pointer;
`;

const MiniIconLine = styled.div`
    height: 1px;
    width: 80%;
    background: #eee;
    margin: 0 auto 10px;
    -webkit-tap-highlight-color: transparent;
`;
const MiniContentP = styled.p`
    text-align: center;
    margin: 10px 0;
    padding: 5px;
    font-weight: bold;
    font-size: 15px;
`;
const MiniProfileGo = styled.a`
    display: block;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    border: 1px solid #333;
    border-radius: 20px;
    background: transparent;
    transition: all 0.3s;
    padding: 5px 0;
    margin: 15px 0 0;
    text-decoration: none;
    color: #333;
`;
const LowerArticle = styled.article`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: 12px;
    margin-bottom: 10px;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
`;
const InfoColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 5px;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    :not(:last-child){
        padding-right: 5px;
    }
`;
const InfoSubtitle = styled.p`
    font-weight: 500;
    color: #888;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
`;
const InfoContent = styled.p`
    font-size: 13px;
    font-weight: bold;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
`;