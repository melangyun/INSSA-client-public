import axios from 'axios';

interface AxiosSessionsOptions {
  baseUrl?: string;
}

interface AxiosSessionsReturn {
  get: () => Promise<any>;
  post: (body: any) => Promise<any>;
  delete: () => Promise<any>;
}

const axiosSessions = (opts: AxiosSessionsOptions): AxiosSessionsReturn => ({
  get: (): Promise<any> => {
    return axios.get(opts.baseUrl + '/sessions', { withCredentials: true });
  },

  post: (body): Promise<any> => {
    return axios.post(opts.baseUrl + '/sessions', body, { withCredentials: true });
  },

  delete: (): Promise<any> => {
    return axios.delete(opts.baseUrl + '/sessions', { withCredentials: true });
  },
});

export default axiosSessions;
