import Box from './../box/Box'
import AnswerBox from './../answerBox/AnswerBox'

function BoxController(props) {
    const Boxs = props.SSRJSON.map
    ( (jaar) => jaar.seqComponent === "Q"?
        <Box key={jaar.id} jsonArr={jaar} USER={props.USER}
        white={props.white} setWhite={props.setWhite}
        clicked={props.clicked} setClicked={props.setClicked}
        setShowAlmoney={props.setShowAlmoney}
        >
        </Box>: 
        jaar.seqComponent === "A" ?
        <AnswerBox key={jaar.id} jsonArr={jaar}
        white={props.white} setWhite={props.setWhite}
        USER={props.USER} clicked={props.clicked} setClicked={props.setClicked}
        setShowAlmoney={props.setShowAlmoney}
        >
        </AnswerBox> : ""
    );
    return Boxs;
}

function BoxContainer(props) {
  return (
      <BoxController SSRJSON={props.SSRJSON} USER={props.USER}
      white={props.white} setWhite={props.setWhite} setShowAlmoney={props.setShowAlmoney}
      clicked={props.clicked} setClicked={props.setClicked}></BoxController>
  );
}

export default BoxContainer;
