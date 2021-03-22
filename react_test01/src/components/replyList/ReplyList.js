import Reply from '../reply/Reply'

function ReplyList() {
    return (
      <div>
          <form>
              <input></input>
              <div>
                  <textarea></textarea>
                  <div>
                      <p>
                          <img></img>새로고침
                      </p>
                  </div>
                  <div>
                      <p>
                          <span>0</span>/400</p>
                      <button>
                          <img></img><i>등록</i>
                      </button>
                  </div>
              </div>
          </form>
          <Reply></Reply>
      </div>
    );
  }
  
  export default ReplyList;