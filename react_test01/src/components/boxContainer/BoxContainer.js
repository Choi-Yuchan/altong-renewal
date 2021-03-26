import Box from './../box/Box'
import AnswerBox from './../answerBox/AnswerBox'
import FoldAnswerBox from './../foldAnswerBox/test'

function BoxController(props) {
    const Boxs = props.SSRJSON.map( (jarr) => jarr.seqComponent=="Q"?
    <Box jsonArr={jarr}></Box>:<AnswerBox jsonArr={jarr}></AnswerBox>
    );
    return Boxs;
}

function BoxContainer(props) {
  return (
      <BoxController SSRJSON={props.SSRJSON}></BoxController>
  );
}

export default BoxContainer;
