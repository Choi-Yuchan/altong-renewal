import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


function PopAlmoney(props) {
    
   

    return (
        <PopReportDiv>
            <PopReportH4><PopReportDivImg src="/pub/answer/answerList/images/atm_more_3.png" alt="신고하기"></PopReportDivImg>신고</PopReportH4>
            <ReportWrap>
                <ReportReportTargertDiv>
                    <ReportReportTargertDivTable>
                        <ReportReportTargertDivTableTbody>
                            <ReportReportTargertDivTableTbodyTr>
                                <ReportReportTargertDivTableTbodyTrTh>작성자</ReportReportTargertDivTableTbodyTrTh>
                                <ReportReportTargertDivTableTbodyTrTd>(닉네임)</ReportReportTargertDivTableTbodyTrTd>
                            </ReportReportTargertDivTableTbodyTr>
                            <ReportReportTargertDivTableTbodyTr>
                                <ReportReportTargertDivTableTbodyTrTh>내용</ReportReportTargertDivTableTbodyTrTh>
                                <ReportReportTargertDivTableTbodyTrTd>(제목)</ReportReportTargertDivTableTbodyTrTd>
                            </ReportReportTargertDivTableTbodyTr>
                        </ReportReportTargertDivTableTbody>
                    </ReportReportTargertDivTable>
                </ReportReportTargertDiv>
                <ReportReportReasonDiv>
                    <ReportReportReasonDivP>- 신고 사유 선택</ReportReportReasonDivP>
                    <ReportReportReasonDivTable>
                        <ReportReportReasonDivTableTbody>
                            <ReportReportReasonDivTableTbodyTr>
                                <ReportReportReasonDivTableTbodyTrTd>
                                    <label>
                                        <ReportReportReasonDivTableTbodyTrTdLabelInput>홍보성</ReportReportReasonDivTableTbodyTrTdLabelInput>
                                    </label>
                                </ReportReportReasonDivTableTbodyTrTd>
                                <ReportReportReasonDivTableTbodyTrTd>
                                    <label>
                                        <ReportReportReasonDivTableTbodyTrTdLabelInput>유해성</ReportReportReasonDivTableTbodyTrTdLabelInput>
                                    </label>
                                </ReportReportReasonDivTableTbodyTrTd>
                            </ReportReportReasonDivTableTbodyTr>
                            <ReportReportReasonDivTableTbodyTr>
                                <ReportReportReasonDivTableTbodyTrTd>
                                    <label>
                                        <ReportReportReasonDivTableTbodyTrTdLabelInput>장난성</ReportReportReasonDivTableTbodyTrTdLabelInput>
                                    </label>
                                </ReportReportReasonDivTableTbodyTrTd>
                                <ReportReportReasonDivTableTbodyTrTd>
                                    <label>
                                        <ReportReportReasonDivTableTbodyTrTdLabelInput>중복성</ReportReportReasonDivTableTbodyTrTdLabelInput>
                                    </label>
                                </ReportReportReasonDivTableTbodyTrTd>
                            </ReportReportReasonDivTableTbodyTr>
                            <ReportReportReasonDivTableTbodyTr>
                                <ReportReportReasonDivTableTbodyTrTd>
                                    <label>
                                        <ReportReportReasonDivTableTbodyTrTdLabelInput>비속어/반말</ReportReportReasonDivTableTbodyTrTdLabelInput>
                                    </label>
                                </ReportReportReasonDivTableTbodyTrTd>
                                <ReportReportReasonDivTableTbodyTrTd>
                                    <label>
                                        <ReportReportReasonDivTableTbodyTrTdLabelInput>비 정보·지식</ReportReportReasonDivTableTbodyTrTdLabelInput>
                                    </label>
                                </ReportReportReasonDivTableTbodyTrTd>
                            </ReportReportReasonDivTableTbodyTr>
                            <ReportReportReasonDivTableTbodyTr>
                                <ReportReportReasonDivTableTbodyTrTd>
                                    <label>
                                        <ReportReportReasonDivTableTbodyTrTdLabelInput>음해/비방</ReportReportReasonDivTableTbodyTrTdLabelInput>
                                    </label>
                                </ReportReportReasonDivTableTbodyTrTd>
                                <ReportReportReasonDivTableTbodyTrTd>
                                    <label>
                                        <ReportReportReasonDivTableTbodyTrTdLabelInput>기타</ReportReportReasonDivTableTbodyTrTdLabelInput>
                                    </label>
                                </ReportReportReasonDivTableTbodyTrTd>
                            </ReportReportReasonDivTableTbodyTr>
                            <ReportReportReasonDivTableTbodyTr colSpan="2">
                                <ReportReportReasonDivTableTbodyTrTextarea placeholder="남기실 말씀이 있으시면 입력해주세요." maxLength="1000" >
                                </ReportReportReasonDivTableTbodyTrTextarea>
                            </ReportReportReasonDivTableTbodyTr>
                        </ReportReportReasonDivTableTbody>
                    </ReportReportReasonDivTable>
                </ReportReportReasonDiv>
                <ReportReportBottomDiv>
                    <ReportReportBottomDivP>
                        <ReportReportBottomDivPI>warning</ReportReportBottomDivPI>
                    </ReportReportBottomDivP>
                    <ReportReportBottomDivP>무고한 게시물을 신고하실 경우 향후 사이트 이용 시<br></br> 불이익이 있을 수도 있으니 신중을 기해주세요.</ReportReportBottomDivP>
                </ReportReportBottomDiv>
                <ReportReportButtonDiv>
                    <ReportReportButtonDivTable>
                        <tbody>
                            <tr>
                                <td>
                                    <ReportReportButtonDivInput></ReportReportButtonDivInput>
                                </td>
                                <td>
                                    <ReportReportButtonDivInputSubmit></ReportReportButtonDivInputSubmit>
                                </td>
                            </tr>
                        </tbody>
                    </ReportReportButtonDivTable>
                </ReportReportButtonDiv>
            </ReportWrap>
        </PopReportDiv>
    );
}
  
