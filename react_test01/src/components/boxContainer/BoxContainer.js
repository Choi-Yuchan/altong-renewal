import Box from './../box/Box'
import AnswerBox from './../answerBox/AnswerBox'

function BoxController(props) {
    const Boxs = props.SSRJSON.map
    ( (jaar) => jaar.seqComponent=="Q"?
        <Box key={jaar.id} jsonArr={jaar} USER={props.USER}></Box>: 
        jaar.seqComponent=="A"? <AnswerBox key={jaar.id} jsonArr={jaar} USER={props.USER}></AnswerBox> : ""
    );
    return Boxs;
}

function BoxContainer(props) {
  return (
      <BoxController SSRJSON={props.SSRJSON} USER={props.USER} ></BoxController>
  );
}

export default BoxContainer;
