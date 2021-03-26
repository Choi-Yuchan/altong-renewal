import Reply from '../reply/Reply'


function MakeReplyList(props){
    return props.replys.map( (reply) => <Reply reply={reply}></Reply> );
}


function ReplyContainer(props) {
    return (
        <MakeReplyList replys={props.replys}></MakeReplyList>
    );
}


export default ReplyContainer;