import Box from './../box/Box'
import AnswerBox from './../answerBox/AnswerBox'

function BoxController(props) {
    const Boxs = props.SSRJSON.map
    ( (jaar) => jaar.seqComponent === "Q"?
        <Box key={jaar.id} jsonArr={jaar} USER={props.USER} clicked={props.bodyClicked} setClicked={props.setBodyClicked}></Box>: 
        jaar.seqComponent === "A"? <AnswerBox key={jaar.id} jsonArr={jaar} USER={props.USER} clicked={props.bodyClicked} setClicked={props.setBodyClicked}></AnswerBox> : ""
    );
    return Boxs;
}

function BoxContainer(props) {
  return (
      <BoxController SSRJSON={props.SSRJSON} USER={props.USER} clicked={props.bodyClicked} setClicked={props.setBodyClicked}></BoxController>
  );
}

export default BoxContainer;
