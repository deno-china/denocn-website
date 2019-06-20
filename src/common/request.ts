import Axios from "axios";

const baseURL = "/";
let _token = "";

const axios = Axios.create({
  baseURL,
  headers: {
    token: _token
  }
});

axios.interceptors.response.use(response => {
  const { token } = response.headers;
  if (token) _token = token;
  if (response.data.success) {
    return response.data.data;
  } else {
    // error
  }
});

export async function httpPost<T = any>(url: string, data?: any) {
  return (await axios.post(url, data)) as T;
}

export async function httpGet<T = any>(url: string, params?: any) {
  return (await axios.get(url, { params })) as T;
}

export async function uploadBase64(data: string): string {
  const { path } = await httpPost("/api/file/base64upload", { data });
  return path;
}
