import React from 'react'

const Faq = () => {
  return (
<section>
  {/* FAQ Container */}
  <div className="mx-auto w-full  px-5 py-16 md:px-10 md:py-24 lg:py-32">
    {/* FAQ Title */}
    <div className="mb-8 text-center md:mb-12 lg:mb-16">
      <h2 className="text-3xl font-bold md:text-5xl">Frequently Asked</h2>
      <p className="mx-auto mt-4 max-w-lg text-black">Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam,purus sit amet luctus magna fringilla urna</p>
    </div>
    {/* FAQ Content */}
    <div className="mb-12 flex flex-col items-center">
      {/* FAQ Item */}
      <div className="mb-6 max-w-4xl border border-solid border-[#dfdfdf] bg-black p-8">
        <div className="flex cursor-pointer justify-between">
          <p className="text-xl font-bold">How this theme is different from others in market?</p>
          <div className="relative ml-10 mt-1 flex h-5 w-5 items-center justify-center">
            <div className="absolute h-5 w-0.5 bg-blue"></div>
            <div className="h-0.5 w-5 bg-blue"></div>
          </div>
        </div>
        <p className="mb-4">Pellentesque in nisi aliquet, pellentesque purus eget, imperdiet turpis. Fusce at enim quis neque viverra convallis. Vivamus ut elementum leo, eget tempus nisl. Sed viverra enim ac turpis posuere consectetur. Sed enim nibh, consequat vitae lacus eu, ullamcorper ullamcorper massa. Pellentesque purus eget, imperdiet turpis.</p>
      </div>
      {/* FAQ Item */}
      <div className="mb-6 max-w-4xl border border-solid border-[#dfdfdf] bg-black p-8">
        <div className="flex cursor-pointer justify-between">
          <p className="text-xl font-bold">What is your policy on distributon of Flowspark assets?</p>
          <div className="relative ml-10 mt-1 flex h-5 w-5 items-center justify-center">
            <div className="absolute h-5 w-0.5 bg-blue"></div>
            <div className="h-0.5 w-5 bg-blue"></div>
          </div>
        </div>
        <p className="mb-4">Pellentesque in nisi aliquet, pellentesque purus eget, imperdiet turpis. Fusce at enim quis neque viverra convallis. Vivamus ut elementum leo, eget tempus nisl. Sed viverra enim ac turpis posuere consectetur. Sed enim nibh, consequat vitae lacus eu, ullamcorper ullamcorper massa. Pellentesque purus eget, imperdiet turpis.</p>
      </div>
      {/* FAQ Item */}
      <div className="mb-6 max-w-4xl border border-solid border-[#dfdfdf] bg-black p-8">
        <div className="flex cursor-pointer justify-between">
          <p className="text-xl font-bold">How can I contribute to Flowspark?</p>
          <div className="relative ml-10 mt-1 flex h-5 w-5 items-center justify-center">
            <div className="absolute h-5 w-0.5 bg-blue"></div>
            <div className="h-0.5 w-5 bg-blue"></div>
          </div>
        </div>
        <p className="mb-4">Pellentesque in nisi aliquet, pellentesque purus eget, imperdiet turpis. Fusce at enim quis neque viverra convallis. Vivamus ut elementum leo, eget tempus nisl. Sed viverra enim ac turpis posuere consectetur. Sed enim nibh, consequat vitae lacus eu, ullamcorper ullamcorper massa. Pellentesque purus eget, imperdiet turpis.</p>
      </div>
      {/* FAQ Item */}
      <div className="mb-6 max-w-4xl border border-solid border-[#dfdfdf] bg-black p-8">
        <div className="flex cursor-pointer justify-between">
          <p className="text-xl font-bold">What other themes do you have?</p>
          <div className="relative ml-10 mt-1 flex h-5 w-5 items-center justify-center">
            <div className="absolute h-5 w-0.5 bg-blue"></div>
            <div className="h-0.5 w-5 bg-blue"></div>
          </div>
        </div>
        <p className="mb-4">Pellentesque in nisi aliquet, pellentesque purus eget, imperdiet turpis. Fusce at enim quis neque viverra convallis. Vivamus ut elementum leo, eget tempus nisl. Sed viverra enim ac turpis posuere consectetur. Sed enim nibh, consequat vitae lacus eu, ullamcorper ullamcorper massa. Pellentesque purus eget, imperdiet turpis.</p>
      </div>
    </div>
    {/* FAQ Text */}
    <p className="text-center">Can’t find the answer you’re looking for? Reach out to our <a href="#">customer support team</a>.</p>
  </div>
</section>

  )
}

export default Faq