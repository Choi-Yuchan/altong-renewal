import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useTranslation} from 'react-i18next';

function PopSiren({clicked, setClicked, showSiren, page, seq, title, setShowSiren, USER}) {
    const [ radioN , setRadioN ] = useState(0);
    const [ reason , setReason ] = useState("");
    const {t} = useTranslation();
    
    const nick = USER !== undefined ? ( USER !== null ? ( USER.nick !== null ? USER.nick : "" ) : "" ) : "";

    //URL LIST
    const URL_SIREN = `/api/sirens/${page}`

    const handleChange = (e) => {
        setReason(e.target.value);
    }

    const runSiren = async (e, setReason, setClicked) => {
        try {
            const response = await axios.post(URL_SIREN,{
                "ACT":"CheckSiren", "H_Type":seq , "H_Reason": radioN, "H_Reason_txt": reason
            })
            if(response.data.msg){
                alert(t('Silen_Successfully'));
                setReason("");
                setClicked(true);
                e.stopPropagation();
            }else{
                alert(t('Silen_Error'));
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if(clicked === true){
            setShowSiren({show:false, page, seq, title});
        }
      }, [clicked]);

    return (
        <PopReportDiv showSiren={showSiren} onClick={(e) => {
            setClicked(false);
            setShowSiren({show:true, page, seq, title});
            e.stopPropagation();
          }}>
            <PopReportH4><PopReportDivImg/>{t('Silen_Report')}</PopReportH4>
            <ReportWrap>
                <BDiv>
                    <BTable>
                        <BTbody>
                            <BTr>
                                <BTbodyTrTh>{t('Silen_Reporter')}</BTbodyTrTh>
                                <BTbodyTrTd>{nick}</BTbodyTrTd>
                            </BTr>
                            <BTr>
                                <BTbodyTrTh>{t('Silen_Content')}</BTbodyTrTh>
                                <BTbodyTrTd>{title}</BTbodyTrTd>
                            </BTr>
                        </BTbody>
                    </BTable>
                </BDiv>
                <div>
                    <RReasonDivP>- {t('Silen_Reason')}</RReasonDivP>
                    <ReDivTable>
                        <tbody>
                            <tr>
                                <AReasonTbodyTrTd>
                                    <label>
                                        <ARInput type="radio" name="H_Reason"
                                            onClick={() => {
                                                setRadioN("1")
                                            }}
                                            defaultChecked={radioN === "1" ? true : false}
                                        ></ARInput>{t('Silen_Advertising')}</label>
                                </AReasonTbodyTrTd>
                                <AReasonTbodyTrTd>
                                    <label>
                                        <ARInput type="radio" name="H_Reason"
                                            onClick={() => {
                                                setRadioN("2")
                                            }}
                                            defaultChecked={radioN === "2" ? true : false}
                                        ></ARInput>{t('Silen_Harmful')}</label>
                                </AReasonTbodyTrTd>
                            </tr>
                            <tr>
                                <AReasonTbodyTrTd>
                                    <label>
                                        <ARInput type="radio" name="H_Reason"
                                            onClick={() => {
                                                setRadioN("3")
                                            }}
                                            defaultChecked={radioN === "3" ? true : false}
                                        ></ARInput>{t('Silen_Pranky')}</label>
                                </AReasonTbodyTrTd>
                                <AReasonTbodyTrTd>
                                    <label>
                                        <ARInput type="radio" name="H_Reason"
                                            onClick={() => {
                                                setRadioN("4")
                                            }}
                                            defaultChecked={radioN === "4" ? true : false}
                                        ></ARInput>{t('Silen_Repetitive')}</label>
                                </AReasonTbodyTrTd>
                            </tr>
                            <tr>
                                <AReasonTbodyTrTd>
                                    <label>
                                        <ARInput type="radio" name="H_Reason"
                                            onClick={() => {
                                                setRadioN("5")
                                            }}
                                            defaultChecked={radioN === "5" ? true : false}
                                        ></ARInput>{t('Silen_Cussing')}</label>
                                </AReasonTbodyTrTd>
                                <AReasonTbodyTrTd>
                                    <label>
                                        <ARInput type="radio" name="H_Reason"
                                            onClick={() => {
                                                setRadioN("6")
                                            }}
                                            defaultChecked={radioN === "6" ? true : false}
                                        ></ARInput>{t('Silen_knowledge')}</label>
                                </AReasonTbodyTrTd>
                            </tr>
                            <tr>
                                <AReasonTbodyTrTd>
                                    <label>
                                        <ARInput type="radio" name="H_Reason"
                                            onClick={() => {
                                                setRadioN("7")
                                            }}
                                            defaultChecked={radioN === "7" ? true : false}
                                        ></ARInput>{t('Silen_Defamation')}</label>
                                </AReasonTbodyTrTd>
                                <AReasonTbodyTrTd>
                                    <label>
                                        <ARInput type="radio" name="H_Reason"
                                            onClick={() => {
                                                setRadioN("8")
                                            }}
                                            defaultChecked={radioN === "8" ? true : false}
                                        ></ARInput>{t('Silen_Others')}</label>
                                </AReasonTbodyTrTd>
                            </tr>
                            <tr>
                                <ABTd colSpan="2">
                                    <ReTextarea maxlength="1000" placeholder={t('Silen_Placeholder')} value={reason} onChange={(e) => {handleChange(e)}}>
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
                    <RDivP>{t('Silen_Innocent')}<br></br> {t('Silen_Prudent')}</RDivP>
                </DRBottomDiv>
                <div>
                    <DReportTable>
                        <tbody>
                            <tr>
                                <td>
                                    <DRInput value={t('Cancel')} 
                                    onChange={(e) => {handleChange(e)}}
                                    onClick={(e)=>{
                                            setReason("");
                                            setClicked(true);
                                            e.stopPropagation();
                                        }}
                                    ></DRInput>
                                </td>
                                <td>
                                    <DSubmit value={t('Silen_Submit')} 
                                    onChange={(e) => {handleChange(e)}} 
                                    onClick={(e)=>{
                                            runSiren(e, setReason, setClicked);
                                        }}
                                    ></DSubmit>
                                </td>
                            </tr>
                        </tbody>
                    </DReportTable>
                </div>
            </ReportWrap>
        </PopReportDiv>
    );
}
  
export default PopSiren;
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
const RDivP = styled.div`
    font-size: 14px;
`
const DRDivPI = styled.p`
    font-size: 20px;
    margin-bottom: 8px;
    font-family: 'Material Icons';
    line-height: 1;
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
    position: fixed;
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