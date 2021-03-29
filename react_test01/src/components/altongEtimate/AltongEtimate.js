import styled from 'styled-components';
import React, { useState } from 'react';

import Etimate from './etimate/Etimate'

const MainUl = styled.ul`
    text-align: center;
    width: 100%;
    background: #f7f7f7;
    border-radius: 15px;
    border: 1px solid #f5f5f5;
    padding: 5px 0;
    margin-bottom: 10px;
`;

function EstiArr(props){
    const EstiView = 
    <>
        <Etimate img={1} num={props.etimate.v1}></Etimate>
        <Etimate img={2} num={props.etimate.v2}></Etimate>
        <Etimate img={3} num={props.etimate.v3}></Etimate>
        <Etimate img={4} num={props.etimate.v4}></Etimate>
        <Etimate img={5} num={props.etimate.v5}></Etimate>
        <Etimate img={6} num={props.etimate.v6}></Etimate>
    </>;

    return EstiView;
}

function AltongEtimate(props) {

  return (
    <MainUl>
        <EstiArr etimate={props.etimate}></EstiArr>

    </MainUl>
  );
}

export default AltongEtimate;
