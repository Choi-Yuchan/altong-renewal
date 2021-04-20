import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


function PopAlmoney(props) {
    
   

    return (
        <PopReportDiv>
            <PopReportH4>

            </PopReportH4>
            <ReportWrap>
                <ReportReportTargertDiv></ReportReportTargertDiv>
                <ReportReportReasonDiv></ReportReportReasonDiv>
                <ReportReportBottomDiv></ReportReportBottomDiv>
                <ReportReportButtonDiv></ReportReportButtonDiv>
            </ReportWrap>
        </PopReportDiv>
    );
}
  
export default PopAlmoney;

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
    padding: 20px;
`
const ReportReportReasonDiv = styled.div`
    padding: 20px;
`
const ReportReportBottomDiv = styled.div`
    padding: 20px;
`
const ReportReportButtonDiv = styled.div`
    padding: 20px;
`


