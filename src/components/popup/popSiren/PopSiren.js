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
      }, [clicked, setShowSiren, page, seq, title]);

    return (
        <PopReportDiv showSiren={showSiren} onClick={(e) => {
            setClicked(false);
            setShowSiren({show:true, page, seq, title});
            e.stopPropagation();
          }}>
            <PopReport><ReportIcon src="/pub/answer/answerList/images/atm_more_3.png" alt={t("QPopup_Report")}/>{t('Silen_Report')}</PopReport>
            <ReportWrap>
                <ReportForm>
                    <ReportFormContents>
                            <ContentsRow>
                                <ContentsSubtitle>{t('Silen_Reporter')}</ContentsSubtitle>
                                <ContentsInfo>{nick}</ContentsInfo>
                            </ContentsRow>
                            <ContentsRow>
                                <ContentsSubtitle>{t('Silen_Content')}</ContentsSubtitle>
                                <ContentsInfo>{title}</ContentsInfo>
                            </ContentsRow>
                    </ReportFormContents>
                </ReportForm>
                <ReportReason>
                    <ReasonTitle>- {t('Silen_Reason')}</ReasonTitle>
                    <ReasonContainer>
                        <ReasonColumn>
                            <ReasonList>
                                <ARInput type="radio" name="H_Reason"
                                    onClick={() => {
                                        setRadioN("1")
                                    }}
                                    defaultChecked={radioN === "1" ? true : false}
                                />
                                <ReasonLabel>{t('Silen_Advertising')}</ReasonLabel>
                            </ReasonList>
                            <ReasonList>
                                <ARInput type="radio" name="H_Reason"
                                    onClick={() => {
                                        setRadioN("2")
                                    }}
                                    defaultChecked={radioN === "2" ? true : false}
                                />
                                <ReasonLabel>{t('Silen_Harmful')}</ReasonLabel>
                            </ReasonList>
                            <ReasonList>
                                <ARInput type="radio" name="H_Reason"
                                    onClick={() => {
                                        setRadioN("3")
                                    }}
                                    defaultChecked={radioN === "3" ? true : false}
                                />
                                <ReasonLabel>{t('Silen_Pranky')}</ReasonLabel>
                            </ReasonList>
                            <ReasonList>
                                <ARInput type="radio" name="H_Reason"
                                    onClick={() => {
                                        setRadioN("4")
                                    }}
                                    defaultChecked={radioN === "4" ? true : false}
                                />
                                <ReasonLabel>{t('Silen_Repetitive')}</ReasonLabel>
                            </ReasonList>
                        </ReasonColumn>
                        <ReasonColumn>
                            <ReasonList>
                                <ARInput type="radio" name="H_Reason"
                                    onClick={() => {
                                        setRadioN("5")
                                    }}
                                    defaultChecked={radioN === "5" ? true : false}
                                />
                                <ReasonLabel>{t('Silen_Cussing')}</ReasonLabel>
                            </ReasonList>
                            <ReasonList>
                                <ARInput type="radio" name="H_Reason"
                                    onClick={() => {
                                        setRadioN("6")
                                    }}
                                    defaultChecked={radioN === "6" ? true : false}
                                />
                                <ReasonLabel>{t('Silen_knowledge')}</ReasonLabel>
                            </ReasonList>
                            <ReasonList>
                                <ARInput type="radio" name="H_Reason"
                                    onClick={() => {
                                        setRadioN("7")
                                    }}
                                    defaultChecked={radioN === "7" ? true : false}
                                />
                                <ReasonLabel>{t('Silen_Defamation')}</ReasonLabel>
                            </ReasonList>
                            <ReasonList>
                                <ARInput type="radio" name="H_Reason"
                                    onClick={() => {
                                        setRadioN("8")
                                    }}
                                    defaultChecked={radioN === "8" ? true : false}
                                />
                                <ReasonLabel>{t('Silen_Others')}</ReasonLabel>
                            </ReasonList>
                        </ReasonColumn>
                    </ReasonContainer>
                    <ReasonTextBox>
                        <ReTextarea maxlength="1000" placeholder={t('Silen_Placeholder')} value={reason} onChange={(e) => {handleChange(e)}}/>
                    </ReasonTextBox> 
                </ReportReason>
                <WarningDiv>
                    <WarningTitle>WARNING</WarningTitle>
                    <WarningPara>{t('Silen_Innocent')}<br></br> {t('Silen_Prudent')}</WarningPara>
                </WarningDiv>
                <ReportBtnBox>
                    <DRInput value={t('Cancel')} 
                    onChange={(e) => {handleChange(e)}}
                    onClick={(e)=>{
                            setReason("");
                            setClicked(true);
                            e.stopPropagation();
                        }}
                    />
                    <DSubmit value={t('Silen_Submit')} 
                    onChange={(e) => {handleChange(e)}} 
                    onClick={(e)=>{
                            runSiren(e, setReason, setClicked);
                        }}
                    />
                </ReportBtnBox>
            </ReportWrap>
        </PopReportDiv>
    );
}
  
