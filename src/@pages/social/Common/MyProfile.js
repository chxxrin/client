import { styled } from 'styled-components';
import { colors } from '../utils/palette';

import defaultImage from '../assets/default_profile_img.png';

const MyProfile = ({ width = 30 }) => {
  return <ProfileContainer width={width} />;
};

const ProfileContainer = styled.div`
  display: inline-block;
  box-sizing: border-box;
  border: 0.5px solid ${colors.themeGray};
  width: ${({ width }) => width}px;
  height: ${({ width }) => width}px;
  border-radius: 999px;

  background-image: url(${defaultImage});
  background-size: cover;
  background-position: center;
`;

export default MyProfile;
