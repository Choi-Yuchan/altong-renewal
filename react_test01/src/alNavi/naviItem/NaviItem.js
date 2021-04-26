import styled from 'styled-components';
import React from 'react';

function NaviItem(props) {
    return (
        <NaviItemLi>
            <NaviA href={props.href}>
                <NaviB img={props.img}></NaviB>
                <span>{props.val}</span>
                <NaviAlramI show={props.i===true}>{props.i===true?props.count:""}</NaviAlramI>
            </NaviA>
        </NaviItemLi>
    );
  }
  
  export default NaviItem;

const NaviItemLi = styled.li`
    height: 42px;
    font-size: 15px;
    font-weight: 500;
    line-height: 42px;
    position: relative;
    transition: all 0.3s;
    list-style: none;
    cursor:pointer;
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
    background: url(${props => props.img}) no-repeat center 9px;
    background-size: 22px;
    display: block;
    width: 42px;
    height: 100%;
    float: left;
    margin-right: 10px;
`;
const NaviAlramI = styled.i`
    display: ${props => props.show ? "inline" : "none"};
    font-style: normal;
    font-size: 12px;
    padding: 2px 7px;
    background: #fd0031;
    color: #fff;
    border-radius: 20px;
    margin-left: 10px;
`;

