import Image from "next/image";

const Clientsay = () => {
    return (
        <div className="mx-auto max-w-2xl py-40 px-4s sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="bg-image-what">
                <h3 className='text-navyblue text-center text-4xl lg:text-6xl font-semibold'>Ce que nos clients disent de nous.</h3>
                <h4 className="text-lg font-normal text-darkgray text-center mt-4">La satisfaction de nos clients est primordiale <br /></h4>

                <div className="lg:relative">
                    <Image src={'/assets/clientsay/avatars.png'} alt="avatar-image" width={1061} height={733} className="hidden lg:block" />

                    <span className="lg:absolute lg:bottom-40 lg:left-80">
                        <Image src={'/assets/clientsay/user.png'} alt="user-image" width={168} height={168} className="mx-auto pt-10 lg:pb-10" />
                        <div className="lg:inline-block bg-white rounded-2xl p-6 items-center shadow-xl">
                            <p className="text-base font-normal text-center text-gray-800">
Mon entreprise vient de franchir une étape significative. <br></br> J`&apos;`ai bénéficié d`&apos;`une livraison rapide, <br></br> rendue possible grâce à l`&apos;`assistance de plusieurs professionnels du numérique.</p>
                            <h3 className="text-2xl font-medium text-center py-2 text-blue-500">Thierry Lapoint</h3>
                            <h4 className="text-sm font-normal text-center">CEO</h4>
                        </div>
                    </span>

                </div>

            </div>
        </div>
    )
}

export default Clientsay;
