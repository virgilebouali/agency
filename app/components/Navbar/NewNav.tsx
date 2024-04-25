import React from 'react'
import Image from 'next/image'
const NewNav = () => {
  return (
    <header className="flex flex-row">
      <nav>
      <Image
                                    className="block h-40  w-40 lg:hidden"
                                    src={'/assets/logo/logowhite.png'}
                                    alt="dsign-logo"
                                    width={100}
                                    height={100}
                                />      </nav>
    </header>
  )
}

export default NewNav