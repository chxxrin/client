import { useQuery } from '@tanstack/react-query';
import { setCookie } from '@utils/util';
import axios from 'axios';
import React, { useEffect } from 'react';
import { Service } from 'src/@service/kakaoService';

const Index = () => {
  const code = new URL(document.location.toString()).searchParams.get('code');
  const fetchToken = async () => {
    try {
      const { data } = await Service.getToken(code);
      setCookie('token', data.refresh, { httpOnly: true });
    } catch (err) {}
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