export default PopSiren;
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
const ReportIcon = styled.img`
    width: 19px;
    margin-right: 5px;
    margin-bottom: -3px;
`;
const PopReport = styled.h4`
    text-align: center;
    font-size: 16px;
    letter-spacing: -0.5px;
    width: 100%;
    line-height: 37px;
    background: #fff;
    box-shadow: 0 2px 8px rgb(0 0 0 / 20%);
`
const ReportReason = styled.article`
`;

const ReasonLabel = styled.label`
    line-height:2;
`;
const ReasonTextBox = styled.div`
    line-height: 28px;
    font-size: 15px;
`
const ReasonTitle = styled.p`
    font-size: 14px;
    font-weight: bold;
    padding: 5px;
`
const ReasonContainer = styled.div`
    width: 100%;
    display: flex;
`
const ReasonColumn = styled.div`
    display:flex;
    flex-direction: column;
    width: 50%;
    padding-left:0.5rem;
`;
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
    ::placeholder{
        font-size:12px;
    }
`
const ReasonList = styled.div`
    font-size: 15px;
`
const ARInput = styled.input`
    margin: 0 5px;
    outline: none;
`
const ReportWrap = styled.main`
    padding: 20px;
`
const ReportForm = styled.article`
    border: 1px dashed #989898;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
`
const ReportFormContents = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    flex-flow:column wrap;
    width: 100%;
`
const ContentsRow = styled.div`
    display: flex;
    width: 100%;
    line-height:1.8;
    align-items: center;
`
const ContentsSubtitle = styled.h6`
    font-size: 14px;
    font-weight: bold;
    width: 25%;
    padding-left: 10px;
    @media (min-width:480px){
        width:16%;
    }
`
const ContentsInfo = styled.p`
    font-size: 15px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 75%;
    @media (min-width:480px){
        width: 82%;
    }
`
const ReportBtnBox = styled.div`
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    margin-top: 1rem;
    width: 100%;
`
const DRInput = styled.input`
    text-align: center;
    width: 40%;
    padding: 6px 0;
    background: #fff;
    border: 2px solid #fd0031;
    font-size: 14px;
    border-radius: 20px;
    color: #fd0031;
    font-weight: bold;
    outline: none;
    cursor: pointer;
`
const DSubmit = styled(DRInput)`
    border: 2px solid #2bb330;
    color: #2bb330;
`
const WarningDiv = styled.div`
    text-align: center;
    color: #989898;
`
const WarningPara = styled.p`
    font-size: 11px;
    @media (min-width: 480px){
        font-size:14px;
    }
`
const WarningTitle = styled.p`
    font-size: 20px;
    margin-bottom: 5px;
    font-family: 'Material Icons';
`