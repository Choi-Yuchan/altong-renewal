import styled from 'styled-components';
import React, { useState, useEffect } from 'react';

import Num3Comma from '../../functions/num3comma/Num3Comma'

//jsonArr
const replyCount = (replys) => {
  return replys.length
}

function ExtraAlList(props) {

    return (
        <>
          <AlmoneyDivUlLi>증정회원</AlmoneyDivUlLi>
          <AlmoneyDivUlLi2>
            <AlmoneyDivUlLi2A>
                <b>(닉네임) ({Num3Comma(10000)}알)</b>
            </AlmoneyDivUlLi2A>2시간 전</AlmoneyDivUlLi2>
        </>
    );
  }
 
function PopExtraAl(props) {
    const extraList = props.extraList;
    const showExtraList= props.showExtraList;
    const white = props.white;

    
    

    return (
        <AlmoneyDivUl show={showExtraList}>
            {ExtraAlList()}
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
