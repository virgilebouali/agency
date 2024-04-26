import React from 'react'
import Image from 'next/image'
import { DropNav } from './DropNav'
const MainNav = () => {
  return (
    <header className="flex flex-row items-center justify-between mx-96">
        <Image src="/assets/logo/logo5.png" alt="logo" width={300} height={50} className="-mt-24" />
        <DropNav />
    </header>
  )
}

export default MainNav