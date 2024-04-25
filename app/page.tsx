import Banner from './components/Banner/Banner';
import Companies from './components/Companies/Companies';
import Buyers from './components/Buyers/index';
import Provide from './components/Provide/index';
import Why from './components/Why/index';
import Network from './components/Network/index';
import Clientsay from './components/Clientsay/index';
import Newsletter from './components/Newsletter/Newsletter';
import Pricing from './components/Pricing';
import NewNav from './components/Navbar/NewNav';


export default function Home() {
  return (
    <main className="bg-black text-white">
      <Banner />
      <Companies />
      <Buyers />
      <Pricing />
      <Why />
      <Newsletter />
    </main>
  )
}
