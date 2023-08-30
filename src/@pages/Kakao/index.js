import { setCookie } from '@utils/util';
import React, { useEffect } from 'react';
import KakaoService from 'src/@service/kakaoService';
import { useNavigate } from 'react-router-dom/dist';

const Index = () => {
  const navigate = useNavigate();

  const code = new URL(document.location.toString()).searchParams.get('code');

  const fetchToken = async () => {
    try {
      const { data } = await KakaoService.getToken(code);
      setCookie('token', data.refresh);

      if (data.created) {
        navigate('/0/home');
      } else {
        navigate('/signUp');
      }
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    if (code) {
      console.log(code);
      fetchToken();
    }
  }, [code]);

  // const { data } = useQuery(['token'], fetchToken, {
  //   enabled: code ? true : false,
  // });

  return <div>하이</div>;
};

export default Index;
