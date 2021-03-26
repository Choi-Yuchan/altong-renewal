import styled from 'styled-components';
import Reply from '../reply/Reply'


const AutoRenewP = styled.p`
    display: inline-block;
    font-size: 12px;
    padding: 4px 10px;
    border: 1px solid #d0d0d0;
    border-radius: 20px;
    color: #888;
    background: #fff;
    cursor: pointer;
    margin: 0;
    font-family: "Noto Sans KR", "Noto Sans JP", "Noto Sans HK", "Noto Sans SC", "Noto Sans TC", sans-serif;
`;

const AutoRenewDiv = styled.div`
    display: inline-block;
    width: 50%;
    font-size: 16px;
    font-family: "Noto Sans KR", "Noto Sans JP", "Noto Sans HK", "Noto Sans SC", "Noto Sans TC", sans-serif;
    color: #333;
`;

const ReplyImg = styled.img`
    width: 13px;
    display: inline-block;
    margin-bottom: -2px;
`;

const TextArea = styled.textarea`
    width: 100%;
    height: 40px;
    resize: none;
    font-size: 14px;
    border: 1px solid #ccc;
    color: #666;
    border-radius: 5px;
    outline: none;
    padding: 11px 20px;
    margin: 0;
    margin-top: 10px;
    font-family: "Noto Sans KR", "Noto Sans JP", "Noto Sans HK", "Noto Sans SC", "Noto Sans TC", sans-serif;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
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
    display: inline-block;
    border: 1px solid #999;
    background: #fff;
    border-radius: 30px;
    width: 65px;
    padding: 4px 0;
    cursor: pointer;
    font-family: "Noto Sans KR", "Noto Sans JP", "Noto Sans HK", "Noto Sans SC", "Noto Sans TC", sans-serif;
    outline: none;
`;

const ReplySubmitI = styled.i`
    display: inline-block;
    font-style: normal;
    color: #999;
    font-size: 12px;
`;

const ReplySubmitImg = styled.img`
    display: inline-block;
    width: 12px;
    margin-bottom: -1px;
`;

const ShowViewNone = styled.div`
    
`;
const ShowView = styled.div`
    transition:height 1s ease-out;
    height: auto;
    overflow:visible;
`;

const MakeReplyList = (replys) => {
    replys.map( (val) => {} )
}

function ShowList(props){
    if(props.replyToggle === true){
        return (<ShowViewNone>
            
        </ShowViewNone>);
    }

    return (<ShowView>
        <form>
              <div>
                  <TextArea placeholder="커피낙타 님의 의견을 댓글로 입력해주세요."></TextArea>
                  <AutoRenewDiv>
                      <AutoRenewP>
                          <ReplyImg src={process.env.PUBLIC_URL + '/test_source/autorenew.svg'}></ReplyImg>새로고침
                      </AutoRenewP>
                  </AutoRenewDiv>
                  <ReplySubmit>
                      <ReplySubmitP>
                          <span>0</span>/400</ReplySubmitP>
                      <ReplyButton>
                          <ReplySubmitImg src={process.env.PUBLIC_URL + '/test_source/modify03.svg'}></ReplySubmitImg><ReplySubmitI>등록</ReplySubmitI>
                      </ReplyButton>
                  </ReplySubmit>
              </div>
          </form>
          <Reply reply={props.replys}></Reply>
    </ShowView>
    );
}

function ReplyList(props) {
    return (
      <ShowList replyToggle={props.replyToggle} className="ReplyList" replys={props.replys}>
          
      </ShowList>
    );
  }
  
  export default ReplyList;
