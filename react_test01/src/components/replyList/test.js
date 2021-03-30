import styled from 'styled-components';
import ReplyContainer from '../replyContainer/ReplyContainer'


// const AutoRenewP = styled.p`
//     display: inline-block;
//     font-size: 12px;
//     padding: 4px 10px;
//     border: 1px solid #d0d0d0;
//     border-radius: 20px;
//     color: #888;
//     background: #fff;
//     cursor: pointer;
//     margin: 0;
//     font-family: "Noto Sans KR", "Noto Sans JP", "Noto Sans HK", "Noto Sans SC", "Noto Sans TC", sans-serif;
// `;

const AutoRenewDiv = styled.div`
    display: inline-block;
    width: 50%;
    font-size: 16px;
    font-family: "Noto Sans KR", "Noto Sans JP", "Noto Sans HK", "Noto Sans SC", "Noto Sans TC", sans-serif;
    color: #333;
`;

// const ReplyImg = styled.img`
//     width: 13px;
//     display: inline-block;
//     margin-bottom: -2px;
// `;

const TextArea = styled.textarea`
    flex-grow: 1;
    padding: 9px 20px;
    margin: 0;
    width: auto;
    transition: all 0.3s;
    resize: none;
    font-size: 14px;
    border: 1px solid #ccc;
    color: #666;
    border-radius: 5px;
    outline: none;
    font-family: "Noto Sans KR", "Noto Sans JP", "Noto Sans HK", "Noto Sans SC", "Noto Sans TC", sans-serif;
`;

const ReplySubmit = styled.div`
    text-align: right;
    margin-left: -5px;
    display: inline-block;
    width: 50%;
    font-size: 16px;
    font-family: "Noto Sans KR", "Noto Sans JP", "Noto Sans HK", "Noto Sans SC", "Noto Sans TC", sans-serif;
    color: #333;
`;

const ReplySubmitP = styled.p`
    display: inline-block;
    font-size: 12px;
    font-weight: 500;
    color: #ccc;
    margin-bottom: 0;
`;

const ReplyButton = styled.button`
    flex-grow: 0;
    height: 40px;
    background: #fff;
    border: 1px solid #ccc;
    border-radius: 5px;
    cursor: pointer;
    text-align: center;
    padding: 5px 10px;
    white-space: nowrap;
    margin-left: 3px;
    color: #737373;
    font-size: 12px;
`;

// const ReplySubmitI = styled.i`
//     display: inline-block;
//     font-style: normal;
//     color: #999;
//     font-size: 12px;
// `;
// const ReplySubmitImg = styled.img`
//     display: inline-block;
//     width: 12px;
//     margin-bottom: -1px;
// `;

const ShowView = styled.div`
    transition-property: max-height;
    transition-duration: 0.5s;
    
    max-height: ${props => props.row ? 0: '10000px'};
    overflow:hidden;

`;
const TextAreaDiv = styled.div`
    transition:height 1s;
    height: auto;
    overflow:visible;
    height: 40px;
    margin-top: 10px;
    display: flex;
    width: 100%;
    padding: 0;
    box-sizing: border-box;
`;

function ShowList(props){

    const USER= props.USER;
    
    //const SEQ = USER !== null ? USER.seq : "";
    const NAME = USER !== null ? USER.info.name : "";
    //const LV = USER !== null ? USER.lv : "";

    return (
    <ShowView row={props.replyToggle}>
        <form>
              <div>
                  <TextAreaDiv>
                  <TextArea placeholder=
                  { NAME===""? "로그인 후 이용하시기 바랍니다.": NAME+" 님의 의견을 댓글로 입력해주세요."}
                  maxlength="400"></TextArea>
                  <ReplyButton>
                        등록
                    </ReplyButton>
                  </TextAreaDiv>
                  <AutoRenewDiv>
                      {/* <AutoRenewP>
                          <ReplyImg src={process.env.PUBLIC_URL + '/test_source/autorenew.svg'}></ReplyImg>새로고침
                      </AutoRenewP> */}
                  </AutoRenewDiv>
                  <ReplySubmit>
                      <ReplySubmitP>
                          <span>0</span>/400</ReplySubmitP>
                      
                  </ReplySubmit>
              </div>
          </form>
          <ReplyContainer white={props.white} setWhite={props.setWhite} replys={props.replys}></ReplyContainer>
    </ShowView>
    );
}

// white={props.white} setWhite={props.setWhite}
function ReplyList(props) {
    return (
      <ShowList USER={props.USER} replyToggle={props.replyToggle}
        white={props.white} setWhite={props.setWhite}
        className="ReplyList" replys={props.replys}>
      </ShowList>
    );
  }
  
  export default ReplyList;
