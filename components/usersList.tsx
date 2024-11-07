"use client"
import { fetchProductsList } from "@/api/products.api"
import { QueryClient } from "@tanstack/react-query"
import React from "react"
import { ProductCard } from "./productCard"
import { listsLimit } from "@/utits/config"
import { fetchUsersList } from "@/api/users.api"
import { UserCard } from "./userCard"

const UsersList= async() =>{
  const [page, setPage]= React.useState<number>(1);
  const response= new QueryClient()
  const users= await response.fetchQuery({
    queryKey: ["users", page],
    queryFn: () => fetchUsersList({skip: page * listsLimit- listsLimit})
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