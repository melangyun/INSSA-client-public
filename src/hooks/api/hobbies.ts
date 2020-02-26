import axios from 'axios';

interface AxiosHobbiesOptions {
  baseUrl?: string;
}

interface AxiosHobbiesReturn {
  get: () => Promise<any>;
  post: (body: any) => Promise<any>;
  patch: (body: any) => Promise<any>;
  delete: (body: any) => Promise<any>;
}

const axiosHobbies = (opts: AxiosHobbiesOptions): AxiosHobbiesReturn => ({
  get: (): Promise<any> => {
    return axios.get(opts.baseUrl + '/hobbies', { withCredentials: true });
  },

  post: (body): Promise<any> => {
    return axios.post(opts.baseUrl + '/hobbies', body, { withCredentials: true });
  },

  patch: (body): Promise<any> => {
    return axios.patch(opts.baseUrl + '/hobbies', body, { withCredentials: true });
  },

  delete: (body): Promise<any> => {
    return axios.delete(opts.baseUrl + '/hobbies', { withCredentials: true });
  },
});

export default axiosHobbies;
