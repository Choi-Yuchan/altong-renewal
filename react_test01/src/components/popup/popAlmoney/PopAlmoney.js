import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Num3Comma from '../../functions/num3comma/Num3Comma'


function giveAlmoney(props, extraAlmoney, setMaxAlmoney, setextraAlmoney, maxAlmoney, setShowAlmoney, setClicked, e) {
        
    console.log("extra.. : " + extraAlmoney);
    console.log("props.seq : " + props.seq);
    console.log(props.seq==='Q'?"/rest/questions/"+props.page+"/almoney":
    "/rest/answers/"+props.page+"/almoney");
    axios.put(props.seq==='Q'?"/rest/questions/"+props.page+"/almoney":
        "/rest/answers/"+props.page+"/almoney",{
            "extraAlmoney":parseInt(extraAlmoney)
        })
    .then((response) => response.data)
    .then((data) => {
        console.log(data);
        if(data.code === "fail"){
            setextraAlmoney(0);
            alert(data.msg);
            setClicked(true);
            setShowAlmoney({show:false, page:0, seq:props.seq});
            e.stopPropagation();
        }else if(data.code === "error"){
            setextraAlmoney(0);
            setClicked(true);
            setShowAlmoney({show:false, page:0, seq:props.seq});
            e.stopPropagation();
        }else if( data.code === "rowlv" ){
            alert(data.message);
            setClicked(true);
            setShowAlmoney({show:false, page:0, seq:props.seq});
            e.stopPropagation();
        }else if(data.code === "good"){
            if( data.game === "no" ){
                setextraAlmoney(0);
                setMaxAlmoney(maxAlmoney - extraAlmoney);
                setClicked(true);
                setShowAlmoney({show:false, page:0, seq:props.seq});
                e.stopPropagation();
            }else if( data.game.code ==="stack" ){
                setClicked(true);
                setShowAlmoney({show:false, page:0, seq:props.seq});
                e.stopPropagation();
            } else {
                // 룰렛 게임 처리
                setextraAlmoney(0);
                setMaxAlmoney(maxAlmoney - extraAlmoney);
                if(window.confirm("축하합니다!\n\n룰렛 이용권 1장을 획득하셨습니다.\n지금 룰렛 이용권을 사용하시겠습니까?\n오늘 내로 사용하지 않으면 자동 소멸됩니다.")){
                    window.location.href = '/roulette/game';
                    return null;
                }

                setClicked(true);
                setShowAlmoney({show:false, page:0, seq:props.seq});
                e.stopPropagation();
            }
        }else if(data.code === "me"){
            alert("본인에게는 훈훈알을 지급할 수 없습니다.");
            setClicked(true);
            setShowAlmoney({show:false, page:0, seq:'Q'});
            e.stopPropagation();
        }else if(data.code === "noExist"){
            alert("존재하지 않는 글입니다.");
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
function PopAlmoney(props) {
    const [maxAlmoney,setMaxAlmoney] = useState(30000);
    const [extraAlmoney,setextraAlmoney] = useState(0);

    const handleChange = (e) => {
        setextraAlmoney(e.target.value);
    }
    
    

    useEffect(() => {
        if(props.clicked === true){
            props.setShowAlmoney({show:false, page:props.page, 
                seq:props.seq});
        }
      }, [props.clicked]);

    useEffect(() => {
    if(props.showAlmoney === true){
        // 증정 가능한 훈훈알 반환
        console.log(props.seq==='Q'?"/rest/questions/"+props.page+"/almoney/extra":
        "/rest/answers/"+props.page+"/almoney/extra");
        axios.post(props.seq==='Q'?"/rest/questions/"+props.page+"/almoney/extra":
        "/rest/answers/"+props.page+"/almoney/extra")
            .then((response) => response.data)
            .then((data) => {
                if(data.code === "rowlv"){
                    alert(data.message);
                    props.setClicked(true);
                    props.setShowAlmoney({show:false, page:0, seq:'Q'});
                }else if(data.code === "find"){
                    setMaxAlmoney(parseInt(data.almoney,10));
                }
            })
            .catch(function (error) {
                console.log("error : " + error)
            }
        )};
    }, [props.showAlmoney]);

    return (
        <PopAlDiv showAlmoney={props.showAlmoney} onClick={(e) => {
            props.setClicked(false);
            props.setShowAlmoney({show:true, page:props.page, seq:props.seq});
            e.stopPropagation();
          }}>
            <PopUl>
                <Popli>
                    <PopH3>훈훈알 증정하기</PopH3>
                </Popli>
                <Popli>
                    <PopP>금일 증정 가능하신 훈훈알은 <br>
                    </br> 총 <PopSpan><Num3Comma num={maxAlmoney}></Num3Comma></PopSpan>알 입니다.</PopP>
                </Popli>
                <Popli3><PopH3Input placeholder="300~10,000" step="100" autocomplete="off"
                    value={extraAlmoney} onChange={(e) => handleChange(e)}
                autofocus type="number"></PopH3Input>알</Popli3>
                <Popli4>
                    <Popli4Button
                        onClick={(e) =>{
                            props.setClicked(true);
                            props.setShowAlmoney({show:false, page:0, seq:'Q'});
                            e.stopPropagation();
                        }}
                    >취소</Popli4Button>
                </Popli4>
                <Popli5>
                    <Popli5Button onClick={(e) =>{
                        giveAlmoney(props, extraAlmoney,
                            setMaxAlmoney, setextraAlmoney, maxAlmoney, props.setShowAlmoney, props.setClicked, e);
                    }}>확인</Popli5Button>
                </Popli5>
            </PopUl>
        </PopAlDiv>
    );
}
  
export default PopAlmoney;

const PopAlDiv = styled.div`
    display: ${(props) => props.showAlmoney?"block":"none"};
    padding: 10px;
    max-width: 320px;
    text-align: center;
    letter-spacing: -1px;
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
    margin:0;
    padding:0;
`;
const Popli = styled.li`
    list-style: none;
`;
const PopP = styled.p`
    margin-top: 10px;
    font-weight: 500;
    font-size: 14px;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
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
    display: inline-block;
    width: 50%;
    margin-left: -2px;
    list-style: none;
`;
const Popli4Button = styled.button`
    margin-right: 15px;
    border: 1px solid #333;
    color: #666;
    margin-top: 10px;
    margin-bottom: 5px;
    width: 43%;
    background: #fff;
    font-size: 14px;
    font-weight: bold;
    border-radius: 20px;
    line-height: 25px;
    outline: none;
    cursor: pointer;
`;
const Popli5 = styled.li`
    display: inline-block;
    width: 50%;
    margin-left: -2px;
    list-style: none;
`;
const Popli5Button = styled.button`
    margin-top: 10px;
    margin-bottom: 5px;
    width: 43%;
    border: 1px solid #fd0031;
    background: #fff;
    font-size: 14px;
    font-weight: bold;
    border-radius: 20px;
    line-height: 25px;
    color: #fd0031;
    outline: none;
    cursor: pointer;
`;
