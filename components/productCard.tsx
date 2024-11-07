export const ProductCard: React.FC<any>= (product) =>{

  return (
    <div className="flex flex-col justify-around border border-[#e2dfdf] h-52 w-72 mb-4 mr-2 rounded font-semibold pl-5">
      <h2 className="text-lg">{product.title}</h2>
      <p>${product.price}</p>
      <p>{product.brand}</p>
      <button className="text-[white] px-4 py-2 rounded-lg font-light bg-[#0069D9] hover:bg-[#32577d] w-28">Add to Cart</button>
    </div>
  )
}