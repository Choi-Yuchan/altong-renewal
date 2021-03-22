import styled from 'styled-components';
// atm_top_wrap


const MainDiv = styled.div`
    display: none;
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




function MiniProfile() {
    return (
        <MainDiv className="MiniProfile">
            <MainTable>
                <tbody>
                <tr>
                    <th>
                    <span>수호천사</span>똑똑똑</th>
                    <th>
                    <MainTableImg src={process.env.PUBLIC_URL + '/test_source/addFriends.svg'}></MainTableImg>
                    </th>
                    <th>
                    <MainTableImg src={process.env.PUBLIC_URL + '/test_source/addMento.svg'}></MainTableImg>
                    </th>
                    <th>
                    <MainTableImgLast src={process.env.PUBLIC_URL + '/test_source/message.svg'}></MainTableImgLast>
                    </th>
                </tr>
                <tr>
                    <MoneyInfoTd>누적수익 : <span>14,708,934</span>알</MoneyInfoTd>
                </tr>
                </tbody>
            </MainTable>
        </MainDiv>
    );
  }
  
  export default MiniProfile;
  