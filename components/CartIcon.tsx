import Link from 'next/link'
import React from 'react'
import { IoCartOutline } from 'react-icons/io5'

const CartIcon = () => {
  return (
    <div>
        <Link href="/cart" className="group relative">
      <IoCartOutline className="w-5 h-5 group-hover:text-zinc-700 cursor-pointer text-[#726E8D] hoverEffect" />
      <span className="absolute -top-1 -right-1 bg-black text-white h-3.5 w-3.5 rounded-full text-xs font-semibold flex items-center justify-center">
        0
      </span>
    </Link>
    </div>
  )
}

export default CartIcon