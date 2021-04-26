import styled from 'styled-components';
import React from 'react';

const NaviItemLi = styled.li`
    height: 42px;
    font-size: 15px;
    font-weight: 500;
    line-height: 42px;
    position: relative;
    transition: all 0.3s;
    list-style: none;
`;
const NaviA = styled.a`
    display: block;
    height: 100%;
    border-top: 1px solid #efefef;
    padding-left: 10px;
    position: relative;
    text-decoration: none;
    color: #333;
`;
const NaviB = styled.b`
    background: url(/pub/css/mainico/alert.svg) no-repeat center 9px;
    background-size: 22px;
`;

function NaviItem(props) {
  return (
      <NaviItemLi>
          <NaviA>
              <NaviB></NaviB>
              <span>{props.text}</span>
              <i show={props.i===true}>{props.i===true?props.count:""}</i>
          </NaviA>
      </NaviItemLi>
  );
}

export default NaviItem;
