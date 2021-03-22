import BoxTop from '../boxTop/BoxTop'
import Contents from '../contents/Contents'
import LangTransBox from '../langTransBox/LangTransBox'
import ReplyBox from '../replyBox/ReplyBox'
import ReplyList from '../replyList/ReplyList'


function Box() {
  return (
    <div className="Box">
        {/* atm_top_wrap */}
        <BoxTop></BoxTop>
        <Contents></Contents>
        <LangTransBox></LangTransBox>
        <ReplyBox></ReplyBox>
        <ReplyList></ReplyList>

        <div className="overlay">
            Box
        </div>
    </div>
  );
}

export default Box;
