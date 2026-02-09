import { ApiService } from "../services/ApiService";
import { UserService } from "../services/UserService";
import { UserRequest } from "../models/UserRequest";

async function main() {
  const apiService = new ApiService(); 
  const userService = new UserService(apiService);

  try {
    const request = new UserRequest(1);
    const user = await userService.fetchUser(request);
    console.log("User fetched successfully:", user);
  } catch (error) {
    console.error("Failed to fetch user");
  }
}

main();