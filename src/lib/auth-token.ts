'use server';

import { cookies } from 'next/headers';

interface StoreTokenRequest {
  token: string;
}

const storeToken = async (request: StoreTokenRequest) => {
  cookies().set({
    name: 'accessToken',
    value: request.token,
  });
};

const getToken = async () => {
  return cookies().get('accessToken')?.value;
};

const deleteToken = async () => {
  cookies().delete('accessToken');
};

export { deleteToken, getToken, storeToken };
