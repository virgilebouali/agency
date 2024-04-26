import Image from 'next/image'
import React from 'react'

const Companies = () => {
  return (
    <div>
<section> {/* Container */} <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32 -mt-56 -mb-16">
    <h5 className="mb-6 text-center text-6xl font-bold md:mb-10 lg:mb-12 leading-loose">Ils nous ont fait confiance pour leur <span className="bg-blue">développement digital.</span> </h5>
    <div className="grid grid-cols-1 gap-8 rounded-3xl bg-black p-16 sm:grid-cols-2 md:grid-cols-3 md:gap-16"> {/* Item */} <div className="flex items-center justify-center">
        <Image width={200} height={200} src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63982e4716676240e0813cdf_Microsoft%20Logo.svg" alt="" className="mx-auto inline-block max-w-[80%] max-[767px]:max-w-full" />
      </div> {/* Item */} <div className="flex items-center justify-center">
        <Image width={200} height={200} src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63982e474df072a344c2a079_PayPal%20Logo.svg" alt="" className="mx-auto inline-block max-w-[80%] max-[767px]:max-w-full" />
      </div> {/* Item */} <div className="flex items-center justify-center">
        <Image width={200} height={200} src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63982e4a718e95b3c10bc466_Google%20Logo.svg" alt="" className="mx-auto inline-block max-w-[80%] max-[767px]:max-w-full" />
      </div> {/* Item */} <div className="flex items-center justify-center">
        <Image width={200} height={200} src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63982e44075471d57debfe23_Chase%20Logo.svg" alt="" className="mx-auto inline-block max-w-[80%] max-[767px]:max-w-full" />
      </div> {/* Item */} <div className="flex items-center justify-center">
        <Image width={200} height={200} src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63982e46c9353e092ba4b774_Walmart%20Logo.svg" alt="" className="mx-auto inline-block max-w-[80%] max-[767px]:max-w-full" />
      </div> {/* Item */} <div className="flex items-center justify-center">
        <Image width={200} height={200} src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63982efc554105ffbeb5b691_Slack%20Logo%20(2).svg" alt="" className="mx-auto inline-block max-w-[80%] max-[767px]:max-w-full" />
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Companies