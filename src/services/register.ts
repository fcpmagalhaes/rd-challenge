import axios, { AxiosPromise } from 'axios';
import api from './api';

export interface RegisterData {
  email: string;
  name: string;
  noSite?: boolean;
  ocupation: number;
  password: string;
  passwordConf: string
  phone: string
  site?: boolean;
  siteURL?: string;
}

export const fetchRdRegister = (data: RegisterData): AxiosPromise<any> => {
  return api.post('', data);
};

export const fetchLocalRegister = (data: RegisterData): AxiosPromise<any> => {
  return axios.post('/api/register', data);
};
