// NOTE: this example keeps the access token in LocalStorage just because it's
// simpler, but in a real application you may want to use cookies instead for
// better security

const ACCESS_TOKEN_KEY = 'accessToken';
const API_URL = 'http://localhost:9000';

export const getAccessToken = () => {
  return localStorage.getItem(ACCESS_TOKEN_KEY);
};

export const login = async (email, password) => {
  const response = await fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
  if (response.ok) {
    const { token } = await response.json();
    localStorage.setItem(ACCESS_TOKEN_KEY, token);
  }
  return response.ok;
};

export const isLoggedIn = () => {
  return Boolean(localStorage.getItem(ACCESS_TOKEN_KEY));
};

export const logout = () => {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
};
