import Box from './../box/Box'
import AnswerBox from './../answerBox/AnswerBox'

function BoxController(props) {
    const Boxs = props.SSRJSON.map
    ( (jaar) => jaar.seqComponent=="Q"?
        <Box jsonArr={jaar}></Box>:<AnswerBox jsonArr={jaar}></AnswerBox>
    );
    return Boxs;
}

function BoxContainer(props) {
  return (
      <BoxController SSRJSON={props.SSRJSON}></BoxController>
  );
}

export default BoxContainer;
