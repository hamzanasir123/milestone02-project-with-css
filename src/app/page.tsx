
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import HowWeDo from "./Components/HowWeDo/HowWeDo";
import OurProducts from "./Components/OurProducts/OurProducts";
import Signup from "./Components/Signup/Signup";
import WhatOurTrustedClientSay from "./Components/WhatOurTrustedClientSay/WhatOurTrustedClientSay";

export default function Home() {
  return (
   <>
   <Hero/>
   <About/>
   <HowWeDo/>
   <OurProducts/>
   <WhatOurTrustedClientSay/>
   <Signup/>
   <Footer/>
   </>
  );
}
