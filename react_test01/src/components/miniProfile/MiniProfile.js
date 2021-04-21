import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UlvText = (props) => {
    const LV=['비공개','알천사','나비천사','미소천사','열혈천사','황금천사','수호천사','빛의천사','천사장','대천사','대천사장','알통폐인'];
    return LV[props];
  }

function MiniProfile(props) {
    const USER= props.USER;
    // const uid = USER !== undefined ? ( USER !== null ? ( USER.seq !== null ? USER.seq : "" ) : "" ) : "";
    

    // 친구 추가
    const AddFriend = (e) => {
        axios.put("/restApi/users/"+ props.id + "/F/partner-save")
        .then( (response) => response.data )
        .then( (data) => {
                alert(data.msg);
                props.setClicked(true);
                e.stopPropagation();
            }
        )
        .catch(function (error) {
                console.log(error);
                alert("오류가 발생하였습니다. 잠시후에 시도해주세요.");
                props.setClicked(true);
                e.stopPropagation();
            }
        );
    }
    // 멘토 추가
    const AddMento = (e) => {
        axios.put("/restApi/users/"+ props.id + "/M/partner-save")
        .then( (response) => response.data )
        .then( (data) => {
                alert(data.msg);
                props.setClicked(true);
                e.stopPropagation();
            }
        )
        .catch(function (error) {
                console.log(error);
                alert("오류가 발생하였습니다. 잠시후에 시도해주세요.");
                props.setClicked(true);
                e.stopPropagation();
            }
        );
    }

    return (
        <MainDiv showMini={props.showMini} className="MiniProfile"
        onClick={(e)=>{
            props.setClicked(false);
            props.setShowMini(true);
            e.stopPropagation();
        }}>
            <MainTable>
                <tbody>
                <tr>
                    <th>
                    <MiniSpan>{UlvText(props.mini.uLv)}</MiniSpan>{props.mini.nick}</th>
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
                    <th rowSpan="2">
                        <MainTableImgLast src="/pub/css/profile/message.svg"></MainTableImgLast>
                    </th>
                </tr>
                <tr>
                    <MoneyInfoTd>누적수익 : <span>{props.mini.alBenefit}</span>알</MoneyInfoTd>
                </tr>
                </tbody>
            </MainTable>
            <MiniContentP>{props.mini.descript}</MiniContentP>
            <MiniIconLine></MiniIconLine>
            <MiniInfoTable>
                <tbody>
                    <MiniInfoTableTr>
                        <MiniInfoTableTd>질문 수익</MiniInfoTableTd>
                        <MiniInfoTableTd>답변 수익</MiniInfoTableTd>
                        <MiniInfoTableTd>감사알 지급 건수</MiniInfoTableTd>
                        <MiniInfoTableTd>감사알 지급률</MiniInfoTableTd>
                    </MiniInfoTableTr>
                    <MiniInfoTableTr>
                        <MiniInfoTableTh>{props.mini.qBenefit}알</MiniInfoTableTh>
                        <MiniInfoTableTh>{props.mini.ABenefit}알</MiniInfoTableTh>
                        <MiniInfoTableTh>{props.mini.giveThankNum}</MiniInfoTableTh>
                        <MiniInfoTableTh>{props.mini.giveThankRate}%</MiniInfoTableTh>
                    </MiniInfoTableTr>
                </tbody>
            </MiniInfoTable>
            <MiniProfileGo>프로필 보러가기</MiniProfileGo>
        </MainDiv>
    );
  }
  
export default MiniProfile;

const MainDiv = styled.div`
&{
    width: 400px;
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
const MainDivNone = styled.div`
    display:none;
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
    margin: 15px 0 10px;
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

  