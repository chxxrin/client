import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  Redirect,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import Home from './@pages/home/home';
import SignUp from './@pages/signUp/signUp';
import Problem from './@pages/problem/problem';
import Social from './@pages/social/social';
import Setting from './@pages/setting/setting';
import Aside from './@components/organisms/AsideBar';
import Kakao from '@pages/Kakao';
import { getCookie } from '@utils/util';
import solveItService from './@service/solveItService';
import axios from 'axios';

const Router = () => {
  const { pathname } = useLocation();
  const excludeAside = ['/', '/kakao', '/signUp', '/home'];

  const navigate = useNavigate();
  const getAccessToken = async (refreshToken) => {
    const data = await solveItService.getAccessToken(refreshToken);
    return data;
  };

  useEffect(() => {
    const refreshToken = getCookie('token');
    const data = {
      refresh: refreshToken,
    };

    if (!refreshToken) navigate('/');

    // try {
    //   const { access } = getAccessToken(data);
    //   axios.defaults.headers.common['Authorization'] = access;
    // } catch (err) {
    //   console.err(err);
    //   navigate('/');
    // }
  }, []);

  return (
    <>
      {excludeAside.includes(pathname) ? '' : <Aside />}
      <Routes>
        <Route path="/kakao" element={<Kakao />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/" element={<Home />} />
        <Route path="/:spaceId/*" element={<SpaceRoutes />} />
      </Routes>
    </>
  );
};

const SpaceRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/problem" element={<Problem />} />
      <Route path="/social" element={<Social />} />
      <Route path="/setting" element={<Setting />} />
    </Routes>
  );
};

export default Router;
