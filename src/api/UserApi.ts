import { Api } from "./Api";

interface IAllUsers {
  data: {
    id: number,
    username: string,
    time: number,
    time_data: null
  }
}

interface ICreateUser {
  username: string,
  password: string,
}

interface IUserData {
  id: number,
  username: string,
  time: number,
  time_data: null
}

interface IUserAddTime {
  username: string,
  time: number,
}

export class UserApi extends Api {
  constructor(baseUrl: string, options?: RequestInit) {
    const headers = {
      ...options?.headers,
    };
    super(baseUrl, { ...options, headers });
  }
  createUser(user: ICreateUser): Promise<IUserData> {
    return this.request("/user/add_user", "POST", user)
  }
  getAllUsers(): Promise<IAllUsers> {
    return this.request("/user/get_all_users", "GET");
  }
  addTime(data: IUserAddTime): Promise<IUserData> {
    return this.request(`/user/change_time/${data.username}?time=${data.time}`, "POST")
  }
}

const userApi = new UserApi('http://localhost:8000', {
  headers: {
    'Content-Type': 'application/json',
  },
});

export default userApi;
