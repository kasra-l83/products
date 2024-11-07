import { fetchProductsList } from "@/api/products.api"
import { QueryClient } from "@tanstack/react-query"
import React from "react"
import { ProductCard } from "./productCard"

const ProductsList= async() =>{
  const response= new QueryClient()
  const products= await response.fetchQuery({
    queryKey: ["products"],
    queryFn: () => fetchProductsList()
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