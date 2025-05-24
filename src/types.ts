export interface IAllUsers {
  data: {
    id: number,
    username: string,
    time: number,
    time_data: null
  }
}

export interface ICreateUser {
  username: string,
  password: string,
}

export interface IUserData {
  id: number,
  username: string,
  time: number,
  time_data: null
}

export interface IUserAddTime {
  username: string,
  time: number,
}

export interface IHeatmapItem {
  date: Date,
  count: number
}

export interface IUserTimeInfo {
  total_spent_time: number;

  average_time_per_day: number;
  average_time_per_week: number;
  average_time_per_month: number;

  most_visited_day_of_month: string;
  most_visited_time_of_month: string;

  heatmap: Array<IHeatmapItem>;
}
