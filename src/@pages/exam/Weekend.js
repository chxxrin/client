import styled from 'styled-components';

const Weekend = () => {
  return (
    <>
      <WeekendBar>
        <WeekendBarButton>이전 주</WeekendBarButton>
        <WeekendBarButton>다음 주</WeekendBarButton>
      </WeekendBar>
      <WeekendBox>
        <WeekendDate>2023.05.01-2023.05.07</WeekendDate>
        <WeekendWeek>1주차</WeekendWeek>
      </WeekendBox>
      <AlgorithmBox>
        <AlgorithmTitle>사용 알고리즘</AlgorithmTitle>
        <AlgorithmTag>미정</AlgorithmTag>
      </AlgorithmBox>
    </>
  );
};

export default Weekend;

const WeekendBar = styled.div`
  width: 164px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const WeekendBarButton = styled.div`
  color: #676769;
  font-family: Noto Sans KR;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const WeekendDate = styled.div`
  color: #676769;
  font-family: Noto Sans KR;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const WeekendWeek = styled.div`
  color: #000;
  font-family: Noto Sans KR;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const WeekendBox = styled.div`
  width: 164px;
  height: 53px;
  display: flex;
  flex-direction: column;
`;

const AlgorithmBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 87px;
  height: 22px;
`;

const AlgorithmTitle = styled.div`
  color: #676769;
  font-family: Noto Sans KR;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const AlgorithmTag = styled.div`
  color: #466589;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-family: Noto Sans KR;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border-radius: 5px;
  background: #e8f0fe;
  width: 46px;
  padding: 2px;
  flex-shrink: 0;
`;
