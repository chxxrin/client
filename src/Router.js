import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './@pages/home/home';
import SignUp from './@pages/signUp/signUp';
import Exam from './@pages/exam/exam';
import Social from './@pages/social/social';
import Setting from './@pages/setting/setting';
import Aside from './@components/organisms/Aside';

const Router = () => {
  return (
    <BrowserRouter>
      <Aside />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/exam" element={<Exam />} />
        <Route path="/social" element={<Social />} />
        <Route path="/setting" element={<Setting />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
