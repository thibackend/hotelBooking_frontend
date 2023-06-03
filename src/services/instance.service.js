import axios from 'axios';
import queryString from 'query-string';
import ENV from '../constants/env';

export const instance = axios.create({
  baseURL: ENV.API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  paramsSerializer: params => queryString.stringify(params),
});