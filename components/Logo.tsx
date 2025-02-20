import React from 'react'
import { cn } from '@/lib/utils'

interface Props{
    children: React.ReactNode
    className?:string
}
const Logo = ({children, className}: Props) => {
  return (
    <div className={cn('text-2xl font-normal tracking-wider capitalize', className)}>{children}</div>
  )
}

export default Logo