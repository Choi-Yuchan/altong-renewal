import Reply from '../reply/Reply'


function MakeReplyList(props){
    
    return props.replys.map( (reply) => 
    <Reply 
        white={props.white} setWhite={props.setWhite}
        key={reply.id} reply={reply}>
    </Reply> ).sort(function(a, b){
        return b.key - a.key;
    });
}


function ReplyContainer(props) {
    return (
        <MakeReplyList white={props.white} setWhite={props.setWhite}
         replys={props.replys}></MakeReplyList>
    );
}


export default ReplyContainer;