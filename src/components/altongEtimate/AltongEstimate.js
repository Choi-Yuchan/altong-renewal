import styled from 'styled-components';
import React, { useState } from 'react';
import Estimate from './estimate/Estimate'

function AltongEstimate({pageSeq, etimate, myestiNo, setMyestiNo}) {
  const [estimates, setEtimates] = useState(etimate);
  return (
    <EstimateList>
      <Estimate check={myestiNo} pageSeq={pageSeq} img={1} num={estimates.v1} setEtimates={setEtimates} setMyestiNo={setMyestiNo}/>
      <Estimate check={myestiNo} pageSeq={pageSeq} img={2} num={estimates.v2} setEtimates={setEtimates} setMyestiNo={setMyestiNo}/>
      <Estimate check={myestiNo} pageSeq={pageSeq} img={3} num={estimates.v3} setEtimates={setEtimates} setMyestiNo={setMyestiNo}/>
      <Estimate check={myestiNo} pageSeq={pageSeq} img={4} num={estimates.v4} setEtimates={setEtimates} setMyestiNo={setMyestiNo}/>
      <Estimate check={myestiNo} pageSeq={pageSeq} img={5} num={estimates.v5} setEtimates={setEtimates} setMyestiNo={setMyestiNo}/>
      <Estimate check={myestiNo} pageSeq={pageSeq} img={6} num={estimates.v6} setEtimates={setEtimates} setMyestiNo={setMyestiNo}/>
    </EstimateList>
  );
}

export default AltongEstimate;

const EstimateList = styled.ul`
  width: 100%;
  background: #f7f7f7;
  border-radius: 15px;
  border: 1px solid #f5f5f5;
  padding: 5px 0;
  margin-bottom: 10px;
  display:flex;
  justify-content: space-evenly;
  align-items: center;
`;




