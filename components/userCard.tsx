export const UserCard: React.FC<any>= (user) =>{

  return (
    <div className="flex flex-col justify-around border border-[#e2dfdf] h-52 w-72 mb-4 mr-2 rounded font-semibold pl-5">
      <img src={user.image} className="size-20"/>
      <span className="flex space-x-2">
        <h2 className="text-lg">{user.firstName}</h2>
        <h2 className="text-lg">{user.lastName}</h2>
      </span>
    </div>
  )
}