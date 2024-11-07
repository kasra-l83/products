import { generateClient } from "./client";
import { urls } from "./urls";

export const fetchUsersList= async () =>{
  const client= generateClient();
  const url=  urls.users.list;
  const response= await client.get(url)
  return response.data;
}