import Flex from '@components/atoms/Flex';
import { Text } from '@components/atoms/Text';
import React, { useState } from 'react';
import { styled } from 'styled-components';
import ToggleBtn from '@imgs/ToggleBtn.svg';
import Logo from '@imgs/solve_logo.svg';
import { Space } from '@components/atoms/Space';
import { Link, useLocation } from 'react-router-dom';
import check from '@imgs/check.svg';

const AsideToggleModal = ({ data, path }) => {
  return (
    <AsideToggleModalContainer>
      <Flex align="start" gap={4}>
        {data.map((el) => (
          <Flex direction="row" justify="start">
            <Link
              key={el.id}
              to={`/${el.id}`}
              style={{ textDecoration: 'none', width: '122px' }}
            >
              <Text
                align="left"
                size={11}
                weight={path === el.id ? 700 : 400}
                isCut={true}
                cursor="pointer"
              >
                {el.name}
              </Text>
            </Link>
            {path === el.id ? <img src={check} alt="checked" /> : ''}
          </Flex>
        ))}
      </Flex>
    </AsideToggleModalContainer>
  );
};

const AsideToggleModalContainer = styled.div`
  padding: 6px 12px;
  background-color: white;
  position: absolute;
  border-radius: 2px;
  width: 160px;
  top: 27px;
  left: 20px;
`;

const AsideStudyToggle = ({ data }) => {
  const [isModal, setIsModal] = useState(false);
  const { pathname } = useLocation();

  return (
    <AsideToggleContainer>
      <Flex direction="row" gap={15} justify="start">
        <RedBar />
        <CurrentStudy onClick={() => setIsModal(!isModal)}>
          <Flex direction="row" gap={6} width="auto">
            <Text cursor="pointer" color="white" size={15}>
              {
                data[
                  Number(pathname.substring(1) - 1)
                    ? Number(pathname.substring(1) - 1)
                    : 0
                ].name
              }
            </Text>
            <img style={{ cursor: 'pointer' }} src={ToggleBtn} alt="button" />
          </Flex>
        </CurrentStudy>
      </Flex>
      {isModal ? (
        <AsideToggleModal data={data} path={pathname.split('/')[1]} />
      ) : (
        ''
      )}

      <Space height={'41px'} />
      <Flex>
        <img src={Logo} />
      </Flex>
      <Space height={'58px'} />
    </AsideToggleContainer>
  );
};

const RedBar = styled.div`
  width: 6px;
  height: 22px;
  background-color: #f05454;
`;

const CurrentStudy = styled.div``;

const AsideToggleContainer = styled.div`
  position: relative;
  width: 100%;
`;

export default AsideStudyToggle;
