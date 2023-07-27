import { styled } from 'styled-components';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBuilding, faCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { colors } from '../utils/palette';

// Imported Components

import MyDGText from '../Common/MyDGText';
import { Space } from 'src/@components/atoms/Space';

const IndivInfo = () => {
  return (
    <div>
      <Pair>
        <Icon icon={faCode} />
        <MyDGText children="윤태호" />
      </Pair>
      <Space height="4px" />
      <Pair>
        <Icon icon={faGithub} />
        <MyDGText children="@taeho" />
      </Pair>
      <Space height="4px" />
      <Pair>
        <Icon icon={faBuilding} />
        <MyDGText children="서강대학교 | 멋쟁이..." />
      </Pair>
    </div>
  );
};

const Pair = styled.div`
  text-align: left;
`;

const Icon = styled(FontAwesomeIcon)`
  width: 17px;
  height: 17px;
  border: 0.5px solid ${colors.themeGray};
  border-radius: 999px;

  margin-right: 4px;
`;

export default IndivInfo;
