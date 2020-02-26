import axiosBoards from './boards';
import axiosClubs from './clubs';
import axiosComments from './comments';
import axiosHobbies from './hobbies';
import axsiosSessions from './sessions';
import axiosUsers from './users';

const baseUrl = 'http://15.165.163.127:3000';
// const baseUrl = 'http://localhost:8080';

const api = {
  boards: axiosBoards({ baseUrl }),
  clubs: axiosClubs({ baseUrl }),
  comments: axiosComments({ baseUrl }),
  hobbies: axiosHobbies({ baseUrl }),
  sessions: axsiosSessions({ baseUrl }),
  users: axiosUsers({ baseUrl }),
};

export default api;
