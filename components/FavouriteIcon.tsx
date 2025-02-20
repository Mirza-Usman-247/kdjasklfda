import Link from 'next/link'
import React from 'react'
import { CiHeart } from 'react-icons/ci'


const FavouriteIcon = () => {
  return (
    <div>
        <Link href="/cart" className="group relative">
      <CiHeart className="w-5 h-5 group-hover:text-zinc-700 cursor-pointer text-[#726E8D] hoverEffect" />
      <span className="absolute -top-1 -right-1 bg-black text-white h-3.5 w-3.5 rounded-full text-xs font-semibold flex items-center justify-center">
        0
      </span>
    </Link>
    </div>
  )
}

export default FavouriteIcon