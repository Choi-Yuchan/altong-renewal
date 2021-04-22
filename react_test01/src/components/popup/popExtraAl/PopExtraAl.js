import styled from 'styled-components';
import React, { useState, useEffect } from 'react';

import Num3Comma from '../../functions/num3comma/Num3Comma'
import FormatDateAsText from '../../functions/formatDateAsText/FormatDateAsText'


const ExtraViewer = (nick, money, time) => {
    return <>
        <AlmoneyDivUlLi2>
        <AlmoneyDivUlLi2A>
            <b>{nick} (<Num3Comma num={money}></Num3Comma>알)</b>
        </AlmoneyDivUlLi2A> <FormatDateAsText date={Date.parse(time)}></FormatDateAsText></AlmoneyDivUlLi2>
    </>
}

const ExtraAlList = (lists) => {
    return lists.map((list)=>{
        return ExtraViewer(list.nickname, list.almoney, list.conDate);
    })
  }
 
function PopExtraAl(props) {
    const extraList = props.extraList;
    const showExtraList= props.showExtraList;
    
    return (
        <AlmoneyDivUl show={showExtraList}>
            <AlmoneyDivUlLi>증정회원</AlmoneyDivUlLi>
            {ExtraAlList(extraList)}
        </AlmoneyDivUl>
      );
  }

const AlmoneyDivUl = styled.ul`
  min-width: 220px;
  font-size: 12px;
  padding: 10px;
  border: 1px solid #eb639d;
  background: #fff;
  font-weight: normal;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 999;
  display: ${(props) => props.show?"display":"none"};
`;
const AlmoneyDivUlLi = styled.li`
  color: #f2056e;
  line-height: 17px;
  margin-bottom: 10px;
  list-style: none;
`;
const AlmoneyDivUlLi2 = styled.li`
  line-height: 26px;
  list-style: none;
`;
const AlmoneyDivUlLi2A = styled.a`
  text-decoration: none;
  color: #333;
`;
export default PopExtraAl;
