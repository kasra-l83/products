"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export const Header: React.FC = () =>{
  const router= useRouter();

  const navigate= (href: string) =>{
    router.push(href);
  }

  return (
    <div className="flex justify-between max-w-[1000px] mx-auto py-8">
      <div className="flex items-center space-x-4">
        <button onClick={() => navigate("/")} className="size-10 bg-[#5866D3] text-[white] flex justify-center items-center text-2xl font-extrabold">T</button>
        <button onClick={() => navigate("/")} className="text-2xl font-extrabold cursor-pointer hover:text-[#2e43e4]">Treact</button>
      </div>
      <div className="flex gap-x-7 font-semibold text-base px-2 items-center">
        <button onClick={() => navigate("/")} className="border-b-2 hover:border-b-2 hover:border-[#2e43e4]">Home</button>
        <button className="border-b-2 hover:border-b-2 hover:border-[#2e43e4]">Users</button>
        <button className="border-b-2 hover:border-b-2 hover:border-[#2e43e4]">Posts</button>
      </div>
    </div>
  )
}