import { listsLimit } from "@/utits/config";
import { generateClient } from "./client";
import { urls } from "./urls";

export const fetchUsersList= async (params: any) =>{
  const client= generateClient();
  const url=  urls.users.list;
  const response= await client.get(url, {
    params: {limit: params?.limit || listsLimit, skip: params?.skip || 0}
  })
  return response.data;
}