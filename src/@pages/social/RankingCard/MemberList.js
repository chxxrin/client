import { styled } from 'styled-components';

import { Space } from 'src/@components/atoms/Space';
import MyDGText from '../Common/MyDGText';
import MyProfile from '../Common/MyProfile';

const MemberList = ({ data }) => {
  return (
    <MemberListContainer>
      <MyDGText children="스터디원" />
      <Space height="5px" />
      <Members>
        {data?.map((it, idx) => (
          <>
            <MyProfile key={idx} width="30" />
            <RowSpace /> {/* Profile간 간격 조정 */}
          </>
        ))}
      </Members>
    </MemberListContainer>
  );
};

// Styled Components

const MemberListContainer = styled.div`
  width: inherit;
  text-align: left;
`;

const Members = styled.div`
  display: flex;
  flex-direction: row;
`;

const RowSpace = styled.div`
  width: 4px;
`;

export default MemberList;
