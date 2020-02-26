import axios from 'axios';

interface AxiosCommentsOptions {
  baseUrl?: string;
}

interface AxiosCommentsReturn {
  get: () => Promise<any>;
  post: (id: string, body: any) => Promise<any>;
  patch: (id: string, body: any) => Promise<any>;
  delete: (id: string) => Promise<any>;
}

const axiosComments = (opts: AxiosCommentsOptions): AxiosCommentsReturn => ({
  get: (): Promise<any> => {
    return axios.get(opts.baseUrl + '/comments', { withCredentials: true });
  },

  post: (id, body): Promise<any> => {
    return axios.post(opts.baseUrl + `/comments/${id}`, body, { withCredentials: true });
  },

  patch: (id, body): Promise<any> => {
    return axios.patch(opts.baseUrl + `/comments/${id}`, body, { withCredentials: true });
  },

  delete: (id): Promise<any> => {
    return axios.delete(opts.baseUrl + `/comments/${id}`, { withCredentials: true });
  },
});

export default axiosComments;
