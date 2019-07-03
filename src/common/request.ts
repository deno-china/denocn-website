import Axios from 'axios';
import { message } from 'antd';

const baseURL = '/';
let token_value = '';

const axios = Axios.create({
  baseURL,
  headers: {
    token: token_value,
  },
});

axios.interceptors.response.use((response) => {
  const { token } = response.headers;
  if (token) token_value = token;
  if (response.data.success) {
    return response.data.data;
  }
  // error
  message.error(response.data.msg);
  throw response.data.msg;
});

export async function httpPost<T = any>(url: string, data?: any) {
  return (await axios.post(url, data)) as T;
}

export async function httpGet<T = any>(url: string, params?: any) {
  return (await axios.get(url, { params })) as T;
}

export async function uploadBase64(data: string): Promise<string> {
  const { path } = await httpPost('/api/file/base64upload', { data });
  return path;
}
