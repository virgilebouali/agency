import React from 'react'
import Image from "next/image";

const Pricing = () => {
  return (

    <section className="relative"> {/* BG Image */}
      <Image width={120} height={120} src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f68133fc5cb4e29ed28fa_Get%20Started%20BG.svg" alt="" className="absolute -z-[1] h-full w-full object-cover" /> {/* Container */} <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32"> {/* Component */} <div className="flex flex-col items-center"> {/* Heading Content */} <div className="mb-8 max-w-3xl text-center md:mb-12 lg:mb-16">
            <h2 className="mb-4 mt-6 text-3xl font-extrabold text-white md:text-5xl">Simple &amp; Affordable Pricing</h2>
            <div className="mx-auto mt-4 max-w-[528px]">
              <p className="text-[#636262]">Simple &amp; fixed pricing. 30 days money-back guarantee</p>
            </div>
          </div> {/* Pricing Cards */} <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-3 md:gap-4"> {/* Pricing Card */} <div className="mx-auto flex w-full max-w-[416px] flex-col items-start rounded-md bg-[#131313] p-8 text-white">
              <div className="mb-4 rounded-lg bg-[#cf8f1329] px-5 py-2 text-[#cf8f13]">
                <p className="font-bold">Basic</p>
              </div>
              <p className="mb-6 font-light text-[#636262] md:mb-10 lg:mb-12">Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam, purus sit</p>
              <h2 className="my-6 pb-8 text-3xl font-extrabold md:text-5xl">$99<span className="text-sm font-light text-[#636262]">/year</span>
              </h2>
              <a href="#" className="mb-5 inline-block w-full rounded-lg bg-neutral-900 px-6 py-4 text-center font-bold text-[#636262] transition hover:border-black hover:bg-[#c9fd02] hover:text-black lg:mb-8">Get started</a>
              <div className="mt-2 flex flex-row">
                <Image width={120} height={120} src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f68133fc5cb4e29ed28fb_akar-icons_circle-check-fill.svg" alt="" className="mr-2 inline-block w-5" />
                <p>Premium Designs</p>
              </div>
              <div className="mt-2 flex flex-row">
                <Image width={120} height={120} src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f68133fc5cb4e29ed28fb_akar-icons_circle-check-fill.svg" alt="" className="mr-2 inline-block w-5" />
                <p>Exclusive Freebies</p>
              </div>
              <div className="mt-2 flex flex-row">
                <Image width={120} height={120} src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f68133fc5cb4e29ed28fb_akar-icons_circle-check-fill.svg" alt="" className="mr-2 inline-block w-5" />
                <p>Monthly Free Exclusive</p>
              </div>
              <div className="mt-2 flex flex-row">
                <Image width={120} height={120} src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f68133fc5cb4e29ed28fb_akar-icons_circle-check-fill.svg" alt="" className="mr-2 inline-block w-5" />
                <p>Customer Support</p>
              </div>
            </div> {/* Pricing Card */} <div className="mx-auto flex w-full max-w-[416px] flex-col items-start rounded-md bg-[#131313] p-8 text-white">
              <div className="mb-4 rounded-lg bg-[#0caeb929] px-5 py-2 text-[#0caeb9]">
                <p className="font-bold">Growth</p>
              </div>
              <p className="mb-6 font-light text-[#636262] md:mb-10 lg:mb-12">Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam, purus sit</p>
              <h2 className="my-6 pb-8 text-3xl font-extrabold md:text-5xl">$149<span className="text-sm font-light text-[#636262]">/year</span>
              </h2>
              <a href="#" className="mb-5 inline-block w-full rounded-lg bg-[#c9fd02] px-6 py-4 text-center font-bold text-black transition hover:border-black hover:bg-neutral-900 hover:text-[#636262] md:mb-6 lg:mb-8">Get started</a>
              <div className="mt-2 flex flex-row">
                <Image width={120} height={120} src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f68133fc5cb4e29ed28fb_akar-icons_circle-check-fill.svg" alt="" className="mr-2 inline-block w-5" />
                <p>Premium Designs</p>
              </div>
              <div className="mt-2 flex flex-row">
                <Image width={120} height={120} src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f68133fc5cb4e29ed28fb_akar-icons_circle-check-fill.svg" alt="" className="mr-2 inline-block w-5" />
                <p>Exclusive Freebies</p>
              </div>
              <div className="mt-2 flex flex-row">
                <Image width={120} height={120} src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f68133fc5cb4e29ed28fb_akar-icons_circle-check-fill.svg" alt="" className="mr-2 inline-block w-5" />
                <p>Monthly Free Exclusive</p>
              </div>
              <div className="mt-2 flex flex-row">
                <Image width={120} height={120} src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f68133fc5cb4e29ed28fb_akar-icons_circle-check-fill.svg" alt="" className="mr-2 inline-block w-5" />
                <p>Customer Support</p>
              </div>
            </div> {/* Pricing Card */} <div className="mx-auto flex w-full max-w-[416px] flex-col items-start rounded-md bg-[#131313] p-8 text-white">
              <div className="mb-4 rounded-lg bg-[#c013cf29] px-5 py-2 text-[#c013cf]">
                <p className="font-bold">Premium</p>
              </div>
              <p className="mb-6 font-light text-[#636262] md:mb-10 lg:mb-12">Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam, purus sit</p>
              <h2 className="my-6 pb-8 text-3xl font-extrabold md:text-5xl">$249<span className="text-sm font-light text-[#636262]">/year</span>
              </h2>
              <a href="#" className="mb-5 inline-block w-full rounded-lg bg-neutral-900 px-6 py-4 text-center font-bold text-[#636262] transition hover:border-black hover:bg-[#c9fd02] hover:text-black lg:mb-8">Get started</a>
              <div className="mt-2 flex flex-row">
                <Image width={120} height={120} src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f68133fc5cb4e29ed28fb_akar-icons_circle-check-fill.svg" alt="" className="mr-2 inline-block w-5" />
                <p>Premium Designs</p>
              </div>
              <div className="mt-2 flex flex-row">
                <Image width={120} height={120} src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f68133fc5cb4e29ed28fb_akar-icons_circle-check-fill.svg" alt="" className="mr-2 inline-block w-5" />
                <p>Exclusive Freebies</p>
              </div>
              <div className="mt-2 flex flex-row">
                <Image width={120} height={120} src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f68133fc5cb4e29ed28fb_akar-icons_circle-check-fill.svg" alt="" className="mr-2 inline-block w-5" />
                <p>Monthly Free Exclusive</p>
              </div>
              <div className="mt-2 flex flex-row">
                <Image width={120} height={120} src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f68133fc5cb4e29ed28fb_akar-icons_circle-check-fill.svg" alt="" className="mr-2 inline-block w-5" />
                <p>Customer Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing