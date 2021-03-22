import styled from 'styled-components';


const ReplyContents = styled.th`
    font-size: 14px;
    font-weight: 300;
    background: #f1f1f1;
    padding: 10px;
    border-radius: 15px 15px 15px 0;
    word-break: break-all;
`;

const ReplyBotton = styled.td`
    font-size: 12px;
    padding-left: 10px;
    font-weight: bold;
    color: #999;
`;

const ReplyAhref = styled.a`
    color: #999;
`;

const Btag = styled.b`
    display: inline-block;
    font-weight: 300;
    position: relative;
    cursor: pointer;
`;

const Table = styled.table`
    width: 100%;
    text-align: justify;
    margin-bottom: 10px;
`;

function Reply() {
    return (
      <div className="Reply">
          <Table>
              <tbody>
                  <tr>
                      <th>
                          <a>
                              <img></img>
                              <img></img>
                          </a>
                      </th>
                      <ReplyContents>운동도 도움이 클것 같습니다.</ReplyContents>
                  </tr>
                  <tr>
                      <ReplyBotton></ReplyBotton>
                      <ReplyBotton>
                        <ReplyAhref>커피낙타</ReplyAhref> · <Btag>3초 전<span>2021-03-22 14:00:38</span></Btag> · <i>삭제</i>
                        <div>
                            <img src={process.env.PUBLIC_URL + '/test_source/10037135.png'}></img>
                        </div>
                      </ReplyBotton>
                  </tr>
              </tbody>
          </Table>
      </div>
    );
  }
  
  export default Reply;