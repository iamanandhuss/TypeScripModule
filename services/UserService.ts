import { ApiService } from "./ApiService";
import { UserRequest } from "../models/UserRequest";
import { UserResponse } from "../models/UserResponse";

export class UserService {
  constructor(private apiService: ApiService) {}

  async fetchUser(request: UserRequest): Promise<UserResponse> {
    const url = `https://jsonplaceholder.typicode.com/users/${request.userId}`;
    return await this.apiService.get<UserResponse>(url);
  }
}