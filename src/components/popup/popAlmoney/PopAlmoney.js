import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Num3Comma from '../../functions/num3comma/Num3Comma'
import {useTranslation} from 'react-i18next';


function giveAlmoney(page, seq, extraAlmoney, setMaxAlmoney, setextraAlmoney, maxAlmoney, setShowAlmoney, setClicked, e, setHunAlram, text) {
        
    //URL LIST
    const URL_QUE_AL = `/api/questions/${page}/almoney`;
    const URL_ANS_AL = `/api/answers/${page}/almoney`;

    //훈훈알 주는 기능
    axios.post(seq==='Q'? URL_QUE_AL : 
        URL_ANS_AL ,{
            "extraAlmoney":parseInt(extraAlmoney)
        })
    .then((response) => response.data)
    .then((data) => {
        if(data.code === "fail"){
            setextraAlmoney(0);
            alert(data.msg);
            setClicked(true);
            setShowAlmoney({show:false, page:0, seq});
            e.stopPropagation();
        }else if(data.code === "error"){
            setextraAlmoney(0);
            setClicked(true);
            setShowAlmoney({show:false, page:0, seq});
            e.stopPropagation();
        }else if( data.code === "rowlv" ){
            alert(data.message);
            setClicked(true);
            setShowAlmoney({show:false, page:0, seq});
            e.stopPropagation();
        }else if(data.code === "good"){
            setHunAlram(true);
            if( data.game === "no" ){
                setextraAlmoney(0);
                setMaxAlmoney(maxAlmoney - extraAlmoney);
                setClicked(true);
                setShowAlmoney({show:false, page:0, seq});
                e.stopPropagation();
            }else if( data.game.code ==="stack" ){
                setClicked(true);
                setShowAlmoney({show:false, page:0, seq});
                e.stopPropagation();
            } else {
                // 룰렛 게임 처리
                setextraAlmoney(0);
                setMaxAlmoney(maxAlmoney - extraAlmoney);
                if(window.confirm(text[0])){
                    window.location.href = '/roulette/game';
                    return null;
                }

                setClicked(true);
                setShowAlmoney({show:false, page:0, seq});
                e.stopPropagation();
            }
        }else if(data.code === "me"){
            alert(text[1]);
            setClicked(true);
            setShowAlmoney({show:false, page:0, seq:'Q'});
            e.stopPropagation();
        }else if(data.code === "noExist"){
            alert(text[2]);
            setClicked(true);
            setShowAlmoney({show:false, page:0, seq:'Q'});
            e.stopPropagation();
        }
    })
    .catch(function (error) {
        console.log("error : " + error)
    });
}

// atm_top_wrap
function PopAlmoney({clicked, setClicked, showAlmoney, setShowAlmoney, page, seq, setHunAlram}) {
    const [maxAlmoney,setMaxAlmoney] = useState(30000);
    const [extraAlmoney,setextraAlmoney] = useState(0);

    //URL LIST
    const URL_EXTRA_ALMONEY = "/api/user/almoney/extra";

    const handleChange = (e) => {
        setextraAlmoney(e.target.value);
    }

    const {t} = useTranslation();
    const almoneyText = [t('Event_Confirm'), t('Hunhun_Warning'), t('Not_Exist')];

    useEffect(() => {
        if(clicked === true){
            setShowAlmoney({show:false, page, seq});
        }
      }, [clicked, setShowAlmoney, page, seq]);

    useEffect(() => {
        //사용 가능한 훈훈알 수 반환
        const checkWarmingAlBalance = async () => {
            if(showAlmoney === true)
            try{
                const response = await axios.get(URL_EXTRA_ALMONEY);
                if(response.data.code === "rowlv"){
                    alert(response.data.message);
                    setClicked(true);
                    setShowAlmoney({ show : false, page : 0, seq: "Q"});
                } else if(response.data.code === "find"){
                    setMaxAlmoney(parseInt(response.data.almoney), 10);
                }
            } catch(e) {
                console.log(e)
            }
        }
        checkWarmingAlBalance();
    }, [showAlmoney, setShowAlmoney, setClicked]);

    return (
        <PopAlDiv showAlmoney={showAlmoney} onClick={(e) => {
            setClicked(false);
            setShowAlmoney({show:true, page, seq});
            e.stopPropagation();
          }}>
            <PopUl>
                <Popli>
                    <PopH3>{t('Hunhun_Give')}</PopH3>
                </Popli>
                <Popli>
                    <PopP>{t('Hunhun_Available')} <br>
                    </br> {t('Hunhun_Total')}<PopSpan>&nbsp;<Num3Comma num={maxAlmoney}/></PopSpan>{t('Hunhun_Al')}</PopP>
                </Popli>
                <Popli3><PopH3Input placeholder="300 ~ 10,000" step="100" autocomplete="off"
                    value={extraAlmoney} onChange={(e) => handleChange(e)}
                autoFocus type="number"></PopH3Input>{t('PopExtraAl_Al')}</Popli3>
                <Popli4>
                    <Popli4Button
                        onClick={(e) =>{
                            setClicked(true);
                            setShowAlmoney({show:false, page:0, seq:'Q'});
                            e.stopPropagation();
                        }}
                    >{t('Cancel')}</Popli4Button>
                    <Popli5Button onClick={(e) =>{
                        giveAlmoney(page, seq, extraAlmoney,
                            setMaxAlmoney, setextraAlmoney, maxAlmoney, setShowAlmoney, setClicked, e, setHunAlram, almoneyText);
                    }}>{t('Confirm')}</Popli5Button>
                </Popli4>
            </PopUl>
        </PopAlDiv>
    );
}
  
export default PopAlmoney;

const PopAlDiv = styled.div`
    display: ${(props) => props.showAlmoney ? "block":"none"};
    padding: 10px;
    max-width: 320px;
    background: #fff;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 20px;
    overflow: hidden;
    width: 80%;
    z-index:199;
`;
const PopUl = styled.ul`
    width: 100%;
    height: 100%;
    text-align: center;
`;
const Popli = styled.li`
    list-style: none;
`;
const PopP = styled.p`
    margin-top: 10px;
    font-weight: 500;
    font-size: 14px;
`;
const PopSpan = styled.span`
    font-weight: bold;
    color: #fd0031;
`;
const Popli3 = styled.li`
    font-weight: bold;
    margin: 20px 0;
    list-style: none;
`;
const PopH3 = styled.h3`
    font-size: 16px;
    line-height: 50px;
    border-bottom: 1px solid #eee;
`;
const PopH3Input = styled.input`
    width: 100px;
    font-size: 14px;
    border: none;
    border-bottom: 1px solid #333;
    margin-right: 10px;
    padding: 6px 0;
    font-weight: bold;
    text-align: center;
    outline: none;
`;
const Popli4 = styled.li`
    display: flex;
    width: 100%;
    list-style: none;
    justify-content:center;
    margin-top:10px;
    margin-bottom:5px;
    height:25px;
`;
const Popli4Button = styled.button`
    margin-right: 15px;
    border: 1px solid #333;
    color: #666;
    width: 45%;
    background: #fff;
    font-size: 14px;
    font-weight: bold;
    border-radius: 20px;
    outline: none;
    cursor: pointer;
`;
const Popli5Button = styled.button`
    width: 45%;
    border: 1px solid #fd0031;
    background: #fff;
    font-size: 14px;
    font-weight: bold;
    border-radius: 20px;
    color: #fd0031;
    outline: none;
    cursor: pointer;
`;
