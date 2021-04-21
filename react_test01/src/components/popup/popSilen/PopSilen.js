import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import axios from 'axios';



function PopSilen(props) {
    const [ radioN , setRadioN ] = useState(0);

    useEffect(() => {
        if(props.clicked === true){
            props.setShowSiren({show:false, page:props.page, 
                seq:props.seq});
        }
      }, [props.clicked]);

    return (
        <PopReportDiv showSiren={props.showSiren} onClick={(e) => {
            props.setClicked(false);
            props.setShowSiren({show:true, page:props.page, seq:props.seq});
            e.stopPropagation();
          }}>
            <PopReportH4><PopReportDivImg></PopReportDivImg>신고</PopReportH4>
            <ReportWrap>
                <BDiv>
                    <BTable>
                        <BTbody>
                            <BTr>
                                <BTbodyTrTh>작성자{radioN}</BTbodyTrTh>
                                <BTbodyTrTd>(닉네임)</BTbodyTrTd>
                            </BTr>
                            <BTr>
                                <BTbodyTrTh>내용</BTbodyTrTh>
                                <BTbodyTrTd>(제목)</BTbodyTrTd>
                            </BTr>
                        </BTbody>
                    </BTable>
                </BDiv>
                <div>
                    <RReasonDivP>- 신고 사유 선택</RReasonDivP>
                    <ReDivTable>
                        <tbody>
                            <tr>
                                <AReasonTbodyTrTd>
                                    <label>
                                        <ARInput type="radio" name="H_Reason"
                                            onClick={() => {
                                                setRadioN("1")
                                            }}
                                            checked={radioN === "1" ? true : false}
                                        ></ARInput>홍보성</label>
                                </AReasonTbodyTrTd>
                                <AReasonTbodyTrTd>
                                    <label>
                                        <ARInput type="radio" name="H_Reason"
                                            onClick={() => {
                                                setRadioN("2")
                                            }}
                                            checked={radioN === "2" ? true : false}
                                        ></ARInput>유해성</label>
                                </AReasonTbodyTrTd>
                            </tr>
                            <tr>
                                <AReasonTbodyTrTd>
                                    <label>
                                        <ARInput type="radio" name="H_Reason"
                                            onClick={() => {
                                                setRadioN("3")
                                            }}
                                            checked={radioN === "3" ? true : false}
                                        ></ARInput>장난성</label>
                                </AReasonTbodyTrTd>
                                <AReasonTbodyTrTd>
                                    <label>
                                        <ARInput type="radio" name="H_Reason"
                                            onClick={() => {
                                                setRadioN("4")
                                            }}
                                            checked={radioN === "4" ? true : false}
                                        ></ARInput>중복성</label>
                                </AReasonTbodyTrTd>
                            </tr>
                            <tr>
                                <AReasonTbodyTrTd>
                                    <label>
                                        <ARInput type="radio" name="H_Reason"
                                            onClick={() => {
                                                setRadioN("5")
                                            }}
                                            checked={radioN === "5" ? true : false}
                                        ></ARInput>비속어/반말</label>
                                </AReasonTbodyTrTd>
                                <AReasonTbodyTrTd>
                                    <label>
                                        <ARInput type="radio" name="H_Reason"
                                            onClick={() => {
                                                setRadioN("6")
                                            }}
                                            checked={radioN === "6" ? true : false}
                                        ></ARInput>비 정보·지식</label>
                                </AReasonTbodyTrTd>
                            </tr>
                            <tr>
                                <AReasonTbodyTrTd>
                                    <label>
                                        <ARInput type="radio" name="H_Reason"
                                            onClick={() => {
                                                setRadioN("7")
                                            }}
                                            checked={radioN === "7" ? true : false}
                                        ></ARInput>음해/비방</label>
                                </AReasonTbodyTrTd>
                                <AReasonTbodyTrTd>
                                    <label>
                                        <ARInput type="radio" name="H_Reason"
                                            onClick={() => {
                                                setRadioN("8")
                                            }}
                                            checked={radioN === "8" ? true : false}
                                        ></ARInput>기타</label>
                                </AReasonTbodyTrTd>
                            </tr>
                            <tr>
                                <ABTd colSpan="2">
                                    <ReTextarea maxlength="1000" placeholder="남기실 말씀이 있으시면 입력해주세요.">
                                    </ReTextarea>
                                </ABTd>
                                
                            </tr>
                        </tbody>
                    </ReDivTable>
                </div>
                <DRBottomDiv>
                    <RDivP>
                        <DRDivPI>warning</DRDivPI>
                    </RDivP>
                    <RDivP>무고한 게시물을 신고하실 경우 향후 사이트 이용 시<br></br> 불이익이 있을 수도 있으니 신중을 기해주세요.</RDivP>
                </DRBottomDiv>
                <div>
                    <DReportTable>
                        <tbody>
                            <tr>
                                <td>
                                    <DRInput value="취소"></DRInput>
                                </td>
                                <td>
                                    <DSubmit value="제출"></DSubmit>
                                </td>
                            </tr>
                        </tbody>
                    </DReportTable>
                </div>
            </ReportWrap>
        </PopReportDiv>
    );
}
  
export default PopSilen;
const DReportTable = styled.table`
    margin-top: 10px;
    width: 100%;
    text-align: center;
`
const ABTd = styled.td`
    line-height: 28px;
    font-size: 15px;
`
const DRInput = styled.input`
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
const DSubmit = styled.input`
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
const DRBottomDiv = styled.div`
    text-align: center;
    margin-top: 5px;
    color: #989898;
`
const RDivP = styled.p`
    font-size: 14px;
`
const DRDivPI = styled.i`
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
const RReasonDivP = styled.p`
    font-size: 13px;
    font-weight: bold;
    line-height: 26px;
`
const ReDivTable = styled.table`
    width: 100%;
`
const ReTextarea = styled.textarea`
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
const AReasonTbodyTrTd = styled.td`
    line-height: 28px;
    font-size: 15px;
`
const ARInput = styled.input`
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
    display: ${(props) => props.showSiren?"block":"none"};
    z-index: 99;
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
const BDiv = styled.div`
    border: 1px dashed #da3030;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
`
const BTable = styled.table`
    text-align: justify;
    display: block;
    width: 100%;
`
const BTbody = styled.tbody`
    display: block;
    width: 100%;
`
const BTr = styled.tr`
    display: block;
    width: 100%;
`
const BTbodyTrTh = styled.th`
    padding: 4px 0;
    font-size: 14px;
    letter-spacing: -0.5px;
    display: inline-block;
    width: 16%;
`
const BTbodyTrTd = styled.td`
    line-height: 24px;
    padding: 3px 0;
    font-size: 15px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    display: inline-block;
    width: 82%;
`