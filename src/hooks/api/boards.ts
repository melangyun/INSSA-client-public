import axios from 'axios';

interface AxiosBoardsOptions {
  baseUrl?: string;
}

interface AxiosBoardsReturn {
  get: (id: string) => Promise<any>;
  post: (id: string) => Promise<any>;
  patch: (id: string) => Promise<any>;
  delete: (id: string) => Promise<any>;
}

const axiosBoards = (opts: AxiosBoardsOptions): AxiosBoardsReturn => ({
  get: (id): Promise<any> => {
    return axios.get(opts.baseUrl + `/boards/${id}`, { withCredentials: true });
  },

  post: (id): Promise<any> => {
    return axios.post(opts.baseUrl + `/boards/${id}`, { withCredentials: true });
  },

  patch: (id): Promise<any> => {
    return axios.patch(opts.baseUrl + `/boards/${id}`, { withCredentials: true });
  },

  delete: (id): Promise<any> => {
    return axios.delete(opts.baseUrl + `/boards/${id}`, { withCredentials: true });
  },
});

export default axiosBoards;
