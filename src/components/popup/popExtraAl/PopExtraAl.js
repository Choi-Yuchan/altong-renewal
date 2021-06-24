import styled from 'styled-components';
import Num3Comma from '../../functions/num3comma/Num3Comma'
import FormatDateAsText from '../../functions/formatDateAsText/FormatDateAsText'
import {useTranslation} from 'react-i18next';
 
function PopExtraAl({showExtraList, extraList}) {
  const {t} = useTranslation();

  return (
    showExtraList === true && 
    <WarmingAlList show={showExtraList}>
        <GiftMemberTitle>{t('PopExtraAl_Given')}</GiftMemberTitle>
        {extraList.map(list =>         
        <GiftMemberList key={extraList.userSeq}>
          <GiftMember>
              <b>{list.nickname} (<Num3Comma num={list.almoney}></Num3Comma>)</b>
          </GiftMember>
          <FormatDateAsText date={Date.parse(list.conDate)}></FormatDateAsText>
        </GiftMemberList>
          )}
    </WarmingAlList>    
    );
  }

const WarmingAlList = styled.ul`
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
const GiftMemberTitle = styled.li`
  color: #f2056e;
  margin-bottom: 0.625rem;
  list-style: none;
`;
const GiftMemberList = styled.li`
  line-height: 1.5rem;
  list-style: none;
`;
const GiftMember = styled.a`
  text-decoration: none;
  color: #333;
  margin-right:0.3125rem;
`;
export default PopExtraAl;
