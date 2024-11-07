"use client"
import { fetchProductsList } from "@/api/products.api"
import { QueryClient } from "@tanstack/react-query"
import React from "react"
import { ProductCard } from "./productCard"
import { listsLimit } from "@/utits/config"

const ProductsList= async() =>{
  const [page, setPage]= React.useState<number>(1);
  const response= new QueryClient()
  const products= await response.fetchQuery({
    queryKey: ["products", page],
    queryFn: () => fetchProductsList({skip: page * listsLimit- listsLimit})
  })
  return (
    <div className="flex flex-wrap mx-auto max-w-[1200px]">
      {products.products.map((el:any) =>(
        <ProductCard title={el.title} price={el.price} brand={el.brand}/>
      ))}
    </div>
  )
}
export default ProductsList