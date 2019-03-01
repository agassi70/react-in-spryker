import {create} from 'apisauce';
import { config } from '../../config';
import { TAccessToken } from '../../interfaces/login';

const api = create({
  baseURL: config.API_URL,
  headers: {
    'Accept': 'application/vnd.api+json',
    'Content-Type': 'application/json',
    'Accept-Language': 'en-EN,de;q=0.9,ru-UA;q=0.8,ru;q=0.7,uk-UA;q=0.6,uk;q=0.5,en-US;q=0.4,en;q=0.9',
  },
});

export const nodeApi = create({baseURL: `http://localhost:${config.WEB_PORT}/nodeServer/`});

export const setAuthToken = (userAuth: TAccessToken) => api.setHeader('Authorization', 'Bearer ' + userAuth);
export const removeAuthToken = () => api.deleteHeader('Authorization');


export default api;
