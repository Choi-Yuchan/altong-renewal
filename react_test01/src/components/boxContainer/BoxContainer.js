import Box from './../box/Box'
import AnswerBox from './../answerBox/AnswerBox'
import FoldAnswerBox from './../foldAnswerBox/test'

function BoxController(props) {
    const Jarr=props.SSRJSON;
    const Boxs = Jarr.map( (jarr) => {
            jarr.seqComponent=="Q"?<Box jsonArr={jarr}></Box>:<FoldAnswerBox jsonArr={jarr}></FoldAnswerBox>;
        }
    );
    return Boxs;
}

function BoxContainer(props) {
  return (
      <BoxController SSRJSON={props.SSRJSON}></BoxController>
  );
}

export default BoxContainer;
