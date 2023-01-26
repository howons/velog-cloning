import React, { createContext, useContext, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { user } from './types';

type loginValue = {
  isLogin: boolean;
  user: user | null;
  accessToken: string;
  refreshToken: string;
};
const initialValue = {
  isLogin: true,
  user: null,
  accessToken: '',
  refreshToken: '',
};

type loginSetting = {
  login: (email: string | undefined, password: string | undefined) => void;
  logout: (refreshToken: string) => void;
  resetToken: () => void;
};
const initialSetting: loginSetting = {
  login: (email: string | undefined, password: string | undefined) => undefined,
  logout: (refreshToken: string) => undefined,
  resetToken: () => undefined,
};

const loginValueContext = createContext<loginValue>(initialValue);
const loginSettingContext = createContext<loginSetting>(initialSetting);

export default function LoginProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [valueSet, setLoginValue] = useState<loginValue>({
    isLogin: false,
    user: null,
    accessToken: '',
    refreshToken: '',
  });

  const navigate = useNavigate();
  axios.defaults.xsrfCookieName = 'csrftoken';
  axios.defaults.xsrfHeaderName = 'X-CSRFToken';

  const setting = useMemo(
    () => ({
      async login(email: string | undefined, password: string | undefined) {
        try {
          const response = await axios.post('/api/v1/accounts/login/', {
            email,
            password,
          });
          setLoginValue({
            isLogin: true,
            user: response.data.user,
            accessToken: response.data.access_token,
            refreshToken: response.data.refresh_token,
          });
          navigate('/');
        } catch (error) {
          console.log(error);
        }
      },
      async logout() {
        try {
          await axios.post(
            '/api/v1/accounts/logout/',
            {
              refresh: valueSet.refreshToken,
            },
            { withCredentials: true }
          );
          setLoginValue({
            isLogin: false,
            user: null,
            accessToken: '',
            refreshToken: '',
          });
        } catch (error) {
          console.log(error);
        }
      },
      async resetToken() {
        try {
          const response = await axios.post('/api/v1/accounts/token/refresh/', {
            Refresh: valueSet.refreshToken,
          });
          setLoginValue(valueSet => {
            return {
              ...valueSet,
              accessToken: response.data.access,
            };
          });
        } catch (error) {
          console.log(error);
        }
      },
    }),
    []
  );

  return (
    <loginValueContext.Provider value={valueSet}>
      <loginSettingContext.Provider value={setting}>
        {children}
      </loginSettingContext.Provider>
    </loginValueContext.Provider>
  );
}

export function useLoginValue() {
  const value = useContext(loginValueContext);
  if (value === undefined) {
    throw new Error('context error');
  }
  return value;
}

export function useLoginSetting() {
  const value = useContext(loginSettingContext);
  if (value === undefined) {
    throw new Error('context error');
  }
  return value;
}
