import styled from 'styled-components';
import React, { useState, useEffect } from 'react';

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
  const [etimates, setEtimates] = useState(props.etimate);
  const pageSeq = props.pageSeq;
    

    const EstiView = 
    <>
        <Etimate pageSeq={pageSeq} img={1} num={etimates.v1} setEtimates={setEtimates}></Etimate>
        <Etimate pageSeq={pageSeq} img={2} num={etimates.v2} setEtimates={setEtimates}></Etimate>
        <Etimate pageSeq={pageSeq} img={3} num={etimates.v3} setEtimates={setEtimates}></Etimate>
        <Etimate pageSeq={pageSeq} img={4} num={etimates.v4} setEtimates={setEtimates}></Etimate>
        <Etimate pageSeq={pageSeq} img={5} num={etimates.v5} setEtimates={setEtimates}></Etimate>
        <Etimate pageSeq={pageSeq} img={6} num={etimates.v6} setEtimates={setEtimates}></Etimate>
    </>;

    return EstiView;
}

function AltongEtimate(props) {
  const pageSeq = props.pageSeq;


  return (
    <MainUl>
        <EstiArr pageSeq={pageSeq} etimate={props.etimate}></EstiArr>

    </MainUl>
  );
}

export default AltongEtimate;
