import { QueryClient } from "@tanstack/react-query"
import React from "react"
import { fetchUsersList } from "@/api/users.api"
import { UserCard } from "./userCard"

const UsersList= async() =>{
  const response= new QueryClient()
  const users= await response.fetchQuery({
    queryKey: ["users"],
    queryFn: () => fetchUsersList()
  })
  return (
    <div className="flex flex-wrap mx-auto max-w-[1200px]">
      {users.users.map((el:any) =>(
        <UserCard firstName={el.firstName} lastName={el.lastName} image={el.image}/>
      ))}
    </div>
  )
}
export default UsersList