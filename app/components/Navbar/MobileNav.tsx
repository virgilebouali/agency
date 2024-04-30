import React from 'react'
import Image from 'next/image'
import { MenuIcon } from 'lucide-react'
const MobileNav = () => {
  return (
    <nav className="lg:hidden sm:flex flex justify-between mx-8">
         <Image
                                    className="block h-45  w-45 lg:hidden items-center justify-center -mt-8"
                                    src={'/assets/logo/logo5.png'}
                                    alt="dsign-logo"
                                    width={200}
                                    height={100}
                                />  
                                <MenuIcon  className="items-center justify-center mt-14 mr-8"  />
    </nav>
  )
}

export default MobileNav