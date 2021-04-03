import styled from 'styled-components';

const MainLi = styled.li`
    display: inline-block;
    width: 45px;
    margin: 0 20px;
    position: relative;
    list-style: none;
`;
const EtimateA = styled.a`
    cursor: pointer;
    display: block;
    width: 100%;
    text-decoration: none;
    color: #333;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
`;
const EtimateImg = styled.img`
    display: block;
    width: 100%;
    margin-bottom: 3px;
`;
const EtimateSpan = styled.span`
    display: block;
    width: 100%;
    font-size: 12px;
    color: #9d9d9d;
    letter-spacing: -1px;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
`;

const EtimateEm = styled.em`
    font-style: normal;
    color: #fd0031;
    font-weight: bold;
    margin-left: 3px;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
`;

const langEsti = (img) => {
    const arr = ['알통', '감사', '수고', '불만', '분노', '재미'];
    return arr[img]
}

function Etimate(props) {

  return (
    <MainLi>
        <EtimateA>
            <EtimateImg  src={"/Common/images/esti_"+props.img+'.png'}></EtimateImg>
            <EtimateSpan>{langEsti(props.img-1)}<EtimateEm>{props.num}</EtimateEm></EtimateSpan>
        </EtimateA>
    </MainLi>
  );
}

export default Etimate;
