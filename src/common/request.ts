import Axios from 'axios';
import { Message } from '../components/antd';

const baseURL = '/';
let _token = '';

const axios = Axios.create({
  baseURL,
  headers: {
    token: _token,
  },
});

axios.interceptors.response.use(response => {
  const { token } = response.headers;
  if (token) _token = token;
  if (response.data.success) {
    return response.data.data;
  }
  // error
  Message.error(response.data.msg);
  throw response.data.msg;
});
// @ts-ignore
export async function httpPost<T = any>(url: string, data?: any) {
  return (await axios.post(url, data)) as T;
}
// @ts-ignore
export async function httpGet<T = any>(url: string, params?: any) {
  return (await axios.get(url, { params })) as T;
}
export async function uploadBase64(data: string): Promise<string> {
  const { path } = await httpPost('/api/file/base64upload', { data });
  return path;
}
