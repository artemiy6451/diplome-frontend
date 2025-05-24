import type { IAllUsers, ICreateUser, IUserAddTime, IUserData, IUserTimeInfo } from "@/types";
import { Api } from "./Api";


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
  getUserInfo(username: string): Promise<IUserTimeInfo> {
    return this.request(`/user/get_user_info/${username}`, "GET")
  }
}

const userApi = new UserApi('http://localhost:8000', {
  headers: {
    'Content-Type': 'application/json',
  },
});

export default userApi;
