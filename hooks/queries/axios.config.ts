import ax from "axios";

export interface IApiError<T = string> {
  errors: T[];
}

export const axios = ax.create({
  baseURL: "http://194.163.160.51:9000/api",
  timeout: 60000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

axios.interceptors.request.use(
  async (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (res) {
    return res;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // console.log(error);
    // return Promise.reject(error.response);
    return Promise.reject(error?.response?.data || [error?.message]);
  }
);