export default PopAlmoney;

const ReportReportButtonDiv = styled.div``
const ReportReportButtonDivTable = styled.table`
    margin-top: 10px;
    width: 100%;
    text-align: center;
`
const ReportReportButtonDivInput = styled.input`
    text-align: center;
    width: 90%;
    background: #fff;
    border: 1px solid #bbbaba;
    font-size: 14px;
    border-radius: 20px;
    line-height: 24px;
    color: #bbbaba;
    font-weight: bold;
    letter-spacing: -0.5px;
    outline: none;
    cursor: pointer;
`
const ReportReportButtonDivInputSubmit = styled.input`
    border: 1px solid #2bb330;
    color: #2bb330;
    text-align: center;
    width: 90%;
    background: #fff;
    font-size: 14px;
    border-radius: 20px;
    line-height: 24px;
    font-weight: bold;
    letter-spacing: -0.5px;
    outline: none;
    cursor: pointer;
`

const ReportReportBottomDiv = styled.div`
    text-align: center;
    margin-top: 5px;
    color: #989898;
`
const ReportReportBottomDivP = styled.p`
    font-size: 14px;
`
const ReportReportBottomDivPI = styled.i`
    font-size: 20px;
    margin-bottom: 8px;
    font-family: 'Material Icons';
    font-weight: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    display: inline-block;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
    -webkit-font-feature-settings: 'liga';
    -webkit-font-smoothing: antialiased;
`

const ReportReportReasonDiv = styled.div``
const ReportReportReasonDivP = styled.p`
    font-size: 13px;
    font-weight: bold;
    line-height: 26px;
`
const ReportReportReasonDivTable = styled.table`
    width: 100%;
`
const ReportReportReasonDivTableTbody = styled.tbody``
const ReportReportReasonDivTableTbodyTr = styled.tr``
const ReportReportReasonDivTableTbodyTrTextarea = styled.textarea`
    resize: none;
    width: 100%;
    margin-top: 13px;
    padding: 5px 10px;
    font-size: 14px;
    letter-spacing: -0.5px;
    line-height: 22px;
    border: 1px solid #cacaca;
    min-height: 70px;
    outline: none;
`
const ReportReportReasonDivTableTbodyTrTd = styled.td`
    line-height: 28px;
    font-size: 15px;
`
const ReportReportReasonDivTableTbodyTrTdLabelInput = styled.input`
    margin: 0 4px;
    outline: none;
`


const PopReportDiv = styled.div`
    width: 90%;
    max-width: 520px;
    background: #fff;
    box-shadow: 0 4px 4px rgb(0 0 0 / 20%);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;
const PopReportDivImg = styled.img`
    width: 19px;
    margin-bottom: -3px;
    margin-right: 5px;
`;
const PopReportH4 = styled.h4`
    text-align: center;
    font-size: 16px;
    letter-spacing: -0.5px;
    width: 100%;
    line-height: 37px;
    background: #fff;
    box-shadow: 0 2px 8px rgb(0 0 0 / 20%);
`
const ReportWrap = styled.div`
    padding: 20px;
`
const ReportReportTargertDiv = styled.div`
    border: 1px dashed #da3030;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
`
const ReportReportTargertDivTable = styled.table`
    text-align: justify;
    display: block;
    width: 100%;
`
const ReportReportTargertDivTableTbody = styled.tbody`
    display: block;
    width: 100%;
`
const ReportReportTargertDivTableTbodyTr = styled.tr`
    display: block;
    width: 100%;
`
const ReportReportTargertDivTableTbodyTrTh = styled.th`
    padding: 4px 0;
    font-size: 14px;
    letter-spacing: -0.5px;
    display: inline-block;
    width: 16%;
`
const ReportReportTargertDivTableTbodyTrTd = styled.td`
    line-height: 24px;
    padding: 3px 0;
    font-size: 15px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    display: inline-block;
    width: 82%;
`


