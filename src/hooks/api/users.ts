import axios from 'axios';

interface AxiosUsersOptions {
  baseUrl?: string;
}

interface AxiosUsersReturn {
  get: () => Promise<any>;
  post: (body: any) => Promise<any>;
  patch: (body: any) => Promise<any>;
  delete: () => Promise<any>;
}

const axiosUsers = (opts: AxiosUsersOptions): AxiosUsersReturn => ({
  get: (): Promise<any> => {
    return axios.get(opts.baseUrl + '/users', { withCredentials: true });
  },

  post: (body): Promise<any> => {
    return axios.post(opts.baseUrl + '/users', body, { withCredentials: true });
  },

  patch: (body): Promise<any> => {
    return axios.patch(opts.baseUrl + '/users', body, { withCredentials: true });
  },

  delete: (): Promise<any> => {
    return axios.delete(opts.baseUrl + '/users', { withCredentials: true });
  },
});

export default axiosUsers;
