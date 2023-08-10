import React from 'react';
import { Routes, Route, Redirect, useLocation } from 'react-router-dom';
import Home from './@pages/home/home';
import SignUp from './@pages/signUp/signUp';
import Exam from './@pages/exam/exam';
import Social from './@pages/social/social';
import Setting from './@pages/setting/setting';
import Aside from './@components/organisms/AsideBar';
import Kakao from '@pages/Kakao';
import { useParams } from 'react-router-dom/dist';

const Router = () => {
  const { pathname } = useLocation();
  const { spaceId } = useParams(); // URL에서 spaceId를 추출
  const excludeAside = ['/', '/kakao', '/signUp', '/home'];

  return (
    <>
      {excludeAside.includes(pathname) ? '' : <Aside />}
      <Routes>
        <Route path="/:spaceId/*" element={<SpaceRoutes />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

const SpaceRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/kakao" element={<Kakao />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/exam" element={<Exam />} />
      <Route path="/social" element={<Social />} />
      <Route path="/setting" element={<Setting />} />
    </Routes>
  );
};

export default Router;
