import { cookies } from 'next/headers';

interface StoreTokenRequest {
  token: string;
}
export const TOKEN_KEY = 'cj-session-token';
const storeToken = (request: StoreTokenRequest) => {
  cookies().set({
    name: TOKEN_KEY,
    value: request.token,
  });
};

const getToken = () => {
  return cookies().get(TOKEN_KEY)?.value;
};

const deleteToken = () => {
  cookies().delete(TOKEN_KEY);
};

export { deleteToken, getToken, storeToken };
