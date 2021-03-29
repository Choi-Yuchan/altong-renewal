import styled from 'styled-components';
// atm_top_wrap
const MainDiv = styled.div`
    width: 400px;
    background: #fff;
    position: absolute;
    top: 110%;
    left: 5px;
    z-index: 99;
    border-radius: 20px;
    padding: 15px;
    transition: all 0.3s;
`;
const MainTable = styled.table`
    width: 100%;
    text-align: justify;
`;
const MainTableImg = styled.img`
    width: 30px;
    display: block;
    margin: auto;
    cursor: pointer;
`;
const MainTableImgLast = styled.img`
    width: 28px;
    display: block;
    margin: auto;
    cursor: pointer;
`;
const MoneyInfoTd = styled.td`
    font-size: 12px;
    color: #888;
    font-weight: 500;
`;
const MiniSpan = styled.span`
    display: inline-block;
    font-size: 10px;
    padding: 0px 5px;
    border: 1px solid #fd0031;
    color: #fd0031;
    border-radius: 10px;
    margin-right: 2px;
`;
const MiniIconLine = styled.i`
    display: block;
    height: 1px;
    width: 80%;
    background: #eee;
    margin: 0 auto 10px;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
`;
const MiniContentP = styled.p`
    text-align: center;
    margin: 10px 0;
    padding: 5px;
    font-weight: bold;
    font-size: 15px;
`;


function MiniProfile(props) {
    return (
        <MainDiv className="MiniProfile">
            <MainTable>
                <tbody>
                <tr>
                    <th>
                    <MiniSpan>수호천사</MiniSpan>똑똑똑</th>
                    <th rowspan="2">
                    <MainTableImg src={process.env.PUBLIC_URL + '/test_source/addFriends.svg'}></MainTableImg>
                    </th>
                    <th rowspan="2">
                    <MainTableImg src={process.env.PUBLIC_URL + '/test_source/addMento.svg'}></MainTableImg>
                    </th>
                    <th rowspan="2">
                    <MainTableImgLast src={process.env.PUBLIC_URL + '/test_source/message.svg'}></MainTableImgLast>
                    </th>
                </tr>
                <tr>
                    <MoneyInfoTd>누적수익 : <span>14,708,934</span>알</MoneyInfoTd>
                </tr>
                </tbody>
            </MainTable>
            <MiniContentP>Celebrity</MiniContentP>
            <MiniIconLine></MiniIconLine>
        </MainDiv>
    );
  }
  
  export default MiniProfile;
  