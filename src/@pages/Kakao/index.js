import { useQuery } from '@tanstack/react-query';
import { setCookie } from '@utils/util';
import axios from 'axios';
import React, { useEffect } from 'react';
import { Service } from 'src/@service/kakaoService';
import { useNavigate } from 'react-router-dom/dist';

const Index = () => {
  const navigate = useNavigate();

  const code = new URL(document.location.toString()).searchParams.get('code');
  const fetchToken = async () => {
    try {
      const { data } = await Service.getToken(code);
      setCookie('token', data.refresh);
      if (!data.created) navigate('/');
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    if (code) {
      fetchToken();
    }
  }, [code]);

  // const { data } = useQuery(['token'], fetchToken, {
  //   enabled: code ? true : false,
  // });

  return <div>하이</div>;
};

export default Index;
