import axios from 'axios';

interface AxiosClubsOptions {
  baseUrl?: string;
}

interface AxiosClubsReturn {
  get: () => Promise<any>;
  post: (body: any) => Promise<any>;
  patch: (body: any) => Promise<any>;
  delete: (body: any) => Promise<any>;
  join: (body: any) => Promise<any>;
  out: (body: any) => Promise<any>;
}

const axiosClubs = (opts: AxiosClubsOptions): AxiosClubsReturn => ({
  get: (): Promise<any> => {
    return axios.get(opts.baseUrl + '/clubs', { withCredentials: true });
  },

  post: (body): Promise<any> => {
    return axios.post(opts.baseUrl + '/clubs', body, { withCredentials: true });
  },

  patch: (body): Promise<any> => {
    return axios.patch(opts.baseUrl + '/clubs', body, { withCredentials: true });
  },

  delete: (body): Promise<any> => {
    return axios.delete(opts.baseUrl + '/clubs', { withCredentials: true });
  },

  join: (body): Promise<any> => {
    return axios.post(opts.baseUrl + '/clubs/join', body, { withCredentials: true });
  },

  out: (body): Promise<any> => {
    return axios.post(opts.baseUrl + '/clubs/out', body, { withCredentials: true });
  },
});

export default axiosClubs;
