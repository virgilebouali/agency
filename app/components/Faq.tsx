import React from "react"

const Faq = () => {
  return (
<section>
  {/* FAQ Container */}
  <div className="mx-auto w-full px-5 py-16 md:px-10 md:py-24 lg:py-32">
    {/* FAQ Title */}
    <div className="mb-8 text-center md:mb-12 lg:mb-16">
      <h2 className="text-4xl font-bold md:text-6xl">Foire Aux Questions</h2>
      <p className="mx-auto mt-4 max-w-lg text-white">Voici quelques réponses aux questions les plus courantes.</p>
    </div>
    {/* FAQ Content */}
    <div className="mb-12 flex flex-col items-center">
      {/* FAQ Item */}
      <div className="mb-6 max-w-4xl border border-solid border-[#dfdfdf] bg-black p-8">
        <div className="flex cursor-pointer justify-between">
          <p className="text-xl font-bold text-blue-500 mb-4">Quels sont les services offerts par votre agence web ?</p>
          <div className="relative ml-10 mt-1 flex h-5 w-5 items-center justify-center">
            <div className="absolute h-5 w-0.5 bg-blue"></div>
            <div className="h-0.5 w-5 bg-blue"></div>
          </div>
        </div>
        <p className="mb-4">Nous offrons une gamme complète de services web, y compris la conception de sites web, le développement web, le référencement, la maintenance de site web, et bien plus encore.</p>
      </div>
      {/* FAQ Item */}
      <div className="mb-6 max-w-4xl border border-solid border-[#dfdfdf] bg-black p-8">
        <div className="flex cursor-pointer justify-between">
          <p className="text-xl font-bold text-blue-500 mb-4">Comment puis-je obtenir un devis pour mon projet web ?</p>
          <div className="relative ml-10 mt-1 flex h-5 w-5 items-center justify-center">
            <div className="absolute h-5 w-0.5 bg-blue"></div>
            <div className="h-0.5 w-5 bg-blue"></div>
          </div>
        </div>
        <p className="mb-4">Vous pouvez obtenir un devis en nous contactant directement via notre formulaire de contact sur notre site web. Nous serons ravis d&apos;évaluer votre projet et de vous fournir un devis personnalisé.</p>
      </div>
      {/* FAQ Item */}
      <div className="mb-6 max-w-4xl border border-solid border-[#dfdfdf] bg-black p-8">
        <div className="flex cursor-pointer justify-between">
          <p className="text-xl font-bold text-blue-500 mb-4">Pouvez-vous m&apos;aider à améliorer le référencement de mon site web ?</p>
          <div className="relative ml-10 mt-1 flex h-5 w-5 items-center justify-center">
            <div className="absolute h-5 w-0.5 bg-blue"></div>
            <div className="h-0.5 w-5 bg-blue"></div>
          </div>
        </div>
        <p className="mb-4">Absolument ! Notre équipe comprend des experts en référencement qui peuvent vous aider à optimiser votre site web pour les moteurs de recherche, augmentant ainsi sa visibilité en ligne.</p>
      </div>
      {/* FAQ Item */}
      <div className="mb-6 max-w-4xl border border-solid border-[#dfdfdf] bg-black p-8">
        <div className="flex cursor-pointer justify-between">
          <p className="text-xl font-bold text-blue-500 mb-4">Quel est le processus de développement d&apos;un site web avec votre agence ?</p>
          <div className="relative ml-10 mt-1 flex h-5 w-5 items-center justify-center">
            <div className="absolute h-5 w-0.5 bg-blue"></div>
            <div className="h-0.5 w-5 bg-blue"></div>
          </div>
        </div>
        <p className="mb-4">Notre processus de développement web commence par une consultation approfondie pour comprendre vos besoins et objectifs. Ensuite, nous élaborons une stratégie de conception et de développement sur mesure, en passant par plusieurs étapes de révision jusq&apos;à ce que vous soyez entièrement satisfait du résultat final.</p>
      </div>
    </div>
    {/* FAQ Text */}
    <p className="text-center">Vous ne trouvez pas la réponse que vous cherchez ? Contactez notre <a href="#">équipe de <span className="text-blue-500">support</span> client</a>.</p>
  </div>
</section>

  )
}

export default Faq