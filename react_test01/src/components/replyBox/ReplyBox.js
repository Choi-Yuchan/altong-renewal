function ReplyBox() {
    return (
      <ol className="ReplyBox">
          <li>
              <a>
                  <img></img>
                  <span></span>
              </a>
          </li>
          <li>
              <div className="smileIcon">
                  <img></img>
                  <b>0</b>
              </div>
              <div className="sadIcon">
                  <img></img>
                  <b>0</b>
              </div>
          </li>
          <li>
            <a>답변하기</a>
            <a>번역하기</a>
          </li>
      </ol>
    );
  }
  
  export default ReplyBox;