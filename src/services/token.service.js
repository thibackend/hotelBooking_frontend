class TokenService {
  getLocalRefreshToken() {
    const token = JSON.parse(localStorage.getItem('token'));
    return token?.refreshToken;
  }

  getLocalAccessToken() {
    const token = JSON.parse(localStorage.getItem('token'));
    return token?.accessToken;
  }

  updateLocalAccessToken(accessToken) {
    let token = JSON.parse(localStorage.getItem('token'));
    token.accessToken = accessToken;
    localStorage.setItem('token', JSON.stringify(token));
  }

  getToken() {
    return JSON.parse(localStorage.getItem('token'));
  }

  setToken(token) {
    console.log(JSON.stringify(token));
    localStorage.setItem('token', JSON.stringify(token));
  }

  removeToken() {
    localStorage.removeItem('token');
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new TokenService();