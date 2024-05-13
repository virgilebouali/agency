import Image from "next/image";

interface whydata {
    heading: string;
    subheading: string;
}

const whydata: whydata[] = [
    {
        heading: "Qualité",
        subheading: "Nous nous engageons à vous livrer un site web de qualité avec tous les services nécessaires pour votre entreprise.",
    },
    {
        heading: "Communication",
        subheading: "Vous aurez un suivi régulier de l'avancement de votre projet et nous serons à votre écoute pour toutes vos demandes.",
    },
    {
        heading: "Rapidité",
        subheading: "Sans perdre de temps, nous nous engageons à vous livrer votre site web et à répondre à vos requêtes dans les plus brefs délais.",
    }
]


const Why = () => {
    return (
        <div id="about">

            <div className='mx-auto max-w-7xl px-4 my-20 sm:py-20 lg:px-8 bg-black'>
                <div className='grid grid-cols-1 lg:grid-cols-2'>

                    {/* COLUMN-1 */}
                    <div className="lg:-ml-64 lg:mr-12">
                        <Image src="/assets/why/new.jpg" alt="image" width={3000} height={900} />
                    </div>

                    {/* COLUMN-2 */}
                    <div>
                        <h3 className="text-4xl lg:text-5xl pt-4 font-semibold sm:leading-tight mt-5 text-center lg:text-start">Pourquoi nous ?</h3>
                        <h4 className="text-lg pt-4 font-normal sm:leading-tight text-center text-white lg:text-start">Ne perdez pas de temps on s&apos;occupe de créer votre présence en ligne et votre marketing digitale.</h4>

                        <div className="mt-10">
                            {whydata.map((items, i) => (
                                <div className="flex mt-4" key={i}>
                                    <div className="rounded-full h-10 w-12 flex items-center justify-center bg-circlebg">
                                        <Image src="/assets/why/check.svg" alt="check-image" width={24} height={24} />
                                    </div>
                                    <div className="ml-5">
                                        <h4 className="text-2xl font-semibold text-blue-500">{items.heading}</h4>
                                        <h5 className="text-lg text-white font-normal mt-2">{items.subheading}</h5>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default Why;
