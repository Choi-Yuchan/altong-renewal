import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Num3Comma from '../functions/num3comma/Num3Comma';
import {useTranslation} from 'react-i18next';
import i18n from '../../config/lang/i18n';

const UlvText = (props, lv) => {
    const LV=[lv[0],lv[1],lv[2],lv[3],lv[4],lv[5],lv[6],lv[7],lv[8],lv[9],lv[10],lv[11]];
    return LV[props];
  }

function MiniProfile(props) {
    const USER= props.USER;
    // const uid = USER !== undefined ? ( USER !== null ? ( USER.seq !== null ? USER.seq : "" ) : "" ) : "";
    
    //url list
    const URL_ADD_FRI = "/restApi/users/"+ props.id + "/F/partner-save";
    const URL_ADD_MEN = "/restApi/users/"+ props.id + "/M/partner-save";

    // 친구 추가
    const AddFriend = (e) => {
        axios.put(URL_ADD_FRI)
        .then( (response) => response.data )
        .then( (data) => {
                alert(data.msg);
                props.setClicked(true);
                e.stopPropagation();
            }
        )
        .catch(function (error) {
                console.log(error);
                alert(t('System_Warning'));
                props.setClicked(true);
                e.stopPropagation();
            }
        );
    }
    // 멘토 추가
    const AddMento = (e) => {
        axios.put(URL_ADD_MEN)
        .then( (response) => response.data )
        .then( (data) => {
                alert(data.msg);
                props.setClicked(true);
                e.stopPropagation();
            }
        )
        .catch(function (error) {
                console.log(error);
                alert(t('System_Warning'));
                props.setClicked(true);
                e.stopPropagation();
            }
        );
    }
    const {t} = useTranslation();
    const lvText = [t('Lv_Hidden'), t('Lv_Al'), t('Lv_Butterfly'), t('Lv_Smiling'), t('Lv_Fiery'), t('Lv_Golden'), t('Lv_Guardian'), t('Lv_Light'), t('Lv_Chief'), t('Lv_Archangel'), t('Lv_Chief_Archangel'), t('Lv_Altong_Addict')]

    return (
        <MainDiv showMini={props.showMini}
        onClick={(e)=>{
            props.setClicked(false);
            props.setShowMini(true);
            e.stopPropagation();
        }}>
            <MainTable>
                <tbody>
                <tr>
                    <MiniTh>
                    <MiniSpan>{UlvText(props.mini.uLv, lvText)}</MiniSpan>{props.mini.nick}
                    </MiniTh>
                    <th rowSpan="2" 
                        onClick={(e) => {
                            AddFriend(e);
                        }}
                    >
                        <MainTableImg src="/pub/css/profile/addFriends.svg"></MainTableImg>
                    </th>
                    <th rowSpan="2" 
                        onClick={(e) => {
                            AddMento(e);
                        }}
                    >
                        <MainTableImg src="/pub/css/profile/addMento.svg"></MainTableImg>
                    </th>
                    <th rowSpan="2"
                        onClick={(e) => {
                            props.setClicked(false);
                            props.setShowMessage({show:true, user:props.id, nick:props.mini.nick});
                            e.stopPropagation();
                        }}
                    >
                        <MainTableImgLast src="/pub/css/profile/message.svg"></MainTableImgLast>
                    </th>
                </tr>
                <tr>
                    <MoneyInfoTd>{t('MiniProfile_Cumulative')} : <span>{props.mini.alBenefit}</span>{t('PopExtraAl_Al')}</MoneyInfoTd>
                </tr>
                </tbody>
            </MainTable>
            <MiniContentP>{props.mini.descript}</MiniContentP>
            <MiniIconLine></MiniIconLine>
            <MiniInfoTable>
                <tbody>
                    <MiniInfoTableTr>
                        <MiniInfoTableTd>{t('MiniProfile_Question')}</MiniInfoTableTd>
                        <MiniInfoTableTd>{t('MiniProfile_Answer')}</MiniInfoTableTd>
                        <MiniInfoTableTd>{t('MiniProfile_Gratitude')}</MiniInfoTableTd>
                        <MiniInfoTableTd>{t('MiniProfile_Gratitude_rate')}</MiniInfoTableTd>
                    </MiniInfoTableTr>
                    <MiniInfoTableTr>
                        <MiniInfoTableTh><Num3Comma num={props.mini.qBenefit}></Num3Comma> {t('PopExtraAl_Al')}</MiniInfoTableTh>
                        <MiniInfoTableTh><Num3Comma num={props.mini.ABenefit}></Num3Comma> {t('PopExtraAl_Al')}</MiniInfoTableTh>
                        <MiniInfoTableTh><Num3Comma num={props.mini.giveThankNum}></Num3Comma></MiniInfoTableTh>
                        <MiniInfoTableTh>{props.mini.giveThankRate}%</MiniInfoTableTh>
                    </MiniInfoTableTr>
                </tbody>
            </MiniInfoTable>
            <MiniProfileGo>{t('MiniProfile_GoToSee')}</MiniProfileGo>
        </MainDiv>
    );
  }
  
export default MiniProfile;

const MainDiv = styled.div`
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

const MainTable = styled.table`
    width: 100%;
    text-align: justify;
`;
const MainTableImg = styled.img`
    width: 30px;
    display: block;
    margin: auto;
    cursor: pointer;
`;
const MainTableImgLast = styled.img`
    width: 28px;
    display: block;
    margin: auto;
    cursor: pointer;
`;
const MiniTh = styled.th`
    display:flex;
    align-items:center;
`;
const MoneyInfoTd = styled.td`
    font-size: 12px;
    color: #888;
    font-weight: 500;
`;
const MiniSpan = styled.span`
    display: inline-block;
    font-size: 10px;
    padding: 0px 5px;
    border: 1px solid #fd0031;
    color: #fd0031;
    border-radius: 10px;
    margin-right: 2px;
`;
const MiniIconLine = styled.i`
    display: block;
    height: 1px;
    width: 80%;
    background: #eee;
    margin: 0 auto 10px;
    padding: 0;
    box-sizing: border-box;
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
const MiniInfoTable = styled.table`
    width: 100%;
    text-align: center;
    font-size: 12px;
    margin-bottom: 10px;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
`;
const MiniInfoTableTr = styled.tr`
    margin-bottom: 5px;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
`;
const MiniInfoTableTd = styled.td`
    font-weight: 500;
    color: #888;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
`;
const MiniInfoTableTh = styled.th`
    font-size: 13px;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
`;

  