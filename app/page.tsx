import Banner from './components/Banner/Banner';
import Companies from './components/Companies/Companies';
import Why from './components/Why/index';

import Newsletter from './components/Newsletter/Newsletter';
import Pricing from './components/Pricing';
import Divider from './components/ui/divider';
import MobileNav from './components/Navbar/MobileNav';
import { LampDemo } from './components/ui/lamp';


export default function Home() {
  return (
    <main className="bg-black text-white overflow-hidden">
      <MobileNav />
      <Banner />
      <Companies />
      <Divider />
      <Pricing />
      <Why />
      <Newsletter />
    </main>
  )
}
