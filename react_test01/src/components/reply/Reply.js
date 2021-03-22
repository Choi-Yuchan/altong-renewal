import styled from 'styled-components';


const ReplyContents = styled.th`
    font-family: "Noto Sans KR", "Noto Sans JP", "Noto Sans HK", "Noto Sans SC", "Noto Sans TC", sans-serif;
    color: #333;
    font-size: 14px;
    font-weight: 300;
    background: #f1f1f1;
    padding: 10px;
    border-radius: 15px 15px 15px 0;
    word-break: break-all;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    margin: 0;
    
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
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    text-align: justify;
    font-size: 12px;
    color: #999;
`;

const Table = styled.table`
    width: 100%;
    text-align: justify;
    margin-bottom: 10px;
`;

const ReplyImg = styled.img`
    display: block;
    border-radius: 50%;
    width: 100%;
`;

const ReplyAhrefA = styled.a`
    overflow: visible;
    border-radius: 0;
    position: relative;
    display: block;
    width: 36px;
    height: 36px;
    text-decoration: none;
    color: #333;
    
`;

const ReplyLocaleImg = styled.img`
    width: 50%;
    border-radius: 0;
    position: absolute;
    bottom: 0;
    right: 0;
    display: block;
`;

const ReplyLocaleTh = styled.th`
    width: 60px;
    text-align: center;
    padding-left: 12px;
    font-size: 16px;
    font-family: "Noto Sans KR", "Noto Sans JP", "Noto Sans HK", "Noto Sans SC", "Noto Sans TC", sans-serif;
    color: #333;
    position: relative;
`;

const ReplyLocaleSpan = styled.span`
& {
    display: block;
    width: 175px;
    position: absolute;
    top: 140%;
    left: 50%;
    transform: translateX(-50%);
    background: #666;
    color: #fff;
    text-align: center;
    border-radius: 10px;
}
&:after {
    content: "";
    display: block;
    width: 10px;
    height: 10px;
    background: #666;
    position: absolute;
    top: -5px;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
    z-index: -1;
}
`;


function Reply() {
    return (
      <div className="Reply">
          <Table>
              <tbody>
                  <tr>
                      <ReplyLocaleTh>
                            <ReplyAhrefA>
                                <ReplyImg src={process.env.PUBLIC_URL + '/test_source/10037135.png'}></ReplyImg>
                                <ReplyLocaleImg src={process.env.PUBLIC_URL + '/test_source/KOR.svg'}></ReplyLocaleImg>
                            </ReplyAhrefA>
                      </ReplyLocaleTh>
                      <ReplyContents>운동도 도움이 클것 같습니다.</ReplyContents>
                  </tr>
                  <tr>
                      <ReplyBotton></ReplyBotton>
                      <ReplyBotton>
                        <ReplyAhref>커피낙타</ReplyAhref> · <Btag>3초 전<ReplyLocaleSpan>2021-03-22 14:00:38</ReplyLocaleSpan></Btag> · <i>삭제</i>
                        <div>
                            
                        </div>
                      </ReplyBotton>
                  </tr>
              </tbody>
          </Table>
      </div>
    );
  }
  
  export default Reply;