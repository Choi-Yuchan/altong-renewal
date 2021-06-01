import Box from './../box/Box'
import AnswerBox from './../answerBox/AnswerBox'
import { useState } from 'react';

function BoxController(props) {
    const Boxs = props.SSRJSON.map
    ( (jaar, index) => jaar.seqComponent === "Q"?
        <Box
            key={jaar.seqId} jsonArr={jaar} USER={props.USER}
            white={props.white} setWhite={props.setWhite}
            clicked={props.clicked} setClicked={props.setClicked}
            setShowAlmoney={props.setShowAlmoney}
            setShowSiren={props.setShowSiren}
            setShowMessage={props.setShowMessage}
            hunAlram={props.hunAlram} setHunAlram={props.setHunAlram}
            selected={index}
            highlight = {props.highlight} setHighlight = {props.setHighlight}
            pageNumber={props.pageNumber}
        >
        </Box>: 
        jaar.seqComponent === "A" ?
        <AnswerBox
            key={jaar.seqId} jsonArr={jaar}
            white={props.white} setWhite={props.setWhite}
            USER={props.USER} clicked={props.clicked} setClicked={props.setClicked}
            setShowAlmoney={props.setShowAlmoney}
            setShowSiren={props.setShowSiren}
            setShowMessage={props.setShowMessage}
            infoAD={props.infoAD} setInfoAD={props.setInfoAD}
            hunAlram={props.hunAlram} setHunAlram={props.setHunAlram}
            selected={index}
            highlight = {props.highlight} setHighlight = {props.setHighlight}
            pageNumber={props.pageNumber}
            choice={props.choice} setChoice={props.setChoice}
        >
        </AnswerBox> : ""
    );
    return Boxs;
}

function BoxContainer(props) {
    const [ highlight , setHighlight ] = useState(-1);
    const [choice, setChoice] = useState(true);

  return (
        <BoxController
            SSRJSON={props.SSRJSON} USER={props.USER}
            white={props.white} setWhite={props.setWhite}
            setShowAlmoney={props.setShowAlmoney}
            setShowSiren={props.setShowSiren}
            setShowMessage={props.setShowMessage}
            clicked={props.clicked} setClicked={props.setClicked}
            infoAD={props.infoAD} setInfoAD={props.setInfoAD}
            hunAlram={props.hunAlram} setHunAlram={props.setHunAlram}
            setShare={props.setShare} 
            highlight = {highlight} setHighlight = {setHighlight}
            pageNumber={props.pageNumber}
            choice={choice} setChoice={setChoice}
        ></BoxController>
  );
}

export default BoxContainer;
