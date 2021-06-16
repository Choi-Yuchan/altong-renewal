import styled from 'styled-components';

import Num3Comma from '../../functions/num3comma/Num3Comma'
import FormatDateAsText from '../../functions/formatDateAsText/FormatDateAsText'

import {useTranslation} from 'react-i18next';

const ExtraViewer = (nick, money, time) => {
    return <>
        <AlmoneyDivUlLi2>
          <AlmoneyDivUlLi2A>
              <b>{nick} (<Num3Comma num={money}></Num3Comma>)</b>
          </AlmoneyDivUlLi2A>
          <FormatDateAsText date={Date.parse(time)}></FormatDateAsText>
        </AlmoneyDivUlLi2>
    </>
}

const ExtraAlList = (lists) => {
    return lists.map((list)=>{
        return ExtraViewer(list.nickname, list.almoney, list.conDate);
    })
  }
 
function PopExtraAl(props) {
    const {t} = useTranslation();
    const extraList = props.extraList;
    const showExtraList= props.showExtraList;
    
    return (
      showExtraList === true &&  <AlmoneyDivUl show={showExtraList}>
          <AlmoneyDivUlLi>{t('PopExtraAl_Given')}</AlmoneyDivUlLi>
          {ExtraAlList(extraList)}
      </AlmoneyDivUl>    
      );
  }

const AlmoneyDivUl = styled.ul`
  display: ${(props) => props.show?"flex":"none"};
  flex-direction: column;
  flex-wrap: nowrap;
  min-width:13.75rem;
  font-size: 0.75rem;
  padding: 0.625rem;
  border: 1px solid #eb639d;
  background: #fff;
  font-weight: normal;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 999;
  box-sizing:border-box;
`;
const AlmoneyDivUlLi = styled.li`
  color: #f2056e;
  margin-bottom: 0.625rem;
  list-style: none;
`;
const AlmoneyDivUlLi2 = styled.li`
  line-height: 1.5rem;
  list-style: none;
`;
const AlmoneyDivUlLi2A = styled.a`
  text-decoration: none;
  color: #333;
  margin-right:0.3125rem;
`;
export default PopExtraAl;
